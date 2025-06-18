import React, { useState } from 'react';
import { PersonalInfo } from '../components/Personal-Info/PersonalInfo';
import './Resume.css';
import { Container, Row, Col, } from 'react-bootstrap';
import EducationInfo from '../components/EducationForm/EducationInfo';
import Experience from '../components/ExperienceForm/Experience';
import Skill from '../components/SkillsForm/Skill';
import ResumePreview from '../components/ResumePreview/ResumePreview'
// import Project from '../components/ProjectForm/Project';


const ResumePage = () => {
  const [previewMode, setPreviewMode] = useState(false);

  const [formData, setFormData] = useState({
    personalInfo: {},
    educationInfo: {},
    experienceInfo: [{
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    }],
    skillInfo: {},

  });

  const isFormValid = () => {
    for (const sectionKey in formData) {
      const section = formData[sectionKey];

      // If the section is empty
      if (!section || Object.keys(section).length === 0) {
        return false;
      }

      for (const field in section) {
        const value = section[field];
        if (!value || value.toString().trim() === "") {
          return false;
        }
      }
    }
    return true;
  };



  const handleSubmitAll = () => {
    if (!isFormValid()) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    alert("Form submitted successfully!");
    console.log(formData);
    setPreviewMode(true)
  };

  return (
    <div className="resume-page py-5">
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
            {/* <Row>
              <Project formData={formData} setFormData={setFormData}/>
            </Row> */}
            <Row>
              <Skill formData={formData} setFormData={setFormData} />
            </Row>
            <Row className="mt-4">
              <Col className="text-center">
                <button className='submit-btn' onClick={handleSubmitAll}>
                  Submit
                </button>
              </Col>
            </Row>
          </>
        ) : (
          <>

            <ResumePreview formData={formData} />
            <Row className="mt-4">
              <Col className="text-center">
                <button className='submit-btn' onClick={() => setPreviewMode(false)}>
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
