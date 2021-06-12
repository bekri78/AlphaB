import React from 'react';
import logo from './components/Navbar/img/logo.png';

import './App.css';
function Access() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingTop: '50px' }}>
        <img src={logo} alt="logo" id="logoConnexion" />
        <p style={{ paddingTop: '2%', color: 'white', fontSize: 'large', marginTop: 'auto' }}>Connexion</p>
      </div>
    </div>
  );
}

export default Access;
