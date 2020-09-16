import React, { Component } from 'react'

import './../styles/stars.css'
export default class Presentation extends Component{
    render(){
        return (
            <section className="stars Presentation-Container mb-5">
                <h2 id="title">
                    Hello, I'm <br/><span>Jose Alvarez</span>
                    <p>A software developer mainly focus on Front End.</p>
                </h2>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </section>
        )
    }
}