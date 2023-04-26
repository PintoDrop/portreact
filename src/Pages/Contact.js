import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { validateEmail } from "../utils/helper";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name'){
          setName(inputValue);
        } else {
          setMessage(inputValue);
        }
        // const handleFormSubmit = (e) => {
//     e.preventDefault();

    // if (!validateEmail(email)) {
//       setErrorMessage("Please enter a valid email");
//       return;
    // }
//   };
//   setEmail('');
  };

  return (
    
      // <Card style={{ width: "18rem" }} className="contact">
      //    <Card.Body>
    <Form className="contactForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="What's your emai?" />
  </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Name</Form.Label>
     <Form.Control type="name" placeholder="What's your name?" />
   </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
     <Form.Label>What's your message?</Form.Label>
     <Form.Control
       as="textarea"
      placeholder="put your message here"
      rows={3}
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
