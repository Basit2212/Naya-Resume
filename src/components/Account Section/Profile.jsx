import React, { useState } from 'react';
import { Col, Container, Row, Form, Image, Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import '../Account Section/Profile.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Profile = () => {
  const { user, getAccessTokenSilently, logout } = useAuth0();
  const [name, setName] = useState(user?.name || '');

  const handleSave = (e) => {
    e.preventDefault();
    console.log("✅ Saved name:", name);
    // TODO: Optional - Send updated name to backend
    alert("Changes saved (locally).");
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("⚠️ Are you sure you want to delete your account?");
    if (!confirmDelete) return;

    try {
      const token = await getAccessTokenSilently({
        audience: "https://naya-resume-api"
      });

      const res = await fetch(`${API_BASE_URL}/api/account/profile/delete`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Account deleted successfully.");
        logout({ returnTo: window.location.origin });
      } else {
        alert(data.message || "❌ Failed to delete account.");
      }
    } catch (err) {
      console.error("❌ Delete error:", err);
      alert("Something went wrong while deleting your account.");
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
                width={100}
                height={100}
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

            <Button variant="primary" type="submit" className="submit-btn w-100">
              Save Changes
            </Button>
          </Form>

          <div className="mt-4 text-danger fw-bold">
            <p>Danger Zone</p>
            <button onClick={handleDelete} className="submit-btn bg-danger w-100">
              Delete My Account
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
