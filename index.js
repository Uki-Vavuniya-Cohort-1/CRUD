const mongoose = require('mongoose')
const URI = "mongodb+srv://jathusankunam005:jathu123@cluster0.aiaewvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const users = require('./scheema/user')

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
})

const express = require('express');
const app = express();
app.use(express.json())

app.listen(3000, () =>{
    console.log('your express is connected')
})

app.get('/home',(req,res) =>{
    res.send('welcome to home page')
})


app.post("/User/create", async(req, res)=>{
   try{
      const createData = new users(req.body);
      const result = await createData.save();
      res.send(result);
      console.log(result)
   }
   catch (error){
      console.log(error);
   }
})
app.get('/userdata', async (req, res) => {
    try {
        const user = await users.find();
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});