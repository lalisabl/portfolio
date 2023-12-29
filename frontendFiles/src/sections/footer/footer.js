import { links, socials, getHelp, blogPosts } from './data';
import myphoto from '../../assets/images/anonymous_person.png';
import './footer.css';
import Card from '../../components/Card';

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__items nav__cont">
          <img src={myphoto} alt="my_photo" className="nav__logo" />
          <ul className="nav__menu nav__menu__footer">
            {links.map((fLink) => (
              <li key={fLink.id}>
                <a href={fLink.link}>{fLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__items footer__follow">
          <h3>Follow me</h3>
          <div className="footer__socials">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <small>2023 Lalisa Bula &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
