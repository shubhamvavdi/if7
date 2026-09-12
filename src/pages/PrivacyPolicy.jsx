import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import BrandMark from '../components/BrandMark';
import { ShieldCheck } from 'lucide-react';

const sections = [
  {
    title: 'Information Collection',
    text: 'This website may collect basic technical information such as browser type, device information, language preferences, and general usage analytics for the purpose of improving website performance and content quality. Business-specific collection practices should be customized as needed.',
  },
  {
    title: 'Cookies',
    text: 'Cookies may be used to support website functionality, improve user experience, and understand general site performance. Users can review browser settings to manage cookie preferences in accordance with local regulations and browser policies.',
  },
  {
    title: 'Analytics',
    text: 'Analytics tools may be used to understand visitor trends, improve content quality, and evaluate how users interact with the website. Any analytics provider should be reviewed and configured according to the site owner’s privacy requirements.',
  },
  {
    title: 'Third-Party Services',
    text: 'This website may use third-party services or advertising integrations for analytics, measurement, or referral-related functionality. Users should review the specific privacy policies of those providers before engaging with external services.',
  },
  {
    title: 'External Links',
    text: 'External websites and links may have their own privacy practices and policies. This website is not responsible for the content, privacy practices, or actions of third-party sites unless expressly stated by the owner.',
  },
  {
    title: 'Data Protection',
    text: 'Reasonable steps should be taken to protect visitor information and maintain secure website operations. The website owner may implement technical, organizational, and administrative measures appropriate to the website’s tools and business requirements.',
  },
  {
    title: 'Policy Changes',
    text: 'This privacy policy may be updated from time to time to reflect website practices, legal requirements, or business changes. Users should review the policy periodically for the latest information.',
  },
  {
    title: 'Contact Information',
    text: 'For privacy-related questions or concerns, please contact us at contact@ft7games.com or use the Contact Us page. Please avoid sending sensitive personal information unless it is necessary to help us respond.',
  },
];

function PrivacyPolicy() {
  return (
    <>
      <PageMeta title="Privacy Policy" description="Privacy policy information for the FT7 Game informational website." />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8"><BrandMark /></div>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div className="flex items-center gap-4 rounded-3xl border border-[#CBA65C]/30 bg-[#101B1E] p-6 shadow-[0_20px_60px_rgba(203,166,92,0.1)]">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#CBA65C]/15 text-[#CBA65C]">
              <ShieldCheck size={28} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CBA65C]">Your privacy matters</p>
              <p className="mt-2 text-sm leading-6 text-[#C3C7BD]">A clear look at what this informational website may collect and why.</p>
            </div>
          </div>
          <SectionHeading
            eyebrow="Privacy Policy"
            title="Privacy, without the fine-print fog"
            description="This policy explains how the FT7 Game information website may handle basic visitor data, cookies, analytics, and third-party links."
          />
        </div>

        <div className="mt-10 space-y-6">
          {sections.map((section, index) => (
            <section key={section.title} className="rounded-3xl border border-[#E5E5E5] bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CBA65C]/15 text-sm font-bold text-[#8f6d2d]">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="text-2xl font-bold text-[#222222]">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-[#666666]">{section.text}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

export default PrivacyPolicy;
