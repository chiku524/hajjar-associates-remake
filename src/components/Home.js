import React, {useEffect} from 'react';
import TrackVisibility from 'react-on-screen';
import VisibilitySensor from 'react-visibility-sensor';
import { InView, useInView } from 'react-intersection-observer';
import '../css/home.css';
import landingPagePhoto from '../images/engineering-consulting.jpg';
import blueLogoNoText from '../images/blueLogoNoText.png';
import { visitors } from '@babel/traverse';

const Home = () => {

    return (
        <div className='homeContainer'>
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
            <InView triggerOnce>
                {({inView, ref, entry}) => (
                    <div className={inView ? 'fade-in companyDescription' : 'companyDescription'}>
                        <h1>What We Do</h1>
                        <p ref={ref}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                )
                }
            </InView>
            <InView triggerOnce>
                {({inView, ref}) => 
                    <hr ref={ref} className={inView ? 'fade-in line' : 'line'}/>
                }
            </InView>
            <InView triggerOnce>
                {({inView, ref}) => 
                    <div className='servicesContainer'>
                        <div className={inView ? 'fade-in services' : 'services'}>
                            <h1>Our Services</h1>
                            <div ref={ref} className='cards'>
                                <div className='card'>
                                    <h4>Consulting</h4>
                                    <p>M. Hajjar & Associates, Inc. consults in planning, design, modification, or rehabilitation of public and private infrastructure. Our engineers and architects are registered professionals who practice in many disciplines, including civil engineering, structural engineering, and architecture.</p>
                                </div>
                                <div className='card'>
                                    <h4>Construction</h4>
                                    <p>M. Hajjar & Associates, Inc. construction services range from new built projects, maintenance projects or just simple renovations and rehabilitation. Our team has many years of experience within the field with a broad range of projects.</p>
                                </div>
                                <div className='card'>
                                    <h4>Development</h4>
                                    <p>M. Hajjar & Associates, Inc. works with the city for affordable housing, new retail areas, private homes and condominiums as well as mixed-use projects. These are the projects that all construction, engineering, and other services are done in house.</p>
                                </div>
                            </div>                
                        </div>
                    </div>
                }
            </InView>
        </div>
    )
}

export default Home;