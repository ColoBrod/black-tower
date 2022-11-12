import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import withRouter from "~/fn/withRouter";

// Images
import Logo from '~/assets/img/logo.svg';

class CustomLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, path, children: text, router } = this.props;
    const { pathname } = router.location;
    const active = pathname == path ? "active" : "";

    switch (type) {
      case "regular":
        return (
          <li className={`text-link-wrapper ${active}`}>
            <NavLink className="text-link" to={path}>{text}</NavLink>
          </li>
        );
      case "anchor":
        return (
          <li className='text-link-wrapper'>
            <HashLink className="text-link" to={path}>{text}</HashLink>
          </li>
        );
      case "logo":
        return (
          <li className="logo-wrapper">
            <Link to={path}>
              <img className="logo" src={Logo} alt="Company Logo" />
            </Link>
          </li>
        );
    } 
  }

  parentActiveClass({ isActive }) {
    const li = this.ref.current;
    if (isActive) li.classList.add('active');
    else li.classList.remove('active');
  }
}

export default withRouter(props => <CustomLink {...props} />);