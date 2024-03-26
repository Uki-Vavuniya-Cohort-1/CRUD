const Mongoose = require('mongoose');
const express = require('express');
const app = express();
const User = require("./schema/User.model.js");
const Product = require("./schema/Product.model.js")
const Review = require("./schema/Review.model.js")
const Payment = require("./schema/Payment.model.js")
app.use(express.json());
Mongoose.connect("mongodb+srv://janujahsivarattinam:1234@cluster0.ialn28u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   .then(()=>{
      console.log("You are connected");
   })
   .catch((error)=>{
      console.log("Connection failed",error)
   });

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});


app.post('/User/create', async (req, res) => {
      try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
      } catch (error) {
        res.status(400).send(error);
      }
});      

// app.get('/User/create', async (req, res) => {
//    try {
//       const reviews = await User.find(); 
//       res.json(User);
//     } catch (error) {
//       res.status(500).send(error);
//     }
// });  

// app.get('/Review/:id', (req, res) => {
//    // productId = req.params.id;
//    res.send(Review.find(user => user.id === parseInt(req.params.id)))
//    });

app.get('/Review/:id', async (req, res) => {
   try {
     const review = await Review.findById(req.params.id);
     if (!review) {
       return res.status(404).send('Review not found');
     }
     res.json(review);
   } catch (error) {
     res.status(500).send(error.message);
   }
 });

app.post('/Product/create', async (req, res) => {
   try {
     const newUser = new Product(req.body);
     await newUser.save();
     res.status(201).send(newUser);
   } catch (error) {
     res.status(400).send(error);
   }
});      

app.post('/Review/create', async (req, res) => {
   try {
     const newUser = new Review(req.body);
     await newUser.save();
     res.status(201).send(newUser);
   } catch (error) {
     res.status(400).send(error);
   }
});      

app.post('/Payment/create', async (req, res) => {
   try {
     const newUser = new Payment(req.body);
     await newUser.save();
     res.status(201).send(newUser);
   } catch (error) {
     res.status(400).send(error);
   }
});      