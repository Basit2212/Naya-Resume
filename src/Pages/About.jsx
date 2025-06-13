// About.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'

const About = () => {
  return (
    <section className="about-section py-5">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-4">
            <h1 className="about-title">About Naya Resume</h1>
            <p className="about-tagline">Empowering students to create professional resumes with ease.</p>
          </Col>

          <Col md={6}>
            <h3>Our Mission</h3>
            <p>
              Naya Resume was created to simplify resume building for students and fresh graduates. We believe everyone
              deserves a polished, professional resume without needing design or tech skills.
            </p>

            <h3>Why I Built This</h3>
            <p>
              As a CS student, I noticed how overwhelming resume creation can be. I built this project as part of my
              learning journey to help others while improving my skills as a full-stack developer.
            </p>

            <h3>Tech Stack</h3>
            <ul>
              <li>React.js & Bootstrap</li>
              <li>React Router DOM</li>
              <li>Custom CSS & Google Fonts</li>
              <li>Hosted on Netlify</li>
            </ul>
          </Col>

          <Col md={6}>
            <h3>About Me</h3>
            <p>
              I'm <strong>Basit Khan</strong>, a passionate student developer currently pursuing a degree in Artificial
              Intelligence. I enjoy building projects that solve real problems and help people.
            </p>
            <p>
              Feel free to connect with me:
              <br />
              <a href="mailto:contactbasit22@email.com">📧 contactbasit22@email.com</a>
              <br />
              <a href="https://github.com/Basit2212" target="_blank" rel="noreferrer">🐙 GitHub</a>
              <br />
              <a href="https://linkedin.com/in/basit-khan2212" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
