const databaseConfig = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);
const Estado = require("./Estado");
const Pet = require("./Pet");
const Conta = require("./Conta");

const Endereco = sequelize.define(
  "Endereco",
  {
    cep: {
      type: DataTypes.BIGINT,
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
    },
  },
  {
    tableName: "Endereco",
    timestamps: false,
  }
);

Endereco.hasOne(Estado, {
  foreignKey: "id_estado",
  as: "estado",
});
Endereco.hasMany(Pet, {
  foreignKey: "cep",
  as: "pets",
});
Pet.hasOne(Endereco, {
  foreignKey: "cep",
  as: "endereco",
});

module.exports = Endereco;
