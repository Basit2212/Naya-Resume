import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Project = ({ formData, setFormData }) => {
    const [projectsInfo, setProjectsInfo] = useState([
        {
            title: '',
            startDate: '',
            endDate: '',
            description: '',
        },
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updated = [...projectsInfo];
        updated[index][name] = value;
        setProjectsInfo(updated);

        // Sync with formData
        setFormData((prev) => ({
            ...prev,
            projectsInfo: updated,
        }));
    };


    const addMore = () => {
        const newProjects = [
            ...projectsInfo,
            {
                title: '',
                startDate: '',
                endDate: '',
                description: '',
            },
        ];
        setProjectsInfo(newProjects);
        setFormData((prev) => ({
            ...prev,
            projectsInfo: newProjects,
        }));
    };

    const deleteProjects = (indexToRemove) => {
        const filtered = projectsInfo.filter((_, idx) => idx !== indexToRemove);
        setProjectsInfo(filtered);
        setFormData((prev) => ({
            ...prev,
            projects: filtered, // 
        }));
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
                                <textarea
                                    name="description"
                                    placeholder='Project Details'
                                    className='form-control'
                                    rows={4}
                                    value={project.description}
                                    onChange={(e) => handleChange(index, e)}
                                />
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
