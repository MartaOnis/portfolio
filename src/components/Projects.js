// import { Link } from 'react-router-dom';
import '../styles/Projects.scss';
import DetailProject from './DetailProject';
import searcher from '../images/searcher.jpg';
import adavengers from '../images/adavengers.jpg';
import cards from '../images/cards.jpg';
import anime from '../images/anime.jpg';
import number from '../images/number.jpg';
import friends from '../images/friends.jpg';
import github from '../images/github.png';

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
          alt="página creación tarjetas"
          title="Awesome profile cards"
          des="Page to create profile cards + first server / "
          des2="React - HTML - CSS/SASS - Node JS - Express JS - SQL - Responsive"
          route="https://back-end-to-the-future.herokuapp.com/"
        />
        <DetailProject
          img={anime}
          alt="página buscador de animes"
          title="Anime finder"
          des="Web App to search your favourite anime / "
          des2="JavaScript - HTML - CSS/SASS - Responsive"
          route="https://martaonis.github.io/anime-searcher/"
        />
        <DetailProject
          img={number}
          alt="página averigua el número"
          title="Guess the number"
          des="Guess the number / "
          des2="JavaScript - HTML - CSS/SASS"
          route="https://martaonis.github.io/guess-the-number-game/"
        />
        <DetailProject
          img={friends}
          alt="página frases de FRIENDS"
          title="Quotes FRIENDS"
          des="Quotes from the serie F.R.I.E.N.D.S / "
          des2="React - HTML - CSS/SASS"
          route="https://martaonis.github.io/quotes-serie-FRIENDS/"
        />
      </section>
      <section className="projects__github">
        <a className="projects__Link" href="https://github.com/MartaOnis">
          <img
            className="projects__img"
            src={github}
            alt="Imagen del logo de Github"
            title="https://github.com/MartaOnis"
          ></img>
          <p className="projects__des">MartaOnis</p>
        </a>
      </section>
    </div>
  );
};
export default Projects;
