import React, {useState} from 'react';
import TrackVisibility from 'react-on-screen'
import '../css/home.css'
import landingPagePhoto from '../images/engineering-consulting.jpg';
import blueLogoNoText from '../images/blueLogoNoText.png';


const HoverRenders = ({isVisible}) => {
    return (
        <div className={isVisible ? 'fade-in services' : 'services'}>
            <h1>What We Do</h1>
            <p>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
        </div>
    )
}

const Home = () => {

    return (
        <div className='homeContainer'>
            <img className='photo' src={landingPagePhoto} alt='gotta change this doe' />
            <div className='logoContainer'>
                <div className='name'><h1>M. Hajjar & Associates</h1></div>
                <img className='logo' src={blueLogoNoText} alt='logo' />
                <div className='spanContainer'>
                    <span className='item1'><h2>Consulting.</h2></span>
                    <span className='item2'><h2>Construction.</h2></span>
                    <span className='item3'><h2>Development.</h2></span>
                </div>
            </div>
            <TrackVisibility once>
                <HoverRenders />
            </TrackVisibility>
        </div>
    )
}

export default Home;