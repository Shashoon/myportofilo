import React from 'react';
import '../Styles/Counter.css';

const Counter = () => {
    return (
        <section className='counter'>
            <div className='box-wrapper'>
                <div className='counter-item'>
                    <div className='item-digits'>3+</div>
                    <div className='item-text'>Years of experience</div>
                </div>
                <div className='counter-item'>
                    <div className='item-digits'>18</div>
                    <div className='item-text'>Projects completed</div>
                </div>
                <div className='counter-item'>
                    <div className='item-digits'>7</div>
                    <div className='item-text'>Technologies mastered</div>
                </div>
                <div className='counter-item'>
                    <div className='item-digits'>100+</div>
                    <div className='item-text'>Code commits</div>
                </div>

            </div>
        </section>
    )
}

export default Counter