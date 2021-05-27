import React from 'react';

import { Sidebar } from '../../components';

import './styles.css';

function MainContainer(props) {
  return(
    <div className="mainContainer">
      <Sidebar />
      <div className="pageContent">
        {props.children}
      </div>
    </div>
  )
}

export default MainContainer;