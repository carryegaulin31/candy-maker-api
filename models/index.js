const Sequelize = require('sequelize')
const ManufacturersModel = require('./manufacturers')
const ProductsModel = require('./products')
const manufacturers = require('./manufacturers')
const products = require('./products')
const allManufacturers = require('./manufacturers')
const connection = new Sequelize('candies', 'candies1', 'candies', {
  host: 'localhost', dialect: 'mysql'
})

const Manufacturers = ManufacturersModel(connection, Sequelize)
const Products = ProductsModel(connection, Sequelize, Manufacturers)

Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)

module.exports = { Products, Manufacturers, products, manufacturers, allManufacturers }