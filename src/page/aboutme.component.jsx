import React, { Component } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'

import ResumeSection from './section.component'

export default class AboutMe extends Component{
    render(){
        return (
            <ResumeSection id="about">
                <Container className="AboutMe">
                    <Row>
                        <Col className="text-center AboutMe-PictureContainer">
                            <Image className="AboutMe-Picture"roundedCircle src="/images/profile.jpeg"/>
                        </Col>
                        <Col>
                            <Row className="text-center mb-5">
                                <Col>
                                    <h2>About <strong>Me</strong></h2>
                                </Col>
                            </Row>
                            <Row className="text-justify">
                                <p>
                                A former developer that has now over 5+ years of experience having roles as Fullstack, Front end, Web UI, API developer, Chat bot Developer and Tech lead. Having responsibilities as Code Reviewer, continuous integrator, running a scrum team, teaching new team members the workflow. Also having a strong background in User Interfaces and User experience.
                                </p>
                            </Row>
                            <Row>
                                <Col className="text-right">
                                    <Button className="btn-secondary px-2" children="Download Resume" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </ResumeSection>
        )
    }
}