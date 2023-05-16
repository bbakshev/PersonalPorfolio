import React, { useState, useRef  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hn2k3l3', 'template_4a4qvhk', form.current, 'mWle9qoDvq1M4MdfL')
      .then((result) => {
          console.log(result.text);
          console.log("Email sent successfully!");
      }, (error) => {
          console.log(error.text);
          console.log("Email failed to send!");
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                      <label>Name</label>
                      <input type="text" name="user_name" />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                      <label>Email</label>
                      <input type="email" name="user_email" />
                      </Col>
                      <Col size={12} className="px-1">
                      <label>Message</label>
                      <textarea name="message" />
                      </Col>
                      <Col xs={12} className="px-1">
                      <input type="submit" value="Send" />
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

