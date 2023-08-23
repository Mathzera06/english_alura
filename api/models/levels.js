'use strict';
module.exports = (sequelize, DataTypes) => {
  const Levels = sequelize.define('Levels', {
    descr_level: DataTypes.STRING
  }, {});
  Levels.associate = function(models) {
    Levels.hasMany(models.classes, {
      foreignKey: 'level_id'  
    })
  };
  return Levels;
};