const databaseConfig = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);

const Estado = sequelize.define(
  "Estado",
  {
    id_estado: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    sigla: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unidadeFederativa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Estado",
    timestamps: false,
  }
);

module.exports = Estado;