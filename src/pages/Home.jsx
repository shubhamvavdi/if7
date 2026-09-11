import { motion } from 'framer-motion';
import { ArrowRight, Download, ShieldCheck, Smartphone, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import SectionHeading from '../components/SectionHeading';
import ArticleCard from '../components/ArticleCard';
import CTAButton from '../components/CTAButton';
import { articles } from '../data/articles';
import { faqData } from '../data/faqData';
import { FT7_APP_DETAILS, FT7_GAME_URL, FT7_SCREENSHOTS } from '../data/siteConfig';
import PageMeta from '../components/PageMeta';

const apkInfo = [
  'Verify the application name and version',
  'Check device compatibility before installation',
  'Review requested permissions carefully',
  'Use trusted sources and keep Android updated',
  'Never share passwords or OTPs',
  'Ensure sufficient storage is available',
];

const safetyPoints = [
  'Protect account information.',
  'Never share passwords or OTPs.',
  'Verify external websites before proceeding.',
  'Review terms and privacy information.',
  'Check applicable restrictions where relevant.',
];

const faqList = faqData;

const featureList = [
  'Simple interface designed for easy navigation',
  'A variety of casual and skill-based game options',
  'Rewards, bonuses, and promotional offers may be available',
  'Support information for users who need assistance',
];

const downloadSteps = [
  'Open the FT7 Game destination linked on this website.',
  'Review the available app and platform information.',
  'Follow the provided access or installation instructions.',
  'Review permissions, terms, and local eligibility requirements first.',
];

function Home() {
  return (
    <>
      <PageMeta
        title="FT7 Game Information & Updates"
        description="General FT7 Game information, guides, updates, and helpful resources related to FT7 App and FT7 APK."
      />
      <Hero />

      <main className="bg-[#091112] text-[#EAF5F1]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quick Information"
            title="Everything important about FT7 Game"
            description="Find the app overview, feature summary, key details, and access guidance in one focused place."
            align="center"
          />
          <div className="mt-10">
            <FeatureCards />
          </div>
        </section>

        <section className="bg-[#0D1719] py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <SectionHeading
                eyebrow="About FT7 Game"
                title="A quick look at FT7 Game"
                description="FT7 Game is presented as an online gaming platform for casual players and gaming enthusiasts. This website summarizes the publicly available app information and access guidance without claiming official ownership."
              />
              <div className="mt-6 flex gap-4">
                <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-[#14D17A] px-5 py-3 text-sm font-semibold text-[#07110E] hover:bg-[#0FAE66]">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-[#1C2A2F] bg-[#101B1E] p-8 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14D17A]/10 text-[#14D17A]">
                  <Sparkles size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#14D17A]">Overview</p>
                  <h3 className="text-2xl font-bold text-[#EAF5F1]">General guidance</h3>
                </div>
              </div>
              <ul className="mt-6 space-y-4 text-base text-[#A7B8B2]">
                {['Neutral educational content', 'Clear information and updates', 'Responsible referral guidance', 'Readable and accessibility friendly design'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 text-[#14D17A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#0B1316] py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionHeading
                eyebrow="App Details"
                title="FT7 Game at a glance"
                description="Key details reported on the FT7 Game reference site, collected in a compact format for quick review."
              />
              <div className="mt-8 grid grid-cols-2 gap-3">
                {FT7_APP_DETAILS.map((detail) => (
                  <div key={detail.label} className="rounded-2xl border border-[#1C2A2F] bg-[#101B1E] p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#7E8D88]">{detail.label}</p>
                    <p className="mt-2 text-lg font-bold text-[#EAF5F1]">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              {FT7_SCREENSHOTS.map((image, index) => (
                <div key={image} className="overflow-hidden rounded-3xl border border-[#1C2A2F] bg-[#101B1E] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                  <img src={image} alt={`FT7 Game app screen ${index + 1}`} className="h-full w-full rounded-2xl object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FT7 App"
            title="What the FT7 Game App offers"
            description="The reference material highlights a straightforward interface, multiple game options, rewards, transaction information, and user support."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#1C2A2F] bg-[#101B1E] p-8 shadow-soft">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14D17A]/10 text-[#14D17A]">
                <Smartphone size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#EAF5F1]">Key features</h3>
              <p className="mt-3 text-base leading-7 text-[#A7B8B2]">
                FT7 is described as offering an easy-to-use interface, a variety of game choices, rewards, and support information.
              </p>
            </div>
            <div className="rounded-3xl border border-[#1C2A2F] bg-[#101B1E] p-8 shadow-soft">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14D17A]/10 text-[#14D17A]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#EAF5F1]">Access responsibly</h3>
              <p className="mt-3 text-base leading-7 text-[#A7B8B2]">
                Review the destination, permissions, terms, and applicable local requirements before using any third-party gaming service.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {featureList.map((item) => (
              <div key={item} className="rounded-2xl border border-[#1C2A2F] bg-[#101B1E] p-5 text-[#EAF5F1]">
                <CheckCircle2 size={18} className="text-[#14D17A]" />
                <p className="mt-4 text-base leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0D1719] py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionHeading eyebrow="How To Start" title="FT7 Game access guide" description="A simple overview of the access flow described by the reference site." />
              <div className="mt-8 space-y-3">
                {downloadSteps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-[#1C2A2F] bg-[#101B1E] p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14D17A] text-sm font-black text-[#07110E]">{index + 1}</span>
                    <p className="pt-1 text-base leading-7 text-[#A7B8B2]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#14D17A]/25 bg-[linear-gradient(135deg,#101B1E_0%,#0B1316_100%)] p-8 shadow-[0_20px_50px_rgba(20,209,122,0.1)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14D17A]/10 text-[#14D17A]"><Download size={23} /></div>
              <h3 className="mt-6 text-2xl font-bold text-[#EAF5F1]">Ready to learn more?</h3>
              <p className="mt-3 text-base leading-7 text-[#A7B8B2]">Visit the FT7 destination for the latest access details. Always verify the destination and information before proceeding.</p>
              <div className="mt-6"><CTAButton href={FT7_GAME_URL}>OPEN FT7 GAME</CTAButton></div>
            </div>
          </div>
        </section>

        <section className="bg-[#0B1316] py-16 text-[#EAF5F1]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FT7 APK"
              title="FT7 APK Information"
              description="Understand the core considerations that matter when reviewing APK information, including version checks, permissions, storage, and trusted sources."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {apkInfo.map((item) => (
                <div key={item} className="rounded-2xl border border-[#1C2A2F] bg-[#101B1E] p-5 text-base text-[#EAF5F1]">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#14D17A]/10 text-[#14D17A]">
                    <CheckCircle2 size={18} />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton href="/about" variant="secondary" className="!border-[#1C2A2F] !bg-[#101B1E] !text-[#EAF5F1] hover:!text-[#14D17A]">
                LEARN MORE
              </CTAButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest Insights"
            title="Latest FT7 Game News & Blog"
            description="Follow the latest information, update notes, and practical reading guides from the FT7 Game knowledge hub."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {articles.slice(0, 6).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <section className="bg-[#0D1719] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Safety"
              title="Stay Safe Online"
              description="Responsible online habits are important. Use clear, practical steps to protect your information and verify services before accessing them."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {safetyPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-[#1C2A2F] bg-[#101B1E] p-5 shadow-soft">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#14D17A]/10 text-[#14D17A]">
                    <ShieldCheck size={18} />
                  </div>
                  <p className="text-base leading-7 text-[#EAF5F1]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#1C2A2F] bg-[#101B1E] p-6 sm:p-8 lg:p-10 shadow-soft">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <SectionHeading
                  eyebrow="Responsible Use"
                  title="18+ Information"
                  description="This website and its informational content are intended for adults aged 18 years and above where applicable. Users should independently verify eligibility requirements and applicable local laws before accessing third-party services."
                />
              </div>
              <div className="flex justify-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#14D17A] bg-[#14D17A]/10 text-xl font-black text-[#14D17A]">
                  18+
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0D1719] py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Helpful answers to the most common questions about FT7 Game informational content."
              align="center"
            />

            <div className="mt-10 space-y-4">
              {faqList.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className="rounded-2xl border border-[#1C2A2F] bg-[#101B1E]"
                >
                  <details className="group p-6" open={index === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-[#EAF5F1]">
                      {item.question}
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1316] text-[#14D17A] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 pr-10 text-base leading-7 text-[#A7B8B2]">{item.answer}</p>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#07110E] py-24 text-[#EAF5F1]">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14D17A]">Explore More</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore FT7 Game Information and Updates
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#A7B8B2]">
              Learn more about FT7 Game, FT7 App, updates, guides, and related information.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton href={FT7_GAME_URL} className="!px-7 !py-3.5 !bg-[#14D17A] !text-[#07110E] hover:!bg-[#0FAE66]">VISIT FT7 GAME</CTAButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
