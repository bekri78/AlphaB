import React, { useState } from "react";
import ContactUs from "../FormDetails/FormDetails";
import firebase from '../../utils/firebaseConfig';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
 import Pricing from './Price/Price'
import { SnackbarProvider, useSnackbar } from 'notistack';
import axios from "axios";
import './PaymentForm.css'
import { Container, Row, Col } from "react-bootstrap";
const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}   
	},
    hidePostalCode: true,
}
  function PaymentForme() {
  const [success, setSuccess] = useState(false);
  const[allInfo,setAllInfo]= useState('')
  const[price,setPrice]= useState('')
 
  const[pay,setPay]= useState('')
  const stripe = useStripe();
  const elements = useElements();
  const { enqueueSnackbar } = useSnackbar();
  const checkForm = (e) => {
   
      e.preventDefault();
      
      if (allInfo.name && allInfo.adresse && allInfo.email && allInfo.ville && allInfo.postale) {
          handleSubmit()
          
        } else {
            enqueueSnackbar('Tous les champs doivent être renseignés.', { variant: 'error' });
            console.log(allInfo)
    }
  };
  const handleSubmit = async (e) => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:8080/payment", {
          amount: price,
          id,
        });
        if (response.data.success) {
            const infoUserPayment = firebase.database().ref('infoUserPayment');
            infoUserPayment.push(allInfo);
          console.log("successfull payments");
          setSuccess(true);
          setAllInfo('');
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <>
      {!success ?
      <Container fluid> 
        <Row className="align-items-center">

      
      <Col xs={12} sm={12} md={12} lg={6}>
      <Pricing   prix={(value) => setPrice(value)}  />
      </Col> 
      <Col xs={12} sm={12} md={12} lg={6}  className="align-items-center">
            <ContactUs 
              infotest={(info) => setAllInfo(info)}
              pay={pay}/>
      <form onSubmit={checkForm}>
          <fieldset className="FormGroup">
              <div className="FormRow">
                  <CardElement options={CARD_OPTIONS}/>
              </div>
          </fieldset>
          <button id="buttonPayment"onClick={()=>setPay(!pay)} >Commander pour  {price&& (`${price}€`)}</button>
      </form>
              </Col>
              </Row>
     </Container> 
      :
      <div>
          <h2> félicitation</h2>
      </div>
    }
      </>
  )
}
export default function PaymentForm() {
    return (
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <PaymentForme />
      </SnackbarProvider>
    );
  }