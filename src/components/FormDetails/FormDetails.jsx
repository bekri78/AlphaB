import React, { useState } from "react";
 
import Form from "react-bootstrap/Form";
import styled from "styled-components";
 
 
import { Container, Row, Col } from "react-bootstrap";

const H2 = styled.h2`
  vertical-align: inherit;
  font-size: 38px;
  font-weight: 700;
  color: ${(props) => (props.theme.mode === "dark" ? "#0db3c7" : "#040c2c")};
  text-transform: capitalize;
  letter-spacing: -2px;
  margin-bottom: 50px;
  text-align: center;
`;
 
 

export default function ContactUs() {
  
  const [name, setName] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [ville, setVille] = useState("");
  const [postal, setPostal] = useState("");

  

   
  const submitForm =   (e)   => {
    e.preventDefault();

     const details = {
      name:name,
     email: email,
      adress: {
      adresse:  adresse,
      ville:  ville,
       postale: postal,
      },
    };
  console.log(details)

   
      

  };
  return (
    
      <section className="form" id=" contact">
        <Container>
          <H2> Payement </H2>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={12} lg={12}>
              <Form className="contact-form">
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      name="user_name"
                      id="name"
                      placeholder="Nom*"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control
                      type="email"
                      name="user_email"
                      id="email"
                      placeholder="Email*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      name="adresse"
                      id="adresse"
                      placeholder="Adresse*"
                      value={adresse}
                      onChange={(e) => setAdresse(e.target.value)}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      name="ville"
                      id="ville"
                      placeholder="Ville*"
                      value={ville}
                      onChange={(e) => setVille(e.target.value)}
                    />
                  </Form.Group>
                </Form.Row>
                
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      name="postale"
                      id="postale"
                      placeholder="Code Postal"
                      value={postal}
                      onChange={(e) => setPostal(e.target.value)}
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
            </Col>
          </Row>
         
          
        </Container>
      </section>
   
  );
}
