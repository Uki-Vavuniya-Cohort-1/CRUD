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

//Get 

app.get('/Review/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    res.status(200).json(review);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/Review', async (req, res) => {
 try {
   const review = await Review.find();
     res.status(200).json(review);
 } catch (error) {
   res.status(400).send(error);
 }
});

app.get('/User', async (req, res) => {
  try {
    const review = await User.find();
      res.status(200).json(review);
  } catch (error) {
    res.status(400).send(error);
  }
 });


// Update

app.put('/User/:id', async (req, res) => {
  try {
    const {id} = req.params
    await User.findByIdAndUpdate(id, req.body);
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
 });

 //Delete
 
 app.delete('/User/:id', async (req,res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    if (!User.findByIdAndDelete(req.params.id)) {
      res.status(404).send({message: "not found"})
    }
    res.status(200).json(await User.findById(id));
  }
  catch (error){
    res.status(400).send(error)
  }
 })