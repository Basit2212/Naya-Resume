import React from 'react';
import { Container } from 'react-bootstrap';
import './ResumePreview.css';

const ResumePreview = ({ formData }) => {
  const { personalInfo, educationInfo, experienceInfo, skillInfo, projectsInfo } = formData;

  return (
    <Container className="resume-preview py-5">
      {/* Personal Info */}
      {personalInfo?.fullName && (
        <div className="heading">
          <h1 className="fw-bold pt-5 pb-1">{personalInfo.fullName}</h1>
          <p className="contact-info">
            {personalInfo.email && `${personalInfo.email} • `}
            {personalInfo.phoneNumber && `${personalInfo.phoneNumber} • `}
            {personalInfo.website && `LinkedIn: ${personalInfo.website}`}
          </p>
        </div>
      )}

      {/* Education */}
      {(educationInfo?.institution || educationInfo?.degree || educationInfo?.field) && (
        <section className="mt-4">
          <h5 className="section-title">EDUCATION</h5>
          <hr class="section-divider" />
          {educationInfo.institution && <p className="fw-bold mb-0">{educationInfo.institution}</p>}
          <div className='d-flex justify-content-between'>
          {(educationInfo.degree || educationInfo.field) && (
            <p className="fst-italic">
              {educationInfo.degree} {educationInfo.field && `in ${educationInfo.field}`}
            </p>
          )}
          {educationInfo.endYear && (
            <p className="text-muted">Expected {educationInfo.endYear}</p>
          )}</div>
        </section>
      )}

      {/* Experience */}
      {(experienceInfo?.company || experienceInfo?.position || experienceInfo?.description) && (
        <section className="mt-4">
          <h5 className="section-title">PROFESSIONAL EXPERIENCE</h5>
          <hr class="section-divider" />
          <div className='d-flex justify-content-between'>
          <p className="fw-bold mb-0">
            {experienceInfo.company} {experienceInfo.location && `– ${experienceInfo.location}`}
          </p>
          <p className="text-muted">
            <strong className='text-dark'> {experienceInfo.position}</strong> {experienceInfo.startDate && `| ${experienceInfo.startDate} – ${experienceInfo.endDate}`}
          </p>
          </div>
          {experienceInfo.description && (
            <p>{experienceInfo.description}</p>
          )}
        </section>
      )}

      {/* Projects */}
      {projectsInfo && projectsInfo.length > 0 && (
        <section className="mt-4">
          <h5 className="section-title">PROJECTS & EXTRACURRICULAR</h5>
          <hr class="section-divider" />
          {projectsInfo.map((project, index) => (
            <div key={index} className="mb-3">
              {project.title && <p className="fw-bold mb-1">{project.title}</p>}
              {project.description && <p>{project.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {(skillInfo?.skills) && (
        <section className="mt-4">
          <h5 className="section-title">SKILLS</h5>
          <hr class="section-divider" />
          {skillInfo.skills && (
            <p>{skillInfo.skills}</p>
          )}
      
        </section>
      )}
    </Container>
  );
};

export default ResumePreview;
