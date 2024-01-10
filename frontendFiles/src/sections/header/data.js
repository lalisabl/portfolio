/* eslint-disable import/no-extraneous-dependencies */
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
// import { BsLinkedin } from 'react-icons/ai';

const data = [
  {
    id: 1,
    link: 'https://instagram.com/lalisabula',
    icon: <AiOutlineInstagram />,
  },
  { id: 2, link: 'https://twitter.com/lalisyntax', icon: <AiOutlineTwitter /> },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/lalisa-bula/',
    icon: <AiFillLinkedin />,
  },
  { id: 4, link: 'https://github.com/lalisabl', icon: <AiFillGithub /> },
];

export default data;
