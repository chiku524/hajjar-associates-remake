import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { InView, useInView } from 'react-intersection-observer';
import {Carousel, CarouselItem, CarouselControl} from 'reactstrap';
import '../css/home.css';
import wallCutoff from '../images/wallCutoff.png';
import hibiscus from '../images/38HibiscusIsland.jpg';
import voda1 from '../images/VodaI.jpg';
import alton from '../images/MiamiBeachFifth&Alton.jpg';

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
    const history = useHistory();

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

    const whatWeDoRedirect = () => {
        history.push('/what-we-do')
    }

    const industriesRedirect = () => {
        history.push('/industries')
    }

    const ourServicesRedirect = () => {
        history.push('/about')
    }

    const slides = projects.map((item) => {
      return(
          <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.altText}>
              <img src={item.src} alt={item.altText} />
              {/* <CarouselCaption captionHeader={item.caption} /> */}
          </CarouselItem>
      )
    })

    return (
        <div className='container-fluid'>
            <div className='containTheCarousel'>
                <div className='carouselContainer'>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous} className='carousel-fade'>
                        {/* <CarouselIndicators items={projects} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>
            </div>
            <InView >
                {({inView, ref}) => (
                    <div className={inView ? 'fade-in background' : 'background'}>
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
                {({inView, ref}) => (
                    <div className='companyDescriptionContainer'>
                        <div className={inView ? 'fade-in companyDescription' : 'companyDescription'}>
                            <h1>What We Do</h1>
                            <p className='ref' ref={ref}>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
                            <button onClick={whatWeDoRedirect}>LEARN MORE</button>
                        </div>
                    </div>
                )}
            </InView >
            <InView >
                {({inView, ref}) => 
                    <div className='servicesContainer'>
                        <div className={inView ? 'fade-in services' : 'services'}>
                            <div className='container'>
                                <h1>Our Services</h1>
                                <div ref={ref} className='content'>
                                    <p>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
                                </div> 
                                <button onClick={ourServicesRedirect}>LEARN MORE</button>
                            </div>   
                            <div className='opaque' />
                            <img src={voda1} />            
                        </div>
                    </div>
                }
            </InView>
            <InView >
                {({inView, ref}) => 
                    <div className='industriesContainer'>
                        <div className={inView ? 'fade-in industries' : 'industries'}>
                            <div className='opaque' />
                            <img src={voda1} /> 
                            <div className='container'>
                                <div className='contentContainer'>
                                    <h1>Industries</h1>
                                    <div ref={ref} className='content'>
                                        <p>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
                                    </div> 
                                    <button onClick={industriesRedirect}>LEARN MORE</button>
                                </div>
                            </div>               
                        </div>
                    </div>
                }
            </InView>
            <InView >
                {({inView, ref}) => 
                    <div className='ending'>
                        <div className={inView ? 'fade-in mha' : 'mha'}>
                            <div className='container'>
                                <h1>Work With MHA</h1>
                                <div ref={ref} className='content'>
                                    <p>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
                                </div> 
                                <button>CONTACT US</button>
                            </div>             
                        </div>
                    </div>
                }
            </InView>
        </div>
    )
}

export default Home;