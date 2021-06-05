const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
// const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "premium abonnement",
      payment_method: id,
      confirm: true,
    });
    console.log("payment", payment);
    res.json({
      message: "paymement success full",
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    res.json({
      message: "payment failed",
      success: false,
    });
  }
});
app.listen(process.env.PORT || 4000, () => {
  console.log("server listen on port 4000", process.env.PORT);
});
