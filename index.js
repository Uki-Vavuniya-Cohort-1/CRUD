const Mongoose = require("mongoose")
const product = require('./schema/prodect.model');
const URI ="mongodb+srv://Manojini:1234@cluster0.scafhqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

Mongoose.connect(URI)
.then(() => {
    console.log("Connected to the database!");
})
.catch((error) => {
    console.log("Connection failed!", error);
});


// app.post("/User/create", async(req, res)=>{
//     try{
//         const createData = new users(req.body);
//         const result = await createData.save();
//         res.send(result);
//         console.log(result)
//      }
//      catch (error){
//         console.log(error);
//      }
//   })


//   app.get('/userdata', async (req, res) => {
//       try {
//           const user = await users.find();
//           console.log(user);
//           res.status(200).json(user);    } catch (error) {
//           console.error(error);
//           res.status(500).json({ error: 'Internal Server Error' });
//       }
//   });
  
  
  
// app.put('/product/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         await Product.findByIdAndUpdate(id, req.body);
//         const product = await Product.findById(id)        // if(!product) {
//         //     return res.status(404).json({message: "Product not found"})
//         // }        res.status(200).json(product);
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// )


// app.delete('/product/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id)        
//         if(!product) {
//             return res.status(404).json({message: "Product not found"})
//         }        res.status(200).json(product)
//         console.log("Deleted")
        
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// )


