import React, { Component } from 'react'
import { CalendarRange } from 'react-bootstrap-icons'

export default class ResumeItem extends Component{
    render(){
        const {from , to, title, company, description} = this.props.item
        return (
            <div className="resume-item mb-4">
                <span className="date">
                    <CalendarRange /> {from} - {to}
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="school">{company}</span>
            </div>
        )
    }
}