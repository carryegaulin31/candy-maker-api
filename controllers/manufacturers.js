const models = require('../models')
const manufacturers = require('../models/manufacturers')

const getManufacturerId = async (request, response) => {
  const { id } = request.params

  const product = await models.Manufacturers.findOne({
    where: { id },
    include: [{ model: models.Manufacturers }]
  })

  return manufacturers
    ? response.send(manufacturers)
    : response.sendStatus(404)
}

module.exports = { getManufacturerId }