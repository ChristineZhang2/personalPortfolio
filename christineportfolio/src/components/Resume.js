import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import resume from '../assets/img/resume.png';

export const Resume = () => {
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  const handleClick = () => {
    window.open('https://drive.google.com/file/d/18ERIRaENu9lj4aYpftYmSsB_r0kcQClR/view?usp=sharing', '_blank');
  };

  return (
    <section className="resume" id="resume">
      <Container>
        <Row>
          <Col>
            <h2>My Resume</h2>
            <div 
              className={`resume-box ${isResumeHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsResumeHovered(true)}
              onMouseLeave={() => setIsResumeHovered(false)}
              onClick={handleClick}
              aria-label="Click to view full resume"
            >
              <img src={resume} alt="Christine Zhang's Resume Preview" className="resume-image" />
              <div className="resume-overlay">
                <h3>Click to view full resume</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
