
const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')

const ManufacturersModel = require('./manufacturers')
const ProductsModel = require('./products')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const manufacturers = ManufacturersModel(connection, Sequelize)
const products = ProductsModel(connection, Sequelize)

/* const manufacturers = require('./manufacturers')
const products = require('./products')
const allManufacturers = require('./manufacturers')
const connection = new Sequelize('candies', 'candies1', 'candies', {
  host: 'localhost', dialect: 'mysql'
}) */

const Manufacturers = ManufacturersModel(connection, Sequelize)
const Products = ProductsModel(connection, Sequelize, Manufacturers)

Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)

module.exports = {
  Products,
  Manufacturers,
  Op: Sequelize.Op
}