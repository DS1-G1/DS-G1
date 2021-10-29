"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Pet", "dataNascimento");
    await queryInterface.addColumn(
      "Pet",
      "telefone",
      Sequelize.DataTypes.STRING
    );
    await queryInterface.addColumn(
      "Pet",
      "nomeDoador",
      Sequelize.DataTypes.STRING
    );
    await queryInterface.addColumn("Pet", "idade", Sequelize.DataTypes.INTEGER);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Pet",
      "dataNascimento",
      Sequelize.DataTypes.DATE
    );
    await queryInterface.removeColumn("Pet", "telefone");
    await queryInterface.removeColumn("Pet", "nomeDoador");
    await queryInterface.removeColumn("Pet", "idade");
  },
};
