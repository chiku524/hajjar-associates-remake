import React from 'react';
import '../css/industries.css';
import voda1 from '../images/VodaI.jpg';

const Industries = () => {
    return (
        <div className='industriesContainer'>
            <img src={voda1} alt='voda' />
            <div className='content'>
                <h1>Industries</h1>
                <p>M. Hajjar & Associates has completed over 100 projects within both the public and private sectors. We provide consulting, construction, and development services to all sorts of properties that range from schools and condominiums to private owned homes and storage units.</p>
            </div>
            <div className='categories'>
                <div className='item item1'>
                    <img src={voda1} alt='voda' />
                    <h3>Consulting</h3>
                </div>
                <div className='item item2'>
                    <h3>Consulting</h3>
                    <img src={voda1} alt='voda' />
                </div>
                <div className='item item3'>
                    <h3>Consulting</h3>  
                    <img src={voda1} alt='voda' />
                </div>
                <div className='item item4'>
                    <h3>Consulting</h3>
                    <img src={voda1} alt='voda' />
                </div>
                <div className='item item5'>
                    <h3>Consulting</h3> 
                    <img src={voda1} alt='voda' /> 
                </div>
                <div className='item item6'>
                    <h3>Consulting</h3>
                    <img src={voda1} alt='voda' /> 
                </div>
                <div className='item item7'>
                    <h3>Consulting</h3>
                    <img src={voda1} alt='voda' />
                </div>
                <div className='item item8'>
                    <h3>Consulting</h3>
                    <img src={voda1} alt='voda' />
                </div>
                <div className='item item9'>
                    <h3>Consulting</h3> 
                    <img src={voda1} alt='voda' />
                </div>
            </div>
        </div>
    )
}

export default Industries;