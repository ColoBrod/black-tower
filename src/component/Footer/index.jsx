import React from "react";

import Nav from '~/component/Nav';

import './index.css';

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <div className="container">
          <div className="copyright">
            © Black Towers 2022
          </div>
          <Nav position="bottom"/>
        </div>
      </footer>
    );
  }
}
        
export default Footer; 
        
        