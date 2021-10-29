const databaseConfig = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);

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
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    localizacao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nomeDoador: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "Pet",
    timestamps: false,
  }
);

module.exports = Pet;
