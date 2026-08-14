import { useState, useEffect, useRef } from 'react';
import { FileText, Home, Mail, Menu, User, Code2, X, Sun, Moon, Sparkles, Award, Briefcase, ChevronDown } from 'lucide-react';

const COLOR_PALETTES = [
  { id: 'gold', name: 'Gold / Amber', color: '#F59E0B' },
  { id: 'purple', name: 'Royal Purple', color: '#A855F7' },
  { id: 'cyan', name: 'Electric Cyan', color: '#06B6D4' },
  { id: 'teal', name: 'Neon Jade Teal', color: '#10B981' },
  { id: 'blue', name: 'Sapphire Blue', color: '#3B82F6' },
  { id: 'indigo', name: 'Quantum Indigo', color: '#6366F1' },
  { id: 'lime', name: 'Hyper Lime', color: '#84CC16' },
  { id: 'olive', name: 'Emerald / Olive', color: '#82A626' },
  { id: 'orange', name: 'Vibrant Orange', color: '#F97316' },
  { id: 'pink', name: 'Rose Pink', color: '#EC4899' },
  { id: 'red', name: 'Crimson Red', color: '#EF4444' },
];

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Sparkles },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'leadership', label: 'Leadership', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navbar({
  activeSection,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  resumeUrl,
  theme,
  onToggleTheme,
  colorTheme = 'olive',
  onSelectColorTheme = () => {},
}) {
  const [colorDropdownOpen, setColorDropdownOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close palette dropdown on click outside or ESC key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setColorDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setColorDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          <div className="navbar-pill" role="menubar" aria-label="Primary">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-pill-link${activeSection === id ? ' active' : ''}`}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="nav-pill-link nav-pill-action">
              Resume
            </a>
          </div>

          <div className="navbar-actions">
            <div className="theme-toggle-group" ref={popoverRef}>
              {/* Day/Night Theme Toggle */}
              <button
                type="button"
                className="theme-toggle"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={theme === 'dark'}
                onClick={onToggleTheme}
                title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              >
                {theme === 'dark' ? <Sun style={{ width: 20, height: 20 }} /> : <Moon style={{ width: 20, height: 20 }} />}
              </button>

              {/* Chevron Dropdown Arrow next to Day/Night Orb */}
              <button
                type="button"
                className={`theme-dropdown-btn ${colorDropdownOpen ? 'active' : ''}`}
                aria-label="Color theme options"
                title="Select accent color theme"
                onClick={() => setColorDropdownOpen((o) => !o)}
              >
                <ChevronDown style={{ width: 15, height: 15, transition: 'transform 0.3s ease', transform: colorDropdownOpen ? 'rotate(180deg)' : 'none' }} />
              </button>

              {/* Color Swatches Pop-over Menu (2-Level Pure Colors) */}
              {colorDropdownOpen && (
                <div className="color-palette-popover glass">
                  <div className="color-palette-swatches-2level">
                    {COLOR_PALETTES.map((palette) => (
                      <button
                        key={palette.id}
                        type="button"
                        className={`color-swatch-btn ${colorTheme === palette.id ? 'selected' : ''}`}
                        style={{ backgroundColor: palette.color }}
                        title={palette.name}
                        onClick={() => {
                          onSelectColorTheme(palette.id);
                          setColorDropdownOpen(false);
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Get in touch CTA button */}
            <a
              href="#contact"
              className="nav-get-in-touch-btn"
              title="Get in touch"
            >
              <User style={{ width: 18, height: 18 }} />
              <span>Get in touch</span>
            </a>

            {/* Hamburger */}
            <button
              type="button"
              className="hamburger"
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
              onClick={onToggleMenu}
            >
              <Menu style={{ width: 24, height: 24 }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={onCloseMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-header">
          <div className="navbar-logo">
            <span className="bracket">&lt;</span>MENU<span className="bracket">/&gt;</span>
          </div>
          <button type="button" className="close-btn" aria-label="Close menu" onClick={onCloseMenu}>
            <X style={{ width: 24, height: 24 }} />
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navItems.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={onCloseMenu}
              className={`mobile-nav-link${activeSection === id ? ' active' : ''}`}
            >
              <Icon />
              <span>{label}</span>
            </a>
          ))}
          <a href={resumeUrl} target="_blank" rel="noreferrer" onClick={onCloseMenu} className="mobile-nav-link">
            <FileText />
            <span>Resume</span>
          </a>
        </nav>

        <div className="mobile-menu-footer">
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
            © {new Date().getFullYear()} Vimal Santosh Kansotia
          </p>
        </div>
      </div>
    </>
  );
}