import React, {useState} from "react";
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import {Navbar, NavbarBrand, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import blueLogo from '../images/blueLogoNoText.png';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [fade, setFade] = useState('');

    const toggle = () => setDropdownOpen(!dropdownOpen);

    const handleScroll = () => {
        if(window.scrollY > 0 && fade !== 'fadein') {
            setFade('fadein')
        } else if(window.scrollY <= 0) {
            setFade('fadeout')
        }
    }

    window.addEventListener('scroll', handleScroll);

    return(
        <div className={`${fade} navbarContainer`}>
            <Navbar light expand='xs' className='navbar'>
                <Link to='/home'>
                    <NavbarBrand to="/home" className='navbarLogo'>
                        <div className='spanContainer'>
                            <img className='logo' src={blueLogo} alt='logo' />
                            <div className='items'>
                                <span className='item item1'><h2>Consulting.</h2></span>
                                <span className='item item2'><h2>Construction.</h2></span>
                                <span className='item item3'><h2>Development.</h2></span>
                            </div>
                        </div>
                    </NavbarBrand>
                </Link>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/home" className="nav-link">
                            Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/what-we-do' className='nav-link'>
                            What We Do
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/industries' className='nav-link'>
                            Industries
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/certifications' className='nav-link'>
                            Certifications
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact" className="nav-link">
                            Contact Us
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;