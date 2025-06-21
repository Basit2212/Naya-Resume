import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MDEditor from '@uiw/react-md-editor';

const Skill = ({ formData, setFormData }) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <div className="skills-section p-4">
            <h3
              className="mb-4 text-center"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}
            >
              Skills
            </h3>
            <div className="form-group">
              <div className="">
                <MDEditor
                  value={formData.skillInfo?.skills || ''}
                  onChange={(val) =>
                    setFormData({
                      ...formData,
                      skillInfo: {
                        ...formData.skillInfo,
                        skills: val,
                      },
                    })
                  }
                  preview="edit"
                  height={180}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skill;
