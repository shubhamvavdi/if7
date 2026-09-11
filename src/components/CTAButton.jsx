import { Link } from 'react-router-dom';

function CTAButton({ href, children, variant = 'primary', className = '' }) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14D17A] focus-visible:ring-offset-2';

  const variantClasses =
    variant === 'secondary'
      ? 'border border-[#1C2A2F] bg-[#101B1E] text-[#EAF5F1] hover:border-[#14D17A] hover:text-[#14D17A]'
      : 'bg-[#14D17A] text-[#07110E] hover:bg-[#0FAE66]';

  const resolvedClassName = `${baseClasses} ${variantClasses} ${className}`;

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={resolvedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={resolvedClassName}>
      {children}
    </Link>
  );
}

export default CTAButton;
