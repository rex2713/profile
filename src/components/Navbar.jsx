import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import { useLang } from '../contexts/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-dark/90 shadow-lg shadow-dark/50 backdrop-blur-md'
            : 'bg-white/90 shadow-lg shadow-gray-200/50 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-primary">
          R<span className={isDark ? 'text-light' : 'text-gray-900'}>.</span>
        </a>

        {/* Desktop links + toggles */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isDark ? 'text-light/70' : 'text-gray-600'
              }`}
            >
              {label}
            </a>
          ))}

          {/* Divider */}
          <div className={`h-4 w-px ${isDark ? 'bg-light/20' : 'bg-gray-300'}`} />

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isDark ? 'text-light/70' : 'text-gray-600'
            }`}
          >
            {lang === 'zh' ? 'EN' : '中'}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`rounded-lg p-2 transition-colors hover:text-primary ${
              isDark
                ? 'text-light/70 hover:bg-light/10'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`text-2xl md:hidden ${isDark ? 'text-light' : 'text-gray-900'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden border-t backdrop-blur-md md:hidden ${
              isDark
                ? 'border-dark-lighter bg-dark/95'
                : 'border-gray-200 bg-white/95'
            }`}
          >
            <ul className="flex flex-col gap-2 px-6 py-4">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={handleLinkClick}
                    className={`block py-2 transition-colors hover:text-primary ${
                      isDark ? 'text-light/70' : 'text-gray-600'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              {/* Mobile toggles */}
              <li className={`flex items-center gap-4 border-t pt-4 ${
                isDark ? 'border-dark-lighter' : 'border-gray-200'
              }`}>
                <button
                  onClick={toggleLang}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isDark ? 'text-light/70' : 'text-gray-600'
                  }`}
                >
                  {lang === 'zh' ? 'EN' : '中'}
                </button>
                <button
                  onClick={toggleTheme}
                  className={`rounded-lg p-2 transition-colors hover:text-primary ${
                    isDark
                      ? 'text-light/70 hover:bg-light/10'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-label="Toggle theme"
                >
                  {isDark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
