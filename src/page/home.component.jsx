import React, { Component } from 'react'

import NavigationMenu from './navigation.component'
import Presentation from './presentation.component'
import MyResume from './resume.component'
import AboutMe from './aboutme.component'

export default class Home extends Component{
    render(){
        return <div data-spy="scroll" data-target="#pb-navbar">
            <NavigationMenu />
            <Presentation />
            <AboutMe />
            <MyResume />
        </div>
    }
}