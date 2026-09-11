import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';

const sections = [
  {
    title: 'Acceptance of Terms',
    text: 'By using this website, users agree to the terms and conditions set out herein. These terms may be updated over time and should be reviewed periodically for changes or clarifications.',
  },
  {
    title: 'Website Information',
    text: 'This website provides general information and may include updates, guides, and referral links related to FT7 Game, FT7 App, FT7 APK, and related topics. The content is informational and educational in nature and should not be treated as official or legal advice.',
  },
  {
    title: 'Third-Party Links',
    text: 'The website may contain links to external websites or services that are not controlled by the site owner. Users should review those third-party policies, terms, and practices before using them.',
  },
  {
    title: 'User Responsibilities',
    text: 'Users are responsible for their own decisions when using this website or acting on information found here. This includes verifying source quality, reviewing restrictions, and exercising reasonable judgment before proceeding with third-party services.',
  },
  {
    title: 'Content Accuracy',
    text: 'The website makes reasonable efforts to maintain accurate and useful information, but content may change without notice. The site does not guarantee completeness, correctness, or timeliness for every informational item included.',
  },
  {
    title: 'Intellectual Property',
    text: 'All content, design elements, text, graphics, and related materials used on this website should be treated as proprietary to the site owner or as content used under applicable permissions. Users should not reproduce or repurpose materials without proper authorization.',
  },
  {
    title: 'Changes to Terms',
    text: 'The terms and conditions may change at any time. Continued use of the website after updates constitutes acceptance of the revised language and terms.',
  },
  {
    title: 'Governing Law Placeholder',
    text: 'These terms are provided as a general template and should be reviewed by the website owner or legal advisor for compliance with applicable local laws and jurisdiction-specific requirements.',
  },
];

function TermsConditions() {
  return (
    <>
      <PageMeta title="Terms & Conditions" description="Terms and conditions for visitors to the FT7 Game informational website." />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Terms & Conditions"
          title="Terms & Conditions"
          description="This website is provided for general informational and referral purposes. Please review this page and the site’s other legal documents for full context and any jurisdiction-specific requirements."
        />

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-[#E5E5E5] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#222222]">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-[#666666]">{section.text}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

export default TermsConditions;
