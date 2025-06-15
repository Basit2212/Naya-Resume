import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      experienceInfo: {
        ...prev.experienceInfo,
        [name]: value,
      },
    }));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <div className="experience-section p-4">
            <h3 className="mb-4 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
              Professional Experience
            </h3>
            <form className="d-grid gap-3">
              <input
                name="company"
                placeholder="Company Name"
                className="form-control"
                value={formData.experienceInfo?.company || ""}
                onChange={handleChange}
              />
              <input
                name="position"
                placeholder="Job Title / Position"
                className="form-control"
                value={formData.experienceInfo?.position || ""}
                onChange={handleChange}
              />
              <input
                name="location"
                placeholder="Company Location"
                className="form-control"
                value={formData.experienceInfo?.location || ""}
                onChange={handleChange}
              />
              <div className="d-flex gap-3">
                <input
                  name="startDate"
                  placeholder="Start Date (e.g. Jan 2022)"
                  className="form-control"
                  value={formData.experienceInfo?.startDate || ""}
                  onChange={handleChange}
                />
                <input
                  name="endDate"
                  placeholder="End Date or Present"
                  className="form-control"
                  value={formData.experienceInfo?.endDate || ""}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="description"
                placeholder="Job Description / Key Responsibilities"
                className="form-control"
                rows={4}
                value={formData.experienceInfo?.description || ""}
                onChange={handleChange}
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
