const products = (connection, Sequelize, Manufacturers, manufacturerId) => {
  return connection.define('products', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNULL: false },
    yearIntroduced: { type: Sequelize.DATE },
    manufacturerId: { type: Sequelize.INTEGER, references: { model: Manufacturers, key: 'id' } }
  }, { paranoid: true })
}

module.exports = products