const express = require('express')
const data = require('./data.js')
const app = express()
const port = 5000


app.get('/api/products',(req,res)=>{
    console.log(data)
    res.send(data.products)
})
app.get('/api/products/:id',(req,res)=>{
    const product = data.products.find(x=>x._id==req.params.id)
    console.log('product',product)
    if(product) res.send(product)
    else res.status(404).send({message:'Product not found!'})
})


app.listen(port,()=>{
    console.log(`server is listening on : ${port}`)
})