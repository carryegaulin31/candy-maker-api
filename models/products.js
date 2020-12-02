const products = (connection, Sequelize) => {
  return connection.define('candies', {
  id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
  name: { type: Sequelize.VARCHAR },
  yearIntroduced: { type: Sequelize.DATE },
  manufacturerId: { type: Sequelize.INTEGER },
  createdAt: { type: Sequelize.DATETIME },
  updatedAt: { type: Sequelize.DATETIME },
  }, { paranoid: true })
}

module.exports = products