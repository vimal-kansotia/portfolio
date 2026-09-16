/**
 * Cinematic Smooth Scroll Engine
 * 
 * Provides buttery-smooth, customizable easing and pacing for in-page section navigation.
 * Eliminates abrupt, jarring browser default jumps and gives a luxurious, gentle glide
 * whether traveling top-to-bottom or bottom-to-top.
 */

let currentScrollAnimationId = null;
let currentCancelListeners = null;

/**
 * Deceleration-focused cubic ease-in-out curve
 */
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Smoothly scroll to a specific vertical position with custom duration & easing
 */
export function smoothScrollTo(targetY, forcedDuration = null) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // Cancel any currently active scroll animation
  if (currentScrollAnimationId) {
    cancelAnimationFrame(currentScrollAnimationId);
    currentScrollAnimationId = null;
  }
  if (currentCancelListeners) {
    currentCancelListeners();
    currentCancelListeners = null;
  }

  const startY = window.pageYOffset || document.documentElement.scrollTop || 0;
  const clampedTargetY = Math.max(0, Math.round(targetY));
  const distance = clampedTargetY - startY;

  // Already at the destination
  if (Math.abs(distance) < 2) return;

  // Adaptive luxury duration: gives a relaxed, smooth journey (850ms to 1350ms)
  const absDist = Math.abs(distance);
  const duration = forcedDuration ?? Math.min(1350, Math.max(850, Math.round(800 + Math.sqrt(absDist) * 9)));

  let startTime = null;

  // Temporarily disable native CSS smooth scroll during requestAnimationFrame
  // so browser doesn't fight our custom frame-by-frame interpolation
  const originalScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';

  const stopAnimation = () => {
    if (currentScrollAnimationId) {
      cancelAnimationFrame(currentScrollAnimationId);
      currentScrollAnimationId = null;
    }
    if (currentCancelListeners) {
      currentCancelListeners();
      currentCancelListeners = null;
    }
  };

  const cleanupListeners = () => {
    window.removeEventListener('wheel', stopAnimation, { passive: true });
    window.removeEventListener('touchstart', stopAnimation, { passive: true });
    document.documentElement.style.scrollBehavior = originalScrollBehavior;
  };

  currentCancelListeners = cleanupListeners;
  window.addEventListener('wheel', stopAnimation, { passive: true });
  window.addEventListener('touchstart', stopAnimation, { passive: true });

  const step = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    const nextY = Math.round(startY + distance * easeProgress);
    window.scrollTo(0, nextY);

    if (progress < 1) {
      currentScrollAnimationId = requestAnimationFrame(step);
    } else {
      currentScrollAnimationId = null;
      if (currentCancelListeners) {
        currentCancelListeners();
        currentCancelListeners = null;
      }
    }
  };

  currentScrollAnimationId = requestAnimationFrame(step);
}

/**
 * Scroll to a named section by its ID with an offset for the floating navbar
 */
export function scrollToSection(sectionId, offset = 80) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  const cleanId = sectionId.replace(/^#/, '');

  if (cleanId === 'home') {
    smoothScrollTo(0);
    try {
      history.replaceState(null, '', '#home');
    } catch (e) {}
    return;
  }

  const element = document.getElementById(cleanId);
  if (element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    const targetY = Math.max(0, Math.round(rect.top + scrollTop - offset));
    smoothScrollTo(targetY);
    try {
      history.replaceState(null, '', `#${cleanId}`);
    } catch (e) {}
  }
}
