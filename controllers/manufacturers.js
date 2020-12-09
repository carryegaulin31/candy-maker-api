const models = require('../models')

const getAllManufacturersByFuzzy = async (request, response) => {
  const { name } = request.params
  
  const allManufacturers = await models.Manufacturers.findAll({
    where: {
      name: { [models.Op.like]: `%${name}%`}
    },
    include: [{ model: models.Products }]
  })

  return allManufacturers
    ? response.send(allManufacturers)
    : response.sendStatus(404)
}


const getManufacturerIdWithProducts = async (request, response) => {
  
  const manufacturers = await models.Manufacturers.findAll({
    include: [{ model: models.Products }]
  })

  return manufacturers
    ? response.send(manufacturers)
    : response.sendStatus(404)
}

module.exports = {
getAllManufacturersByFuzzy, 
getManufacturerIdWithProducts 
}