import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../Style/CreateResume.css';
import resumeImage from '../../Media/Resume-amico.png';
import { useNavigate } from 'react-router-dom';

const CreateResumeSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create'); // Replace '/create' with your target route
  };

  return (
    <section className="CreateResume py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <div className="heading">
              <h1>Make your <br />First Simple Resume</h1>
            </div>
            <div className="paragraph pt-3">
              <p>
                Create a professional resume effortlessly with our free, user-friendly Resume Builder — 
                designed specifically to help students showcase their skills, education, and experience with confidence.
              </p>
            </div>
            <div className="create-btn">
              <button onClick={handleClick}>
                Create Resume
              </button>
            </div>
          </Col>

          <Col lg={6} md={12}>
            <div className="video-wrapper">
              <img src={resumeImage} alt="Resume Preview" className="resume-video" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CreateResumeSection;
