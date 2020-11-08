import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import TrackVisibility from 'react-on-screen';
import VisibilitySensor from 'react-visibility-sensor';
import { InView, useInView } from 'react-intersection-observer';
import '../css/home.css';
import landingPagePhoto from '../images/engineering-consulting.jpg';
import blueLogoNoText from '../images/blueLogoNoText.png';

const Home = () => {

    return (
        <div className='container-fluid'>
            <img className='photo' src={landingPagePhoto} alt='gotta change this doe' />
            <hr className='lineUnderPhoto'/>
            <div className='logoContainer'>
                <div className='name'><h1>M. Hajjar & Associates</h1></div>
                <img className='logo' src={blueLogoNoText} alt='logo' />
                <div className='spanContainer'>
                    <span className='item1'><h2>Consulting.</h2></span>
                    <span className='item2'><h2>Construction.</h2></span>
                    <span className='item3'><h2>Development.</h2></span>
                </div>
            </div>
            <InView >
                {({inView, ref}) => (
                    <div className='companyDescriptionContainer'>
                        <div className={inView ? 'fade-in companyDescription' : 'companyDescription'}>
                            <h1>What We Do</h1>
                            <p ref={ref}>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
                        </div>
                    </div>
                )
                }
            </InView>
            <InView >
                {({inView, ref}) => 
                    <hr ref={ref} className={inView ? 'fade-in line' : 'line'}/>
                }
            </InView>
            <InView >
                {({inView, ref}) => 
                    <div className='servicesContainer'>
                        <div className={inView ? 'fade-in services' : 'services'}>
                            <h1>Our Services</h1>
                            <div ref={ref} className='cards'>
                                <Link to='/consulting'>
                                    <div className='card'>
                                        <h4>Consulting</h4>
                                        <p>M. Hajjar & Associates, Inc. consults in planning, design, modification, or rehabilitation of public and private infrastructure. Our engineers and architects are registered professionals who practice in many disciplines, including civil engineering, structural engineering, and architecture.</p>
                                        <div><p>Learn more!</p></div>
                                    </div>
                                </Link>
                                <Link to='/construction'>
                                    <div className='card'>
                                        <h4>Construction</h4>
                                        <p>M. Hajjar & Associates, Inc. construction services range from new built projects, maintenance projects or just simple renovations and rehabilitation. Our team has many years of experience within the field with a broad range of projects.</p>
                                        <div><p>Learn more!</p></div>
                                    </div>
                                </Link>
                                <Link to='/development'>
                                    <div className='card'>
                                        <h4>Development</h4>
                                        <p>M. Hajjar & Associates, Inc. works with the city for affordable housing, new retail areas, private homes and condominiums as well as mixed-use projects. These are the projects that all construction, engineering, and other services are done in house.</p>
                                        <div><p>Learn more!</p></div>
                                    </div>
                                </Link>
                            </div>                
                        </div>
                    </div>
                }
            </InView>
        </div>
    )
}

export default Home;