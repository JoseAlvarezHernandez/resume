import './../styles/resume.scss'
import React, { Component } from 'react'

import ResumeSection from './section.component'
import { Container } from 'react-bootstrap'
import ResumeItem from './resumeItem.component'

const education = require( './../education.json')
const experience = require('./../experience.json')

export default class MyResume extends Component{
    render(){
        return (
            <div>
                <ResumeSection id="resume" name="Experience">
                    <Container>
                        {experience.map((item, key) => <ResumeItem {...item} key={key}/>)}
                    </Container>
                </ResumeSection>
                <ResumeSection id="education" name="Education">
                    <Container>
                        {education.map((item, key) => <ResumeItem {...item} key={key}/>)}
                    </Container>
                </ResumeSection>
            </div>
        )
    }
}