/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect,useContext } from "react";
import { UidContext } from '../UidContext';
import {  format } from 'date-fns'
import add from 'date-fns/add'
import Form from "react-bootstrap/Form";
import styled from "styled-components";
 
 
import { Container, Row, Col } from "react-bootstrap";
const date = new Date()
  const dateFormated = format(date,"dd/MM/yyyy")
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
 
const H5 = styled.h2`
    font-size: 1.5rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
`
 

export default function ContactUs(props) {
  
  const [name, setName] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [ville, setVille] = useState("");
  const [postal, setPostal] = useState("");
  const uid = useContext(UidContext);
  const pay = props.pay
  useEffect(() => {
  
    test()
   
  }, [ pay]);
  
  const result = add(date, {
  
    months: 1,
     
  })

 
   
  
     const details = {
      name:name,
      email: email,
      adresse: adresse,
      ville: ville,
      postale: postal,
      start: dateFormated,
      end:format(result,"yyyy/MM/dd"),
      uid
    };
 

   const test = async ()=>{
    await   props.infotest(details);
   console.log(result)
    
  }
   
 

  return (
    
      <section className="form" id=" contact">
        <Container>
          <H2> Formulaire </H2>
         <H5>Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.</H5>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={12} lg={12}>
              <Form className="contact-form"  >
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
