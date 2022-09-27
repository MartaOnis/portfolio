import '../styles/Contact.scss';
import github from '../images/github.png';

const Contact = (props) => {
  return (
    <div className="about">
      <nav className="Menu">
        <i
          className="fa-solid fa-bars fa-2x"
          onClick={props.handleClickMenu}
          id="menuBars"
        ></i>
      </nav>
      <section className="contact__github">
        <a className="contact___Link" href="https://github.com/MartaOnis">
          <img
            className="contact___img"
            src={github}
            alt="Imagen del logo de Github"
            title="https://github.com/MartaOnis"
          ></img>
          <p className="contact___des">MartaOnis</p>
        </a>
      </section>
    </div>
  );
};
export default Contact;
