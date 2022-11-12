// Libraries
import React from "react";

// Router
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './page/Home';
import Catalog from './page/Catalog';
import Gallery from './page/Gallery';
import NotFound from './page/NotFound';

// Components
import Global from './Global';
    

import Header from './component/Header';
import Footer from './component/Footer';

import './style/normalize.css';
import './style/index.css';
import './style/adaptiveness.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ln: "ru",
    };
    // this.state = {
    //   ln: this.getWebBrowserLn(),
    // }
    this.switchLn = this.switchLn.bind(this);
  }

  

  render() {
    const { ln } = this.state;
    return (
      <Global.Provider value={{ln}}>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/gallery" element={<Gallery />} /> 
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Global.Provider>
    );
  }

  componentDidMount() {
    document.addEventListener('switch-ln', this.switchLn);
  }

  componentWillUnmount() {
    document.removeEventListener('switch-ln', this.switchLn);
  }

  switchLn(e) {
    const { ln } = e.detail;
    this.setState({ ln });
  }
}

export default App;