'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
          "Estado", {
            id_estado: {
              type: Sequelize.DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
              allowNull: false,
            },
            unidadeFederativa: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
            },
            sigla: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
            }, 
          },
          { transaction }
      )
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Estado");
  }
};
