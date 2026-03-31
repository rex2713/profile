import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function TimelineItem({ experience, index, tech }) {
  const { isDark } = useTheme();
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex w-full items-start gap-8 ${
      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
    }`}>
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="ml-12 flex-1 lg:ml-0 lg:w-[calc(50%-2rem)]"
      >
        <div className={`rounded-xl border p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5 ${
          isDark
            ? 'border-white/5 bg-dark-card'
            : 'border-gray-200 bg-white shadow-sm'
        }`}>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="text-sm font-mono text-primary">{experience.period}</span>
          </div>
          <h3 className={`text-lg font-bold ${isDark ? 'text-light' : 'text-gray-900'}`}>
            {experience.company}
          </h3>
          <p className={`mb-4 text-sm ${isDark ? 'text-light/60' : 'text-gray-500'}`}>
            {experience.role}
          </p>

          <ul className="space-y-2">
            {experience.highlights.map((item, i) => (
              <li key={i} className={`flex items-start gap-2 text-sm ${
                isDark ? 'text-light/70' : 'text-gray-600'
              }`}>
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                {item}
              </li>
            ))}
          </ul>

          {tech && tech.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
        className={`absolute left-4 top-6 z-10 h-4 w-4 rounded-full border-2 border-primary lg:static lg:mt-6 lg:shrink-0 ${
          isDark ? 'bg-dark' : 'bg-white'
        }`}
      />

      {/* Spacer for the other side (desktop only) */}
      <div className="hidden flex-1 lg:block" />
    </div>
  );
}
