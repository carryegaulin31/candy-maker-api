const models = require('../models')

const getProductByIdWithManufacturers = async (request, response) => {
  const { id } = request.params

  const products = await models.Products.findAll({
    where: { id },
    include: [{ model: models.Manufacturers }]
  })

  return products
    ? response.send(products)
    : response.sendStatus(404)
}

module.exports = { getProductByIdWithManufacturers }