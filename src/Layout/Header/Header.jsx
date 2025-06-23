import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'; // ✅ React Router
import '../Header/Header.css';
import icon from '../../Media/resume_942748.png'
import { useState, useEffect } from 'react';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true)
      }
      else {
        setShowNavbar(false)
      }

    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (




    <Navbar expand="lg" className={`custom-navbar ${showNavbar ? 'scrolled' : ''}`}>

      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={icon} alt="" /> Naya Resume
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex flex-column flex-lg-row align-items-left gap-5 py-5">

            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/resume" className="nav-link">Resume</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>




  );
}

export default Header;
