import React from 'react';
import { Container } from 'react-bootstrap';
import './ResumePreview.css';

const ResumePreview = ({ formData }) => {
  const { personalInfo, educationInfo, experienceInfo, projectsInfo, skillInfo } = formData;

  return (
    <Container className="resume-preview py-5">
      {/* Personal Info */}
      {personalInfo?.fullName && (
        <div className="text-center">
          <h1 className="fw-bold">{personalInfo.fullName}</h1>
          <p className="contact-info">
            {personalInfo.email && `${personalInfo.email} • `}
            {personalInfo.phoneNumber && `${personalInfo.phoneNumber} • `}
            {personalInfo.linkedin && `LinkedIn: ${personalInfo.linkedin}`}
          </p>
        </div>
      )}

      {/* Education */}
      {(educationInfo?.institution || educationInfo?.degree || educationInfo?.field) && (
        <section className="mt-4">
          <h5 className="section-title">EDUCATION</h5>
          {educationInfo.institution && <p className="fw-bold mb-0">{educationInfo.institution}</p>}
          {(educationInfo.degree || educationInfo.field) && (
            <p className="fst-italic">
              {educationInfo.degree} {educationInfo.field && `in ${educationInfo.field}`}
            </p>
          )}
          {educationInfo.endYear && (
            <p className="text-muted">Expected {educationInfo.endYear}</p>
          )}
        </section>
      )}

      {/* Experience */}
      {(experienceInfo?.company || experienceInfo?.position || experienceInfo?.description) && (
        <section className="mt-4">
          <h5 className="section-title">PROFESSIONAL EXPERIENCE</h5>
          <p className="fw-bold mb-0">
            {experienceInfo.company} {experienceInfo.location && `– ${experienceInfo.location}`}
          </p>
          <p className="text-muted">
            {experienceInfo.position} {experienceInfo.startDate && `| ${experienceInfo.startDate} – ${experienceInfo.endDate}`}
          </p>
          {experienceInfo.description && (
            <ul>
              {experienceInfo.description.split('.').filter(line => line.trim() !== '').map((item, index) => (
                <li key={index}>{item.trim()}.</li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Projects */}
      {projectsInfo && projectsInfo.length > 0 && (
        <section className="mt-4">
          <h5 className="section-title">PROJECTS & EXTRACURRICULAR</h5>
          {projectsInfo.map((project, index) => (
            <div key={index} className="mb-3">
              {project.title && <p className="fw-bold mb-1">{project.title}</p>}
              {project.description && <p>{project.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {(skillInfo?.languages || skillInfo?.tools || skillInfo?.spoken) && (
        <section className="mt-4">
          <h5 className="section-title">SKILLS</h5>
          {skillInfo.languages && (
            <p><strong>Programming Languages:</strong> {skillInfo.languages}</p>
          )}
          {skillInfo.tools && (
            <p><strong>Tools & Frameworks:</strong> {skillInfo.tools}</p>
          )}
          {skillInfo.spoken && (
            <p><strong>Languages Spoken:</strong> {skillInfo.spoken}</p>
          )}
        </section>
      )}
    </Container>
  );
};

export default ResumePreview;
