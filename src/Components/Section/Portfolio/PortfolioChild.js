import React, { Component } from 'react'

export default class PortfolioChild extends Component {
  constructor(props) {
      super(props)
  }
  render() {
    return (
        <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
                <img className="img-fluid" src="img/portfolio/thumbnails/1.jpg" alt />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      {this.props.title1}
                    </div>
                    <div className="project-name">
                      {this.props.title2}
                    </div>
                  </div>
                </div>
              </a>
            </div>
    )
  }
}
