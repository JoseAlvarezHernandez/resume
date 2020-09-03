import React, { Component } from 'react'

export default class Presentation extends Component{
    render(){
        return (
            <section className="site-hero" style={{'background-image': 'url(images/image_1.jpg)'}} id="section-home" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row intro-text align-items-center justify-content-center">
                        <div className="col-md-10 text-center pt-5">
                            <h1 className="site-heading site-animate">Hello, I'm <strong class="d-block">Jose Alvarez</strong></h1>
                            <strong className="d-block text-white text-uppercase letter-spacing">Welcome to my Resume</strong>
                        </div>
                    </div>
                </div>
            </section> 
        )
    }
}