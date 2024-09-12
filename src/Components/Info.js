import React from 'react';
import '../Styles/Info.css';
import Skills from './Skills';
import Counter from './Counter';

const Info = () => {


    return (
        <section className='info-section' id="about">
            {/* <Counter /> */}
            <div className='info-content'>
                <h2>About Me</h2>
                <p>
                    Hi there !<br />
                    My name is Sharon Mazcka. a passionate Software Engineer with expertise in web development. <br />
                    With over 3 years of experience, I specialize in crafting full-stack web applications using modern technologies. <br />
                    I’ve had the opportunity to work as a full-stack developer at a startup company - Weirdoz and Loglig. <br />
                    I also get to take on exciting projects as a freelancer, allowing me to tackle diverse challenges and hone my skills.
                    <br /><br />

                    I thrive on exploring new technologies, continuously learning, and pushing the boundaries of what's possible in the digital space.
                    My independent work ethic, combined with a keen eye for detail and a creative mindset, enables me to deliver innovative solutions that exceed expectations. <br />
                    I am committed to growth, both personally and professionally, and am driven by a genuine passion for all things tech.

                </p>
            </div>

            <Skills />
        </section>
    );

}

export default Info;