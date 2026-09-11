import { Link } from 'react-router-dom';
import { SITE_CONFIG, SITE_LINKS } from '../data/siteConfig';
import BrandMark from './BrandMark';

const quickLinks = [
  { label: 'Home', to: SITE_LINKS.home },
  { label: 'About Us', to: SITE_LINKS.about },
  { label: 'News & Blog', to: SITE_LINKS.news },
  { label: 'Disclaimer', to: SITE_LINKS.disclaimer },
];

const infoLinks = [
  { label: 'Privacy Policy', to: SITE_LINKS.privacy },
  { label: 'Terms & Conditions', to: SITE_LINKS.terms },
  { label: '18+ Information', to: '/#age-disclaimer' },
];

const importantLinks = [
  { label: 'Informational Website', to: '/about' },
  { label: 'Third-Party Links', to: '/disclaimer' },
  { label: 'Responsible Use', to: '/disclaimer' },
];

function Footer() {
  return (
    <footer className="border-t border-[#1C2A2F] bg-[#070B0D] text-[#EAF5F1]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#A7B8B2]">
              General informational and referral content about FT7 Game, FT7 App, FT7 APK, and related updates.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#A7B8B2]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition-colors hover:text-[#14D17A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Information</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#A7B8B2]">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  {link.to.startsWith('/') && !link.to.startsWith('/#') ? (
                    <Link to={link.to} className="transition-colors hover:text-[#14D17A]">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.to} className="transition-colors hover:text-[#14D17A]">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Important</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#A7B8B2]">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition-colors hover:text-[#14D17A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1C2A2F] pt-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-[#7E8D88]">© 2026 FT7 Game Information Website. All Rights Reserved.</p>
            <p className="text-sm text-[#7E8D88]">Informational and referral content. Verify third-party services independently.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
