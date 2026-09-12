import { useState } from 'react';
import { ArrowUpRight, Mail, MessageSquare, Send } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import BrandMark from '../components/BrandMark';
import { SITE_CONFIG, SITE_LINKS } from '../data/siteConfig';

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`FT7 Game enquiry from ${formData.get('name')}`);
    const message = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`,
    );

    setSubmitted(true);
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${message}`;
  };

  return (
    <>
      <PageMeta title="Contact Us" description="Contact the FT7 Game information website with questions, feedback, or corrections." />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8"><BrandMark /></div>
        <section className="relative overflow-hidden rounded-[2rem] border border-[#CBA65C]/30 bg-[#101B1E] p-7 shadow-[0_24px_80px_rgba(203,166,92,0.12)] sm:p-10">
          <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full border border-[#CBA65C]/20" />
          <div className="absolute -right-8 -top-12 h-32 w-32 rounded-full border border-[#CBA65C]/15" />
          <div className="relative max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#CBA65C]">Contact Us</p>
            <h1 className="text-4xl font-bold tracking-tight text-[#F4F0E8] sm:text-5xl">Let&apos;s keep the info accurate.</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#C3C7BD] sm:text-lg">
              Have a question about our guides, found an outdated detail, or want to share feedback? Send us a message and we will review it.
            </p>
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-3xl border border-[#E5E5E5] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CBA65C]">Start here</p>
            <h2 className="mt-3 text-2xl font-bold text-[#222222]">Get in touch</h2>
            <p className="mt-4 leading-8 text-[#666666]">
              For privacy questions, corrections, or general website feedback, email us directly.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#8f6d2d] transition-colors hover:text-[#cba65c]"
            >
              <Mail size={18} />
              {SITE_CONFIG.email}
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={SITE_LINKS.privacy}
              className="mt-8 flex items-start gap-3 border-t border-[#E5E5E5] pt-6 text-sm leading-6 text-[#666666] transition-colors hover:text-[#8f6d2d]"
            >
              <MessageSquare size={18} className="mt-1 shrink-0" />
              Read our Privacy Policy before sending personal information.
            </a>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-[#E5E5E5] bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-sm font-semibold text-[#222222]">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-[#D8D8D8] bg-[#FAFAFA] px-4 py-3 font-normal text-[#222222] outline-none transition focus:border-[#CBA65C]"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-semibold text-[#222222]">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-[#D8D8D8] bg-[#FAFAFA] px-4 py-3 font-normal text-[#222222] outline-none transition focus:border-[#CBA65C]"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-6 block text-sm font-semibold text-[#222222]">
              Message
              <textarea
                required
                name="message"
                rows="6"
                className="mt-2 w-full resize-y rounded-xl border border-[#D8D8D8] bg-[#FAFAFA] px-4 py-3 font-normal text-[#222222] outline-none transition focus:border-[#CBA65C]"
                placeholder="How can we help?"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#14D17A] px-6 py-3 text-sm font-semibold text-[#07110E] transition-colors hover:bg-[#0FAE66]"
            >
              <Send size={17} />
              Send message
            </button>
            {submitted && (
              <p className="mt-4 text-sm text-[#666666]" role="status">
                Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </div>
      </main>
    </>
  );
}

export default ContactUs;
