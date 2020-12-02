const express = require('express')
const { getManufacturerIdWithProducts } = require('./controllers/manufacturers')
const { getProductByIdWithManufacturers } = require('./controllers/products')

const app = express()

app.get('/manufacturers/:id', getManufacturerIdWithProducts)
app.get('/products/:id', getProductByIdWithManufacturers)

app.listen(1337, () => {
  console.log('Listening on port 1337...') 
})