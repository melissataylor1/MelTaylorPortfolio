import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../style/Contact.css';

const Contact = () => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [nameTouched, setNameTouched] = useState(false); 
  const [emailTouched, setEmailTouched] = useState(false); 
  const [messageTouched, setMessageTouched] = useState(false); 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    
  };

  return (
 
  );
};

export default Contact;