import React, { useEffect, useRef } from 'react';
import '../Styles/Cubes.css';

const Cubes = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = useRef(null);

    const list = [
        (
            <div className='cube-container'>
                <div className='cube' id='react'></div>
                <a className='cube-title'>React JS</a>
            </div>
        ),
        (
            <div className='cube-container'>
                <div className='cube' id='javascript'></div>
                <a className='cube-title'>JavaScript</a>
            </div>
        ),
        (< div className='cube-container' >
            <div className='cube' id='html'></div>
            <a className='cube-title'>HTML</a>
        </div >
        ),
        (
            <div className='cube-container'>
                <div className='cube' id='css'></div>
                <a className='cube-title'>CSS</a>
            </div>
        ),
        (
            <div className='cube-container'>
                <div className='cube' id='bootstrap'></div>
                <a className='cube-title'>Bootstrap</a>
            </div>
        ),
        (
            <div className='cube-container'>
                <div className='cube' id='nodejs'></div>
                <a className='cube-title'>NodeJS</a>
            </div>
        ),
        (
            <div className='cube-container'>
                <div className='cube' id='mongodb'></div>
                <a className='cube-title'>MongoDb</a>
            </div>
        ),
        (
            <div className='cube-container'>
                <div className='cube' id='csharp'></div>
                <a className='cube-title'>C#</a>
            </div>
        ),
        (
            <div className='cube-container'>
                <div className='cube' id='github'></div>
                <a className='cube-title'>Github</a>
            </div>
        )
    ]

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === list.length - 1 ? 0 : prevIndex + 1
                ),
            1000
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

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
                <div className='cube' id='csharp'></div>
                <a className='cube-title'>C#</a>
            </div>
            <div className='cube-container'>
                <div className='cube' id='github'></div>
                <a className='cube-title'>Github</a>
            </div>
            <div className='slidershow'>
                <div className='slider' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {
                        list.map((curr, index) => (
                            <div className='slide' key={index}>
                                {
                                    curr
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cubes;
