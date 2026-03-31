import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function ProjectCard({ project, tags, index }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group overflow-hidden rounded-2xl border transition-shadow hover:shadow-xl hover:shadow-primary/10 ${
        isDark
          ? 'border-white/5 bg-dark-card'
          : 'border-gray-200 bg-white shadow-sm'
      }`}
    >
      <div className="p-6">
        <h3 className={`text-lg font-bold ${isDark ? 'text-light' : 'text-gray-900'}`}>
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-primary">{project.subtitle}</p>
        <p className={`mt-3 text-sm leading-relaxed ${
          isDark ? 'text-light/60' : 'text-gray-500'
        }`}>
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <div key={h} className={`flex items-center gap-2 text-xs ${
              isDark ? 'text-light/50' : 'text-gray-400'
            }`}>
              <span className="h-1 w-1 rounded-full bg-accent" />
              {h}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
