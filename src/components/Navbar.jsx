import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FT7_GAME_URL, SITE_LINKS } from '../data/siteConfig';
import BrandMark from './BrandMark';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { label: 'Home', to: SITE_LINKS.home },
  { label: 'About Us', to: SITE_LINKS.about },
  { label: 'News & Blog', to: SITE_LINKS.news },
  { label: 'Disclaimer', to: SITE_LINKS.disclaimer },
  { label: 'Contact Us', to: SITE_LINKS.contact },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[#1C2A2F] bg-[#070B0D]/95 shadow-[0_10px_30px_rgba(20,209,122,0.08)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="FT7 Game home">
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-[#14D17A]' : 'text-[#EAF5F1]/75 hover:text-[#EAF5F1]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={FT7_GAME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#14D17A] px-5 py-2.5 text-sm font-semibold text-[#07110E] transition-colors hover:bg-[#0FAE66]"
          >
            <Download size={16} />
            DOWNLOAD APP
          </a>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#1C2A2F] bg-[#101B1E] text-[#EAF5F1] transition hover:border-[#14D17A] hover:text-[#14D17A] lg:inline-flex"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[#14D17A]/30 bg-[#101B1E] p-2 text-[#EAF5F1] lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[#1C2A2F] bg-[#070B0D] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 text-base font-medium ${
                      isActive ? 'bg-[#14D17A]/10 text-[#14D17A]' : 'text-[#EAF5F1]/80 hover:bg-white/5 hover:text-[#EAF5F1]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={FT7_GAME_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#14D17A] px-5 py-3 text-sm font-semibold text-[#07110E]"
              >
                <Download size={17} />
                DOWNLOAD APP
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1C2A2F] bg-[#101B1E] px-5 py-3 text-sm font-semibold text-[#EAF5F1]"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
