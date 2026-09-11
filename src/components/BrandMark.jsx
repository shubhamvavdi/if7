import { Gamepad2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

function BrandMark({ compact = false }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label={SITE_CONFIG.siteName}>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-[#14D17A]/35 bg-[#14D17A]/10 text-[#14D17A] shadow-[0_0_22px_rgba(20,209,122,0.22)]">
        <Gamepad2 size={21} strokeWidth={2.2} />
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#F4B400] shadow-[0_0_10px_rgba(244,180,0,0.65)]" />
      </span>
      {!compact && (
        <span>
          <span className="block text-lg font-black tracking-[0.12em] text-[#EAF5F1]">{SITE_CONFIG.siteName}</span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7E8D88]">Game Information</span>
        </span>
      )}
    </span>
  );
}

export default BrandMark;