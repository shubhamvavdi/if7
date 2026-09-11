function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 inline-flex rounded-full border border-[#14D17A]/25 bg-[#14D17A]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#14D17A] shadow-[0_0_20px_rgba(20,209,122,0.12)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[#EAF5F1] sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-[#A7B8B2] sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;
