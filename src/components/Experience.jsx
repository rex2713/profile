import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import TimelineItem from './TimelineItem';
import experiences from '../data/experiences';
import { useLang } from '../contexts/LanguageContext';

export default function Experience() {
  const { t } = useLang();
  const translatedItems = t('experience.items');

  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-[1.35rem] top-0 h-full w-0.5 origin-top bg-gradient-to-b from-primary via-primary/50 to-transparent lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="space-y-12">
            {translatedItems.map((exp, i) => (
              <TimelineItem
                key={exp.company}
                experience={exp}
                index={i}
                tech={experiences[i]?.tech}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
