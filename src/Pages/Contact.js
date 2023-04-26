import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { validateEmail } from "../utils/helper";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      setErrorMessage("Please make sure all fields are filled out.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    setIsSubmitted(true);
    
  };

  const validateEmail = (email) => {
    const mail = /\S+@\S+\.\S+/;
    return mail.test(email);
  };

  return (
    <div className="contactForm">
      {isSubmitted ? (
        <h2>
          I appreciate you reaching out to me, I will respond when I have a
          chance! Have a good day!
        </h2>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="What's your email?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>What's your message?</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Put your message here"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          {errorMessage && <div className="error">{errorMessage}</div>}
          </Form.Group>

          <Button
            variant="warning text-center"
            type="submit"
            className="contactBtn"
          >
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}

export default Contact;
