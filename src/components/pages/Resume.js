
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../style/Resume.css';

const Resume = () => {
  return (
    <Container className="resume-section">
      <Row>
        <Col>
          <h2>Resume</h2>
          <Button variant="dark" href="" download> 
            Download Resume
          </Button>
         
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;