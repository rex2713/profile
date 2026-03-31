import { motion } from 'framer-motion';
import useTypewriter from '../hooks/useTypewriter';
import { FiChevronDown } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import { useLang } from '../contexts/LanguageContext';

const nameLetters = 'REX CHEN'.split('');

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 + 0.3, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const { isDark } = useTheme();
  const { t } = useLang();
  const roles = t('hero.roles');
  const typedText = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Floating geometric decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className={`animate-float-slow absolute left-[10%] top-[20%] h-64 w-64 rounded-full blur-3xl ${
          isDark ? 'bg-primary/5' : 'bg-primary/10'
        }`} />
        <div className={`animate-float-slower absolute right-[15%] bottom-[30%] h-80 w-80 rounded-full blur-3xl ${
          isDark ? 'bg-accent/5' : 'bg-accent/10'
        }`} />
        <div className={`animate-float-slow absolute left-[50%] top-[60%] h-40 w-40 rounded-full blur-2xl ${
          isDark ? 'bg-primary/3' : 'bg-primary/5'
        }`} />
      </div>

      <div className="relative z-10 px-4 text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-4 text-lg text-primary font-mono"
        >
          {t('hero.greeting')}
        </motion.p>

        {/* Name */}
        <h1 className={`mb-6 text-5xl font-black tracking-tight md:text-7xl lg:text-8xl ${
          isDark ? 'text-light' : 'text-gray-900'
        }`}>
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={letter === ' ' ? 'inline-block w-4 md:w-6' : 'inline-block'}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className={`h-8 text-xl font-mono md:text-2xl ${
            isDark ? 'text-light/70' : 'text-gray-600'
          }`}
        >
          <span>{typedText}</span>
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        {/* Brief description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className={`mx-auto mt-8 max-w-lg ${
            isDark ? 'text-light/50' : 'text-gray-500'
          }`}
        >
          {t('hero.description')}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronDown className="text-3xl text-primary/70" />
        </motion.div>
      </motion.a>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
