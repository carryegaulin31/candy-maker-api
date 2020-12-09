const express = require('express')
const { getAllManufacturersByFuzzy } = require('./controllers/manufacturers')
const { getManufacturerIdWithProducts } = require('./controllers/manufacturers')
const { getProductByIdWithManufacturers } = require('./controllers/products')
const { getProductByFuzzy } = require('./controllers/products')
const app = express()

app.get('/manufacturers/:name', getAllManufacturersByFuzzy)
app.get('/manufacturers/:id', getManufacturerIdWithProducts)
app.get('/products/:id', getProductByIdWithManufacturers)
app.get('/products/:name', getProductByFuzzy)

app.listen(1337, () => {
  console.log('Listening on port 1337...') 
})