"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "Pet",
        {
          id_pet: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          especie: {
            type: Sequelize.DataTypes.ENUM(["Cachorro", "Gato"]),
            allowNull: false,
            enumName: "enum_pet_especie",
          },
          nome: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          sexo: {
            type: Sequelize.DataTypes.ENUM(["Femea", "Macho", "Indefinido"]),
            defaultValue: "Indefinido",
            allowNull: false,
            enumName: "enum_pet_sexo",
          },
          porte: {
            type: Sequelize.DataTypes.ENUM(["Pequeno", "Medio", "Grande"]),
            allowNull: false,
            enumName: "enum_pet_porte",
          },
          raca: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
          },
          dataNascimento: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
          },
          descricao: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
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
    await queryInterface.dropTable("Pet");
    await queryInterface.dropEnum("enum_pet_sexo");
    await queryInterface.dropEnum("enum_pet_porte");
    await queryInterface.dropEnum("enum_pet_especie");
  },
};
