import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import './ResumePreview.css';
import html2pdf from 'html2pdf.js';
import { useAuth0 } from '@auth0/auth0-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ResumePreview = ({ formData }) => {
  const { personalInfo, educationInfo, experienceInfo, skillInfo, projectsInfo } = formData;
  const resumeRef = useRef();
  const { getAccessTokenSilently } = useAuth0();
  
  const handleDownload = async () => {
    try {
      const token = await getAccessTokenSilently({
        audience: "https://naya-resume-api"
      });

      await fetch(`${API_BASE_URL}/api/history`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          resumeTitle: "Downloaded Resume",
          date: new Date().toISOString()
        })
      });

      alert("✅ Your resume download has been saved in your account history.");
    } catch (error) {
      console.error("❌ Error saving download history:", error);
      alert("Warning: Could not save download history.");
    }

    // Clone before generating PDF (just to avoid potential side-effects)
    const element = resumeRef.current.cloneNode(true);

    const opt = {
      margin: 0.5,
      filename: 'naya-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };


  return (
    <Container className="resume-preview py-5">
      <div className="text-end mb-4 no-print">
        <button className="btn btn-danger" onClick={handleDownload}>
          Download as PDF
        </button>
      </div>

      <div ref={resumeRef}>
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
        {Array.isArray(educationInfo) && educationInfo.some(e => e.institution || e.degree || e.field) && (
          <section className="mt-4">
            <h5 className="section-title">EDUCATION</h5>
            <hr className="section-divider" />
            {educationInfo.map((edu, i) =>
              (edu.institution || edu.degree || edu.field) && (
                <div key={i} className="mb-3">
                  {edu.institution && <p className="fw-bold mb-0">{edu.institution}</p>}
                  <div className="d-flex justify-content-between">
                    {(edu.degree || edu.field) && (
                      <p className="fst-italic mb-0">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </p>
                    )}
                    {edu.endYear && <p className="text-muted mb-0">{edu.startYear} - {edu.endYear}</p>}
                  </div>
                </div>
              )
            )}
          </section>
        )}

        {/* Experience */}
        {Array.isArray(experienceInfo) && experienceInfo.some(exp => exp.company || exp.position || exp.description) && (
          <section className="mt-4">
            <h5 className="section-title">PROFESSIONAL EXPERIENCE</h5>
            <hr className="section-divider" />
            {experienceInfo.map((exp, i) => (
              (exp.company || exp.position || exp.description) && (
                <div key={i} className="mb-3">
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
                    <div
                      dangerouslySetInnerHTML={{ __html: exp.description }}
                      style={{ whiteSpace: "pre-wrap", textAlign: "left" }}
                    />
                  )}
                </div>
              )
            ))}
          </section>
        )}

        {/* Projects */}
        {Array.isArray(projectsInfo) && projectsInfo.some(p => p.title || p.startDate || p.description) && (
          <section className="mt-4">
            <h5 className="section-title">PROJECTS & EXTRACURRICULAR</h5>
            <hr className="section-divider" />
            {projectsInfo.map((project, i) => (
              <div key={i} className="mb-3">
                {project.title && <p className="fw-bold mb-1">{project.title}</p>}
                {(project.startDate || project.endDate) && (
                  <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                    {[project.startDate, project.endDate].filter(Boolean).join(' - ')}
                  </p>
                )}
                {project.description && (
                  <div
                    dangerouslySetInnerHTML={{ __html: project.description }}
                    style={{ whiteSpace: "pre-wrap", textAlign: "left", padding: "20px", lineHeight: "20px" }}
                  />
                )}
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {skillInfo?.skills && (
          <section className="mt-4">
            <h5 className="section-title">SKILLS & HOBBIES</h5>
            <hr className="section-divider" />
            <div
              dangerouslySetInnerHTML={{ __html: skillInfo.skills }}
              style={{ whiteSpace: "pre-wrap", textAlign: "left", lineHeight: "18px" }}
            />
          </section>
        )}
      </div>
    </Container>
  );
};

export default ResumePreview;
