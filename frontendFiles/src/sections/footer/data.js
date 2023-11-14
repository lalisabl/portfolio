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
  { id: 1, link: 'https://instagram.com', icon: <AiOutlineInstagram /> },
  { id: 2, link: 'https://twitter.com', icon: <AiOutlineTwitter /> },
  { id: 3, link: 'https://linkedin.com', icon: <BsLinkedin /> },
  { id: 4, link: 'https://github.com', icon: <AiFillGithub /> },
];
export const getHelp = [{ id: 1, link: '#faqs', title: 'FAQ' }];
// Assuming each blog post has the following properties: title, content, date, and tags

export const blogPosts = [
  {
    icon: <VscCode />,
    title: 'Best practice with node.js',
    content:
      'In this blog post,I will explore best practices for backend file management with node.js',
    date: '2023-11-11',
    tags: ['Programming', 'Web Development'],
  },
  {
    icon: <TbDeviceIpadHorizontalCode />,
    title: 'Tips for Effective Coding',
    content:
      "In this blog post, we'll explore some tips for writing clean and efficient code.",
    date: '2023-11-12',
    tags: ['Coding', 'Best Practices'],
  },
];
