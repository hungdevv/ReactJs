import React, { Component } from 'react';

import SectionChild from './SectionChild';

export default class Services extends Component {
  render() {
    return (
      <div>
        <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">At Your Service</h2>
              <hr className="my-4" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box mt-5 mx-auto">
                        <i className="fas fa-4x fa-gem text-primary mb-3 sr-icon-1"/>
                        <h3 className="mb-3">Sturdy Templates</h3>
                        <p className="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
                    </div>
                </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2" />
                <h3 className="mb-3">Ready to Ship</h3>
                <p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="fas fa-4x fa-code text-primary mb-3 sr-icon-3" />
                <h3 className="mb-3">Up to Date</h3>
                <p className="text-muted mb-0">We update dependencies to keep things fresh.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="fas fa-4x fa-heart text-primary mb-3 sr-icon-4" />
                <h3 className="mb-3">Made with Love</h3>
                <p className="text-muted mb-0">You have to make your websites with love these days!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
