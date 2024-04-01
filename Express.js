const express = require ('express')
const app = express()
const data= require('./data')


app.listen(3000, () => {
    console.log('Server running in 3000 port');
  });



  app.get ('/',(req, res) => {
    res.send("this is home page")
    
  })

  app.get('/data',(req, res) => {
    res.send(data.users.map(user=> user.email));
      
  });

  app.get('/prodect',(req, res) => {
    res.send(data.products.map(product=> product.price));
      
  });
  
 

  app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = data.products.find(product => product.id === productId);
    
    if (product) {
       res.send(`Product Details: ${JSON.stringify(product)}`);
    } else {
       res.status(404).send('Product not found');
    }
 });


