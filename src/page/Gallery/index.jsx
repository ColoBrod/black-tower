// Libraries
import React from "react";

import Global from '../../Global';
import lc from './locales';

// Components


class Gallery extends React.Component {
  static contextType = Global;

  render() {
    const { ln } = this.context;
    lc.setLanguage(ln);

    return (
      <div className="container">
        <h1>{ lc.title }</h1>
      </div>
    );
  }
}

export default Gallery;