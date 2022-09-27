import '../styles/About.scss';
const About = (props) => {
  return (
    <div className="about">
      <nav className="Menu">
        <i
          className="fa-solid fa-bars fa-2x"
          onClick={props.handleClickMenu}
          id="menuBars"
        ></i>
      </nav>
      <h2 className="about__title">About me</h2>
      <section className="about__section">
        <p className="about__des">
          Graduated in Chemistry and so passionate about science that I have
          dedicated myself to transmitting this enthusiasm to others through
          different classes, helping people in subjects such as mathematics,
          chemistry, physics... From this exchange of knowledge, which has
          recently become more technological, my curiosity to discover new
          alternatives was born and I fell fully into the world of programming.
          Especially on the front-end part where I can use my creativity.
        </p>
        <h3 className="about__titleEdu">Education</h3>
        <article className="about__education">
          <h3 className="about__h3">ADALAB Web programming bootcamp</h3>
          <p className="about__paragraph">
            Layout: HTML5, CSS3, SASS, Flexbox, Grid, responsive design.
            <hr />
            JavaScript (ES6) and web services (APIs).
            <hr /> Version control with Git.
            <hr />
            Creation of simple SPAs with React.
            <hr />
            Basic knowledge of APIs and back programming: applications with Node
            JS, Express and SQL.
            <hr /> Slack, GitHub, VS Code, Gulp, Terminal, Zeplin.
            <hr />
            Experience in the development of projects using the Agile philosophy
            and Scrum framework.
          </p>
          <h3 className="about__h3">CAMILO JOSÉ CELA UNIVERSITY</h3>
          <p className="about__paragraph">
            University Expert in Quality Control.
          </p>
          <h3 className="about__h3">UNIVERSITY OF SALAMANCA</h3>
          <p className="about__paragraph">Degree in Chemistry.</p>
        </article>
      </section>
    </div>
  );
};
export default About;
