const models = require('../models')

const getProductByIdWithManufacturers = async (request, response) => {
  const { id } = request.params

  const product = await models.Products.findOne({
    where: { id },
    include: [{ model: models.Products }]
  })

  return product
    ? response.send(product)
    : response.sendStatus(404)
}

module.exports = { getProductByIdWithManufacturers }