import React, { Component } from 'react';
import Contact from './Components/Contact';
import Info from './Components/Info';
import Home from './Components/Home';
import Projects from './Components/Projects';

const App = () => {

    return (
        <div>
            <nav>
                <div className='image-container'>
                    <img src={require('./Images/profile.jpg')} className='image' />
                </div>
                <ul>
                    <li><a href='#about'>About Me</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact Me</a></li>
                </ul>
            </nav>
            <Home />
            <Info />
            <Projects />
            <Contact />
        </div>
    )
}

export default App;