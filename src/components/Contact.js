import '../styles/Contact.scss';
import github from '../images/github.png';
import mail from '../images/mail.png';
import linkedin from '../images/linkedin.png';

const Contact = (props) => {
  return (
    <div className="contact">
      <nav className="Menu">
        <i
          className="fa-solid fa-bars fa-2x"
          onClick={props.handleClickMenu}
          id="menuBars"
        ></i>
      </nav>
      <h2 className="contact__title">Contact</h2>
      <div className="contact__desktop">
        <section className="contact__github">
          <a
            className="contact__Link"
            href="https://www.linkedin.com/in/marta-rodriguez-onis/"
          >
            <img
              className="contact__img"
              src={linkedin}
              alt="Imagen del logo de Linkedin"
              title="https://www.linkedin.com/in/marta-rodriguez-onis/"
            ></img>
          </a>
        </section>
        <section className="contact__github">
          <a className="contact__Link" href="https://github.com/MartaOnis">
            <img
              className="contact__img"
              src={github}
              alt="Imagen del logo de Github"
              title="https://github.com/MartaOnis"
            ></img>
          </a>
        </section>
        <section className="contact__mail">
          <a
            className="contact__mailcontainer"
            href="mailto:marta.ronis@gmail.com"
          >
            <img
              className="contact__img"
              src={mail}
              alt="Imagen del logo de Github"
              title="marta.ronis@gmail.com"
            ></img>
            <p className="contact__mail">marta.ronis@gmail.com</p>
          </a>
        </section>
      </div>
    </div>
  );
};
export default Contact;
