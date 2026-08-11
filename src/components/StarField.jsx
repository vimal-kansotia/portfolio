import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function StarField({ count = 4000 }) {
  const meshRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 45;     // X spread
      arr[i * 3 + 1] = (Math.random() - 0.5) * 70; // Y height spread
      arr[i * 3 + 2] = (Math.random() - 0.5) * 45; // Z depth spread
    }
    return arr;
  }, [count]);

  const sizes = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = Math.random() * 2.2 + 0.6;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    const cameraY = state.camera.position.y;

    // Continuously align starfield mesh Y with Camera Y position
    // so space theme stars follow all the way down to the bottom footer!
    meshRef.current.position.y = cameraY;

    // Gentle rotation
    meshRef.current.rotation.y = time * 0.012;
    meshRef.current.rotation.x = time * 0.006;

    // Mouse parallax
    const pointer = state.pointer;
    meshRef.current.rotation.y += pointer.x * 0.015;
    meshRef.current.rotation.x += pointer.y * 0.015;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#C9B49A"
        transparent
        opacity={0.45}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
