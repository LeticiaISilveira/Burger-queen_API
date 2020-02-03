'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    tableNumber: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};