import React, { useState } from 'react';
import { PersonalInfo } from '../components/Personal-Info/PersonalInfo';
import './Resume.css';
import { Container, Row } from 'react-bootstrap';
import EducationInfo from '../components/EducationForm/EducationInfo';
import Experience from '../components/ExperienceForm/Experience';

const ResumePage = () => {
  const [formData, setFormData] = useState({
    personalInfo: {},
    educationInfo: {},
    experienceInfo: {},
  });

  return (
    <div className="resume-page py-5">
      <Container>
        <Row>
          <PersonalInfo formData={formData} setFormData={setFormData} />
        </Row>
        <Row>
          <EducationInfo formData={formData} setFormData={setFormData} /> {/* ✅ fix here */}
        </Row>
        <Row>
          <Experience formData={formData} setFormData={setFormData} /> {/* ✅ fix here */}
        </Row>
      </Container>
    </div>
  );
};

export default ResumePage;
