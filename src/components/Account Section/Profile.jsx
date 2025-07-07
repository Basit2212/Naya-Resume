import React, { useState } from 'react';
import { Col, Container, Row, Form, Image } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import '../Account Section/Profile.css';

const Profile = () => {
  const { user } = useAuth0();


  const [name, setName] = useState(user?.name || '');

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saved name:", name);
    // TODO: send updated name to backend if needed
  };




  const { getAccessTokenSilently, logout } = useAuth0();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (!confirmDelete) return;

    try {
      const token = await getAccessTokenSilently({
        audience: "https://naya-resume-api" // Match this here too
      });


      const res = await fetch('http://localhost:4000/api/account/profile/delete', {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });

      console.log("Access Token:", token);

      const data = await res.json();

      if (res.ok) {
        alert("Account deleted successfully.");
        logout({ returnTo: window.location.origin });
      } else {
        alert(data.message || "Failed to delete account.");
      }

    } catch (err) {
      console.error("Delete error:", err);
      alert("Something went wrong.");
    }
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
                value={user?.email || ''}
                disabled
              />
            </Form.Group>

          </Form>
          <div className='mt-3 text-danger fw-bold'>
            <p>Delete</p>
            <button onClick={handleDelete} className='submit-btn bg-danger'>Delete My Account</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
