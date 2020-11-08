import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TrackVisibility from 'react-on-screen';
import VisibilitySensor from 'react-visibility-sensor';
import { InView, useInView } from 'react-intersection-observer';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import '../css/home.css';
import landingPagePhoto from '../images/engineering-consulting.jpg';
import wallCutoff from '../images/wallCutoff.png';
import consulting from '../images/consultingImg.webp';
import construction from '../images/construction.webp';
import development from '../images/development.webp';
import hibiscus from '../images/38HibiscusIsland.jpg';
import voda1 from '../images/VodaI.jpg';
import alton from '../images/MiamiBeachFifth&Alton.jpg';
import consultingIcon from '../images/consultingIcon.png';
import constructionIcon from '../images/constructionIcon.png';

const projects = [
    {
        src: hibiscus,
        altText: 'Slide 1',
        caption: '38 Hibiscus Island'
    },
    {
        src: voda1,
        altText: 'Slide 2',
        caption: 'Voda I Residences'
    },
    {
        src: alton,
        altText: 'Slide 3',
        caption: 'Miami Beach Fifth & Alton'
    }
]

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if(animating) return;
        const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if(animating) return;
        const nextIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
      if(animating) return;
      setActiveIndex(newIndex);
    }

    const slides = projects.map((item) => {
      return(
          <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item}>
              <img src={item.src} alt={item.altText} />
              <CarouselCaption captionHeader={item.caption} />
          </CarouselItem>
      )
    })

    return (
        <div className='container-fluid'>
            <img className='photo' src={landingPagePhoto} alt='gotta change this doe' />
            <div className='logoContainer'>
                <div className='name'><h1>M. Hajjar & Associates</h1></div>
                <img className='logo' src={wallCutoff} alt='logo' />
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
                            <p className='ref' ref={ref}>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
                        </div>
                        <div>
                            <div className='carouselContainer'>
                                <Carousel activeIndex={activeIndex} next={next} previous={previous} className='carousel-fade'>
                                    <CarouselIndicators items={projects} activeIndex={activeIndex} onClickHandler={goToIndex} />
                                    {slides}
                                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                                </Carousel>
                            </div>
                        </div>
                        
                    </div>
                )}
            </InView >
            <InView >
                {({inView, ref}) => (
                    <div className='background'>
                        <div ref={ref} className={inView ? 'fade-in statsContainer' : 'statsContainer'}>
                            <hr className='fade-in line' />
                            <div className='stats'>
                                <hr className='fade-in line' />
                                <div className='stat stat1'>
                                    <p className='number'>1990</p>
                                    <p className='description'>Year Published</p>
                                </div>
                                <hr className='fade-in line' />
                                <div className='stat stat2'>
                                    <p className='number'>100 +</p>
                                    <p className='description'>Projects Completed</p>
                                </div>
                                <hr className='fade-in line' />
                                <div className='stat stat3'>
                                    <p className='number'>4</p>
                                    <p className='description'>Registered Licensed States</p>
                                </div>
                                <hr className='fade-in line' />
                                <div className='stat stat4'>
                                    <p className='number'>5+</p>
                                    <p className='description'>Areas of Expertise</p>
                                </div>
                                <hr className='fade-in line' />
                            </div>
                        </div>
                    </div>
                    
                )}
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
                                        <img src={consultingIcon} alt='wix' className='consulting' />
                                        <h4>Consulting</h4>
                                        <p>M. Hajjar & Associates, Inc. consults in planning, design, modification, or rehabilitation of public and private infrastructure. Our engineers and architects are registered professionals who practice in many disciplines, including civil engineering, structural engineering, and architecture.</p>
                                        <div><span>Learn more!</span></div>
                                    </div>
                                </Link>
                                <Link to='/construction'>
                                    <div className='card'>
                                        <img src={constructionIcon} alt='wix' />
                                        <h4>Construction</h4>
                                        <p>M. Hajjar & Associates, Inc. construction services range from new built projects, maintenance projects or just simple renovations and rehabilitation. Our team has many years of experience within the field with a broad range of projects.</p>
                                        <div><span>Learn more!</span></div>
                                    </div>
                                </Link>
                                <Link to='/development'>
                                    <div className='card'>
                                        <img src={development} alt='wix' />
                                        <h4>Development</h4>
                                        <p>M. Hajjar & Associates, Inc. works with the city for affordable housing, new retail areas, private homes and condominiums as well as mixed-use projects. These are the projects that all construction, engineering, and other services are done in house.</p>
                                        <div><span>Learn more!</span></div>
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