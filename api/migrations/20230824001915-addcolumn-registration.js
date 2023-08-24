'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Registrations', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Registrations', 'deletedAt');
  }
};