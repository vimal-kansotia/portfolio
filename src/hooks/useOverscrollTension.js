import { useState, useEffect, useRef } from 'react';

/**
 * useOverscrollTension
 * 
 * Detects pull tension past the page bottom (scrollTop + clientHeight >= scrollHeight).
 * Applies spring-ease physics to decay tension smoothly on scroll release.
 * 
 * @returns {number} tension - Normalized overscroll tension value (0.0 to 1.2+)
 */
export default function useOverscrollTension() {
  const [tension, setTension] = useState(0);
  const pullRef = useRef(0);
  const targetPullRef = useRef(0);
  const velocityRef = useRef(0);
  const touchStartYRef = useRef(0);
  const wheelTimeoutRef = useRef(null);

  useEffect(() => {
    let animId;

    const isAtBottom = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const windowHeight = window.innerHeight;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      return scrollY + windowHeight >= docHeight - 12;
    };

    const handleWheel = (e) => {
      if (!isAtBottom()) {
        if (targetPullRef.current > 0) targetPullRef.current = 0;
        return;
      }

      if (e.deltaY > 0) {
        // Pulling down past bottom of page
        targetPullRef.current = Math.min(1.4, targetPullRef.current + e.deltaY * 0.0018);

        clearTimeout(wheelTimeoutRef.current);
        wheelTimeoutRef.current = setTimeout(() => {
          targetPullRef.current = 0;
        }, 120);
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!isAtBottom() || e.touches.length !== 1) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY; // positive when pulling up/downward scroll
      if (deltaY > 0) {
        targetPullRef.current = Math.min(1.4, deltaY * 0.004);
      }
    };

    const handleTouchEnd = () => {
      targetPullRef.current = 0;
    };

    const handleKeyDown = (e) => {
      if (!isAtBottom()) return;
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        targetPullRef.current = Math.min(1.2, targetPullRef.current + 0.4);
        clearTimeout(wheelTimeoutRef.current);
        wheelTimeoutRef.current = setTimeout(() => {
          targetPullRef.current = 0;
        }, 280);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown, { passive: true });

    // Frame loop with spring physics retraction
    let lastTime = performance.now();
    const updatePhysics = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.04);
      lastTime = now;

      const target = targetPullRef.current;
      const current = pullRef.current;

      // Spring constants: stiffness = 42, damping = 8.8
      const k = 42;
      const c = 8.8;
      const force = (target - current) * k;

      velocityRef.current += (force - c * velocityRef.current) * dt;
      pullRef.current += velocityRef.current * dt;

      if (pullRef.current < 0.0001 && target === 0) {
        pullRef.current = 0;
        velocityRef.current = 0;
      }

      setTension(pullRef.current);
      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(wheelTimeoutRef.current);
      cancelAnimationFrame(animId);
    };
  }, []);

  return tension;
}
