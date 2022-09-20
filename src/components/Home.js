import '../styles/Home.scss';
const Home = () => {
  return (
    <div className="home">
      <div className="home__menu">
        <i className="fa-solid fa-bars fa-2x"></i>
      </div>
      <p className="home__name">Marta Rodríguez Onís</p>
      <p className="home__job">Jr Front-End developer</p>
      <nav className="home__nav>">
        <div>
          <i className="fa-solid fa-caret-right"></i>
        </div>
        <div>
          <i className="fa-solid fa-caret-left"></i>
        </div>
      </nav>
    </div>
  );
};

export default Home;
