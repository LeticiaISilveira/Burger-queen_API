'use strict';
module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define('Items', {
    type: DataTypes.STRING
  }, {});
  Items.associate = function(models) {
    // associations can be defined here
  };
  return Items;
};