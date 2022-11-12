import React from "react";

import Global from '~/Global';
import lc from './locales';

import Link from './CustomLink';


// Styles
import './style.css';
import './style-lg.css';
import './style-md.css';
import './style-sm.css';
import './style-xs.css';

class Nav extends React.Component {
  static contextType = Global;

  constructor(props) {
    super(props);
  }

  render() {
    const { ln } = this.context;
    const { position } = this.props;
    lc.setLanguage(ln);


    let data = [
      { type: "regular", path: "/", text: lc.home  },
      { type: "regular", path: "/catalog", text: lc.catalog  },
      { type: "logo", path: "/", text: ""  },
      { type: "regular", path: "/gallery", text: lc.gallery  },
      { type: "anchor", path: "/#order", text: lc.order  },
    ];

    if (position == "bottom") data = data.filter(el => el.type != "logo");

    return(
      <nav className={`navbar navbar-${position}`}>
        <ul>
          {
            data.map((el, i) => (
              <Link key={i} type={el.type} path={el.path}>
                {el.text}
              </Link>
            ))
          }
        </ul>
      </nav>
    );
  }
}
        
export default Nav; 











