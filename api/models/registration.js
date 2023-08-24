'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    status: DataTypes.STRING
  }, { paranoid: true });
  Registration.associate = function(models) {
    Registration.belongsTo(models.People, {
      foreignKey: 'student_id'
    })
    Registration.belongsTo(models.Classes, {
      foreignKey: 'class_id'
    })
  };
  return Registration;
};