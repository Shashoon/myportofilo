import React from 'react';
import '../Styles/Projects.css';

const Projects = () => {

    return (
        <section className='sub-section' id='projects'>
            <div className='line'></div>
            <h2>Projects</h2>
            <div className='projects-dock'>
                <div className="card">
                    <img className='card-image' src={require('../Images/wordle.png')} />
                    <div className="card-overlay">
                        <div className="overlay-text">
                            <h3>Wordle</h3>
                            <p>Clone of the famous online game - 'Wordle'.</p>
                            <a href="https://shashoon.github.io/wordle/" target='_blank' className="button">View Here</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className='card-image' src={require('../Images/rootix.png')} />
                    <div className="card-overlay">
                        <div className="overlay-text">
                            <h3>Rootix</h3>
                            <p>
                                Rootix is a website made to plan a route that goes through several destinations the fastest way.
                            </p>
                            <a href="https://shashoon.github.io/rootix/" target='_blank' className="button">View Here</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className='card-image' src={require('../Images/crypto-dashboard.png')} />
                    <div className="card-overlay">
                        <div className="overlay-text">
                            <h3>Crypto Dashboard</h3>
                            <p>Crypto currency dashboard. includes - crypto news, coins live tracker and coins converter.</p>
                            <a href="#" className="button">View Here</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;