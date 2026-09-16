import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * 3D Celestial Constellations Universe
 * 
 * Organically distributed all across 3D space with diverse X offsets,
 * staggered Y scroll heights, and multi-plane Z depths (Z = -6 to -14).
 * Breaks any parallel column layout so constellations feel natural,
 * dynamic, and scattered across the entire celestial sphere.
 * 
 * Honors Vimal Kansotia's leadership as Head of Astronomical Club.
 */

const CONSTELLATIONS_DATA = [
  // ── 1. Ursa Major (The Big Dipper / Great Bear) - upper north sky
  {
    name: 'Ursa Major',
    center: [-9, 4.5, -9],
    stars: [
      { coord: [-3.5, 1.5, 0], isAlpha: true },    // Alkaid
      { coord: [-2.2, 0.8, 0.2], isAlpha: false },  // Mizar
      { coord: [-0.8, 0.2, 0.1], isAlpha: false },  // Alioth
      { coord: [0.8, -0.2, 0], isAlpha: false },    // Megrez
      { coord: [1.0, -1.8, -0.2], isAlpha: false }, // Phecda
      { coord: [3.0, -1.6, 0.1], isAlpha: false },  // Merak
      { coord: [2.8, 0.2, 0.3], isAlpha: true },    // Dubhe
    ],
    edges: [
      [0, 1], [1, 2], [2, 3],
      [3, 4], [4, 5], [5, 6], [6, 3]
    ]
  },

  // ── 2. Cassiopeia (The Celestial 'W') - deep upper right
  {
    name: 'Cassiopeia',
    center: [17, 3.2, -13],
    stars: [
      { coord: [-3.2, 1.8, 0], isAlpha: false },   // Caph
      { coord: [-1.4, 0.4, 0.3], isAlpha: true },  // Schedar
      { coord: [0.2, 1.6, -0.2], isAlpha: false }, // Navi
      { coord: [1.8, 0.1, 0.2], isAlpha: true },   // Ruchbah
      { coord: [3.4, 1.2, -0.1], isAlpha: false }, // Segin
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 4]
    ]
  },

  // ── 3. Lyra (The Celestial Harp with dazzling Vega) - upper-mid left
  {
    name: 'Lyra',
    center: [-16, 0.8, -6],
    stars: [
      { coord: [0.0, 1.8, 0.2], isAlpha: true, color: '#E0F2FE' }, // Vega (5th brightest star)
      { coord: [-1.2, -1.2, 0.1], isAlpha: false },               // Sheliak
      { coord: [0.8, -1.4, -0.1], isAlpha: false },               // Sulafat
      { coord: [1.2, 0.2, 0.0], isAlpha: false },                 // Delta Lyrae
      { coord: [-1.0, 0.4, 0.1], isAlpha: false },                // Epsilon Lyrae
    ],
    edges: [
      [0, 4], [4, 1], [1, 2], [2, 3], [3, 4], [0, 3]
    ]
  },

  // ── 4. Cygnus (The Northern Cross / Swan with Deneb) - mid-right overhead
  {
    name: 'Cygnus',
    center: [7, -2.6, -11],
    stars: [
      { coord: [0, 3.6, 0.2], isAlpha: true, color: '#E0F2FE' },    // Deneb
      { coord: [0, 0.4, 0.0], isAlpha: false },                    // Sadr
      { coord: [0, -3.2, -0.2], isAlpha: true, color: '#FEF08A' }, // Albireo
      { coord: [-3.2, 0.8, 0.3], isAlpha: false },                 // Gienah
      { coord: [3.2, 0.1, -0.3], isAlpha: false },                 // Fawaris
    ],
    edges: [
      [0, 1], [1, 2],
      [3, 1], [1, 4]
    ]
  },

  // ── 5. Orion (The Great Hunter with Belt, Betelgeuse & Rigel) - far left
  {
    name: 'Orion',
    center: [-18, -6.5, -10],
    stars: [
      { coord: [-2.2, 3.4, 0.2], isAlpha: true, color: '#FF7744' }, // Betelgeuse (Red Supergiant)
      { coord: [2.4, 3.1, -0.3], isAlpha: false },                  // Bellatrix
      { coord: [-0.8, 0.2, 0.1], isAlpha: false },                  // Alnitak (belt 1)
      { coord: [0.0, 0.0, 0.0], isAlpha: false },                   // Alnilam (belt 2)
      { coord: [0.8, -0.2, -0.1], isAlpha: false },                 // Mintaka (belt 3)
      { coord: [-2.4, -3.2, 0.3], isAlpha: false },                 // Saiph
      { coord: [2.5, -3.5, -0.2], isAlpha: true, color: '#BAE6FD' }, // Rigel (Blue Supergiant)
      { coord: [3.8, 0.8, 0.4], isAlpha: false },                   // Bow 1
      { coord: [3.6, -0.6, 0.3], isAlpha: false },                  // Bow 2
    ],
    edges: [
      [0, 1],
      [0, 2], [1, 4],
      [2, 3], [3, 4],
      [2, 5], [4, 6],
      [1, 7], [7, 8], [8, 6]
    ]
  },

  // ── 6. Gemini (The Celestial Twins: Castor & Pollux) - mid-right
  {
    name: 'Gemini',
    center: [16, -8.2, -9],
    stars: [
      { coord: [-1.5, 3.6, 0.2], isAlpha: true, color: '#FFFFFF' }, // Castor
      { coord: [1.2, 3.2, -0.2], isAlpha: true, color: '#FEF08A' }, // Pollux
      { coord: [0.2, 0.4, 0.0], isAlpha: false },                  // Wasat
      { coord: [-2.4, 0.8, 0.1], isAlpha: false },                 // Mebsuta
      { coord: [-1.8, -3.2, 0.2], isAlpha: false },                // Alhena
      { coord: [1.4, -3.0, -0.1], isAlpha: false },                // Alzirr
    ],
    edges: [
      [0, 1],
      [0, 3], [3, 4],
      [1, 2], [2, 5],
      [3, 2]
    ]
  },

  // ── 7. Canis Major (The Great Dog with Sirius - Brightest Star) - center-left closer
  {
    name: 'Canis Major',
    center: [-6, -10.0, -7],
    stars: [
      { coord: [0.0, 2.4, 0.2], isAlpha: true, color: '#E0F2FE' },  // Sirius (Brilliant Alpha)
      { coord: [-2.2, 1.6, 0.1], isAlpha: false },                 // Mirzam
      { coord: [0.4, -1.8, -0.1], isAlpha: false },                // Wezen
      { coord: [-1.2, -3.2, 0.2], isAlpha: false },                // Adhara
      { coord: [1.8, -3.6, -0.2], isAlpha: false },                // Aludra
      { coord: [1.6, 1.0, 0.0], isAlpha: false },                  // Muliphein
    ],
    edges: [
      [1, 0], [0, 5],
      [0, 2],
      [2, 3], [2, 4]
    ]
  },

  // ── 8. Auriga (The Charioteer with Capella) - closer right
  {
    name: 'Auriga',
    center: [11, -12.5, -6],
    stars: [
      { coord: [0.6, 2.6, 0.2], isAlpha: true, color: '#FFF4CC' },  // Capella (Golden giant)
      { coord: [-1.8, 2.0, 0.1], isAlpha: false },                 // Menkalinan
      { coord: [-2.2, -0.8, 0.0], isAlpha: false },                // Theta Aurigae
      { coord: [-0.6, -2.6, -0.1], isAlpha: false },               // Alnath
      { coord: [1.8, -1.6, 0.1], isAlpha: false },                 // Hassaleh
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 0]
    ]
  },

  // ── 9. Taurus & Pleiades (The Bull & The Seven Sisters) - left deep space
  {
    name: 'Taurus',
    center: [-15, -13.5, -12],
    stars: [
      { coord: [1.8, 1.2, 0.3], isAlpha: true, color: '#FFAA33' }, // Aldebaran (Fiery Eye)
      { coord: [-0.4, 0.4, 0.1], isAlpha: false },                 // Hyades 1
      { coord: [-1.2, -0.8, 0.2], isAlpha: false },                // Hyades 2
      { coord: [0.8, -1.4, -0.1], isAlpha: false },                // Hyades 3
      { coord: [3.6, 3.8, 0.4], isAlpha: false },                  // Elnath
      { coord: [4.2, -0.2, 0.1], isAlpha: false },                 // Tianguan
      { coord: [-4.2, 2.8, 0.2], isAlpha: true, color: '#BAE6FD' }, // Pleiades 1 (Alcyone)
      { coord: [-4.6, 2.4, 0.1], isAlpha: false },                 // Pleiades 2
      { coord: [-3.8, 3.1, 0.3], isAlpha: false },                 // Pleiades 3
      { coord: [-4.0, 2.2, 0.0], isAlpha: false },                 // Pleiades 4
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [0, 4], [3, 5],
      [6, 7], [7, 9], [9, 8], [8, 6]
    ]
  },

  // ── 10. Boötes (The Herdsman Kite with Arcturus) - far right deep space
  {
    name: 'Boötes',
    center: [18, -16.5, -12],
    stars: [
      { coord: [0.0, -2.4, 0.2], isAlpha: true, color: '#FFAA44' }, // Arcturus (4th brightest star)
      { coord: [-1.8, -1.6, 0.1], isAlpha: false },                // Muphrid
      { coord: [1.6, -0.6, -0.1], isAlpha: false },                // Izar
      { coord: [1.2, 1.6, 0.0], isAlpha: false },                  // Delta Boötis
      { coord: [0.0, 2.8, 0.2], isAlpha: false },                  // Nekkar
      { coord: [-1.4, 1.8, -0.1], isAlpha: false },                // Seginus
    ],
    edges: [
      [0, 1], [0, 2], [2, 3], [3, 4], [4, 5], [5, 0]
    ]
  },

  // ── 11. Leo (The Lion with Regulus & The Sickle) - center-left
  {
    name: 'Leo',
    center: [-7, -17.5, -10],
    stars: [
      { coord: [-2.0, -1.8, 0.2], isAlpha: true, color: '#BAE6FD' }, // Regulus (Alpha Heart)
      { coord: [-1.4, 1.2, 0.1], isAlpha: false },                  // Algieba
      { coord: [-0.6, 2.6, 0.0], isAlpha: false },                  // Adhafera
      { coord: [0.8, 3.2, -0.2], isAlpha: false },                  // Rasalas
      { coord: [1.8, 0.8, 0.1], isAlpha: false },                   // Zosma
      { coord: [3.6, -0.4, -0.1], isAlpha: true },                  // Denebola (Tail)
      { coord: [1.6, -1.6, 0.2], isAlpha: false },                  // Chertan
    ],
    edges: [
      [0, 1], [1, 2], [2, 3],
      [1, 4], [4, 5], [5, 6], [6, 0]
    ]
  },

  // ── 12. Aquila (The Celestial Eagle with Altair) - far left closer
  {
    name: 'Aquila',
    center: [-16, -21.0, -7],
    stars: [
      { coord: [0.0, 1.8, 0.2], isAlpha: true, color: '#FFFFFF' }, // Altair
      { coord: [-1.2, 2.6, 0.1], isAlpha: false },                // Tarazed
      { coord: [1.0, 1.0, -0.1], isAlpha: false },                // Alshain
      { coord: [-2.4, -1.2, 0.2], isAlpha: false },               // Deneb el Okab
      { coord: [1.8, -2.4, -0.2], isAlpha: false },               // Al Thalimain
    ],
    edges: [
      [1, 0], [0, 2],
      [1, 3], [3, 0], [0, 4], [4, 2]
    ]
  },

  // ── 13. Pegasus (The Great Square) - right-center midground
  {
    name: 'Pegasus',
    center: [8, -22.5, -11],
    stars: [
      { coord: [-2.2, -2.0, 0.2], isAlpha: false }, // Markab
      { coord: [-2.0, 2.2, 0.1], isAlpha: true },   // Scheat
      { coord: [2.2, 2.0, -0.2], isAlpha: true },   // Alpheratz
      { coord: [2.0, -2.2, -0.1], isAlpha: false }, // Algenib
      { coord: [-4.6, -0.8, 0.3], isAlpha: false }, // Enif
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [1, 4]
    ]
  },

  // ── 14. Hercules (The Celestial Keystone) - center-left deep void
  {
    name: 'Hercules',
    center: [-8, -25.5, -13],
    stars: [
      { coord: [-1.6, 2.0, 0.2], isAlpha: false },  // Pi Herculis
      { coord: [1.4, 1.8, -0.1], isAlpha: false },  // Eta Herculis
      { coord: [1.2, -1.6, -0.2], isAlpha: false }, // Zeta Herculis
      { coord: [-1.4, -1.4, 0.1], isAlpha: false }, // Epsilon Herculis
      { coord: [-3.2, -3.2, 0.2], isAlpha: true },  // Kornephoros
      { coord: [3.2, -2.8, -0.1], isAlpha: false }, // Sarin
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [3, 4], [2, 5]
    ]
  },

  // ── 15. Ursa Minor (Little Dipper with Polaris - North Star) - right
  {
    name: 'Ursa Minor',
    center: [15, -26.5, -8],
    stars: [
      { coord: [-3.4, 2.6, 0.3], isAlpha: true, color: '#FEF9C3' }, // Polaris (The North Star)
      { coord: [-1.8, 1.8, 0.1], isAlpha: false },                 // Yildun
      { coord: [-0.4, 1.0, 0.0], isAlpha: false },                 // Urodelus
      { coord: [0.8, 0.2, -0.1], isAlpha: false },                 // Ahfa
      { coord: [2.4, 1.2, 0.2], isAlpha: true },                   // Kochab
      { coord: [2.6, -0.8, -0.2], isAlpha: false },                // Pherkad
      { coord: [1.0, -1.2, 0.1], isAlpha: false },                 // Anwar
    ],
    edges: [
      [0, 1], [1, 2], [2, 3],
      [3, 4], [4, 5], [5, 6], [6, 3]
    ]
  },

  // ── 16. Scorpius (The Scorpion with glowing red Antares & Stinger) - far left
  {
    name: 'Scorpius',
    center: [-17, -29.8, -9],
    stars: [
      { coord: [0.0, 1.8, 0.2], isAlpha: true, color: '#FF3333' }, // Antares (Heart of Scorpion)
      { coord: [-2.2, 3.2, 0.1], isAlpha: false },                // Graffias
      { coord: [-1.0, 3.4, 0.0], isAlpha: false },                // Dschubba
      { coord: [0.4, 3.0, -0.1], isAlpha: false },                // Pi Scorpii
      { coord: [0.8, -0.4, 0.0], isAlpha: false },                // Wei
      { coord: [-1.2, -3.6, 0.3], isAlpha: true },                // Shaula (Stinger)
      { coord: [-2.0, -3.0, 0.2], isAlpha: false },               // Lesath
      { coord: [1.2, -2.4, -0.2], isAlpha: false },               // Sargas
    ],
    edges: [
      [1, 2], [2, 3], [2, 0],
      [0, 4], [4, 7], [7, 5], [5, 6]
    ]
  },

  // ── 17. Crux (The Southern Cross) - center-right closer
  {
    name: 'Crux',
    center: [6, -30.8, -7],
    stars: [
      { coord: [0.0, -2.6, 0.2], isAlpha: true, color: '#BAE6FD' },  // Acrux
      { coord: [0.0, 2.4, -0.1], isAlpha: true, color: '#FF9966' },  // Gacrux
      { coord: [-2.0, 0.0, 0.1], isAlpha: true, color: '#BAE6FD' },  // Mimosa
      { coord: [1.8, 0.2, -0.2], isAlpha: false },                  // Imai
      { coord: [0.8, -0.8, 0.0], isAlpha: false },                  // Ginan
    ],
    edges: [
      [1, 0],
      [2, 3]
    ]
  },

  // ── 18. Centaurus (The Centaur guarding the Southern Cross) - far right deep void
  {
    name: 'Centaurus',
    center: [18, -32.8, -11],
    stars: [
      { coord: [-2.0, 2.4, 0.2], isAlpha: true, color: '#FEF08A' }, // Alpha Centauri (Rigil Kentaurus)
      { coord: [-0.4, 2.8, 0.1], isAlpha: true, color: '#BAE6FD' }, // Beta Centauri (Hadar)
      { coord: [1.4, 1.2, -0.1], isAlpha: false },                  // Muhlifain
      { coord: [0.8, -1.4, -0.2], isAlpha: false },                 // Menkent
      { coord: [-2.4, -2.0, 0.2], isAlpha: false },                 // Epsilon Centauri
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 0]
    ]
  }
];

export default function Constellations3D({ colorHex = '#06B6D4', overscrollTension = 0 }) {
  const groupRef = useRef();
  const linesRef = useRef();
  const { size } = useThree();

  // Responsive celestial scaling: brings all constellations into view on mobile portrait viewports
  const isMobile = size.width < 768;
  const spreadX = Math.min(1.0, Math.max(0.34, size.width / 1200));
  const starScale = isMobile ? 0.72 : 1.0;

  // Prepare line segments geometry & star positions/colors
  const { linePositions, starPositions, starColors } = useMemo(() => {
    const lineCoords = [];
    const nodeCoords = [];
    const nodeColors = [];

    const baseColor = new THREE.Color(colorHex);
    const brightColor = new THREE.Color('#FFFFFF');

    CONSTELLATIONS_DATA.forEach((c) => {
      const [cx, cy, cz] = c.center;
      const posX = cx * spreadX;

      // Absolute star coordinates
      const absStars = c.stars.map((s) => {
        const [sx, sy, sz] = s.coord;
        return [posX + sx * starScale, cy + sy * starScale, cz + sz];
      });

      // Add star nodes with realistic astronomical colors
      c.stars.forEach((s, idx) => {
        const [x, y, z] = absStars[idx];
        nodeCoords.push(x, y, z);

        if (s.color) {
          const specCol = new THREE.Color(s.color);
          nodeColors.push(specCol.r, specCol.g, specCol.b);
        } else if (s.isAlpha) {
          nodeColors.push(brightColor.r, brightColor.g, brightColor.b);
        } else {
          nodeColors.push(baseColor.r, baseColor.g, baseColor.b);
        }
      });

      // Add edges as pairs of points
      c.edges.forEach(([i, j]) => {
        const p1 = absStars[i];
        const p2 = absStars[j];
        if (p1 && p2) {
          lineCoords.push(p1[0], p1[1], p1[2]);
          lineCoords.push(p2[0], p2[1], p2[2]);
        }
      });
    });

    return {
      linePositions: new Float32Array(lineCoords),
      starPositions: new Float32Array(nodeCoords),
      starColors: new Float32Array(nodeColors)
    };
  }, [colorHex, spreadX, starScale]);

  // Buffer geometries creation
  const { lineGeometry, starGeometry } = useMemo(() => {
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    return { lineGeometry: lineGeo, starGeometry: starGeo };
  }, [linePositions, starPositions, starColors]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    const cameraY = state.camera?.position?.y || 0;

    // Gentle cosmic parallax + downward overscroll tension displacement
    groupRef.current.position.y = cameraY * 0.04 - overscrollTension * 1.5;

    // Clean 3D scale (No stretching)
    groupRef.current.scale.set(1.0, 1.0, 1.0);

    // Subtle celestial breathing rotation + 3D multiverse roll
    groupRef.current.rotation.z = overscrollTension * 0.45;
    groupRef.current.rotation.y = Math.sin(time * 0.08) * 0.03 + overscrollTension * 0.2;
    groupRef.current.rotation.x = Math.cos(time * 0.06) * 0.02 + overscrollTension * 0.25;

    // Interactive mouse parallax response
    if (state.pointer) {
      groupRef.current.rotation.y += state.pointer.x * 0.015;
      groupRef.current.rotation.x += state.pointer.y * 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Constellation Connecting Geometric Lines */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color={colorHex}
          transparent
          opacity={0.62}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Constellation Star Nodes */}
      <points geometry={starGeometry}>
        <pointsMaterial
          size={isMobile ? 0.18 : 0.24}
          vertexColors
          transparent
          opacity={0.96}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}
