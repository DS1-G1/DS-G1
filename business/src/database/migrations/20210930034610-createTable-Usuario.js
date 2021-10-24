"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "Usuario",
        {
          id_usuario: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          id_conta: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "Conta",
              key: "id_conta",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          sobreNome: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
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
    await queryInterface.dropTable("Usuario");
  },
};
