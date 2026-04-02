import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import { FiDownload } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import { useLang } from '../contexts/LanguageContext';

export default function AboutMe() {
  const { isDark } = useTheme();
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Photo */}
          <ScrollReveal variant="fade-left" className="shrink-0">
            <div className="relative">
              <div className={`h-64 w-64 overflow-hidden rounded-2xl lg:h-80 lg:w-80 ${
                isDark ? 'bg-dark-card' : 'bg-gray-100'
              }`}>
                <img
                  src="/photo.jpg"
                  alt="Rex Chen"
                  className="h-full w-full object-cover object-[80%]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML =
                      '<div class="flex h-full w-full items-center justify-center text-6xl font-bold text-primary">R</div>';
                  }}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border-2 border-primary/30" />
            </div>
          </ScrollReveal>

          {/* Text content */}
          <ScrollReveal variant="fade-right" className="max-w-xl text-center lg:text-left">
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-light/80' : 'text-gray-700'
            }`}>
              {t('about.bio1')}
            </p>
            <p className={`mt-4 leading-relaxed ${
              isDark ? 'text-light/60' : 'text-gray-500'
            }`}>
              {t('about.bio2')}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="/陳彥文.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-dark transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                <FiDownload />
                {t('about.downloadResume')}
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-medium transition-all hover:border-primary hover:text-primary ${
                  isDark
                    ? 'border-light/20 text-light'
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                {t('about.contactMe')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
