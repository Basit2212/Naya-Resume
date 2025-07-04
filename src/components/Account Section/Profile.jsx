import React, { useState } from 'react';
import { Col, Container, Row, Form, Image } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import '../Account Section/Profile.css';

const Profile = () => {
  const { user } = useAuth0();

  // Controlled state for editable fields
  const [name, setName] = useState(user?.name || '');

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saved name:", name);
    // TODO: send updated name to backend if needed
  };

  return (
    <Container className="mt-5">
      <div className="profile-heading text-center mb-4">
        <h1 className="fw-bold">Profile</h1>
        <p className="text-muted">View or edit your account information</p>
      </div>

      <Row className="justify-content-center mb-4">
        <Col md="auto" className="text-center">
          {user?.picture && (
            <>
              <Image
                src={user.picture}
                roundedCircle
                alt="Profile"
                width={120}
                height={120}
                className="shadow-sm border border-3 mb-2"
              />
              <div className="fw-semibold">Profile Picture</div>
            </>
          )}
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="d-grid gap-3" onSubmit={handleSave}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value="************@gmail.com"
                disabled
              />
            </Form.Group>

            <div className="d-flex justify-content-center mt-3">
              <button className='submit-btn' type="submit">
                Save
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
