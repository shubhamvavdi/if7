import { AlertTriangle } from 'lucide-react';

function AgeDisclaimer() {
  return (
    <div id="age-disclaimer" className="rounded-3xl border border-[#E5E5E5] bg-[#F7F7F7] p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F4B400]/15 text-[#F4B400]">
          <AlertTriangle size={28} />
        </div>
        <div>
          <div className="inline-flex items-center rounded-full bg-[#111111] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            18+ Information
          </div>
          <p className="mt-4 text-base leading-7 text-[#666666]">
            This website and its informational content are intended for adults aged 18 years and above where applicable. Users should independently verify eligibility requirements and applicable local laws before accessing third-party services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AgeDisclaimer;
