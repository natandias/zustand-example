import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Sidebar() {
  return (
    <div className="sidebarContainer">
      <header className="title">
        <h2>Menus</h2>
      </header>
      
      <main className="menus">
        <Link to="/">Listagem</Link>
        <Link to="/form">Cadastro</Link>
      </main>
      
    </div>
  );
}

export default Sidebar;
