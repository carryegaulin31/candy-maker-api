const models = require('../models')

const getAllManufacturers = async (request, response) => {

  const allManufacturers = await models.Manufacturers.findAll({
    include: [{ model: models.Products }]
  })

  return allManufacturers
    ? response.send(allManufacturers)
    : response.sendStatus(404)
}


const getManufacturerIdWithProducts = async (request, response) => {
  const { id } = request.params

  const manufacturers = await models.Manufacturers.findAll({
    where: { id },
    include: [{ model: models.Products }]
  })

  return manufacturers
    ? response.send(manufacturers)
    : response.sendStatus(404)
}

module.exports = { getAllManufacturers, getManufacturerIdWithProducts }