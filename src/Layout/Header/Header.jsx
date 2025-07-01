import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'; 
import '../Header/Header.css';
import icon from '../../Media/resume_942748.png'
import { useState, useEffect } from 'react';

function Header() {
 const [showNavbar, setShowNavbar] = useState(false)
  useEffect(() => {
    const handleScroll = ()=>{
      if(window.scrollY > 100){
        setShowNavbar(true)
      }
      else{
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
           <img src={icon} alt="" /> <span>Naya Resume</span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <div className="navbarCollapse m-auto d-flex gap-4">

            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/resume" className="nav-link">Resume</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
            

          </div>
        </Navbar.Collapse>
        <div className="d-flex">
         <NavLink to="/login" className="account"> <i className='bi bi-person'></i> Sign in</NavLink>
  

        </div>
      </Container>
    </Navbar>



  );
}

export default Header;
