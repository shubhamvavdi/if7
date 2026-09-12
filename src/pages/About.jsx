import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import BrandMark from '../components/BrandMark';
import CTAButton from '../components/CTAButton';
import { Download } from 'lucide-react';
import { FT7_GAME_URL } from '../data/siteConfig';

const contentBlocks = [
  {
    title: 'Who We Are',
    text: 'This website is designed to provide neutral, readable, and helpful information about FT7 Game, FT7 App, FT7 APK, and related updates. Our purpose is to support discovery and research with clear, accessible content that respects the need for transparency and user responsibility.',
  },
  {
    title: 'What Information We Provide',
    text: 'We aim to provide general educational information about FT7 Game, app access and update considerations, APK-related research topics, and practical reading guidance. The focus stays on clarity, trust, and helpful context rather than unsupported claims.',
  },
  {
    title: 'Our Purpose',
    text: 'The site exists to help users learn more about FT7 Game and related topics through informational content, guides, news updates, and referral links where appropriate. The editorial intent is informative and educational, not official or definitive.',
  },
  {
    title: 'Information and Updates',
    text: 'We publish general updates and informational articles designed to help users understand platform-related information, compatibility checks, permissions, security basics, and other topics that may matter to readers exploring FT7 Game resources.',
  },
  {
    title: 'Third-Party Links',
    text: 'This website may include links to third-party websites, services, or external references. These links are provided for convenience and informational value, and users should independently verify the destination before taking any action.',
  },
  {
    title: 'Responsible Use',
    text: 'Readers are encouraged to make their own informed decisions, use trusted sources, and review applicable local laws, restrictions, and policy information. The website does not claim ownership, partnership, or official representation unless explicitly stated by the website owner.',
  },
];

function About() {
  return (
    <>
      <PageMeta title="About FT7 Game Information Website" description="Learn about the purpose, editorial approach, and responsible information focus behind the FT7 Game information website." />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8"><BrandMark /></div>
        <SectionHeading
          eyebrow="About Us"
          title="About FT7 Game Information Website"
          description="This website provides general information, updates, and referral-oriented content related to FT7 Game, FT7 App, and FT7 APK. It is intended to be helpful, readable, and responsible without overstating official affiliation or ownership."
        />
        <div className="mt-7">
          <CTAButton href={FT7_GAME_URL}>
            <Download size={17} />
            DOWNLOAD FT7 GAME
          </CTAButton>
        </div>

        <div className="mt-10 space-y-6">
          {contentBlocks.map((block, index) => (
            <section
              key={block.title}
              className="rounded-3xl border border-[#1C2A2F] bg-[linear-gradient(180deg,#101B1E_0%,#0D1719_100%)] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-0.5 sm:p-8"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <h2 className="text-2xl font-bold text-[#EAF5F1]">{block.title}</h2>
              <p className="mt-4 text-base leading-8 text-[#A7B8B2]">{block.text}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

export default About;
