import React from 'react';
import '../Styles/Home.css';
import Cubes from './Cubes';

const Home = () => {

    return (
        <section className='home'>

            <div className='titles-area'>
                <div className='titles'>
                    <h1>Sharon Mazcka</h1>
                    <p>Full Stack Developer</p>
                    <div className='button'>
                        <a href='#contact' className=''>Contact Me</a>
                    </div>
                </div>

                <Cubes />
            </div>
        </section>
    )
}

export default Home;
