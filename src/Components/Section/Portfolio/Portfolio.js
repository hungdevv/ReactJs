import React, { Component } from 'react';

import PortfolioChild from './PortfolioChild';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section className="p-0" id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">
            <PortfolioChild title1="Category 1" title2="Nguyen Ngoc Hung"/>
            <PortfolioChild title1="Category 2" title2="Nguyen Ngoc Hung"/>
            <PortfolioChild title1="Category 3" title2="Nguyen Ngoc Hung"/>
            <PortfolioChild title1="Category 4" title2="Nguyen Ngoc Hung"/>
            <PortfolioChild title1="Category 5" title2="Nguyen Ngoc Hung"/>
            <PortfolioChild title1="Category 6" title2="Nguyen Ngoc Hung"/>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
