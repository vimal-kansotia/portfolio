import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * ShootingStars - Hyper-Realistic Atmospheric Meteor & Ionization Trail Engine
 * 
 * Features:
 * - Hyper-fast plasma core head with smooth exponential gradient light streak.
 * - Trailing stardust ionization particles lingering along the trajectory path.
 * - Random origin angles & realistic atmospheric friction fade curve.
 * - Clean 4-second calm gap between shooting star occurrences.
 */
export default function ShootingStars() {
  const headRef = useRef();
  const trailRef = useRef();
  const stardustRef = useRef();

  const STARDUST_COUNT = 24;

  // Stardust particle pool
  const stardustData = useMemo(() => {
    const arr = [];
    for (let i = 0; i < STARDUST_COUNT; i++) {
      arr.push({
        x: 0,
        y: 0,
        z: -999,
        life: 0,
        size: Math.random() * 0.08 + 0.03,
      });
    }
    return arr;
  }, []);

  const stardustPositions = useMemo(() => {
    const arr = new Float32Array(STARDUST_COUNT * 3);
    for (let i = 0; i < STARDUST_COUNT * 3; i += 3) {
      arr[i] = 0;
      arr[i + 1] = 0;
      arr[i + 2] = -999;
    }
    return arr;
  }, []);
  const stardustSizes = useMemo(() => new Float32Array(STARDUST_COUNT), []);

  // Meteor physics state
  const meteorState = useRef({
    active: false,
    timer: 3.5, // Initial quick spawn
    gap: 4.0,   // Clean 4-second gap
    x: 0,
    y: 0,
    z: -4,
    vx: 0,
    vy: 0,
    vz: 0,
    life: 0,
    stardustIdx: 0,
  });

  useFrame((state, delta) => {
    if (!headRef.current || !trailRef.current || !stardustRef.current) return;
    const cameraY = state.camera.position.y;
    const m = meteorState.current;

    const geomDust = stardustRef.current.geometry;
    const posDustAttr = geomDust.attributes.position;

    if (!m.active) {
      m.timer += delta;
      if (m.timer >= m.gap) {
        m.active = true;
        m.life = 0;
        m.timer = 0;
        m.gap = 4.0 + (Math.random() - 0.5) * 0.8;

        // Random origin around outer camera view
        const angle = Math.random() * Math.PI * 2;
        const dist = 16.0;
        m.x = Math.cos(angle) * dist;
        m.y = Math.sin(angle) * dist;
        m.z = -Math.random() * 3 - 3.5;

        // Trajectory towards opposite side of view
        const targetX = -m.x * 0.9 + (Math.random() - 0.5) * 6;
        const targetY = -m.y * 0.9 + (Math.random() - 0.5) * 6;
        const dx = targetX - m.x;
        const dy = targetY - m.y;
        const d = Math.hypot(dx, dy);
        const speed = 18.0; // Hyper-realistic fast meteor speed

        m.vx = (dx / d) * speed;
        m.vy = (dy / d) * speed;
        m.vz = (Math.random() - 0.5) * 0.15;
      } else {
        // Hide meteor during 4s gap & decay stardust
        headRef.current.position.set(0, cameraY, -999);
        trailRef.current.position.set(0, cameraY, -999);

        // Update lingering stardust decay
        for (let i = 0; i < STARDUST_COUNT; i++) {
          const s = stardustData[i];
          if (s.life > 0) {
            s.life -= delta * 2.0;
            if (s.life <= 0) posDustAttr.setXYZ(i, 0, cameraY, -999);
          }
        }
        posDustAttr.needsUpdate = true;
        return;
      }
    }

    // Move meteor (~0.7s realistic flash duration)
    m.life += delta * 1.4;

    if (m.life >= 1.0) {
      m.active = false;
      m.timer = 0;
      headRef.current.position.set(0, cameraY, -999);
      trailRef.current.position.set(0, cameraY, -999);
      return;
    }

    m.x += m.vx * delta;
    m.y += m.vy * delta;
    m.z += m.vz * delta;

    const currentY = cameraY + m.y;
    const fade = Math.sin(m.life * Math.PI); // Atmospheric light curve

    // Position Plasma Head Core
    headRef.current.position.set(m.x, currentY, m.z);
    headRef.current.scale.setScalar(fade * 0.8 + 0.2);

    // Position Tapered Gradient Light Streak
    const moveAngle = Math.atan2(m.vy, m.vx);
    const streakLen = fade * 5.0;
    trailRef.current.position.set(
      m.x - (m.vx / 18.0) * (streakLen * 0.5),
      currentY - (m.vy / 18.0) * (streakLen * 0.5),
      m.z
    );
    trailRef.current.rotation.z = moveAngle - Math.PI / 2;
    trailRef.current.scale.set(0.06, streakLen, 0.06);

    if (headRef.current.material) headRef.current.material.opacity = fade * 0.95;
    if (trailRef.current.material) trailRef.current.material.opacity = fade * 0.7;

    // Emit trailing stardust spark particles along meteor path
    if (Math.random() < 0.75) {
      const idx = m.stardustIdx % STARDUST_COUNT;
      m.stardustIdx++;
      const s = stardustData[idx];
      s.x = m.x + (Math.random() - 0.5) * 0.3;
      s.y = currentY + (Math.random() - 0.5) * 0.3;
      s.z = m.z + (Math.random() - 0.5) * 0.3;
      s.life = 1.0;

      posDustAttr.setXYZ(idx, s.x, s.y, s.z);
    }

    // Decay stardust particles
    for (let i = 0; i < STARDUST_COUNT; i++) {
      const s = stardustData[i];
      if (s.life > 0) {
        s.life -= delta * 1.8;
        if (s.life <= 0) posDustAttr.setXYZ(i, 0, cameraY, -999);
      }
    }

    posDustAttr.needsUpdate = true;
  });

  return (
    <>
      {/* Hyper-Bright Plasma Head Core */}
      <mesh ref={headRef} position={[0, 0, -999]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial
          color="#FFFFFF"
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Sleek Gradient Light Streak */}
      <mesh ref={trailRef} position={[0, 0, -999]}>
        <cylinderGeometry args={[0.005, 0.09, 1, 8]} />
        <meshBasicMaterial
          color="#FAF6F0"
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Trailing Stardust Particles */}
      <points ref={stardustRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={STARDUST_COUNT}
            array={stardustPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={STARDUST_COUNT}
            array={stardustSizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#FAF6F0"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}
