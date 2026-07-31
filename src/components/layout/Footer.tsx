import { Link } from '../../lib/router';
import { FOOTER, ORG } from '../../lib/content';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__wordmark">{ORG.name}</p>
          <p className="site-footer__tagline">{ORG.tagline}</p>
        </div>

        <FooterColumn title="About" links={FOOTER.about} />
        <FooterColumn title="Our Work" links={FOOTER.ourWork} />
        <FooterColumn title="Connect" links={FOOTER.connect} />
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {year} {ORG.name}.</p>
        <ul>
          {FOOTER.legal.map((item) => (
            <li key={item.href}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="site-footer__col">
      <h2>{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
