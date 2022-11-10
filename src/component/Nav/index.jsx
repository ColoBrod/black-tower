import React from "react";


import Global from '~/Global';
import lc from './locales';


import { Link, NavLink } from 'react-router-dom';
import './index.css';

// Images
import Logo from '~/assets/img/logo.png';

class Nav extends React.Component {
  static contextType = Global;

  constructor(props) {
    super(props);
  }

  render() {
    const { ln } = this.context;
    const { position } = this.props;
    lc.setLanguage(ln);

    return(
      <nav className={`navbar navbar-${position}`}>
        <NavLink className="text-link" to="/">{lc.home}</NavLink>
        <NavLink className="text-link" to="/catalog">{lc.catalog}</NavLink>
        { position == "top" ? this.renderLogo() : null }
        <NavLink className="text-link" to="/gallery">{lc.gallery}</NavLink>
        <Link className="text-link" to="#order">{lc.order}</Link>
      </nav>
    );
  }

  renderLogo() {
    return (
      <Link to="/">
        <img className="logo" src={Logo} alt="Company Logo" />
      </Link>
    );
  }
}
        
export default Nav; 











