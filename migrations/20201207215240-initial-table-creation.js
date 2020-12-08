module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('candies', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNULL: false },
      yearIntroduced: { type: Sequelize.DATE },
      manufacturerId: { type: Sequelize.INTEGER, references: { model: Manufacturers, key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })
  },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    In addition to the model columns, I need to add my time columns since this is the command that will create the table.Remember that Sequelize models don't include them but expect them to be present. Since our migration is creating the table, we need to make sure these columns are created. For our defaultValue, I can use the Sequelize.literal() function to provide a SQL command for generating the timestamp needed.

    Code File(./ migrations / 20200406153841 - initial - table - creation.js)
    module.exports = {
      up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        return queryInterface.createTable('candies', {
          id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
          name: { type: Sequelize.STRING },
          realname: { type: Sequelize.STRING },
          firstappearance: { type: Sequelize.STRING },
          slug: { type: Sequelize.STRING, unique: true },
          createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
          updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
          },
          deletedAt: { type: Sequelize.DATE },
        })
      },

      down: (queryInterface) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.dropTable('users');
        */
        return queryInterface.dropTable('candies')
      }
    }


  }
};
