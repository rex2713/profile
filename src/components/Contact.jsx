import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaLinkedin, FaLine } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useLang } from '../contexts/LanguageContext';

const contactItems = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'rex2713@gmail.com',
    href: 'mailto:rex2713@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '0937-675-528',
    href: 'tel:0937675528',
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rex-chen-yan-wen/',
  },
  {
    icon: FaLine,
    label: 'Line',
    href: 'https://line.me/ti/p/rex2713',
  },
];

export default function Contact() {
  const { isDark } = useTheme();
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <ScrollReveal variant="fade-up">
          <div className={`rounded-2xl border p-8 ${
            isDark
              ? 'border-white/5 bg-dark-card'
              : 'border-gray-200 bg-white shadow-sm'
          }`}>
            {/* Contact info */}
            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`flex items-center gap-4 rounded-lg p-3 transition-colors ${
                    isDark ? 'hover:bg-dark-lighter' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="text-lg text-primary" />
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? 'text-light/40' : 'text-gray-400'}`}>
                      {label}
                    </p>
                    <p className={isDark ? 'text-light/80' : 'text-gray-700'}>
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className={`my-6 h-px ${isDark ? 'bg-white/5' : 'bg-gray-200'}`} />

            {/* Social links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-colors hover:bg-primary/20 hover:text-primary ${
                    isDark
                      ? 'bg-dark-lighter text-light/60'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
