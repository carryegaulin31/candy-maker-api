const express = require('express')
const { getManufacturerId } = require('./controllers/manufacturers')
const { getProductByIdWithManufacturers } = require('./controllers/products')

const app = express()

app.get('/manufacturers/:id', getManufacturerId)
app.get('/products/:id', getProductByIdWithManufacturers)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})