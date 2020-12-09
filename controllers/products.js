const models = require('../models')
const getProductsByFuzzy = async (request, response) => {
  const { name } = request.params
  const product = await models.Products.findAll({
    where: {
      name: { [models.Op.like]: `%${name}%` }
    },
    include: [{
      model: models.Manufacturers }],
  })
  return product
    ? response.send(product)
    : response.sendStatus(404)
}
module.exports = { getProductsByFuzzy }