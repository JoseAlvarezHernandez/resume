import React, { Component } from 'react'

import ResumeSection from './resumeSection.component'

import './../styles/resume.scss'

const education = require( './../education.json')
const experience = require('./../experience.json')

export default class MyResume extends Component{
    render(){
        return (
            <section className="site-section " id="section-resume">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="section-heading text-center">
                                <h2>My <strong>Resume</strong></h2>
                            </div>
                        </div>
                        <ResumeSection title="Education" items={education} />
                        <ResumeSection title="Experience" items={experience} />
                    </div>
                </div>
            </section>
        )
    }
}