import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Skill = ({ formData, setFormData }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            skillInfo: {
                ...prev.skillInfo,
                [name]: value,
            },
        }));
    }

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md={8} className='mx-auto'>
                        <div className='skills-section p-4'></div>
                        <h3 className="mb-4 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
                            Skills
                        </h3>
                        <textarea
                            name="skills"
                            placeholder="E.g. JavaScript, React, Node.js, Teamwork, Communication"
                            className="form-control"
                            rows={4}
                            value={formData.skillInfo?.skills || ""}
                            onChange={handleChange}
                        />

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Skill