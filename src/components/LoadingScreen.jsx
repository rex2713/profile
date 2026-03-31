import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
};

const containerVariants = {
  visible: { opacity: 1, scale: 1 },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export default function LoadingScreen({ isLoading }) {
  const { isDark } = useTheme();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          variants={containerVariants}
          initial="visible"
          exit="exit"
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            isDark ? 'bg-dark' : 'bg-white'
          }`}
        >
          <motion.svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.circle
              cx="60"
              cy="60"
              r="55"
              stroke="#00D646"
              strokeWidth="2"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fill="#00D646"
              fontSize="48"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              R
            </motion.text>
          </motion.svg>

          <motion.div className="absolute bottom-20 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-2 w-2 rounded-full bg-primary"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
