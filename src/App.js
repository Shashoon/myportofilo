import React from 'react';
import Contact from './Components/Contact';
import Info from './Components/Info';
import Home from './Components/Home';
import Projects from './Components/Projects';

const App = () => {

    const toggleList = () => {
        const list = document.getElementById('list');

        list.classList.toggle('show');
    }

    return (
        <div>
            <div className='navbar'>
                {/* <div className='image-container'>
                    <img src={require('./Images/profile.jpg')} className='image' />
                </div> */}

                <div>
                    <h1 className='nav-title'>Sharon<span className='highlight-text'>.</span></h1>
                </div>
                {/* <ul id='list'>
                    <li><a href='#about'>About Me</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#contact'>Contact Me</a></li>
                </ul> */}

                <div className='navbar-btns'>
                    <a className='navbar-item' href='#home'>Home</a>
                    <a className='navbar-item' href='#about'>About</a>
                    <a className='navbar-item' href='#about'>Skills</a>
                    <a className='navbar-item' href='#projects'>Projects</a>
                    <a className='primary-btn' href='#contact'>Contact Me</a>
                </div>
                <button className='hamburger' id='hamburger' onClick={toggleList}>
                    <svg height="55" viewBox="0 0 21 21" width="55" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m4.5 6.5h12" /><path d="m4.498 10.5h11.997" /><path d="m4.5 14.5h11.995" /></g></svg>
                </button>
            </div>
            <Home />
            <Info />
            <Projects />
            <Contact />
        </div>
    )
}

export default App;