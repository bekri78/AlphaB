const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
// const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;
// app.get("/*", (_, res) => {
//   res.sendFile(path.join(__dirname, "./my-app/build/index.html"));
// });
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
if (process.env.NODE_ENV === "production") {
  app.use(express.static("my-app/build"));
}
app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(` server listen on port ${PORT} `);
});
