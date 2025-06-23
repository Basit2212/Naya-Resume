import React, { useState } from 'react';
import { PersonalInfo } from '../components/Personal-Info/PersonalInfo';
import './Resume.css';
import { Container, Row, Col, } from 'react-bootstrap';
import EducationInfo from '../components/EducationForm/EducationInfo';
import Experience from '../components/ExperienceForm/Experience';
import Skill from '../components/SkillsForm/Skill';
import ResumePreview from '../components/ResumePreview/ResumePreview'
import { useEffect } from 'react';
import Project from '../components/ProjectForm/Project';


const ResumePage = () => {
  const [previewMode, setPreviewMode] = useState(false);

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('resumeData')
    return saved ? JSON.parse(saved) : {
      personalInfo: {},

      educationInfo: [{
        institution: '',
        degree: '',
        field: '',
        startYear: '',
        endYear: '',
        grade: '',
        location: '',
      }],

      experienceInfo: [{
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      }],

      skillInfo: {},
      projectsInfo: [{
        title: '',
        startDate: '',
        endDate: '',
        description: ''
      }],
    }


  });

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(formData))


  }, [formData])




  const handleSubmitAll = () => {

    alert("Form submitted successfully!");
    console.log(formData);
    setPreviewMode(true)
  };
  const clearForm = () => {
    localStorage.removeItem('resumeData');
    setFormData({
      personalInfo: {},
      educationInfo: [{ institution: '', degree: '', field: '', startYear: '', endYear: '',}],
      experienceInfo: [{ company: '', position: '', location: '', startDate: '', endDate: '', description: '' }],
      skillInfo: {},
      projectsInfo: [{
        title: '',
        startDate: '',
        endDate: '',
        description: ''

      }]
    });
    setPreviewMode(false);
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
