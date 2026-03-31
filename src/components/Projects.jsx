import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';
import { useLang } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLang();
  const translatedItems = t('projects.items');

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />
        <div className="grid gap-8 md:grid-cols-2">
          {translatedItems.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              tags={projects[i]?.tags || []}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
