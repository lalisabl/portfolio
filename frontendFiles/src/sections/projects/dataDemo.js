
import { FaReact,FaGitAlt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript,SiMongodb,SiTailwindcss,SiGithub,SiCanva } from "react-icons/si";
import { TbBrandNodejs,TbBrandSocketIo } from "react-icons/tb";
import { RiFlutterFill} from "react-icons/ri";
import Image2 from '../../assets/images/portifolio.png';
import Image3 from '../../assets/images/accountDetailBookStore.png';
import Image4 from '../../assets/images/landingPageBookStore.png';

const data = [
  {
    id: 1,
    name: 'e-cosmeticts',
    title: 'E-commerse for cosmetics',
    image: Image2,
    desc1: 'E-cosmetics is an e-commerce website specializing in beauty and cosmetic products. Our platform offers a wide range of skincare, makeup, and haircare products from top brands.',
    desc2: 'With a user-friendly interface, customers can easily browse products, read reviews, and make secure purchases. Our platform also provides personalized recommendations based on user preferences and previous purchases.',
    desc3: 'The implementation of e-cosmeticts involves using modern technologies and frameworks such as React for the front end, Node.js for the backend, MongoDB for database management and  CSS for styling.',
    techUsed:[<FaReact/>,<DiJavascript1/>,<SiMongodb/>,<FaGitAlt/>,<SiGithub/>,<TbBrandNodejs/>],
    github: 'https://github.com/lalisabl',
  },
  
  {
    id: 2,
    name: 'HayuBk',
    title: 'Store and provide different categories of books',
    image: Image3,
    desc1: 'HayuBk is a website designed to store and provide access to a wide range of books across different categories. Users can explore various genres and find books of their interest.',
    desc2: 'Our platform is accessible via mobile devices and web browsers, offering a seamless experience for users to browse, search, and read books online.',
    desc3: 'The implementation of HayuBk involves using modern technologies and frameworks such as React for the front end, Node.js for the backend, MongoDB for database management, and Tailwind CSS for styling.',
    techUsed: [<FaReact/>,<DiJavascript1/>,<SiMongodb/>,<FaGitAlt/>,<SiGithub/>,<TbBrandNodejs/>,<SiTailwindcss/>],
    github: 'https://github.com/lalisabl',
  
},

  {
    id: 3,
    name: 'BetRent App',
    title: 'Easily find house for renting',
    image: Image4,
    desc1: 'BetRent is a mobile App designed to simplify the process of finding houses for rent. Whether you are a house owner looking to rent out your property or a renter searching for a suitable home, BetRent provides a seamless experience for both parties.',
    desc2: 'House owners can easily list their properties on BetRent, providing detailed information such as location, amenities, rental terms, and more. Renters can browse through the listings, filter based on their preferences, and contact house owners directly through the platform.',
    desc3: 'The implementation of BetRent involves using modern technologies and frameworks such as Flutter for the front end, Node.js for the backend, MongoDB for database management and Express.js for API development.',
    techUsed: [<RiFlutterFill/>,<DiJavascript1/>,<SiMongodb/>,<FaGitAlt/>,<SiGithub/>,<TbBrandNodejs/>],
    github: 'https://github.com/lalisabl',
},
];

export default data;
