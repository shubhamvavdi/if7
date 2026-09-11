import { AlertTriangle } from 'lucide-react';
import BrandMark from './BrandMark';

function AgeDisclaimer() {
  return (
    <div id="age-disclaimer" className="rounded-3xl border border-[#1C2A2F] bg-[#101B1E] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4B400]/15 text-[#F4B400]">
          <AlertTriangle size={28} />
        </div>
        <div>
          <div className="mb-4"><BrandMark compact /></div>
          <div className="inline-flex items-center rounded-full bg-[#14D17A]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#14D17A]">
            18+ Information
          </div>
          <p className="mt-4 text-base leading-7 text-[#A7B8B2]">
            This website and its informational content are intended for adults aged 18 years and above where applicable. Users should independently verify eligibility requirements and applicable local laws before accessing third-party services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AgeDisclaimer;
