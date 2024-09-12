import React from 'react';
import Contact from './Components/Contact';
import Info from './Components/Info';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';

const App = () => {

    return (
        <div>
            <Navbar />
            <Home />
            <Projects />
            <Info />
            <Contact />
        </div>
    )
}

export default App;