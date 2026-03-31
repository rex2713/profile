import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function SkillCard({ category, color, items, index }) {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group rounded-2xl bg-gradient-to-br ${color} border p-6 backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-primary/5 ${
        isDark ? 'border-white/5' : 'border-gray-200'
      }`}
    >
      <h3 className={`mb-6 text-xl font-bold ${isDark ? 'text-light' : 'text-gray-900'}`}>
        {category}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {items.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 ${
              isDark ? 'bg-dark/40' : 'bg-white/60'
            }`}
          >
            <Icon className="shrink-0 text-xl text-primary" />
            <span className={`text-sm ${isDark ? 'text-light/80' : 'text-gray-700'}`}>
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
