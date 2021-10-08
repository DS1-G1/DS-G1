'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
          "Endereco", {
            cep: {
              type: Sequelize.DataTypes.STRING,
              primaryKey: true,
              allowNull: false,
            },
            lagradouro: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
            },
            complemento: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
            },
            bairro: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
            },
            id_estado: {
              type: Sequelize.DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: "Estado",
                key: "id_estado",
              },
              onUpdate: "RESTRICT",
              onDelete: "RESTRICT",
            }
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
    await queryInterface.dropTable("Endereco");
  }
};
