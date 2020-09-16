import React, { Component } from 'react'
import { CalendarRange } from 'react-bootstrap-icons'
import { Row, Col, Container} from 'react-bootstrap'

export default class ResumeItem extends Component{
    render(){
        const {from , to, title, company, description} = this.props
        return (
            <Row className="resume-item mb-4">
                <Container>
                    <Row>
                        <Col>
                            <h3>{title}</h3>
                        </Col>
                        <Col className="date text-right">
                            <CalendarRange /> &nbsp;&nbsp;{from} - {to}
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="resume-itemDescription">{description}</Col>
                    </Row>
                    <Row>
                        <Col className="school">{company}</Col>
                    </Row>
                </Container>
            </Row>
        )
    }
}