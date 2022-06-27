import React from 'react';
import '../Styles/Cubes.css';

const Cubes = () => {

    return (
        <div className='cubes-dock'>
            <div className='cube-container'>
                <div className='cube' id='react'></div>
                <a className='cube-title'>React JS</a>
            </div>
            <div className='cube-container'>
                <div className='cube' id='javascript'></div>
                <a className='cube-title'>JavaScript</a>
            </div>
            <div className='cube-container'>
                <div className='cube' id='html'></div>
                <a className='cube-title'>HTML</a>
            </div>
            <div className='cube-container'>
                <div className='cube' id='css'></div>
                <a className='cube-title'>CSS</a>
            </div>
            <div className='cube-container'>
                <div className='cube' id='bootstrap'></div>
                <a className='cube-title'>Bootstrap</a>
            </div>
            <div className='cube-container'>
                <div className='cube' id='nodejs'></div>
                <a className='cube-title'>NodeJS</a>
            </div>
            <div className='cube-container'>
                <div className='cube' id='mongodb'></div>
                <a className='cube-title'>MongoDb</a>
            </div>
            <div className='cube-container'>
                <div className='cube' id='java'></div>
                <a className='cube-title'>Java</a>
            </div>
            <div className='cube-container'>
                <div className='cube' id='github'></div>
                <a className='cube-title'>Github</a>
            </div>
        </div>
    )
}

export default Cubes;
