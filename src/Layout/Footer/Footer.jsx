import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6}>
            <p className="mb-0">© 2025 Naya Resume. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <a
              href="https://github.com/Basit2212"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon mx-2"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/basit-khan2212"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon mx-2"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href="mailto:contactbasit22@email.com"
              className="footer-icon mx-2"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
