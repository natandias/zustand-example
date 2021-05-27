import React from 'react';

import { Sidebar } from '../../components';

import './styles.css';

function MainContainer(props) {
  return(
    <div className="mainContainer">
      <Sidebar />
      {props.children}
    </div>
  )
}

export default MainContainer;