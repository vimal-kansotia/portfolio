import { useState, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * NASA-Grade Procedural Texture, Specular & Bump Map Generators
 */

// 1. SUN: Radiant orange & fiery yellow convective granules & prominences
function createSunTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 0, 1024);
  grad.addColorStop(0, '#FF2200');   // Deep fiery orange
  grad.addColorStop(0.25, '#FF5500'); // Vivid solar orange
  grad.addColorStop(0.55, '#FF8800'); // Amber orange
  grad.addColorStop(0.8, '#FFAA00');  // Golden yellow
  grad.addColorStop(1, '#FFDD00');    // Bright sunshine yellow
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 2048, 1024);

  // Bright yellow solar granules
  ctx.fillStyle = 'rgba(255, 235, 120, 0.55)';
  for (let i = 0; i < 8000; i++) {
    const x = Math.random() * 2048;
    const y = Math.random() * 1024;
    const r = Math.random() * 6 + 1.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Solar flare filaments in bright yellow
  ctx.strokeStyle = 'rgba(255, 255, 180, 0.75)';
  ctx.lineWidth = 2.5;
  for (let i = 0; i < 70; i++) {
    const x = Math.random() * 2048;
    const y = Math.random() * 1024;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + (Math.random() - 0.5) * 140, y + (Math.random() - 0.5) * 140, x + (Math.random() - 0.5) * 220, y + (Math.random() - 0.5) * 220);
    ctx.stroke();
  }

  // Dark Sunspots with Umbra & Penumbra
  const sunspots = [
    { x: 420, y: 450, r: 28 }, { x: 460, y: 465, r: 16 },
    { x: 1100, y: 520, r: 34 }, { x: 1150, y: 510, r: 20 }, { x: 1180, y: 535, r: 12 },
    { x: 1650, y: 480, r: 26 }, { x: 1690, y: 495, r: 14 }
  ];
  sunspots.forEach(spot => {
    ctx.fillStyle = 'rgba(180, 45, 0, 0.85)';
    ctx.beginPath();
    ctx.arc(spot.x, spot.y, spot.r * 1.8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#110000';
    ctx.beginPath();
    ctx.arc(spot.x, spot.y, spot.r, 0, Math.PI * 2);
    ctx.fill();
  });

  return new THREE.CanvasTexture(canvas);
}

// 2. MERCURY: Caloris Basin, crater rims & Tycho-like ejecta rays
function createMercuryTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#7C766F';
  ctx.fillRect(0, 0, 1024, 512);

  // Caloris Basin impact feature (equatorial orange-tan floor with dark rim)
  ctx.fillStyle = '#544F49';
  ctx.beginPath();
  ctx.ellipse(320, 260, 110, 90, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#948D83';
  ctx.beginPath();
  ctx.ellipse(320, 260, 75, 60, 0, 0, Math.PI * 2);
  ctx.fill();

  // Dense impact craters
  for (let i = 0; i < 2400; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 512;
    const r = Math.random() * 8 + 1.2;
    ctx.fillStyle = Math.random() > 0.5 ? '#48443F' : '#B2AAA0';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Bright ejecta rays radiating from young impact craters
  ctx.strokeStyle = 'rgba(235, 230, 220, 0.45)';
  ctx.lineWidth = 1.2;
  const rayCenters = [{ x: 720, y: 340 }, { x: 180, y: 140 }, { x: 890, y: 420 }];
  rayCenters.forEach(c => {
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(c.x + Math.cos(a) * 120, c.y + Math.sin(a) * 120);
      ctx.stroke();
    }
  });

  return new THREE.CanvasTexture(canvas);
}

function createMercuryBumpMap() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 1024, 512);

  for (let i = 0; i < 2000; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 512;
    const r = Math.random() * 9 + 1.5;
    ctx.fillStyle = Math.random() > 0.5 ? '#FFFFFF' : '#000000';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  return new THREE.CanvasTexture(canvas);
}

// 3. VENUS: Dense sulfuric acid cloud swirl with UV Y-streak
function createVenusTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#EEDAA2';
  ctx.fillRect(0, 0, 1024, 512);

  // Atmospheric cloud bands & chevron wave swirls
  for (let y = 0; y < 512; y += 4) {
    const normY = y / 512;
    const col = normY < 0.2 ? '#DFB975' : normY < 0.4 ? '#F7E7C4' : normY < 0.7 ? '#C79F5E' : '#E8CE95';
    ctx.fillStyle = col;
    ctx.fillRect(0, y, 1024, 4 + Math.sin(y * 0.08) * 4);
  }

  // Ultraviolet Y-shaped equatorial streak
  ctx.fillStyle = 'rgba(160, 110, 40, 0.25)';
  ctx.beginPath();
  ctx.moveTo(100, 256);
  ctx.lineTo(512, 200);
  ctx.lineTo(920, 256);
  ctx.lineTo(512, 312);
  ctx.closePath();
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

// 4. EARTH: Dark navy oceans (#0A192F) & dark green forests (#064E3B, #14532D)
function createEarthTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Deep Dark Navy Ocean
  ctx.fillStyle = '#0A192F';
  ctx.fillRect(0, 0, 2048, 1024);

  // Dark Teal Coastline Shelves
  ctx.fillStyle = '#0284C7';
  const shelves = [
    { x: 350, y: 360, rx: 240, ry: 160 }, { x: 520, y: 660, rx: 170, ry: 220 },
    { x: 1050, y: 350, rx: 440, ry: 270 }, { x: 1080, y: 550, rx: 240, ry: 210 },
    { x: 1400, y: 330, rx: 360, ry: 190 }, { x: 1680, y: 690, rx: 160, ry: 130 }
  ];
  shelves.forEach(s => {
    ctx.beginPath();
    ctx.ellipse(s.x, s.y, s.rx, s.ry, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  // Helper for drawing continent landmasses in dark green
  function drawContinent(cx, cy, rx, ry, landColor, desertColor) {
    ctx.fillStyle = landColor;
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();

    if (desertColor) {
      ctx.fillStyle = desertColor;
      ctx.beginPath();
      ctx.ellipse(cx + rx * 0.08, cy - ry * 0.08, rx * 0.48, ry * 0.45, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // North America (Dark Forest Green #064E3B, Dark Desert #78350F)
  drawContinent(350, 360, 200, 140, '#064E3B', '#78350F');
  // South America (Lush Dark Green #14532D)
  drawContinent(520, 660, 140, 190, '#14532D', '#854D0E');
  // Europe (Dark Alpine Green #064E3B)
  drawContinent(1020, 300, 150, 100, '#064E3B', null);
  // Africa (Dark Emerald Green #14532D, Sahara #78350F)
  drawContinent(1060, 520, 180, 180, '#14532D', '#78350F');
  // Asia (Dark Siberian Green #064E3B, Gobi #78350F)
  drawContinent(1400, 330, 320, 170, '#064E3B', '#78350F');
  // Australia (Dark Outback Ochre #78350F, Coast Green #14532D)
  drawContinent(1680, 690, 130, 100, '#78350F', '#14532D');
  // Greenland (Snow White #F8FAFC)
  drawContinent(680, 180, 110, 60, '#F8FAFC', null);

  // Dark Mountain Chains (Himalayas, Andes, Rockies)
  ctx.strokeStyle = '#451A03';
  ctx.lineWidth = 14;
  ctx.beginPath(); ctx.moveTo(250, 260); ctx.lineTo(310, 420); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(430, 520); ctx.lineTo(460, 800); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(1300, 380); ctx.lineTo(1520, 390); ctx.stroke();

  // Polar Ice Caps
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath(); ctx.ellipse(1024, 40, 1024, 75, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(1024, 984, 1024, 75, 0, 0, Math.PI * 2); ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

// EARTH SPECULAR MAP (Oceans high gloss, land matte)
function createEarthSpecularMap() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 2048, 1024);

  // Matte Landmasses
  ctx.fillStyle = '#000000';
  const lands = [
    { cx: 350, cy: 360, rx: 200, ry: 140 }, { cx: 520, cy: 660, rx: 140, ry: 190 },
    { cx: 1020, cy: 300, rx: 150, ry: 100 }, { cx: 1060, cy: 520, rx: 180, ry: 180 },
    { cx: 1400, cy: 330, rx: 320, ry: 170 }, { cx: 1680, cy: 690, rx: 130, ry: 100 },
    { cx: 680, cy: 180, rx: 110, ry: 60 }
  ];
  lands.forEach(l => {
    ctx.beginPath();
    ctx.ellipse(l.cx, l.cy, l.rx, l.ry, 0, 0, Math.PI * 2);
    ctx.fill();
  });
  return new THREE.CanvasTexture(canvas);
}

// EARTH NIGHT CITY LIGHTS MAP
function createEarthNightTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, 2048, 1024);

  ctx.fillStyle = '#FDE047';
  const cityClusters = [
    { x: 380, y: 340, count: 400 }, { x: 260, y: 350, count: 200 },
    { x: 1020, y: 300, count: 700 }, { x: 1300, y: 440, count: 600 },
    { x: 1480, y: 360, count: 800 }, { x: 1620, y: 340, count: 350 },
    { x: 580, y: 720, count: 250 }, { x: 1720, y: 710, count: 180 }
  ];
  cityClusters.forEach(cluster => {
    for (let i = 0; i < cluster.count; i++) {
      const x = cluster.x + (Math.random() - 0.5) * 130;
      const y = cluster.y + (Math.random() - 0.5) * 85;
      const r = Math.random() * 2 + 0.5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  return new THREE.CanvasTexture(canvas);
}

function createEarthCloudTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 2048, 1024);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.82)';

  for (let i = 0; i < 160; i++) {
    const x = Math.random() * 2048;
    const y = Math.random() * 1024;
    const rx = Math.random() * 160 + 50;
    const ry = Math.random() * 38 + 14;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, Math.random() * 0.6, 0, Math.PI * 2);
    ctx.fill();
  }
  return new THREE.CanvasTexture(canvas);
}

// 5. MARS: Valles Marineris canyon, Olympus Mons & polar ice caps
function createMarsTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#C1440E';
  ctx.fillRect(0, 0, 1024, 512);

  // Syrtis Major & Acidalia Planitia dark volcanic basalt regions
  ctx.fillStyle = '#6E2307';
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 512;
    ctx.fillRect(x, y, Math.random() * 170 + 40, Math.random() * 35 + 10);
  }

  // Valles Marineris massive canyon rift across equator
  ctx.strokeStyle = '#4A1204';
  ctx.lineWidth = 9;
  ctx.beginPath();
  ctx.moveTo(350, 260);
  ctx.lineTo(650, 275);
  ctx.stroke();

  // Olympus Mons volcano caldera ring
  ctx.fillStyle = '#8B2E0B';
  ctx.beginPath(); ctx.arc(240, 220, 26, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#4A1204';
  ctx.beginPath(); ctx.arc(240, 220, 12, 0, Math.PI * 2); ctx.fill();

  // Polar Ice Caps
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 1024, 32);
  ctx.fillRect(0, 480, 1024, 32);

  return new THREE.CanvasTexture(canvas);
}

// 6. JUPITER: Zonal gas bands, turbulence wave eddies & Great Red Spot with swirl wake
function createJupiterTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  const bandColors = [
    '#5B3C28', '#A67B5B', '#D9B48F', '#8C5A3C',
    '#E6C29E', '#9E6B48', '#C99F78', '#5E3E2B',
    '#D9B48F', '#8C5A3C', '#E6C29E', '#5B3C28'
  ];

  const bandHeight = 1024 / bandColors.length;
  bandColors.forEach((color, i) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, i * bandHeight, 2048, bandHeight);

    ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.16)' : 'rgba(80, 40, 10, 0.22)';
    for (let x = 0; x < 2048; x += 32) {
      const waveY = i * bandHeight + Math.sin(x * 0.04) * 8;
      ctx.beginPath();
      ctx.arc(x, waveY, 12, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // Great Red Spot Storm Vortex
  const grsX = 1350;
  const grsY = 660;

  ctx.fillStyle = '#991B1B';
  ctx.beginPath(); ctx.ellipse(grsX, grsY, 140, 80, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#EF4444';
  ctx.beginPath(); ctx.ellipse(grsX, grsY, 90, 48, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#FCA5A5';
  ctx.beginPath(); ctx.ellipse(grsX, grsY, 40, 20, 0, 0, Math.PI * 2); ctx.fill();

  // Turbulent white cloud wake
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.ellipse(grsX - 160 - i * 35, grsY + Math.sin(i) * 15, 18 - i * 1.5, 10 - i, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  return new THREE.CanvasTexture(canvas);
}

// 7. SATURN: Butterscotch bands & North Pole Hexagon
function createSaturnTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  for (let y = 0; y < 512; y += 4) {
    const normY = y / 512;
    const col = normY < 0.15 ? '#6B7280' : normY < 0.3 ? '#D97706' : normY < 0.5 ? '#FDE047' : normY < 0.7 ? '#EAB308' : normY < 0.85 ? '#CA8A04' : '#475569';
    ctx.fillStyle = col;
    ctx.fillRect(0, y, 1024, 4);
  }

  // North Pole Hexagon Vortex
  ctx.fillStyle = '#374151';
  ctx.beginPath();
  const hexCX = 512;
  const hexCY = 35;
  const hexR = 25;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const hx = hexCX + Math.cos(a) * hexR;
    const hy = hexCY + Math.sin(a) * hexR;
    if (i === 0) ctx.moveTo(hx, hy);
    else ctx.lineTo(hx, hy);
  }
  ctx.closePath();
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

function createSaturnRingTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  const cx = 512;
  const cy = 512;

  for (let r = 160; r < 490; r++) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);

    if (r >= 160 && r < 230) {
      ctx.strokeStyle = `rgba(160, 130, 90, 0.35)`; // C Ring
    } else if (r >= 230 && r < 350) {
      const alpha = 0.85 + Math.sin(r * 0.3) * 0.12; // B Ring
      ctx.strokeStyle = `rgba(235, 205, 150, ${alpha})`;
    } else if (r >= 350 && r < 380) {
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.98)'; // Cassini Division Gap
    } else if (r >= 380 && r < 470) {
      if (r >= 440 && r < 446) {
        ctx.strokeStyle = 'rgba(10, 10, 10, 0.9)'; // Encke Gap
      } else {
        const alpha = 0.65 + Math.sin(r * 0.4) * 0.2; // A Ring
        ctx.strokeStyle = `rgba(215, 185, 130, ${alpha})`;
      }
    } else {
      ctx.strokeStyle = 'rgba(180, 150, 100, 0.3)';
    }

    ctx.lineWidth = 1.8;
    ctx.stroke();
  }
  return new THREE.CanvasTexture(canvas);
}

// 8. URANUS: Aquamarine ice giant with vertical thin ring
function createUranusTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#38BDF8';
  ctx.fillRect(0, 0, 1024, 512);

  ctx.fillStyle = '#7DD3FC';
  for (let y = 0; y < 512; y += 24) {
    ctx.fillRect(0, y, 1024, 6);
  }
  return new THREE.CanvasTexture(canvas);
}

function createUranusRingTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  const cx = 256;
  const cy = 256;

  for (let r = 160; r < 230; r++) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(125, 211, 252, 0.48)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
  return new THREE.CanvasTexture(canvas);
}

// 9. NEPTUNE: Azure blue atmosphere, Great Dark Spot & white cirrus streaks
function createNeptuneTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#1D4ED8';
  ctx.fillRect(0, 0, 1024, 512);

  // Great Dark Spot Storm
  ctx.fillStyle = '#0F172A';
  ctx.beginPath(); ctx.ellipse(640, 320, 105, 60, 0, 0, Math.PI * 2); ctx.fill();

  // White Cirrus Methane Streaks ("Scooter")
  ctx.fillStyle = '#93C5FD';
  ctx.fillRect(200, 240, 260, 8);
  ctx.fillRect(560, 365, 200, 10);
  ctx.fillRect(800, 180, 150, 6);

  return new THREE.CanvasTexture(canvas);
}

/**
 * NASA-Grade Photorealistic 8-Planet Solar System Component
 */
export default function MultiversePortal({ overscrollTension = 0, colorHex = '#06B6D4', theme = 'dark' }) {
  const solarSystemGroupRef = useRef();
  const sunRef = useRef();
  const sunCoronaRef = useRef();

  const planetRefs = useRef([]);
  const saturnRingRef = useRef();
  const uranusRingRef = useRef();
  const earthCloudsRef = useRef();
  const earthAtmosphereRef = useRef();
  const venusAtmosphereRef = useRef();

  // Multi-moon refs for Jupiter & Mars
  const moonRefs = useRef({});

  const isLight = theme === 'light';

  // Create 2048x1024 Ultra-HD Textures & Maps
  const textures = useMemo(() => {
    if (typeof window === 'undefined') return {};
    return {
      sun: createSunTexture(),
      mercury: createMercuryTexture(),
      mercuryBump: createMercuryBumpMap(),
      venus: createVenusTexture(),
      earth: createEarthTexture(),
      earthSpecular: createEarthSpecularMap(),
      earthNight: createEarthNightTexture(),
      earthClouds: createEarthCloudTexture(),
      mars: createMarsTexture(),
      jupiter: createJupiterTexture(),
      saturn: createSaturnTexture(),
      saturnRing: createSaturnRingTexture(),
      uranus: createUranusTexture(),
      uranusRing: createUranusRingTexture(),
      neptune: createNeptuneTexture(),
    };
  }, []);

  // 8 Real Planets Specs (Keplerian speeds, axial tilts, facts & moon systems)
  const PLANETS = useMemo(() => [
    { name: 'Mercury', radius: 0.45, dist: 5.2,  speed: 2.45, tilt: 0.03,  texture: textures.mercury, bumpMap: textures.mercuryBump, roughness: 0.8 },
    { name: 'Venus',   radius: 0.68, dist: 7.5,  speed: 1.55, tilt: 177.3, texture: textures.venus,   roughness: 0.5, hasAtmosphere: true },
    { name: 'Earth',   radius: 0.82, dist: 10.2, speed: 1.30, tilt: 23.44, texture: textures.earth,   roughnessMap: textures.earthSpecular, roughness: 0.3, hasClouds: true, hasNight: true, moons: [{ name: 'Moon', radius: 0.20, dist: 1.75, speed: 2.2, color: '#FFFFFF' }] },
    { name: 'Mars',    radius: 0.58, dist: 13.0, speed: 1.05, tilt: 25.19, texture: textures.mars,    bumpMap: textures.mercuryBump, roughness: 0.7, moons: [{ name: 'Phobos', radius: 0.08, dist: 1.0, speed: 4.5, color: '#CBD5E1' }, { name: 'Deimos', radius: 0.06, dist: 1.4, speed: 2.8, color: '#94A3B8' }] },
    { name: 'Jupiter', radius: 1.85, dist: 16.8, speed: 0.58, tilt: 3.13,  texture: textures.jupiter, roughness: 0.4, moons: [{ name: 'Io', radius: 0.14, dist: 2.5, speed: 3.2, color: '#FACC15' }, { name: 'Europa', radius: 0.12, dist: 3.0, speed: 2.5, color: '#BAE6FD' }, { name: 'Ganymede', radius: 0.18, dist: 3.6, speed: 1.8, color: '#94A3B8' }, { name: 'Callisto', radius: 0.16, dist: 4.3, speed: 1.3, color: '#64748B' }] },
    { name: 'Saturn',  radius: 1.50, dist: 21.8, speed: 0.42, tilt: 26.73, texture: textures.saturn,  roughness: 0.4, hasRings: true, moons: [{ name: 'Titan', radius: 0.20, dist: 4.4, speed: 1.6, color: '#F97316' }] },
    { name: 'Uranus',  radius: 1.08, dist: 26.5, speed: 0.28, tilt: 97.77, texture: textures.uranus,  roughness: 0.3, hasUranusRings: true, moons: [{ name: 'Miranda', radius: 0.10, dist: 2.4, speed: 2.1, color: '#CBD5E1' }] },
    { name: 'Neptune', radius: 1.02, dist: 31.2, speed: 0.19, tilt: 28.32, texture: textures.neptune, roughness: 0.3, moons: [{ name: 'Triton', radius: 0.14, dist: 2.3, speed: -2.0, color: '#A5F3FC' }] },
  ], [textures]);

  // Concentric Orbital Path Rings for Planets
  const orbitGeometries = useMemo(() => {
    return PLANETS.map((p) => {
      const points = [];
      const segments = 160;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * p.dist, 0, Math.sin(theta) * p.dist));
      }
      return new THREE.BufferGeometry().setFromPoints(points);
    });
  }, [PLANETS]);

  // Pre-calculated Moon Orbital Path Geometries (Zero onUpdate callbacks or bounding box bugs)
  const moonOrbitGeometries = useMemo(() => {
    const map = {};
    PLANETS.forEach(planet => {
      if (planet.moons) {
        planet.moons.forEach(moon => {
          const pts = [];
          for (let i = 0; i <= 64; i++) {
            const a = (i / 64) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(a) * moon.dist, 0, Math.sin(a) * moon.dist));
          }
          map[`${planet.name}-${moon.name}`] = new THREE.BufferGeometry().setFromPoints(pts);
        });
      }
    });
    return map;
  }, [PLANETS]);

  useFrame((state) => {
    if (!solarSystemGroupRef.current) return;
    const time = state.clock.elapsedTime;

    // Position 3D Solar System at Contact section background (~ -19.5)
    const contactEl = typeof document !== 'undefined' ? document.getElementById('contact') : null;
    const contactOffsetY = contactEl ? contactEl.offsetTop : 3800;
    const contact3DY = -contactOffsetY * 0.005 - 2.2;

    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 900;
    const contactStartScroll = contactOffsetY - windowHeight * 0.85;

    // Strict visibility control: hide solar system when reading Projects / upper sections
    if (scrollY < contactStartScroll && overscrollTension === 0) {
      solarSystemGroupRef.current.visible = false;
    } else {
      solarSystemGroupRef.current.visible = true;
      const fadeProgress = Math.min(1, Math.max(0, (scrollY - contactStartScroll) / (windowHeight * 0.65))) + overscrollTension;
      const currentScale = (0.88 + overscrollTension * 0.40) * Math.min(1, fadeProgress);
      solarSystemGroupRef.current.scale.set(currentScale, currentScale, currentScale);
    }

    solarSystemGroupRef.current.position.set(0, contact3DY - overscrollTension * 2.8, -13.5);

    // Tilted 3D perspective angle so all 8 orbits & planets are clearly visible
    solarSystemGroupRef.current.rotation.x = Math.PI / 4.2;
    solarSystemGroupRef.current.rotation.y = time * 0.04 + overscrollTension * 0.35;
    solarSystemGroupRef.current.rotation.z = overscrollTension * 0.18;

    // Sun axial spin & solar corona flare pulse
    if (sunRef.current) sunRef.current.rotation.y = time * 0.12;
    if (sunCoronaRef.current) {
      const pulse = 1.0 + Math.sin(time * 2.2) * 0.05;
      sunCoronaRef.current.scale.set(pulse, pulse, pulse);
    }

    // Revolving all 8 planets around the Sun with Keplerian speeds & axial rotation
    PLANETS.forEach((planet, idx) => {
      const ref = planetRefs.current[idx];
      if (ref) {
        const angle = time * planet.speed * 0.32 + idx * 1.1;
        ref.position.x = Math.cos(angle) * planet.dist;
        ref.position.z = Math.sin(angle) * planet.dist;

        // Apply real astronomical axial tilt (in radians) and axial spin
        const tiltRad = (planet.tilt * Math.PI) / 180;
        ref.rotation.x = tiltRad;
        ref.rotation.y = time * 0.8;

        // Venus cloud atmosphere halo
        if (planet.hasAtmosphere && venusAtmosphereRef.current) {
          venusAtmosphereRef.current.position.copy(ref.position);
        }

        // Earth cloud layer & Rayleigh scattering atmosphere halo
        if (planet.hasClouds) {
          if (earthCloudsRef.current) {
            earthCloudsRef.current.position.copy(ref.position);
            earthCloudsRef.current.rotation.y = time * 1.05;
          }
          if (earthAtmosphereRef.current) {
            earthAtmosphereRef.current.position.copy(ref.position);
          }
        }

        // Saturn's double ring position & tilt
        if (planet.hasRings && saturnRingRef.current) {
          saturnRingRef.current.position.copy(ref.position);
          saturnRingRef.current.rotation.x = tiltRad + Math.PI / 2.6;
          saturnRingRef.current.rotation.y = time * 0.15;
        }

        // Uranus thin ring system
        if (planet.hasUranusRings && uranusRingRef.current) {
          uranusRingRef.current.position.copy(ref.position);
          uranusRingRef.current.rotation.x = tiltRad + Math.PI / 2.0;
        }

        // Orbiting Moons Animation & Orbit Line Tracking
        if (planet.moons && planet.moons.length > 0) {
          planet.moons.forEach((moon) => {
            const moonKey = `${planet.name}-${moon.name}`;
            const mRef = moonRefs.current[moonKey];
            const oRef = moonRefs.current[`${moonKey}-orbit`];
            if (oRef) {
              oRef.position.copy(ref.position);
            }
            if (mRef) {
              const mAngle = time * moon.speed * 1.2;
              mRef.position.x = ref.position.x + Math.cos(mAngle) * moon.dist;
              mRef.position.z = ref.position.z + Math.sin(mAngle) * moon.dist;
              mRef.position.y = ref.position.y + Math.sin(mAngle) * (moon.dist * 0.08);
              mRef.rotation.y = time * 0.6;
            }
          });
        }
      }
    });
  });

  return (
    <group ref={solarSystemGroupRef}>
      {/* Central Solar Point Light (Realistic Day/Night terminators on all 8 planets) */}
      <pointLight position={[0, 0, 0]} intensity={isLight ? 8.5 : 6.5} distance={75} color="#FFF5D6" />

      {/* ── 1. CENTRAL RADIANT SUN ── */}
      <mesh ref={sunRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial map={textures.sun} />
      </mesh>

      {/* Sun Atmosphere Corona Shells */}
      <mesh ref={sunCoronaRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.8, 32, 32]} />
        <meshBasicMaterial
          color="#FF7700"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[3.3, 32, 32]} />
        <meshBasicMaterial
          color="#FFD700"
          transparent
          opacity={0.32}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* ── 2. CONCENTRIC ORBITAL PATH RINGS (Black in Day Mode, Crisp White in Dark Mode) ── */}
      {orbitGeometries.map((geo, idx) => (
        <lineLoop key={`orbit-${idx}`} geometry={geo}>
          <lineBasicMaterial
            color={isLight ? '#1E1A14' : '#FFFFFF'}
            transparent
            opacity={isLight ? 0.70 : 0.55}
            blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending}
          />
        </lineLoop>
      ))}

      {/* ── 3. REVOLVING 8 REAL PLANETS ── */}
      {PLANETS.map((planet, idx) => (
        <group key={planet.name}>
          <mesh
            ref={(el) => (planetRefs.current[idx] = el)}
            position={[planet.dist, 0, 0]}
          >
            <sphereGeometry args={[planet.radius, 64, 64]} />
            <meshStandardMaterial
              map={planet.texture}
              bumpMap={planet.bumpMap}
              bumpScale={0.04}
              roughnessMap={planet.roughnessMap}
              roughness={planet.roughness}
              metalness={0.1}
              emissive={isLight ? '#332211' : '#000000'}
              emissiveIntensity={isLight ? 0.25 : 0}
            />
          </mesh>

          {/* Render Planet Moons & Their Orbit Path Rings */}
          {planet.moons && planet.moons.map((moon) => {
            const moonKey = `${planet.name}-${moon.name}`;
            return (
              <group key={moonKey}>
                {/* Moon Orbit Line Loop */}
                {moonOrbitGeometries[moonKey] && (
                  <lineLoop
                    ref={(el) => (moonRefs.current[`${moonKey}-orbit`] = el)}
                    geometry={moonOrbitGeometries[moonKey]}
                  >
                    <lineBasicMaterial
                      color={isLight ? '#333333' : '#FFFFFF'}
                      transparent
                      opacity={isLight ? 0.30 : 0.22}
                    />
                  </lineLoop>
                )}

                {/* Moon Mesh */}
                <mesh
                  ref={(el) => (moonRefs.current[moonKey] = el)}
                  position={[planet.dist + moon.dist, 0, 0]}
                >
                  <sphereGeometry args={[moon.radius, 32, 32]} />
                  <meshStandardMaterial
                    map={textures.mercury}
                    bumpMap={textures.mercuryBump}
                    bumpScale={0.03}
                    color={moon.color || '#FFFFFF'}
                    emissive={moon.color || '#FFFFFF'}
                    emissiveIntensity={isLight ? 0.65 : 0.40}
                    roughness={0.3}
                  />
                </mesh>
              </group>
            );
          })}
        </group>
      ))}

      {/* Venus Golden Atmosphere Glow Halo */}
      <mesh ref={venusAtmosphereRef} position={[7.5, 0, 0]}>
        <sphereGeometry args={[0.73, 32, 32]} />
        <meshBasicMaterial
          color="#FDE047"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Earth Cloud Sphere Layer */}
      <mesh ref={earthCloudsRef} position={[10.2, 0, 0]}>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshStandardMaterial
          map={textures.earthClouds}
          transparent
          opacity={0.82}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Earth Blue Rayleigh Scattering Atmosphere Glow Halo */}
      <mesh ref={earthAtmosphereRef} position={[10.2, 0, 0]}>
        <sphereGeometry args={[0.92, 32, 32]} />
        <meshBasicMaterial
          color="#38BDF8"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Saturn's Cassini Division Ring System (Only Saturn has planetary rings) */}
      <mesh ref={saturnRingRef} position={[21.8, 0, 0]}>
        <ringGeometry args={[1.8, 3.6, 64]} />
        <meshBasicMaterial
          map={textures.saturnRing}
          transparent
          opacity={0.92}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
