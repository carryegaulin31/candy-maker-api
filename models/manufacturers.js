const manufacturers = (connection, Sequelize) => {
  return connection.define('candies', {
    id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
    name: { type: Sequelize.VARCHAR },
    country: { type: Sequelize.VARCHAR },
    createdAt: { type: Sequelize.DATETIME },
    updatedAt: { type: Sequelize.DATETIME },
  }, { paranoid: true })
}

module.exports = manufacturers