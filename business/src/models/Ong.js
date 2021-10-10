const databaseConfig = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);
const Conta = require('./Conta');

const Ong = sequelize.define(
  "Ong", {
    id_ong: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_conta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Ong",
    timestamps: false,
  }
);
Ong.hasOne(Conta, {
  foreignKey: 'id_conta',
  as: "conta"
})

module.exports = Ong;