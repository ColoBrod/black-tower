// Libraries
import React from "react";
import Global from '~/Global';
import lc from './locales';
import './index.css';

// Components
import SectionAbout from "~/section/About";
import SectionGallery from "~/section/Gallery";
import SectionContacts from "~/section/Contacts";
import SectionOrder from "~/section/Order";

class Home extends React.Component {
  static contextType = Global;

  render() {
    return (
      <>
        <SectionAbout />
        <SectionGallery />
        <SectionContacts />
        <SectionOrder />
      </>
    );
  }
}

export default Home;