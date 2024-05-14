
import { FaReact,FaGitAlt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript,SiMongodb,SiTailwindcss,SiGithub,SiCanva } from "react-icons/si";
import { TbBrandNodejs,TbBrandSocketIo } from "react-icons/tb";
import { RiFlutterFill} from "react-icons/ri";
import Image1 from '../../assets/images/homePage.png';
import Image2 from '../../assets/images/portifolio.png';
import Image3 from '../../assets/images/accountDetailBookStore.png';
import Image4 from '../../assets/images/landingPageBookStore.png';

const data = [
  {
    id: 1,
    name: 'e-cosmeticts',
    title: 'E-commerse for cosmetics',
    image: Image2,
    desc1: 'Mobile Car Checker allows you to check your next potential second hand car step by step during your visit to uncover potential problems and cost traps. is guided through the individual questions and is given advice on how to complete them. If necessary, estimated repair costs can be provided. The user is explicitly informed about so-called "dealbreaker questions". ',
    desc2:' The mobile web application can be used with any standard web browser. After registration, the app provides the user with a structured checklist of 11 categories and about 100 questions.',  
    desc3:'Once the user has created a car with basic data, he or she Finally, the user receives an overview of the results including the total repair costs in order to decide whether to buy or not and to negotiate the price accordingly.',
    techUsed:[<FaReact/>,<DiJavascript1/>,<SiMongodb/>,<FaGitAlt/>,<SiGithub/>,<TbBrandNodejs/>],
    github: 'https://github.com/lalisabl',
  },
  
  {
    id: 2,
    name: 'HayuBk',
    image: Image3,
    title: 'Get any University handout or any books here',
    desc1: 'Mobile Car Checker allows you to check your next potential second hand car step by step during your visit to uncover potential problems and cost traps. is guided through the individual questions and is given advice on how to complete them. If necessary, estimated repair costs can be provided. The user is explicitly informed about so-called "dealbreaker questions". ',
    desc2:' The mobile web application can be used with any standard web browser. After registration, the app provides the user with a structured checklist of 11 categories and about 100 questions.',  
    desc3:'Once the user has created a car with basic data, he or she Finally, the user receives an overview of the results including the total repair costs in order to decide whether to buy or not and to negotiate the price accordingly.',
    techUsed:[<FaReact/>,<DiJavascript1/>,<SiMongodb/>,<FaGitAlt/>,<SiGithub/>,<TbBrandNodejs/>,<SiTailwindcss/>],
    github: 'https://github.com/lalisabl',
  
},

  {
    id: 3,
    name: 'BetRent',
    title: 'Easily find house for renting',
    image: Image4,
    desc1: 'Mobile Car Checker allows you to check your next potential second hand car step by step during your visit to uncover potential problems and cost traps. is guided through the individual questions and is given advice on how to complete them. If necessary, estimated repair costs can be provided. The user is explicitly informed about so-called "dealbreaker questions". ',
    desc2:' The mobile web application can be used with any standard web browser. After registration, the app provides the user with a structured checklist of 11 categories and about 100 questions.',  
    desc3:'Once the user has created a car with basic data, he or she Finally, the user receives an overview of the results including the total repair costs in order to decide whether to buy or not and to negotiate the price accordingly.',
    techUsed:[<RiFlutterFill/>,<DiJavascript1/>,<SiMongodb/>,<FaGitAlt/>,<SiGithub/>,<TbBrandNodejs/>],
    github: 'https://github.com/lalisabl',
},
];

export default data;
