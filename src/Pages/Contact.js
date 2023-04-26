import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { validateEmail } from "../utils/helper";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      setErrorMessage("All fields must be filled out");
      return;
    }

    if(!validateEmail(email)) {
      setErrorMessage("Must enter a valid email");
      return;
    }
    validateEmail();
    // setIsSubmitted(true);
  };



  return (
    <Form className="contactForm" onSubmit={handleSubmit}>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="What's your emai?"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="What's your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>What's your message?</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter your message here"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Button variant="warning text-center" className="contactBtn">
        Submit
      </Button>
    </Form>
    //  </Card.Body>
    //   </Card>
  );
}

export default Contact;
