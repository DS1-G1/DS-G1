'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
          "Pet", {
            id_pet: {
              type: Sequelize.DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
              allowNull: false,
            },
            especie: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
            },
            nome: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
            },
            sexo: {
              type: Sequelize.DataTypes.ENUM(['Femea', 'Macho', 'Indefinido']),
              defaultValue: 'Indefinido',
              allowNull: false,
              enumName: "enum_pet_sexo"
            },
            porte: {
              type: Sequelize.DataTypes.ENUM(['Pequeno', 'Medio', 'Grande']),
              allowNull: false,
              enumName: "enum_pet_porte"
            },
            raca: {
              type: Sequelize.DataTypes.STRING,
              allowNull: true
            },
            dataNascimento: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false
            },
            cep: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false,
              references: {
                model: "Endereco",
                key: "cep",
              },
              onUpdate: "SET NULL",
              onDelete: "SET NULL",
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
    await queryInterface.dropTable("Pet");
    await queryInterface.dropEnum("enum_pet_sexo");
    await queryInterface.dropEnum("enum_pet_porte");
  }
};
