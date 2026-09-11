import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import BrandMark from '../components/BrandMark';

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
    text: 'Contact information can be added here if the website owner wishes to receive privacy-related questions or concerns. Placeholder contact details should be customized before launch.',
  },
];

function PrivacyPolicy() {
  return (
    <>
      <PageMeta title="Privacy Policy" description="Privacy policy information for the FT7 Game informational website." />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8"><BrandMark /></div>
        <SectionHeading
          eyebrow="Privacy Policy"
          title="Privacy Policy"
          description="This privacy policy is intended to provide general guidance and should be customized for the website owner’s actual collection, analytics, and contact practices."
        />

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-[#E5E5E5] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-[#222222]">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-[#666666]">{section.text}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

export default PrivacyPolicy;
