import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { VscCode } from 'react-icons/vsc';
import { TbDeviceIpadHorizontalCode } from 'react-icons/tb';

export const links = [
  { id: 1, link: '#', title: 'Home' },
  { id: 2, link: '#about', title: 'About Me' },
  { id: 3, link: '#services', title: 'Services' },
];
export const socials = [
  {
    id: 1,
    link: 'https://instagram.com/lalisabula',
    icon: <AiOutlineInstagram />,
  },
  { id: 2, link: 'https://twitter.com/lalisyntax', icon: <AiOutlineTwitter /> },
  { id: 3, link: 'https://linkedin.com/lalisa-bula', icon: <BsLinkedin /> },
  { id: 4, link: 'https://github.com/lalisabl', icon: <AiFillGithub /> },
];
