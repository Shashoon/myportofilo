import React from 'react';
import '../Styles/Info.css';
import Skills from './Skills';
import Counter from './Counter';

const Info = () => {


    return (
        <section className='info-section' id="about">
            <Counter />
            <div className='info'>
                <h2>About Me</h2>
                <p>
                    Hi there !<br />
                    My name is Sharon Mazcka.<br />
                    I am a software engineer specializing in the web section.<br />
                    I have worked as a full-Stack developer at Loglig company, i`m also develop web apps as a freelancer.<br />
                    Has over 2 years of experience in web development that gives me in-depth knowledge and experience in development of web applications using various technologies.
                    <br /><br />
                    I`m really passionate to learn, research and discover new things.<br />
                    Has the ability to work and learn independently at high level, A fire and forget worker, creative and highly desired to study.<br />
                    In fact, everything related to technology is my cup of tea.
                </p>
            </div>
        </section>
    );

}

export default Info;