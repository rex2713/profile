import { useTheme } from '../contexts/ThemeContext';
import { useLang } from '../contexts/LanguageContext';

export default function Footer() {
  const { isDark } = useTheme();
  const { t } = useLang();

  return (
    <footer className={`border-t py-8 ${
      isDark ? 'border-white/5 bg-dark' : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className={`text-sm ${isDark ? 'text-light/40' : 'text-gray-400'}`}>
          &copy; {new Date().getFullYear()} Rex Chen. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
