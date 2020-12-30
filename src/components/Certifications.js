import React from 'react';
import '../css/certifications.css';
import voda1 from '../images/VodaI.jpg';

const Certifications = () => {
    return (
        <div className='certificationsContainer'>
            <h1>Certifications</h1>
            <div className='certs'>
                <div className='cert'>
                    <img src={voda1} alt='voda' />
                    <div className='item'>
                        <h3>Certification</h3>
                        <p>We are the best, but let's add some writing here</p>
                    </div>
                </div>
                <div className='cert'>
                    <img src={voda1} alt='voda' />
                    <div className='item'>
                        <h3>Certification</h3>
                        <p>We are the best, but let's add some writing here</p>
                    </div>
                </div>
                <div className='cert'>
                    <img src={voda1} alt='voda' />
                    <div className='item'>
                        <h3>Certification</h3>
                        <p>We are the best, but let's add some writing here</p>
                    </div>
                </div>
                <div className='cert'>
                    <img src={voda1} alt='voda' />
                    <div className='item'>
                        <h3>Certification</h3>
                        <p>We are the best, but let's add some writing here</p>
                    </div>
                </div>
                <div className='cert'>
                    <img src={voda1} alt='voda' />
                    <div className='item'>
                        <h3>Certification</h3>
                        <p>We are the best, but let's add some writing here</p>
                    </div>
                </div>
                <div className='cert'>
                    <img src={voda1} alt='voda' />
                    <div className='item'>
                        <h3>Certification</h3>
                        <p>We are the best, but let's add some writing here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications;