'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
    data_begin: DataTypes.DATEONLY
  }, { paranoid: true });
  Classes.associate = function(models) {
    Classes.hasMany(models.Registration, {
      foreignKey: 'class_id'
    })
    Classes.belongsTo(models.People, {
      foreignKey: 'docente_id'
    })
    Classes.belongsTo(models.Levels, {
      foreignKey: 'level_id'  
    })
  };
  return Classes;
};