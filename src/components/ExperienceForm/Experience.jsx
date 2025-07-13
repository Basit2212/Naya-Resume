import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import '../ExperienceForm/Experience.css';

const Experience = ({ formData, setFormData }) => {
  const experiences = formData.experienceInfo || [];

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...experiences];
    updated[index] = { ...updated[index], [name]: value }; // Clone inner object
    setFormData((prev) => ({
      ...prev,
      experienceInfo: updated,
    }));
  };

  const handleQuillChange = (index, value) => {
    const updated = [...experiences];
    updated[index] = { ...updated[index], description: value };
    setFormData((prev) => ({
      ...prev,
      experienceInfo: updated,
    }));
  };

  const addMore = () => {
    const newExp = {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    setFormData((prev) => ({
      ...prev,
      experienceInfo: [...experiences, newExp],
    }));
  };

  const deleteExperience = (indexToRemove) => {
    const filtered = experiences.filter((_, idx) => idx !== indexToRemove);
    setFormData((prev) => ({
      ...prev,
      experienceInfo: filtered,
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

            {experiences.map((exp, index) => (
              <form key={index} className="d-grid gap-3">
                <input
                  name="company"
                  placeholder="Company Name"
                  className="form-control"
                  value={exp.company}
                  onChange={(e) => handleChange(index, e)}
                />
                <input
                  name="position"
                  placeholder="Job Title / Position"
                  className="form-control"
                  value={exp.position}
                  onChange={(e) => handleChange(index, e)}
                />
                <input
                  name="location"
                  placeholder="Company Location"
                  className="form-control"
                  value={exp.location}
                  onChange={(e) => handleChange(index, e)}
                />
                <div className="d-flex gap-3">
                  <input
                    name="startDate"
                    placeholder="Start Date (e.g. Jan 2022)"
                    className="form-control"
                    value={exp.startDate}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <input
                    name="endDate"
                    placeholder="End Date or Present"
                    className="form-control"
                    value={exp.endDate}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label fw-semibold mb-2">Description</label>
                  <ReactQuill
                    theme="snow"
                    value={exp.description}
                    onChange={(val) => handleQuillChange(index, val)}
                    className="quill-editor"
                    placeholder="Describe your responsibilities, achievements, etc."
                  />
                </div>

                {experiences.length > 1 && (
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      onClick={() => deleteExperience(index)}
                      className="delete-btn bg-danger mb-3"
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                )}
              </form>
            ))}

            <div className="d-flex justify-content-center mt-2">
              <button onClick={addMore} className="submit-btn">
                Add More
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
