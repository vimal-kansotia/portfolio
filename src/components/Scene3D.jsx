import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import StarField from './StarField';
import ShootingStars from './ShootingStars';
import SpaceTravellers from './SpaceTravellers';

const THEME_COLOR_MAP = {
  gold: '#F59E0B',
  purple: '#A855F7',
  cyan: '#06B6D4',
  teal: '#10B981',
  blue: '#3B82F6',
  indigo: '#6366F1',
  lime: '#84CC16',
  olive: '#415B06',
  orange: '#F97316',
  pink: '#EC4899',
  red: '#EF4444',
};

function ScrollCamera({ scrollY, colorHex = '#415B06' }) {
  const { camera } = useThree();
  const light1Ref = useRef();
  const light2Ref = useRef();

  useFrame(() => {
    const targetY = -scrollY * 0.005;
    camera.position.y = targetY;

    // Follow camera Y so 3D cosmic lighting ambience stays active at bottom of page
    if (light1Ref.current) light1Ref.current.position.y = targetY + 5;
    if (light2Ref.current) light2Ref.current.position.y = targetY - 5;
  });

  return (
    <>
      <pointLight ref={light1Ref} position={[5, 5, 5]} intensity={2.5} color={colorHex} />
      <pointLight ref={light2Ref} position={[-5, -5, 5]} intensity={1.8} color={colorHex} />
    </>
  );
}

export default function Scene3D({ scrollY, colorTheme = 'olive' }) {
  const colorHex = THEME_COLOR_MAP[colorTheme] || '#415B06';
  const containerRef = useRef(null);

  return (
    <div className="canvas-container" ref={containerRef}>
      <Canvas
        events={null}
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance', stencil: false, depth: true }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={1.8} />
        <ScrollCamera scrollY={scrollY} colorHex={colorHex} />
        <StarField count={2500} />
        <ShootingStars />
        <SpaceTravellers />
      </Canvas>
    </div>
  );
}
