import { SITE_CONFIG } from '../data/siteConfig';

function BrandMark({ compact = false }) {
  return (
    <span className="inline-flex items-center" aria-label={SITE_CONFIG.siteName}>
      <img
        src="/ft7-logo.svg"
        alt="FT7 GAME"
        className={compact ? 'h-14 w-14 rounded-xl object-cover' : 'h-14 w-14 rounded-xl object-cover sm:h-16 sm:w-16'}
      />
      {!compact && <span className="sr-only">{SITE_CONFIG.siteName} Game Information</span>}
    </span>
  );
}

export default BrandMark;