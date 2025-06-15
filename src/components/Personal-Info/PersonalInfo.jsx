import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const PersonalInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value
      }
    }));
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="personal-data-section p-4">
            <h3 className="text-center mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
              Personal Information
            </h3>

            <form className="d-grid gap-3">
              <input
                name="fullName"
                placeholder="Full Name"
                className="form-control"
                value={formData.personalInfo?.fullName || ""}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                className="form-control"
                value={formData.personalInfo?.email || ""}
                onChange={handleChange}
              />
              <input
                name="phoneNumber"
                placeholder="Contact Number"
                type="tel"
                className="form-control"
                value={formData.personalInfo?.phoneNumber || ""}
                onChange={handleChange}
              />
              <input
                name="website"
                placeholder="Website / LinkedIn / Portfolio URL"
                type="url"
                className="form-control"
                value={formData.personalInfo?.website || ""}
                onChange={handleChange}
              />

            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
