import '../styles/Home.scss';
const Home = (props) => {
  return (
    <div className="home">
      <nav className="iconMenu">
        <i
          className="fa-solid fa-bars fa-2x"
          onClick={props.handleClickMenu}
          id="menuBars"
        ></i>
      </nav>
      <p className="home__name">Marta Rodríguez Onís</p>
      <p className="home__job">Jr Front-End developer</p>

      {/* <div className="home__containerArrows">
        <i className="fa-solid fa-3x fa-caret-right"></i>
        <i className="fa-solid fa-3x fa-caret-left"></i>
      </div> */}
    </div>
  );
};

export default Home;
