const sequelize = require("../database");
const { DataTypes } = require("sequelize");
const Conta = require('./Conta');
const Endereco = require('./Endereco');

const Pet = sequelize.define(
  "Pet", {
    id_pet: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    especie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.ENUM(['Femea', 'Macho', 'Indefinido']),
      defaultValue: 'Indefinido',
      allowNull: false,
    },
    porte: {
      type: DataTypes.ENUM(['Pequeno', 'Medio', 'Grande']),
      allowNull: false,
    },
    raca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dataNascimento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_conta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "Pet",
    timestamps: false,
  }
);
Pet.hasOne(Endereco, {
  foreignKey: 'cep'
})

Pet.belongsTo(Conta, {
  foreignKey: 'id_conta',
})

module.exports = Pet;