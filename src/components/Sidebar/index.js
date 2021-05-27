import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.css';

function Sidebar() {
  const selectedRoute = useLocation().pathname;
  console.log("selectedRoute", selectedRoute);

  return (
    <div className="sidebarContainer">
      <header className="title">
        <h2>Menus</h2>
      </header>
      
      <main className="menus">
        <Link to="/" className={selectedRoute === '/' ? 'selectedMenu' : ''}>Listagem</Link>
        <Link to="/form" className={selectedRoute === '/form' ? 'selectedMenu' : ''}>Cadastro</Link>
      </main>
      
    </div>
  );
}

export default Sidebar;
