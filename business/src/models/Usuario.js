const databaseConfig = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);
const Conta = require("./Conta");

const Usuario = sequelize.define(
  "Usuario",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_conta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Conta",
        key: "id_conta",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    sobreNome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Usuario",
    timestamps: false,
  }
);

Usuario.hasOne(Conta, {
  foreignKey: "id_conta",
  sourceKey: "id_conta",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
Conta.hasOne(Usuario, {
  foreignKey: "id_conta",
  sourceKey: "id_conta",
  as: "usuario",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Usuario;
