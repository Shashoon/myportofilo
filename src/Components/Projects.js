import React from 'react';
import '../Styles/Projects.css';

const Projects = () => {

    return (
        <section className='sub-section' id='projects'>
            <h2>Projects</h2>
            <div className='projects-dock'>
                <div className='project-card'>
                    <img className='project-image' src={require('../Images/crypto-dashboard.png')} alt='something' />
                    <h3>Crypto Dashboard</h3>
                    <p className='subtext'>A Crypto currency dashboard. includes - crypto news, coins live tracker, coins converter</p>
                    <hr />
                    <p className='subtext'><a href='https://github.com/iSharonMazcka' className='project-link'>View here</a></p>
                </div>
                <div className='project-card'>
                    <img className='project-image' src={require('../Images/crypto-dashboard.png')} alt='something' />
                    <h3>Crypto Dashboard</h3>
                    <p className='subtext'>A Crypto currency dashboard. includes - crypto news, coins live tracker, coins converter</p>
                    <hr />
                    <p className='subtext'><a href='https://github.com/iSharonMazcka' className='project-link'>View here</a></p>
                </div>
                <div className='project-card'>
                    <img className='project-image' src={require('../Images/crypto-dashboard.png')} alt='something' />
                    <h3>Crypto Dashboard</h3>
                    <p className='subtext'>A Crypto currency dashboard. includes - crypto news, coins live tracker, coins converter</p>
                    <hr />
                    <p className='subtext'><a href='https://github.com/iSharonMazcka' className='project-link'>View here</a></p>
                </div>
            </div>
        </section>
    );
}

export default Projects;