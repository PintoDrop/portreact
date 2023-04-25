import React, {useState} from "react";
import { validateEmail } from "../utils/helper";

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
    }  
  };
}



export default Contact;