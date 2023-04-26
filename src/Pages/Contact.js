import React, {useState} from "react";
import { validateEmail } from "../utils/helper";
// import Form from 'react-bootstrap/Form';
// import Button from "react-bootstrap/Button";

function Contact() {
  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  // const {name, email, message} = formState;

  const handleInputChange = (e) => {
    // e.preventDefault();
    const { target } =e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name'){
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }
  };
  setEmail('');



  return (
    <div>
      <form className="form contact">
        <input value={message} 
        name="message"
        onChange={handleInputChange}
        type="message"
        placeholder="Enter a message!"/>

        <input 
        value={name}
        name="name"
        onChange={handleInputChange} type="name"
        placeholder="Enter your name"/>

        <input value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="Enter your email"/>

        <button type="button" onclick={handleFormSubmit}>Send Message!</button>
      </form>
      {/* {errorMessage && 
        <div>
          <p className="error-text"> */}
            {errorMessage}
          {/* </p> */}
      {/* } */}
    </div>
  );
}


export default Contact;




    // <Form>
    //   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="What's your emai?" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //     <Form.Label>Name</Form.Label>
    //     <Form.Control type="name" placeholder="What's your name?" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    //     <Form.Label>What's your message?</Form.Label>
    //     <Form.Control
    //       as="textarea"
    //       placeholder="put your message here"
    //       rows={3}
    //     />
    //   </Form.Group>
    //   {/* <a href=> */}
    //     <Button variant="warning text-center" className="contactBtn">
    //       Send your message
    //     </Button>
    //   {/* </a> */}
    // </Form>