import React, { Component } from 'react'

export default class ResumeSection extends Component{
    render(){
        const {name, id, children} = this.props
        return (
            <section className="site-section mb-5" id={`section-${id}`}>
                <div className="container">
                    <div className="row">
                        {name && <div className="col-md-12 mb-5">
                            <div className="section-heading text-center">
                                <h2>{name}</h2>
                            </div>
                        </div>}
                        {children}
                    </div>
                </div>
            </section>
        )
    }
}