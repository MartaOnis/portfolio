import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import Home from './Home';
import Menu from './Menu';

function App() {
  const [menuHidden, setMenuHidden] = useState({
    classLanding: '',
    classMenu: 'hidden',
  });

  const handleClickMenu = (ev) => {
    if (ev.currentTarget.id === 'menuBars') {
      setMenuHidden({
        classLanding: 'hidden',
        classMenu: '',
      });
    } else {
      setMenuHidden({
        classLanding: '',
        classMenu: 'hidden',
      });
    }
  };
  return (
    <>
      <Home menuHidden={menuHidden} handleClickMenu={handleClickMenu} />

      <Menu menuHidden={menuHidden} handleClickMenu={handleClickMenu} />
    </>
  );
}

export default App;
