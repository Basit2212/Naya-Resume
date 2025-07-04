import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Skill = ({ formData, setFormData }) => {
  const handleChange = (val) => {
    setFormData({
      ...formData,
      skillInfo: {
        ...formData.skillInfo,
        skills: val,
      },
    });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <div className="skills-section p-4">
            <h3
              className="mb-4 text-center"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}
            >
              Skills & Hobbies
            </h3>
            <div className="form-group">
              <ReactQuill
                theme="snow"
                value={formData.skillInfo?.skills || ''}
                onChange={handleChange}
                placeholder="List your skills, tools, technologies or hobbies..."
                className="quill-editor"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skill;
