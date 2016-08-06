'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Burgers', [{
        burger_name: 'triple bacon lindy',
        devoured: false
      },
      {
        burger_name: 'double double mustard fried',
        devoured: false
      },
      {
        burger_name: 'juicy lucy all the way',
        devoured: false
      }], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
