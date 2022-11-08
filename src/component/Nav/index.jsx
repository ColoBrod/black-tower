import React from "react";


import Global from '../../Global';
import lc from './locales';


import { Link, NavLink } from 'react-router-dom';
import './index.scss';

// Images
import Logo from '../../assets/img/logo.png';

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
        <NavLink to="/">{lc.home}</NavLink>
        <NavLink to="/catalog">{lc.catalog}</NavLink>
        { position == "top" ? this.renderLogo() : null }
        <NavLink to="/gallery">{lc.gallery}</NavLink>
        <Link to="#order">{lc.order}</Link>
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











