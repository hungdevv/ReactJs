import React, { Component } from 'react';

export default class SectionChild extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box mt-5 mx-auto">
                        <i className="fas fa-4x fa-gem text-primary mb-3 sr-icon-1"/>
                        <h3 className="mb-3">Sturdy Templates</h3>
                        <p className="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
                    </div>
                </div>
            </div>
        )
    }
}
