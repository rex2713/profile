import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function SectionHeading({ title, subtitle, className = '' }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 text-center ${className}`}
    >
      <h2 className={`text-3xl font-bold md:text-4xl lg:text-5xl ${
        isDark ? 'text-light' : 'text-gray-900'
      }`}>
        {title}
        <span className="text-primary">.</span>
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${isDark ? 'text-light/60' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
    </motion.div>
  );
}
