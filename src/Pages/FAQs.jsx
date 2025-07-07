import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './FAQs.css'
const FAQs = () => {
  return (
    <Container className="faq">
      <h2 className="mb-4 text-center fw-bold">FAQs & Help</h2>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I create a resume?</Accordion.Header>
          <Accordion.Body>
            Go to the "Resume" tab and fill in your details. Once completed, you can preview and download your resume.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Do I need to sign in?</Accordion.Header>
          <Accordion.Body>
            Yes, signing in allows you to save your resume and access it later from your account.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Can I delete my account?</Accordion.Header>
          <Accordion.Body>
            Yes. You can request account deletion from your profile page (feature coming soon).
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Who can I contact for help?</Accordion.Header>
          <Accordion.Body>
            Please use the Contact page or email us at <strong>support@nayaresume.com</strong>.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQs;
