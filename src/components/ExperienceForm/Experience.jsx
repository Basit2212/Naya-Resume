import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MDEditor from '@uiw/react-md-editor';
import '../ExperienceForm/Experience.css'
const Experience = ({ formData, setFormData }) => {
  const [value, setValue] = useState('');
  const [experiences, setExperiences] = useState([
    {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...experiences];
    updated[index][name] = value;
    setExperiences(updated);

  };

  const addMore = () => {
    setExperiences([
      ...experiences,
      {
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };

  const deleteExperience = (indexToRemove) => {
    const filtered = experiences.filter((_, idx) => idx !== indexToRemove);
    setExperiences(filtered);
    setFormData((prev) => ({
      ...prev,
      experienceInfo: filtered,
    }));
  };
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      experienceInfo: experiences,
    }));
  }, [experiences]);


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
                  <label className="form-label fw-semibold mb-2">
                    Description
                  </label>
                  <div data-color-mode="light">
                    <MDEditor
                      value={exp.description}
                      onChange={(val) => {
                        const updated = [...experiences];
                        updated[index].description = val;
                        setExperiences(updated);
                      }}
                      preview="edit"
                      height={180}
                    />
                  </div>
                </div>



                <div className="d-flex justify-content-end">
                  {experiences.length > 1 && (
                    <button
                      type="button"
                      onClick={() => deleteExperience(index)}
                      className="delete-btn bg-danger mb-3"
                    >
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                  )}
                </div>
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
