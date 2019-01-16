import React, { Component } from 'react';

import TopMenu from  './Components/Topmenu/TopMenu';
import Header from './Components/Header/Header';
import Section1 from './Components/Section/Section1';
import Services from './Components/Section/Services/Services';
import Portfolio from './Components/Section/Portfolio/Portfolio';
import SertionText from './Components/Section/SectionText';
import SertionContact from './Components/Section/SectionContact';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu/>
        <Header/>
        <Section1 title="We've got what you need!" content="Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!"/>
        <Services />
        <Portfolio/>
        <SertionText/>
        <SertionContact/>
      </div>
    );
  }
}

export default App;
