import React, {useState} from "react";
import { validateEmail } from "../../utils/helper";

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [name, email, message] = formState;

  const handleInputChange = (e) => {
    e.preventDefault();
    
  }
}



export default Contact;