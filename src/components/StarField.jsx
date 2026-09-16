import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function StarField({ count = 6500, overscrollTension = 0 }) {
  const meshRef = useRef();
  const materialRef = useRef();

  const { positions, colors, sizes } = useMemo(() => {
    const posArr = new Float32Array(count * 3);
    const colArr = new Float32Array(count * 3);
    const sizeArr = new Float32Array(count);

    // Color palette for cosmic stars
    const colorWhite = new THREE.Color('#FFFFFF');
    const colorBlue = new THREE.Color('#E0F2FE');
    const colorCyan = new THREE.Color('#BAE6FD');
    const colorGold = new THREE.Color('#FEF08A');

    for (let i = 0; i < count; i++) {
      posArr[i * 3] = (Math.random() - 0.5) * 55;     // X spread
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 85; // Y height spread
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 50; // Z depth spread

      // Randomly pick star tint
      const rand = Math.random();
      let starCol;
      if (rand < 0.65) starCol = colorWhite;
      else if (rand < 0.85) starCol = colorBlue;
      else if (rand < 0.95) starCol = colorCyan;
      else starCol = colorGold;

      colArr[i * 3] = starCol.r;
      colArr[i * 3 + 1] = starCol.g;
      colArr[i * 3 + 2] = starCol.b;

      // Varied star brightness and scale
      sizeArr[i] = Math.random() * 2.8 + 0.8;
    }

    return {
      positions: posArr,
      colors: colArr,
      sizes: sizeArr,
    };
  }, [count]);

  const starGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    const cameraY = state.camera?.position?.y || 0;

    // Follow camera Y with downward elastic offset during multiverse roll
    meshRef.current.position.y = cameraY - overscrollTension * 2.5;

    // Clean 3D space scale (No vertical stretching)
    meshRef.current.scale.set(1.0, 1.0, 1.0);

    // 3D Space Rolling & Rotational Drift into the Multiverse
    const rollSpeedMultiplier = 1.0 + overscrollTension * 2.5;
    meshRef.current.rotation.z = overscrollTension * 0.75;
    meshRef.current.rotation.y = time * 0.01 * rollSpeedMultiplier;
    meshRef.current.rotation.x = time * 0.005 * rollSpeedMultiplier + overscrollTension * 0.35;

    // Mouse parallax
    if (state.pointer) {
      meshRef.current.rotation.y += state.pointer.x * 0.015;
      meshRef.current.rotation.x += state.pointer.y * 0.015;
    }

    // Dynamic star material opacity adjustment during multiverse overscroll
    if (materialRef.current) {
      materialRef.current.opacity = Math.min(1.0, 0.88 + overscrollTension * 0.12);
    }
  });

  return (
    <points ref={meshRef} geometry={starGeometry}>
      <pointsMaterial
        ref={materialRef}
        size={0.055}
        vertexColors
        transparent
        opacity={0.88}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

