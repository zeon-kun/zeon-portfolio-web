import { Skill } from '@/types/skill';
import { CloudIcon, CodeIcon, DatabaseIcon, ServerIcon } from 'lucide-react';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Web Development',
    Icon: CodeIcon,
    description: `Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.`
  },
  {
    name: 'Cloud Computing',
    Icon: CloudIcon,
    description: `Cloud Computing encompasses working with Google Cloud Platform services like Cloud Run, Cloud Storage, Cloud SQL, and Cloud Build. This skill also includes experience with infrastructure automation tools like Terraform, ensuring scalable and secure deployments. `
  },
  {
    name: 'Database Management',
    Icon: DatabaseIcon,
    description: `Database Management involves efficiently storing and organizing data. This skill covers a range of technologies, frameworks, and best practices to ensure data integrity, security, and performance.`
  },
  {
    name: 'Server Administration',
    Icon: ServerIcon,
    description: `Server Administration involves setting up and managing servers using technologies such as nginx, bash scripting for automation, and system monitoring for both web and game servers. It also includes managing Moodle servers and traffic.`
  }
  // {
  //   name: 'UI/UX',
  //   Icon: LayoutIcon,
  //   description: `UI/UX Design focuses on creating delightful user experiences through visually appealing and highly functional designs. This skill includes a variety of technologies, frameworks, and best practices to enhance user satisfaction and usability.`
  // },
];

export { trimLen, skills };
