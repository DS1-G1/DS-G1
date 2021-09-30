const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Endereco = sequelize.define(
  "Endereco",
  {
    cep: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    lagradouro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "Endereco",
    timestamps: false,
  }
);

module.exports = Endereco;