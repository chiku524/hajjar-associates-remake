import React from 'react';
import {Link} from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='borders'>
                <div className='firstBorder'></div>
                <div className='secondBorder'></div>
                <div className='thirdBorder'></div>
            </div>
            <div className='content'>
                <div className='servicesTitle'>
                    <h4>Services</h4>
                    <div className='services'>
                        <Link to='/consulting'>
                            <p>Consulting</p>
                        </Link>
                        <Link to='/construction'>
                            <p>Construction</p>
                        </Link>
                        <Link to='/development'>
                            <p>Development</p>
                        </Link>
                    </div>
                </div>
                <div className='projectTitle'>
                    <h4>Projects</h4>
                    <div className='projects'>
                        <Link to='/consulting/private-projects'>
                            <p>Private Projects</p>
                        </Link>
                        <Link to='/consulting/public-projects'>
                            <p>Public Projects</p>
                        </Link>
                    </div>
                </div>
                <div className='contactTitle'>
                    <h4>Contact</h4>
                    <div className='info'>
                        <p>45 Valencia Avenue</p>
                        <p>Coral Gables, FL 33134</p>
                        <br />
                        <p>Email: info@mhajjar.com</p>
                        <p>Phone: (305)445-2399</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;