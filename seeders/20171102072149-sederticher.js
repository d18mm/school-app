'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Teachers', [{
      first_Name: 'Bambang',
      last_Name: 'Suprapto',
      email : 'bambangsuprapto@sekolah.id'
    },{
      first_Name: 'Rukmana',
      last_Name: 'Fatmawati',
      email : 'rukmanafatmawati@sekolah.id'
    },{
      first_Name: 'Butet',
      last_Name: 'Naiborhu',
      email : 'butetnaiborhu@sekolah.id'
    },{
      first_Name: 'Yulius',
      last_Name: 'Prawiranegara',
      email : 'yuliusprawiranegara@sekolah.id'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
