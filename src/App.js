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
                    <a className='navbar-item' href='#home'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path></svg>
                        Home
                    </a>
                    <a className='navbar-item' href='#about'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path></svg>
                        About
                    </a>
                    <a className='navbar-item' href='#about'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.32943 3.27152C6.56252 2.83314 7.9923 3.10743 8.97927 4.0944C9.96652 5.08165 10.2407 6.51196 9.80178 7.74529L20.6465 18.5901L18.5252 20.7114L7.67936 9.86703C6.44627 10.3054 5.01649 10.0311 4.02952 9.04415C3.04227 8.0569 2.7681 6.62659 3.20701 5.39326L5.44373 7.62994C6.02952 8.21572 6.97927 8.21572 7.56505 7.62994C8.15084 7.04415 8.15084 6.0944 7.56505 5.50862L5.32943 3.27152ZM15.6968 5.15506L18.8788 3.38729L20.293 4.80151L18.5252 7.98349L16.7574 8.33704L14.6361 10.4584L13.2219 9.04415L15.3432 6.92283L15.6968 5.15506ZM8.62572 12.9332L10.747 15.0546L5.79729 20.0043C5.2115 20.5901 4.26175 20.5901 3.67597 20.0043C3.12464 19.453 3.09221 18.5792 3.57867 17.99L3.67597 17.883L8.62572 12.9332Z"></path></svg>
                        Skills
                    </a>
                    <a className='navbar-item' href='#projects'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M440 432H72a40 40 0 01-40-40V120a40 40 0 0140-40h75.89a40 40 0 0122.19 6.72l27.84 18.56a40 40 0 0022.19 6.72H440a40 40 0 0140 40v240a40 40 0 01-40 40zM32 192h448" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="40" /></svg>
                        Projects
                    </a>
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