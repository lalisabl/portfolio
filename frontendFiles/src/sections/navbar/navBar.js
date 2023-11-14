import './navBar.css';
import Logo from '../../assets/images/anonymous_person.png';
import data from './data';

const navBar = () => {
  return (
    <section id="nav">
      <div className="container nav__container">
        <a href="index.html">
          <img src={Logo} alt="Logo" className="nav__logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li>
              <a href={item.link} key={item.id}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default navBar;
