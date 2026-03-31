import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';
import skills from '../data/skills';
import { useLang } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
