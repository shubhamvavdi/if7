import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, ShieldCheck, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  {
    icon: Smartphone,
    title: 'FT7 GAME',
    description: 'General information and platform-related guides.',
    link: '/about',
  },
  {
    icon: Download,
    title: 'FT7 APP',
    description: 'Information related to mobile access and updates.',
    link: '/about',
  },
  {
    icon: ShieldCheck,
    title: 'FT7 APK',
    description: 'General APK information and installation guidance.',
    link: '/disclaimer',
  },
];

function FeatureCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map(({ icon: Icon, title, description, link }, index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: index * 0.07 }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="group rounded-3xl border border-[#1C2A2F] bg-[linear-gradient(180deg,#101B1E_0%,#0D1719_100%)] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-[#14D17A]/40 hover:shadow-[0_18px_40px_rgba(20,209,122,0.12)] sm:p-6"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#14D17A]/20 bg-[#14D17A]/10 text-[#14D17A] shadow-[0_0_18px_rgba(20,209,122,0.12)] transition-transform duration-300 group-hover:scale-105">
            <Icon size={22} />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-[#EAF5F1]">{title}</h3>
          <p className="mt-3 text-base leading-7 text-[#A7B8B2]">{description}</p>
          <Link to={link} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#14D17A] transition-colors hover:text-[#5AF0AE]">
            Read More <ArrowRight size={16} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default FeatureCards;
