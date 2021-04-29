import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

function Contact() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const failMessage = () => {
    alert('fail message');
  };
  const isEmail = () => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-A0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(regex)) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && lastname && isEmail() && message) {
      axios
        .post('http://localhost:4000/users', {
          firstname,
          lastname,
          email,
          message,
        })
        .then(function (response) {
          console.log(response);
          setFirstname('');
          setLastname('');
          setEmail('');
          setMessage('');
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      failMessage();
    }
  };
  return (
    <Form>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Prénom</Form.Label>
        <Form.Control value={firstname} type="text" autoComplete="off" onChange={(e) => setFirstname(e.target.value)} placeholder="Nom" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Nom</Form.Label>
        <Form.Control value={lastname} type="text" placeholder="prenom" autoComplete="off" onChange={(e) => setLastname(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} placeholder="Votre Email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" value={message} autoComplete="off" onChange={(e) => setMessage(e.target.value)} placeholder="Votre Message" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
export default Contact;
