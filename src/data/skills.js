import {
  FaReact, FaHtml5, FaNodeJs, FaServer, FaAws, FaDocker,
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiFramer, SiMongodb, SiMysql,
  SiGooglecloud, SiGithubactions, SiGoogle, SiTypescript, SiNextdotjs,
} from 'react-icons/si';

const skills = [
  {
    category: 'Front End',
    color: 'from-primary/20 to-primary/5',
    items: [
      { name: 'React / Next.js', icon: FaReact },
      { name: 'JavaScript / TypeScript', icon: SiJavascript },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3 / TailwindCSS', icon: SiTailwindcss },
      { name: 'Zustand / TanStack Query', icon: FaReact },
      { name: 'Framer Motion', icon: SiFramer },
    ],
  },
  {
    category: 'Back End',
    color: 'from-accent/20 to-accent/5',
    items: [
      { name: 'Node.js / Express', icon: FaNodeJs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'REST API', icon: FaServer },
    ],
  },
  {
    category: 'Cloud & Tools',
    color: 'from-blue-500/20 to-blue-500/5',
    items: [
      { name: 'AWS (S3, CloudFront, Route53)', icon: FaAws },
      { name: 'GCP', icon: SiGooglecloud },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Google Apps Script', icon: SiGoogle },
      { name: 'Docker', icon: FaDocker },
    ],
  },
];

export default skills;
