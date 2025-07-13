import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Project = ({ formData, setFormData }) => {
  const projectsInfo = formData.projectsInfo || [];

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...projectsInfo];
    updated[index] = { ...updated[index], [name]: value };
    setFormData(prev => ({ ...prev, projectsInfo: updated }));
  };

  const handleDescriptionChange = (index, val) => {
    const updated = [...projectsInfo];
    updated[index] = { ...updated[index], description: val };
    setFormData(prev => ({ ...prev, projectsInfo: updated }));
  };

  const addMore = () => {
    const updated = [
      ...projectsInfo,
      { title: '', startDate: '', endDate: '', description: '' }
    ];
    setFormData(prev => ({ ...prev, projectsInfo: updated }));
  };

  const deleteProjects = (indexToRemove) => {
    const filtered = projectsInfo.filter((_, idx) => idx !== indexToRemove);
    setFormData(prev => ({ ...prev, projectsInfo: filtered }));
  };

  return (
    <Container>
      <Row>
        <Col md={8} className='mx-auto'>
          <div className="education-section p-4">
            <h3 className="mb-4 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
              Project & Extracurricular
            </h3>

            {projectsInfo.map((project, index) => (
              <form className='d-grid gap-3 mb-4' key={index}>
                <input
                  name='title'
                  placeholder='Project Title'
                  className='form-control'
                  value={project.title}
                  onChange={(e) => handleChange(index, e)}
                />
                <div className='d-flex gap-3'>
                  <input
                    name='startDate'
                    placeholder='Start Date (e.g. Jan 2022)'
                    className='form-control'
                    value={project.startDate}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <input
                    name='endDate'
                    placeholder='End Date or Present'
                    className='form-control'
                    value={project.endDate}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
                <div className='form-group'>
                  <label className="form-label fw-semibold mb-2">Project Description</label>
                  <ReactQuill
                    theme="snow"
                    value={project.description}
                    onChange={(val) => handleDescriptionChange(index, val)}
                    className="quill-editor"
                    placeholder="Describe your project or achievement"
                  />
                </div>

                {projectsInfo.length > 1 && (
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      onClick={() => deleteProjects(index)}
                      className="delete-btn bg-danger"
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                )}
              </form>
            ))}
          </div>

          <div className="d-flex justify-content-center mt-2">
            <button type="button" onClick={addMore} className="submit-btn">
              Add More
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
