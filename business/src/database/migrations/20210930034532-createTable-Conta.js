"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "Conta",
        {
          id_conta: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          nome: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          senha: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          isAdmin: {
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          telefone: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          cep: {
            type: Sequelize.DataTypes.BIGINT,
            allowNull: true,
            references: {
              model: "Endereco",
              key: "cep",
            },
            onUpdate: "RESTRICT",
            onDelete: "RESTRICT",
          },
        },
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Conta");
  },
};
