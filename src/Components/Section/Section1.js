import React, { Component } from 'react'

export default class Section1 extends Component {
  constructor(props) {
      super(props);
      
  }
  render() {
    return (
      <div>
        <section className="bg-primary" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-heading text-white">{this.props.title}</h2>
              <hr className="light my-4" />
              <p className="text-faded mb-4">{this.props.content}</p>
              <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
