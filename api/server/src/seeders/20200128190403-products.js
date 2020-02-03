'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Products', [{
        name: 'Café',
        price: 4,
        createdAt: new Date(),
        updatedAt: new Date()
        
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
    
  }
};
