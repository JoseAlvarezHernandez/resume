import React, { Component } from 'react'
import { CalendarRange } from 'react-bootstrap-icons'
import { Row, Col, Container} from 'react-bootstrap'

export default class ResumeItem extends Component{
    render(){
        const {from , to, title, company, description} = this.props
        return (
            <Container className="resume-item mb-4">
                <Row>
                    <Col>
                        <h3>{title}</h3>
                    </Col>
                    <Col className="date">
                        <CalendarRange /> &nbsp;&nbsp;{from} - {to}
                    </Col>
                </Row>
                <Row>
                    <Col className="resume-itemDescription">{description}</Col>
                </Row>
                <Row>
                    <Col className="school">{company}</Col>
                </Row>
            </Container>
        )
    }
}