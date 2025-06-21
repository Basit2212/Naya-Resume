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
      {Array.isArray(educationInfo) && educationInfo.some(edu =>
        edu.institution || edu.degree || edu.field
      ) && (
          <section className="mt-4">
            <h5 className="section-title">EDUCATION</h5>
            <hr className="section-divider" />

            {educationInfo.map((edu, index) =>
              (edu.institution || edu.degree || edu.field) && (
                <div key={index} className="mb-3">
                  {edu.institution && <p className="fw-bold mb-0">{edu.institution}</p>}
                  <div className="d-flex justify-content-between">
                    {(edu.degree || edu.field) && (
                      <p className="fst-italic mb-0">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </p>
                    )}
                    {edu.endYear && <p className="text-muted mb-0"> {edu.startYear} - {edu.endYear}</p>}
                  </div>
                </div>
              )
            )}
          </section>
        )}

      {/* Experience */}
      {Array.isArray(experienceInfo) && experienceInfo.some(exp =>
        exp.company || exp.position || exp.description
      ) && (
          <section className="mt-4">
            <h5 className="section-title">PROFESSIONAL EXPERIENCE</h5>
            <hr className="section-divider" />

            {experienceInfo.map((exp, index) =>
              (exp.company || exp.position || exp.description) && (
                <div key={index} className="mb-3">
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold mb-0">
                      {exp.company} {exp.location && `– ${exp.location}`}
                    </p>
                    <p className="text-muted mb-0">
                      {exp.position && <strong className="text-dark">{exp.position}</strong>}
                      {(exp.startDate || exp.endDate) && ` | ${exp.startDate} – ${exp.endDate || 'Present'}`}
                    </p>

                  </div>
                  {exp.description && (
                    <MDEditor.Markdown
                      source={exp.description}
                      style={{ whiteSpace: "pre-wrap", textAlign: "left" }}
                    />
                  )}

                </div>
              )
            )}
          </section>
        )}

      {/* Projects */}
      {Array.isArray(projectsInfo) &&
        projectsInfo.some(
          (project) =>
            project.title || project.startDate || project.endDate || project.description
        ) && (
          <section className="mt-4">
            <h5 className="section-title">PROJECTS & EXTRACURRICULAR</h5>
            <hr className="section-divider" />
            {projectsInfo
              .filter(
                (project) =>
                  project.title || project.startDate || project.endDate || project.description
              )
              .map((project, index) => (
                <div key={index} className="mb-3">
                  {project.title && (
                    <p className="fw-bold mb-1">{project.title}</p>
                  )}

                  {(project.startDate || project.endDate) && (
                    <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                      {[project.startDate, project.endDate]
                        .filter(Boolean)
                        .join(' - ')}
                    </p>
                  )}

                  {project.description && (
                    <p className="mb-0">{project.description}</p>
                  )}
                </div>
              ))}
          </section>
        )}



      {/* Skills */}
      {skillInfo?.skills && (
        <section className="mt-4">
          <h5 className="section-title">SKILLS</h5>
          <hr className="section-divider" />
          <p>{skillInfo.skills}</p>
        </section>
      )}
    </Container>
  );
};

export default ResumePreview;
