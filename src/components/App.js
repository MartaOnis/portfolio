import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import About from './About';
import Home from './Home';
import Menu from './Menu';
import Projects from './Projects';

function App() {
  const [menuHidden, setMenuHidden] = useState({
    classMenu: '',
  });

  const handleClickMenu = (ev) => {
    if (ev.currentTarget.id === 'menuBars') {
      setMenuHidden({
        classMenu: 'open',
      });
    } else {
      setMenuHidden({
        classMenu: '',
      });
    }
  };
  return (
    <>
      <Menu menuHidden={menuHidden} handleClickMenu={handleClickMenu} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home menuHidden={menuHidden} handleClickMenu={handleClickMenu} />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Projects
                menuHidden={menuHidden}
                handleClickMenu={handleClickMenu}
              />
            </>
          }
        />
        <Route
          path="/aboutme"
          element={
            <>
              <About
                menuHidden={menuHidden}
                handleClickMenu={handleClickMenu}
              />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
