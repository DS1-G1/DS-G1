"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Pet",
      "localizacao",
      Sequelize.DataTypes.STRING
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Pet", "localizacao");
  },
};
