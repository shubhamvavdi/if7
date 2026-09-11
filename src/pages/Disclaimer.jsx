import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import BrandMark from '../components/BrandMark';

const sections = [
  {
    title: 'General Information',
    text: 'This website is intended to provide general information about FT7 Game, FT7 App, FT7 APK, updates, guides, and related topics. The information provided is educational, informational, and should be reviewed in context with the user’s own research and local requirements.',
  },
  {
    title: 'Informational and Referral Purpose',
    text: 'This website may provide informational and referral content and may contain links to third-party websites or services. These links are included for convenience and should be independently reviewed by users. The website is not intended to act as a guarantee or endorsement unless explicitly stated by the website owner.',
  },
  {
    title: 'Third-Party Links',
    text: 'External websites and services may have different terms, conditions, privacy policies, restrictions, or security practices. Users should take the time to understand those standards before sharing personal information or engaging with any third-party service.',
  },
  {
    title: 'Application and APK Information',
    text: 'Any information related to applications or APK files should be treated as general educational guidance. Users should verify application names, versions, device compatibility, permissions, storage requirements, and trusted sources before installing or using any downloadable files or apps.',
  },
  {
    title: 'User Responsibility',
    text: 'Users are responsible for evaluating all information presented on this website and any linked third-party services. Personal judgment, local laws, and individual research should inform all decisions related to apps, downloads, or external platforms.',
  },
  {
    title: '18+ Information',
    text: 'This website and its informational content are intended for adults aged 18 years and above where applicable. Users should independently verify eligibility requirements and applicable local laws before accessing third-party services.',
  },
  {
    title: 'No Official Affiliation',
    text: 'This website does not automatically claim to be the official FT7 Game platform or official affiliated operator unless explicitly confirmed by the website owner. Any official affiliation statements must be clearly stated and can be customized as needed.',
  },
  {
    title: 'Changes to Information',
    text: 'Information on this website may change at any time without notice. Users should check for updated content and review the latest terms, policies, and disclosure information before relying on any material provided here.',
  },
];

function Disclaimer() {
  return (
    <>
      <PageMeta title="Disclaimer" description="Disclaimer and informational notice for FT7 Game website users." />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8"><BrandMark /></div>
        <SectionHeading
          eyebrow="Disclaimer"
          title="Disclaimer"
          description="This website provides general informational and referral content and may contain links to third-party websites or services. The final ownership and affiliation statements must be customized by the website owner."
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

export default Disclaimer;
