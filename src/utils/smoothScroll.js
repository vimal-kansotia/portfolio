/**
 * Butter-smooth section navigation using native hardware-accelerated compositor scrolling
 */
export function smoothScrollTo(targetY) {
  if (typeof window === 'undefined') return;
  window.scrollTo({
    top: Math.max(0, Math.round(targetY)),
    behavior: 'smooth'
  });
}

export function scrollToSection(sectionId, offset = 80) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  const cleanId = sectionId.replace(/^#/, '');
  if (cleanId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.getElementById(cleanId);
  if (element) {
    const targetY = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: Math.max(0, Math.round(targetY)), behavior: 'smooth' });
  }
}
