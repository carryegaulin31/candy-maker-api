const models = require('../models')

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

module.exports = { getManufacturerIdWithProducts }