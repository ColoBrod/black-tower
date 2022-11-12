import React from "react";

import Nav from '~/component/Nav';
import LnSwitcher from "~/component/LnSwitcher";

import './style.css';
import './style-lg.css';
import './style-md.css';
import './style-sm.css';
import './style-xs.css';

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
        
        