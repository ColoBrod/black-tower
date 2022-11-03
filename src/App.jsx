// Libraries
import React from "react";

// Router
import { Routes, Route, Link } from 'react-router-dom';

// Pages
import Home from './page/Home';
import Catalog from './page/Catalog';
import Gallery from './page/Gallery';
import NotFound from './page/NotFound';

// Components

const languages = ["en", "ru", "kz", "uz"]; 

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/gallery">Gallery</Link>
          {/* <a href="/">Home</a> */}
          {/* <a href="/catalog">Catalog</a> */}
          {/* <a href="/gallery">Gallery</a> */}
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/gallery" element={<Gallery />} /> 
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;