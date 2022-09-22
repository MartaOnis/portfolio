import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import Home from './Home';
import Menu from './Menu';

function App() {
  const [menuHidden, setMenuHidden] = useState({
    classMenu: '',
    classIconBars: '',
    classIconX: 'hidden',
  });

  const handleClickMenu = (ev) => {
    if (ev.currentTarget.id === 'menuBars') {
      setMenuHidden({
        classMenu: 'open',
        classIconBars: 'hidden',
        classIconX: '',
      });
    } else {
      setMenuHidden({
        classMenu: '',
        classIconBars: '',
        classIconX: 'hidden',
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
            <Home menuHidden={menuHidden} handleClickMenu={handleClickMenu} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
