// import { Link } from 'react-router-dom';
import '../styles/Projects.scss';
import DetailProject from './DetailProject';
import searcher from '../images/searcher.png';
import adavengers from '../images/adavengers.png';
import cards from '../images/cards.png';
const Projects = (props) => {
  return (
    <div className="projects">
      {/* <Link to="/" className="projects__link">
        <i className="fa-solid fa-left-long fa-2x"></i>
        Home
      </Link> */}
      <nav className="Menu">
        <i
          className="fa-solid fa-bars fa-2x"
          onClick={props.handleClickMenu}
          id="menuBars"
        ></i>
      </nav>
      <h2 className="projects__title">Projects</h2>
      <section className="projects__section">
        <DetailProject
          img={searcher}
          alt="buscador de personajes de Harry Potter"
          title="Harry Potter Character Searcher"
          des="Harry Potter Character Searcher / "
          des2="React - Responsive"
          route="https://martaonis.github.io/Harry-Potter-character-finder/"
        />
        <DetailProject
          img={adavengers}
          alt="página presentación equipo"
          title="Las Adavengers"
          des="Layout Example / "
          des2="HTML - CSS/SASS - Responsive"
          route="https://martaonis.github.io/adalab-partners-presentation-page/"
        />
        <DetailProject
          img={cards}
          alt="página creación tarjetas "
          title="Awesome profile cards"
          des="Page to create profile cards / "
          des2="JavaScript - HTML - CSS/SASS - Responsive"
          route="https://martaonis.github.io/adalab-partners-presentation-page/"
        />
      </section>
    </div>
  );
};
export default Projects;
