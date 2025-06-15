import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const EducationInfo = ({ formData, setFormData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      educationInfo: {
        ...prev.educationInfo,
        [name]: value,
      },
    }));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <div className="education-section p-4">
            <h3 className="mb-4 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
              Education Details
            </h3>

            <div className="d-grid gap-3">
              <input
                name="institution"
                placeholder="University / School Name"
                className="form-control"
                onChange={handleChange}
              />
              <input
                name="degree"
                placeholder="Degree or Qualification"
                className="form-control"
                onChange={handleChange}
              />
              <input
                name="field"
                placeholder="Field of Study"
                className="form-control"
                onChange={handleChange}
              />
              <div className="d-flex gap-3">
                <input
                  name="startYear"
                  placeholder="Start Year"
                  className="form-control"
                  type="number"
                  onChange={handleChange}
                />
                <input
                  name="endYear"
                  placeholder="End Year"
                  className="form-control"
                  type="number"
                  onChange={handleChange}
                />
              </div>
              <input
                name="grade"
                placeholder="Grade / CGPA (optional)"
                className="form-control"
                onChange={handleChange}
              />
              <input
                name="location"
                placeholder="Location (optional)"
                className="form-control"
                onChange={handleChange}
              />
            </div>

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EducationInfo;
