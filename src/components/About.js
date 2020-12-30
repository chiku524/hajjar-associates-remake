import React from 'react';
import voda1 from '../images/VodaI.jpg';
import '../css/about.css';

const About = () => {
    return (
        <div className='aboutContainer'>
            <img src={voda1} alt='voda' />
            <div className='whoWeAre'>
                <div className='content'>
                    <h1>Who We Are</h1>
                    <p>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
                </div>
            </div>
            <div className='aboutUs'>
                <div className='stuff'>
                    <div className='content'>
                        <h1>About MHA</h1>
                        <p>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
                    </div>
                    <img src={voda1} alt='voda' />
                </div>
            </div>
            <div className='expertise'>
                <div className='stuff'>
                    <img src={voda1} alt='voda' />
                    <div className='content'>
                        <h1>Our Expertise</h1>
                        <p>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
                    </div>
                </div>
            </div>
            <div className='team'>
                <div className='stuff'>
                    <div className='content'>
                        <h1>Our Team</h1>
                        <p>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
                    </div>
                    <img src={voda1} alt='voda' />
                </div>
            </div>
        </div>
    )
}

export default About;