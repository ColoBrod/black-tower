import React from "react";
import Global from '../../Global';

class Ln extends React.Component {
  static contextType = Global;

  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { ln } = this.context;
    // lc.setLanguage(ln);
    const { short, long } = this.props;
    console.log(short, long);
    const classActive = (this.props.short == ln) ? "ln-switcher__ln_active"  : "";

    return (
      <span 
        className={`ln-switcher__ln ${classActive}`} 
        onClick={this.handleClick}
      >
        {long}
      </span>
    );
  }

  handleClick() {
    const { short } = this.props;
    const event = new CustomEvent('switch-ln', { detail: {ln: short } })
    document.dispatchEvent(event);
  }
}

export default Ln;