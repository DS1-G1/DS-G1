const axios = require('axios').default;
  
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const { data } = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      const result = data.map(estado => {
        return {
          sigla: estado.sigla,
          unidadeFederativa: estado.nome
        }
      })
      await queryInterface.bulkInsert("Estado", result, {})
    }
    catch (e) {
      console.warn(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Estado", null, {});
  }
};
