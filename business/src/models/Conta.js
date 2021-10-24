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
      allowNull: true,
      references: {
        model: "Endereco",
        key: "cep",
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    },
  },
  {
    tableName: "Conta",
    timestamps: false,
  }
);

Conta.hasOne(Endereco, {
  sourceKey: 'cep',
  as:'enderecoConta',
  foreignKey: "cep",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
});
Endereco.hasMany(Conta, {
  foreignKey: "cep",
  sourceKey: 'cep',
  onDelete: "SET NULL",
  onUpdate: "SET NULL",
});
Pet.hasOne(Conta, {
  foreignKey: "id_conta",
  sourceKey: 'id_conta',
  as: 'dono',
  onDelete: 'CASCADE',
  onUpdate:'CASCADE'
});
Conta.hasMany(Pet, {
  sourceKey: 'id_conta',
  as:'pet',
  foreignKey: "id_conta",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Conta;
