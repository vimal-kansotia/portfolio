import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const FOOTER_ICON_MAP = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  'external-link': ExternalLink,
};

export default function Footer({ footer, resumeUrl }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4 className="footer-brand-shimmer">{footer.name || 'Vimal Kansotia'}</h4>
            <div className="brand-sub">Data - Engineer - Scientist</div>
            <small className="footer-copyright-sub">© {year} Vimal Kansotia. All rights reserved.</small>
          </div>

          <div className="footer-links-col">
            <h4 className="github-linkout-style">Quick Links</h4>
            <ul className="footer-list">
              {footer.quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('#') ? undefined : '_blank'}
                    rel={link.href.startsWith('#') ? undefined : 'noreferrer'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="github-linkout-style">Contact</h4>
            <ul className="contact-list">
              {footer.socialLinks.map((link) => {
                const IconComp = FOOTER_ICON_MAP[link.iconKey] || ExternalLink;
                return (
                  <li key={link.id}>
                    <a href={link.href} target="_blank" rel="noreferrer noopener">
                      <IconComp className="contact-icon-inline" /> {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
