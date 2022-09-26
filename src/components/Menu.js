import { Link } from 'react-router-dom';
import foto from '../images/FotoMartaColor.jpg';
import '../styles/Menu.scss';
const Menu = (props) => {
  return (
    <div className={`menu ${props.menuHidden.classMenu}`}>
      <nav className="iconMenu">
        <i
          className="fa-solid fa-xmark fa-3x"
          onClick={props.handleClickMenu}
          id="menuClose"
        ></i>
      </nav>
      <img
        className="menu__img"
        src={foto}
        alt="Foto de Marta Rodríguez Onís"
        title="Foto de Marta Rodríguez Onís"
      ></img>
      <p className="menu__name">Marta Rodríguez Onís</p>
      <p className="menu__job">Jr Front-End developer</p>
      <nav>
        <ul className="menu__nav">
          <li className="menu__li" onClick={props.handleClickMenu}>
            <Link to="/" className="SectionDetail-link">
              Home
            </Link>
          </li>
          <li className="menu__li" onClick={props.handleClickMenu}>
            <Link to="/aboutme" className="SectionDetail-link">
              About me
            </Link>
          </li>
          <li className="menu__li" onClick={props.handleClickMenu}>
            <Link to="/resume" className="SectionDetail-link">
              Resume
            </Link>
          </li>
          <li className="menu__li" onClick={props.handleClickMenu}>
            <Link to="/projects" className="SectionDetail-link" id="projects">
              Projects
            </Link>
          </li>
          <li className="menu__li" onClick={props.handleClickMenu}>
            <Link to="/contact" className="SectionDetail-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
