import React, { Component } from 'react'

import ResumeSection from './resumeSection.component'

import './../styles/resume.scss'

export default class MyResume extends Component{
    education = [
        { 
            from: '02/2015'
            , to: '05/2016'
            , company: 'Hala Ken Consulting'
            , title : 'Fullstack Developer'
            , description: 'I was in charge of making'
        }
    ]
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
                        <ResumeSection title="Education" items={this.education} />
                        <ResumeSection title="Experience" items={this.education} />
                    </div>
                </div>
            </section>
        )
    }
}