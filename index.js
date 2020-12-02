const express = require('express')
const { getManufacturerIdWithProducts } = require('./controllers/manufacturers')
const { getProductByIdWithManufacturers } = require('./controllers/products')

const app = express()

app.get('/manufacturers/:id', getManufacturerIdWithProducts)
app.get('/products/:id', getProductByIdWithManufacturers)

app.listen(1338, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})