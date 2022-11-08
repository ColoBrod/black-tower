import React from "react";

import Nav from '../Nav';
import LnSwitcher from "../LnSwitcher";

import './index.scss';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="top-panel">
          <div className="container">
            <LnSwitcher />
          </div>
        </div>
        <div className="container">
          <Nav position="top"/>
        </div>
      </header>
    );
  }
}
        
export default Header; 
        
        