const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require('body-parser'); 

const Payment = require("../models/Payment.model");
const Product = require("../models/Product.model");
const Review = require("../models/Review.model");
const User = require("../models/User.model");

const app = express();
const port = 3000;
const mongo_URL = "mongodb+srv://kirushikanketheeswaran:Mi1112Mu@cluster0.hl34diu.mongodb.net/express_work?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());

mongoose.connect(mongo_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((error) => {
        console.log("Connection failed!", error);
    });

app.post('/Payment/CreateUser', async (req, res) => {
    try {
        const requestData = req.body;
        const paymentData = new Payment(requestData);
        await paymentData.save();
        res.status(200).send('Data received successfully!');
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

app.get('/Payment/read/:value', async (req, res) => {
  try {
    const value = req.params.value.trim();// unwanted spaced removed
    let removeLetterValue = value.replace(/^\D+/g, ''); // remove the letters
    changedValue = removeLetterValue.padStart(3, '0'); // define the last three degit value
    correctedValue = 'PAY' + changedValue;
    const paymentData = await Payment.findOne({ paymentID: correctedValue });
    if (paymentData) {
      res.json(paymentData);
    } else {
      res.status(404).json('Payment data not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


app.put('/Payment/update/:value', async (req, res) => {
    try {
      const value = req.params.value.trim();
      const removeLetterValue = value.replace(/^\D+/g, '');
      const changedValue = removeLetterValue.padStart(3, '0');
      const correctedValue = 'PAY' + changedValue;
      await Payment.findOneAndUpdate(
        { paymentID: correctedValue },req.body);
      const updatedData = await Payment.findOne({ paymentID: correctedValue });
      if (updatedData) {
        res.json(updatedData);
      } else {
        res.status(404).json('Payment data not found');
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  app.delete('/Payment/delete/:value', async (req, res) => {
    try {
      const value = req.params.value.trim();
      const removeLetterValue = value.replace(/^\D+/g, '');
      const changedValue = removeLetterValue.padStart(3, '0');
      const correctedValue = 'PAY' + changedValue;
      const deletedData = await Payment.findOneAndDelete({ paymentID: correctedValue });
      if (deletedData) {
        res.json(deletedData);
        console.log("This ID was deleted:", correctedValue);
      } else {
        res.status(404).json('Payment data not found');
      }
    } catch (error) {
      console.error("Error deleting payment data:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  