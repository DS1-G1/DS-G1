const sequelize = require("../database");
const { DataTypes } = require("sequelize");

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