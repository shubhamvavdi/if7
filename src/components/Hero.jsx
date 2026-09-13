import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FT7_GAME_URL } from '../data/siteConfig';
import CTAButton from './CTAButton';
import BrandMark from './BrandMark';

function Hero() {
  return (
    <section className="premium-hero relative overflow-hidden bg-[#07110E]">
      <div className="premium-grid absolute inset-0" />
      <div className="premium-hero-glow absolute inset-x-0 top-0 h-80" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#14D17A]/30 bg-[#14D17A]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#14D17A] shadow-[0_0_20px_rgba(20,209,122,0.15)]">
            <Sparkles size={12} /> FT7 GAME INFORMATION & UPDATES
          </span>

          <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#EAF5F1] sm:text-5xl lg:text-[48px]">
            FT7 Game App: Features, Download Guide & Latest Details
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#A7B8B2]">
            Explore the FT7 Game App, its key features, available app details, and a clear guide for getting started.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <CTAButton href={FT7_GAME_URL}>OPEN FT7 GAME</CTAButton>
            <CTAButton href="/news-blog" variant="secondary" className="!border-[#1C2A2F] !bg-[#101B1E] !text-[#EAF5F1] hover:!text-[#14D17A]">READ LATEST UPDATES</CTAButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex items-center justify-center"
        >
          <div className="premium-orbit absolute inset-10 rounded-full border border-[#14D17A]/15" />

          <div className="premium-panel relative mx-auto w-full max-w-md rounded-[32px] border border-[#1C2A2F] bg-[#0B1316] p-3 shadow-[0_30px_80px_rgba(20,209,122,0.12)]">
            <div className="rounded-[28px] border border-[#1C2A2F] bg-[#0E1719] p-4">
              <div className="mb-4 flex items-center justify-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#14D17A]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F4B400]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#EAF5F1]/25" />
              </div>
              <div className="rounded-2xl bg-[#101B1E] p-5 text-[#EAF5F1]">
                <div className="mb-5"><BrandMark compact /></div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#A7B8B2]">
                  <span>FT7 GAME</span>
                  <span>Live</span>
                </div>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#EAF5F1]">FT7 App</h2>
                <div className="mt-6 space-y-3">
                  <div className="premium-stat flex items-center justify-between rounded-xl bg-[#14D17A]/8 px-3 py-3">
                    <span className="text-sm text-[#A7B8B2]">App size</span>
                    <span className="text-sm font-semibold text-[#14D17A]">21.8 MB</span>
                  </div>
                  <div className="premium-stat flex items-center justify-between rounded-xl bg-[#14D17A]/8 px-3 py-3">
                    <span className="text-sm text-[#A7B8B2]">Version</span>
                    <span className="text-sm font-semibold text-[#14D17A]">1.2.1</span>
                  </div>
                  <div className="premium-stat flex items-center justify-between rounded-xl bg-[#14D17A]/8 px-3 py-3">
                    <span className="text-sm text-[#A7B8B2]">Downloads</span>
                    <span className="text-sm font-semibold text-[#14D17A]">100K+</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#1C2A2F] bg-[#0E1719] p-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7E8D88]">Status</p>
                  <p className="mt-1 text-sm font-semibold text-[#EAF5F1]">App overview</p>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-[#14D17A] px-4 py-2 text-sm font-semibold text-[#07110E] hover:bg-[#0FAE66]"
                >
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
