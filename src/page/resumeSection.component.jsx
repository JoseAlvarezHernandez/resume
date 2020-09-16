import React, { Component } from 'react'

import ResumeItem from './resumeItem.component'

export default class ResumeSection extends Component{
    render(){
        const { title, items } = this.props
        console.log(items)
        return (
            <div className="col-md-6">
                <h2 className="mb-5">{title}</h2>
                {items.map((item, key) => <ResumeItem item={item} key={key}/>)}
            </div>
        )
    }
}