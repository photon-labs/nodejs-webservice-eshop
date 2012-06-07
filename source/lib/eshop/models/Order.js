module.exports = function(sequelize, DataTypes) {
  var order = sequelize.define("eshop_orders", {
        id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        od_date: { type: sequelize.DATE},
        od_last_update: { type: sequelize.DATE},
		userid: { type: sequelize.INTEGER},
        od_status: { type: sequelize.STRING},
        od_shipping_first_name: { type: sequelize.STRING},
        od_shipping_last_name: { type: sequelize.STRING},
        od_shipping_address1: { type: sequelize.STRING},
		od_shipping_address2: { type: sequelize.STRING},
        od_shipping_city: { type: sequelize.STRING},
        od_shipping_postal_code: { type: sequelize.INTEGER},
		od_shipping_cost: { type: sequelize.INTEGER},
        od_payment_first_name: { type: sequelize.STRING},
		od_payment_last_name: { type: sequelize.STRING},
		od_payment_address1: { type: sequelize.STRING},
		od_payment_address2: { type: sequelize.STRING},
		od_payment_city: { type: sequelize.STRING},
		od_payment_postal_code: { type: sequelize.INTEGER}
    
  });
   return order;
}


