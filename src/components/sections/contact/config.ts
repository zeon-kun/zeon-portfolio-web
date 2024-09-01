import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'rafif.zeon@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/zeon-kun',
      Icon: SiGithub
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/muhammad-rafif-tri-risqullah-65311421a/',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
