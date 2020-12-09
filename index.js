const express = require('express')
const { getAllManufacturersByFuzzy } = require('./controllers/manufacturers')
const { getManufacturerIdWithProducts } = require('./controllers/manufacturers')
const { getProductsByFuzzy } = require('./controllers/products')
const app = express()

app.get('/', getManufacturerIdWithProducts)
app.get('/manufacturers/:name', getAllManufacturersByFuzzy)
app.get('/products/:name', getProductsByFuzzy)

app.listen(1337, () => {
  console.log('Listening on port 1337...') 
})