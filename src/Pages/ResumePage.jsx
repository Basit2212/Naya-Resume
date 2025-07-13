import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PersonalInfo } from '../components/Personal-Info/PersonalInfo';
import EducationInfo from '../components/EducationForm/EducationInfo';
import Experience from '../components/ExperienceForm/Experience';
import Skill from '../components/SkillsForm/Skill';
import ResumePreview from '../components/ResumePreview/ResumePreview';
import Project from '../components/ProjectForm/Project';
import './Resume.css';

const ResumePage = () => {
  const defaultData = {
    personalInfo: {},
    educationInfo: [
      {
        institution: '',
        degree: '',
        field: '',
        startYear: '',
        endYear: '',
        grade: '',
        location: '',
      },
    ],
    experienceInfo: [
      {
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
    skillInfo: {},
    projectsInfo: [
      {
        title: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
  };

  const [previewMode, setPreviewMode] = useState(false);
  const [formData, setFormData] = useState(defaultData);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('resumeData');
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(JSON.parse(JSON.stringify(parsed))); // ensure mutability
      }
    } catch (err) {
      console.warn('Invalid resumeData in localStorage. Using defaults.');
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmitAll = () => {
    alert('Form submitted successfully!');
    console.log(formData);
    setPreviewMode(true);
  };

  const clearForm = () => {
    localStorage.removeItem('resumeData');
    setFormData(defaultData);
    setPreviewMode(false);
  };

  return (
    <div className="resume-page">
      <Container>
        {!previewMode ? (
          <>
            <Row>
              <PersonalInfo formData={formData} setFormData={setFormData} />
            </Row>
            <Row>
              <EducationInfo formData={formData} setFormData={setFormData} />
            </Row>
            <Row>
              <Experience formData={formData} setFormData={setFormData} />
            </Row>
            <Row>
              <Project formData={formData} setFormData={setFormData} />
            </Row>
            <Row>
              <Skill formData={formData} setFormData={setFormData} />
            </Row>
            <Row className="mt-4">
              <Col className="d-flex justify-content-center gap-3 flex-wrap">
                <button className="submit-btn" onClick={handleSubmitAll}>
                  Submit
                </button>
                <button className="submit-btn danger-btn" onClick={clearForm}>
                  Clear All
                </button>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <ResumePreview formData={formData} />
            <Row className="mt-4">
              <Col className="text-center">
                <button className="submit-btn" onClick={() => setPreviewMode(false)}>
                  Back to Edit
                </button>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default ResumePage;
