import React, { Component } from 'react'

import ResumeItem from './resumeItem.component'

export default class ResumeSection extends Component{
    render(){
        const { title, items } = this.props
        return (
            <div className="col-md-6 resume-section">
                <h2 className="mb-5 resume-sectionTitle">{title}</h2>
                {items.map((item, key) => <ResumeItem {...item} key={key}/>)}
            </div>
        )
    }
}