import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css';
import icon from '../../Media/resume_942748.png';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Dropdown } from 'react-bootstrap';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
  } = useAuth0();

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

        <div className="d-flex align-items-center gap-2">
          {!isLoading && (
            isAuthenticated ? (
              <Dropdown align="end">
                <Dropdown.Toggle className="account d-flex align-items-center gap-2">
                  <i className="bi bi-person-circle"></i>
                  <span className="user-name">{user?.name?.split(' ')[0]}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item  className='d-flex gap-2' id='drop-down' as={NavLink} to="/account"><i className="bi bi-person-circle"></i>Account</Dropdown.Item>
                  <Dropdown.Item className='d-flex gap-2' id='drop-down' as={NavLink} to="/setting"><i className="bi bi-gear"></i>Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className='d-flex gap-2' id='drop-down' onClick={() => logout({ returnTo: window.location.origin })}>
                   <i className="bi bi-box-arrow-left"></i> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <button
                className="account"
                onClick={() => loginWithRedirect()}
              >
                <i className='bi bi-person'></i> Sign in
              </button>
            )
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
