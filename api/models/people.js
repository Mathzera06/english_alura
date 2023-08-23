'use strict';
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  People.associate = function(models) {
    People.hasMany(models.classes, {
      foreignKey: 'docente_id'
    }) //O sequelize associa e já cria uma coluna chamada, por exemplo, PeopleId
    People.hasMany(models.registration, {
      foreignKey: 'student_id'
    })
  };
  return People;
};