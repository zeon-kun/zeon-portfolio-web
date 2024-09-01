import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    slug: 'portfolio',
    description:
      'A personal portfolio to showcase my coding projects, resume, and skills in a beautifully designed format.',
    thumbnail: '/images/projects/portfolio/cover.png',
    tags: ['NextJS', 'Shadcn UI', 'TailwindCSS']
  },
  {
    name: 'Glucofit - Sugar Tracking Mobile App',
    slug: 'glucofit',
    description:
      'GlucoFit is a mobile app designed to combat diabetes in Indonesia by empowering users with tools for informed dietary choices.',
    thumbnail: '/images/projects/glucofit/cover.png',
    tags: ['Express.js', 'Flask.py', 'Google Cloud Platform']
  },
  {
    name: 'Minecraft Server',
    slug: 'mcserver',
    description:
      'A personal hosted server using a VPS bought on hostinger to host a popular game "Minecraft". The server has automated backups, restart, and also a backward and forward compatible script. Installed with mods such as Spark Profiler, Easy Auth, and much more',
    thumbnail: '/images/projects/mcserver/cover.png',
    tags: ['Bash Scripting', 'Linux']
  },
  {
    name: 'Game Topup',
    slug: 'topup',
    description:
      'A college project that focuses on the usage of Laravel Basics.',
    thumbnail: '/images/projects/topup/cover.png',
    tags: ['Laravel', 'Bladewind UI', 'Blade']
  }
];

export { projects };
