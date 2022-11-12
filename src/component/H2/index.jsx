import React from 'react';

import HorizontalDivider from '~/assets/img/horizontal-divider.png';

import './style.css';

class H2 extends React.Component {
  constructor(props) {
    super(props);
    this.refTitle = React.createRef();
    this.refDivider = React.createRef();
    this.calcHeaderWidth = this.calcHeaderWidth.bind(this);
  }

  render() {
    const { refTitle, refDivider } = this;
    const { children } = this.props;
    return (
      <div className="h2">
        <h2 ref={refTitle}>{children}</h2>
        <img 
          ref={refDivider}
          src={HorizontalDivider} 
          alt="Horizontal Divider" 
          className="horizontal-divider"
        />
      </div>
    );
  }

  componentDidUpdate() {
    this.calcHeaderWidth();
  }

  componentDidMount() {
    window.addEventListener('resize', this.calcHeaderWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calcHeaderWidth);
  }

  calcHeaderWidth() {
    const h2 = this.refTitle.current;
    const img = this.refDivider.current;
    img.style.left = `${h2.clientWidth}px`;
  }
}

export default H2;