import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

import './../stars.css'
export default class Presentation extends Component{
    render(){
        return (
            <section className="stars Presentation-Container">
                
                <h2 id="title">
                    Hello, I'm <br/><span>Jose Alvarez</span>
                    <h6>A software developer mainly focus on Front End.</h6>
                </h2>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </section>
        )
    }
}