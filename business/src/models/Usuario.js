const databaseConfig = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);
const Conta = require('./Conta');

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

Usuario.hasOne(Conta, {
  foreignKey: 'id_conta',
  as: "conta"
})
Conta.hasOne(Usuario, {
  foreignKey: 'id_conta',
  as: "usuario"
})
module.exports = Usuario;