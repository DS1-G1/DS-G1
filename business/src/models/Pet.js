const databaseConfig = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);
const Conta = require("./Conta");
const Endereco = require("./Endereco");

const Pet = sequelize.define(
  "Pet",
  {
    id_pet: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    especie: {
      type: DataTypes.ENUM(["Cachorro", "Gato"]),
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.ENUM(["Femea", "Macho", "Indefinido"]),
      defaultValue: "Indefinido",
      allowNull: false,
    },
    porte: {
      type: DataTypes.ENUM(["Pequeno", "Medio", "Grande"]),
      allowNull: false,
    },
    raca: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dataNascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Endereco,
        key: "cep",
      },
    },
    id_conta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Conta,
        key: "id_conta",
      },
    },
  },
  {
    tableName: "Pet",
    timestamps: false,
  }
);

module.exports = Pet;
