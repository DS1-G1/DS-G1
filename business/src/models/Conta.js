const databaseConfig = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);
const Endereco = require("./Endereco");
const Pet = require("./Pet");

const Conta = sequelize.define(
  "Conta",
  {
    id_conta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: Sequelize.DataTypes.BIGINT,
      references: {
        model: Endereco,
        key: "cep",
      },
      allowNull: true,
    },
  },
  {
    tableName: "Conta",
    timestamps: false,
  }
);

Conta.hasOne(Endereco, {
  foreignKey: "cep",
  as: "endereco",
});
Endereco.hasMany(Conta, {
  foreignKey: "cep",
  as: "conta",
});
Conta.hasMany(Pet, {
  foreignKey: "id_conta",
  as: "pet",
});
Pet.belongsTo(Conta, {
  foreignKey: "id_conta",
  as: "conta",
});

module.exports = Conta;
