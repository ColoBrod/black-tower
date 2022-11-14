import React from 'react';

class ScreenSize extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      content: "",
      background: "black",
    };
    this.style = {
      position: "fixed",
      top: 0,
      left: 0,
      fontWeight: 500,
      fontSize: 16,
      color: "white",
      background: this.state.background,
      padding: 4,
    };

    this.update = this.update.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.update);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.update);
  }

  render() {
    const { screenWidth } = this.state;
    console.log("width:", screenWidth);
    if (screenWidth >= 1200) this.setState({
      content: "XL",
      background: "red",
    });
    else if (screenWidth >= 992 && screenWidth <= 1199) this.setState({
      content: "LG",
      background: "orange",
    });
    else if (screenWidth >= 768 && screenWidth <= 991) this.setState({
      content: "MD",
      background: "yellow",
    });
    else if (screenWidth >= 576 && screenWidth <= 767) this.setState({
      content: "SM",
      background: "lightgreen",
    });
    else if (screenWidth <= 575) this.setState({
      content: "XS",
      background: "lightblue",
    });
    const { content } = this.state;
    const { style } = this;
    return(
      <div id="screen-size" style={this.style}>
        {content}
      </div>
    );
  }

  update() {
    this.setState({
      screenWidth: window.innerWidth,
    });
  }
}

export default ScreenSize;