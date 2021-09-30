const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Usuario = sequelize.define(
  "Usuario", {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_conta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sobreNome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataNascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }
  ,
  {
    tableName: "Usuario",
    timestamps: false,
  }
);

module.exports = Usuario;