import React from "react";
import Happy from "./Img/happyAdult.svg";
import ContactUs from "../FormDetails/FormDetails";
import ListCommandeDetails from "./ListCommandeDetails/ListCommandeDetails";
import StripeContainer from "../Stripe/StripeContainer"
export default function Commande() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Acceder a une offre illimité</h1>
        <img src={Happy} style={{ width: "30%" }} alt="happy" />
        <div>
          {" "}
          <h2>Que comprend l'offre premium:</h2>
          <ListCommandeDetails />
        </div>
      </div>
      <ContactUs />
      <StripeContainer/>
    </>
  );
}
