import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * SpaceTravellers - Detailed 3D Spaceships Firing Pure Red Laser Cannon Stream
 * 
 * Features:
 * - 2 High-Detail 3D Spaceships (Fuselage, Swept Wings, Glowing Cockpit Dome, Wingtip Cannons, Dual Ion Thrusters).
 * - Positioned right in front of camera view (Z = -2.5 to -4.0) for 100% high visibility.
 * - Rear Ship fires PURE BRIGHT RED LASER BOLTS (#FF2233 / #FF0022) from its wing cannons.
 * - Front Ship performs evasive barrel rolls and weaving maneuvers to dodge and save itself from the red laser stream.
 */
export default function SpaceTravellers() {
  const groupRef = useRef();
  const evaderShipRef = useRef();
  const attackerShipRef = useRef();
  const lasersGroupRef = useRef();
  const sparksGroupRef = useRef();
  const laserMeshesRef = useRef([]);

  const MAX_LASERS = 18;
  const MAX_SPARKS = 36;

  // Pure Red Laser Bolts Pool (#FF2233)
  const lasersData = useMemo(() => {
    const arr = [];
    for (let i = 0; i < MAX_LASERS; i++) {
      arr.push({
        x: 0, y: 0, z: -999,
        vx: 0, vy: 0, vz: 0,
        active: false,
        life: 0,
      });
    }
    return arr;
  }, []);

  // Evasive Spark Deflections Pool
  const sparksData = useMemo(() => {
    const arr = [];
    for (let i = 0; i < MAX_SPARKS; i++) {
      arr.push({
        x: 0, y: 0, z: -999,
        vx: 0, vy: 0, vz: 0,
        life: 0,
      });
    }
    return arr;
  }, []);

  const sparkPositions = useMemo(() => {
    const arr = new Float32Array(MAX_SPARKS * 3);
    for (let i = 0; i < MAX_SPARKS * 3; i += 3) {
      arr[i] = 0;
      arr[i + 1] = 0;
      arr[i + 2] = -999;
    }
    return arr;
  }, []);

  // Battle Physics State
  const battleState = useRef({
    active: false,
    timer: 1.0,       // Fast initial spawn right after page loads
    cooldown: 1.0,    // Quick initial spawn
    startPos: new THREE.Vector3(),
    endPos: new THREE.Vector3(),
    evaderPos: new THREE.Vector3(),
    attackerPos: new THREE.Vector3(),
    dir: new THREE.Vector3(),
    progress: 0,
    speed: 0.35,
    fireTimer: 0,
    laserIdx: 0,
    sparkIdx: 0,
    rollAngle: 0,
  });

  const clearParticles = () => {
    laserMeshesRef.current.forEach((mesh) => {
      if (mesh) mesh.position.set(0, 0, -999);
    });
    if (sparksGroupRef.current) {
      const spAttr = sparksGroupRef.current.geometry.attributes.position;
      for (let i = 0; i < MAX_SPARKS * 3; i++) {
        sparkPositions[i] = (i % 3 === 2) ? -999 : 0;
      }
      spAttr.needsUpdate = true;
    }
  };

  useFrame((state, delta) => {
    if (!groupRef.current || !evaderShipRef.current || !attackerShipRef.current) return;
    const cameraY = state.camera.position.y;
    groupRef.current.position.y = cameraY;

    const b = battleState.current;

    // Handle Battle Cooldown
    if (!b.active) {
      b.timer += delta;
      if (b.timer >= b.cooldown) {
        b.active = true;
        b.timer = 0;
        b.progress = 0;
        b.cooldown = 5.0 + Math.random() * 3.0; // 5 - 8s gap

        // Dynamic Viewport Bounds for Mobile Portrait vs Desktop
        const viewW = state.viewport.width ? state.viewport.width / 2 + 3 : 14;
        const boundX = Math.min(16, Math.max(6, viewW));
        const boundY = Math.min(8, Math.max(4, boundX * 0.65));

        const side = Math.floor(Math.random() * 4);
        if (side === 0) {
          b.startPos.set(-boundX, Math.random() * boundY + 2, -Math.random() * 2 - 2.5);
          b.endPos.set(boundX, -Math.random() * boundY - 2, -Math.random() * 2 - 2.5);
        } else if (side === 1) {
          b.startPos.set(boundX, Math.random() * boundY + 2, -Math.random() * 2 - 2.5);
          b.endPos.set(-boundX, -Math.random() * boundY - 2, -Math.random() * 2 - 2.5);
        } else if (side === 2) {
          b.startPos.set(-boundX, -Math.random() * boundY - 2, -Math.random() * 2 - 2.5);
          b.endPos.set(boundX, Math.random() * boundY + 2, -Math.random() * 2 - 2.5);
        } else {
          b.startPos.set(boundX, -Math.random() * boundY - 2, -Math.random() * 2 - 2.5);
          b.endPos.set(-boundX, Math.random() * boundY + 2, -Math.random() * 2 - 2.5);
        }

        b.dir.subVectors(b.endPos, b.startPos).normalize();
        b.speed = Math.random() * 0.08 + 0.35;
      } else {
        // Hide ships and particles during cooldown
        evaderShipRef.current.position.set(0, 0, -999);
        attackerShipRef.current.position.set(0, 0, -999);
        clearParticles();
        return;
      }
    }

    // Update Traversal Progress
    b.progress += delta * b.speed;

    if (b.progress >= 1.0) {
      b.active = false;
      b.timer = 0;
      evaderShipRef.current.position.set(0, 0, -999);
      attackerShipRef.current.position.set(0, 0, -999);
      clearParticles();
      return;
    }

    // --- FRONT EVADER SPACESHIP (Dodging & Saving Itself) ---
    b.evaderPos.lerpVectors(b.startPos, b.endPos, b.progress);

    // Evasive weave & barrel roll dodge physics
    b.rollAngle += delta * 6.0;
    const dodgeX = Math.sin(b.progress * Math.PI * 8) * 1.6;
    const dodgeY = Math.cos(b.progress * Math.PI * 6) * 1.0;

    const perp = new THREE.Vector3(-b.dir.y, b.dir.x, 0).multiplyScalar(dodgeX);
    b.evaderPos.add(perp);
    b.evaderPos.z += dodgeY * 0.3;

    evaderShipRef.current.position.copy(b.evaderPos);

    // Align Front Spaceship Rotation (Forward travel angle + Evasive Roll)
    const baseRotAngle = Math.atan2(b.dir.y, b.dir.x);
    evaderShipRef.current.rotation.z = baseRotAngle - Math.PI / 2;
    evaderShipRef.current.rotation.y = Math.sin(b.rollAngle) * 0.6;

    // --- REAR ATTACKER SPACESHIP (Trailing 2.6 units behind) ---
    b.attackerPos.copy(b.evaderPos).sub(b.dir.clone().multiplyScalar(2.6));

    attackerShipRef.current.position.copy(b.attackerPos);
    attackerShipRef.current.rotation.z = baseRotAngle - Math.PI / 2;

    // --- REAR SPACESHIP FIRES PURE RED LASER CANNON BOLTS AT FRONT SPACESHIP ---
    b.fireTimer += delta;
    if (b.fireTimer >= 0.1) {
      b.fireTimer = 0;
      const idx = b.laserIdx % MAX_LASERS;
      b.laserIdx++;

      const l = lasersData[idx];
      // Alternate firing from left cannon (-0.51) and right cannon (+0.51)
      const cannonOffset = (b.laserIdx % 2 === 0 ? 0.51 : -0.51);
      const rightVec = new THREE.Vector3(Math.cos(baseRotAngle), Math.sin(baseRotAngle), 0).multiplyScalar(cannonOffset);

      l.x = b.attackerPos.x + rightVec.x;
      l.y = b.attackerPos.y + rightVec.y;
      l.z = b.attackerPos.z;

      const aimDir = new THREE.Vector3().subVectors(b.evaderPos, b.attackerPos).normalize();
      aimDir.x += (Math.random() - 0.5) * 0.12;
      aimDir.y += (Math.random() - 0.5) * 0.12;

      const laserSpeed = 32.0;
      l.vx = aimDir.x * laserSpeed;
      l.vy = aimDir.y * laserSpeed;
      l.vz = aimDir.z * laserSpeed;
      l.life = 1.0;
      l.active = true;

      // Trigger Evasive Sparks near front ship
      if (Math.random() < 0.65) {
        const sIdx = b.sparkIdx % MAX_SPARKS;
        b.sparkIdx++;
        const sp = sparksData[sIdx];
        sp.x = b.evaderPos.x + (Math.random() - 0.5) * 0.6;
        sp.y = b.evaderPos.y + (Math.random() - 0.5) * 0.6;
        sp.z = b.evaderPos.z + (Math.random() - 0.5) * 0.6;
        sp.vx = (Math.random() - 0.5) * 4.5;
        sp.vy = (Math.random() - 0.5) * 4.5;
        sp.vz = (Math.random() - 0.5) * 4.5;
        sp.life = 1.0;
      }
    }

    // Update Red 3D Laser Cylinder Meshes
    for (let i = 0; i < MAX_LASERS; i++) {
      const l = lasersData[i];
      const mesh = laserMeshesRef.current[i];
      if (!mesh) continue;

      if (l.active) {
        l.life -= delta * 2.2;
        if (l.life <= 0) {
          l.active = false;
          mesh.position.set(0, 0, -999);
          continue;
        }

        l.x += l.vx * delta;
        l.y += l.vy * delta;
        l.z += l.vz * delta;

        mesh.position.set(l.x, l.y, l.z);

        // Align cylinder (default along Y-axis) along 3D velocity vector
        const dirVec = new THREE.Vector3(l.vx, l.vy, l.vz).normalize();
        const quat = new THREE.Quaternion();
        quat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dirVec);
        mesh.quaternion.copy(quat);
      } else {
        mesh.position.set(0, 0, -999);
      }
    }

    // Update Evasive Sparks
    if (sparksGroupRef.current) {
      const spAttr = sparksGroupRef.current.geometry.attributes.position;
      for (let i = 0; i < MAX_SPARKS; i++) {
        const sp = sparksData[i];
        if (sp.life > 0) {
          sp.life -= delta * 3.0;
          sp.x += sp.vx * delta;
          sp.y += sp.vy * delta;
          sp.z += sp.vz * delta;
          sparkPositions[i * 3] = sp.x;
          sparkPositions[i * 3 + 1] = sp.y;
          sparkPositions[i * 3 + 2] = sp.z;
        } else {
          sparkPositions[i * 3] = 0;
          sparkPositions[i * 3 + 1] = 0;
          sparkPositions[i * 3 + 2] = -999;
        }
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* 🚀 COMPACT BLUE DEFENDER SPACESHIP (Dodging & Weaving) */}
      <group ref={evaderShipRef} scale={[0.38, 0.38, 0.38]} position={[0, 0, -999]}>
        {/* Main Nose Fuselage */}
        <mesh position={[0, 0.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.2, 0.7, 6]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>

        {/* Cockpit Dome (Blue Glowing Glass) */}
        <mesh position={[0, 0.15, 0.1]}>
          <sphereGeometry args={[0.14, 12, 12]} />
          <meshBasicMaterial color="#00CCFF" transparent opacity={0.9} />
        </mesh>

        {/* Swept-Back Main Wings */}
        <mesh position={[0, -0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[1.2, 0.06, 0.28]} />
          <meshBasicMaterial color="#FAF6F0" />
        </mesh>

        {/* Wingtip Stabilizers */}
        <mesh position={[-0.6, -0.1, 0.08]}>
          <boxGeometry args={[0.04, 0.2, 0.2]} />
          <meshBasicMaterial color="#00CCFF" />
        </mesh>
        <mesh position={[0.6, -0.1, 0.08]}>
          <boxGeometry args={[0.04, 0.2, 0.2]} />
          <meshBasicMaterial color="#00CCFF" />
        </mesh>

        {/* Dual Ion Thrusters (Glowing Engine Exhaust) */}
        <mesh position={[-0.15, -0.45, 0]}>
          <cylinderGeometry args={[0.06, 0.08, 0.2, 8]} />
          <meshBasicMaterial color="#00CCFF" />
        </mesh>
        <mesh position={[0.15, -0.45, 0]}>
          <cylinderGeometry args={[0.06, 0.08, 0.2, 8]} />
          <meshBasicMaterial color="#00CCFF" />
        </mesh>
        <mesh position={[0, -0.58, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="#00CCFF" transparent opacity={0.95} />
        </mesh>
      </group>

      {/* 🚀 COMPACT RED ATTACKER SPACESHIP (Firing Red Laser Stream) */}
      <group ref={attackerShipRef} scale={[0.4, 0.4, 0.4]} position={[0, 0, -999]}>
        {/* Main Aggressive Fuselage */}
        <mesh position={[0, 0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.22, 0.75, 6]} />
          <meshBasicMaterial color="#FF3344" />
        </mesh>

        {/* Cockpit Dome (Crimson Glass) */}
        <mesh position={[0, 0.18, 0.12]}>
          <sphereGeometry args={[0.15, 12, 12]} />
          <meshBasicMaterial color="#FF6600" transparent opacity={0.9} />
        </mesh>

        {/* Heavy Swept Wings */}
        <mesh position={[0, -0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[1.35, 0.07, 0.32]} />
          <meshBasicMaterial color="#333344" />
        </mesh>

        {/* Wingtip Laser Cannons (Firing Red Laser Emitters) */}
        <mesh position={[-0.68, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.35, 6]} />
          <meshBasicMaterial color="#FF0044" />
        </mesh>
        <mesh position={[0.68, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.35, 6]} />
          <meshBasicMaterial color="#FF0044" />
        </mesh>

        {/* Dual Heavy Thrusters */}
        <mesh position={[-0.18, -0.48, 0]}>
          <cylinderGeometry args={[0.07, 0.09, 0.22, 8]} />
          <meshBasicMaterial color="#FF2233" />
        </mesh>
        <mesh position={[0.18, -0.48, 0]}>
          <cylinderGeometry args={[0.07, 0.09, 0.22, 8]} />
          <meshBasicMaterial color="#FF2233" />
        </mesh>
        <mesh position={[0, -0.62, 0]}>
          <sphereGeometry args={[0.12, 8, 8]} />
          <meshBasicMaterial color="#FF2233" transparent opacity={0.95} />
        </mesh>
      </group>

      {/* ⚡ SHORT & THIN 3D MESH CYLINDER RED LASER BOLTS */}
      <group ref={lasersGroupRef}>
        {lasersData.map((_, i) => (
          <mesh
            key={i}
            ref={(el) => (laserMeshesRef.current[i] = el)}
            position={[0, 0, -999]}
          >
            <cylinderGeometry args={[0.018, 0.018, 0.35, 6]} />
            <meshBasicMaterial color="#FF0022" toneMapped={false} />
          </mesh>
        ))}
      </group>

      {/* 💥 Evasive Deflection Sparks */}
      <points ref={sparksGroupRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={MAX_SPARKS}
            array={sparkPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#00E5FF"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
