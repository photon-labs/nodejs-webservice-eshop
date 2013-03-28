module.exports = function(sequelize, DataTypes) {
  var orderItem = sequelize.define("eshop_order_items", {
        id: { type: sequelize.INTEGER, primaryKey: true},
        pd_id: { type: sequelize.INTEGER},
        od_qty: { type: sequelize.INTEGER}
  });
   return orderItem;
}


