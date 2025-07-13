import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const EducationInfo = ({ formData, setFormData }) => {
  const educationInfo = formData.educationInfo || [];

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...educationInfo];
    updated[index] = { ...updated[index], [name]: value }; // clone inner object
    setFormData((prev) => ({
      ...prev,
      educationInfo: updated,
    }));
  };

  const addMore = () => {
    const newEntry = {
      institution: '',
      degree: '',
      field: '',
      startYear: '',
      endYear: '',
      grade: '',
      location: '',
    };
    const updated = [...educationInfo, newEntry];
    setFormData((prev) => ({
      ...prev,
      educationInfo: updated,
    }));
  };

  const deleteEducation = (indexToRemove) => {
    const filtered = educationInfo.filter((_, idx) => idx !== indexToRemove);
    setFormData((prev) => ({
      ...prev,
      educationInfo: filtered,
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
            {educationInfo.map((ed, index) => (
              <div key={index} className="d-grid gap-3 mb-4">
                <input
                  name="institution"
                  placeholder="University / School Name"
                  className="form-control"
                  value={ed.institution}
                  onChange={(e) => handleChange(index, e)}
                />
                <input
                  name="degree"
                  placeholder="Degree or Qualification"
                  className="form-control"
                  value={ed.degree}
                  onChange={(e) => handleChange(index, e)}
                />
                <input
                  name="field"
                  placeholder="Field of Study (e.g. Computer Science)"
                  className="form-control"
                  value={ed.field}
                  onChange={(e) => handleChange(index, e)}
                />
                <div className="d-flex gap-3">
                  <input
                    name="startYear"
                    placeholder="Start Year"
                    className="form-control"
                    type="number"
                    value={ed.startYear}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <input
                    name="endYear"
                    placeholder="End Year"
                    className="form-control"
                    type="number"
                    value={ed.endYear}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
                {educationInfo.length > 1 && (
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      onClick={() => deleteEducation(index)}
                      className="delete-btn bg-danger"
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                )}
              </div>
            ))}

            <div className="d-flex justify-content-center mt-2">
              <button onClick={addMore} className="submit-btn btn btn-primary px-4">
                Add More
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EducationInfo;
