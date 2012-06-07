module.exports = function(sequelize, DataTypes) {
  return sequelize.define("eshop_products", {
        id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        pd_name: { type: sequelize.STRING},
        pd_description: { type: sequelize.STRING},
        pd_manufacturer: { type: sequelize.STRING},
        pd_qty: { type: sequelize.INTEGER},
        cat_id: { type: sequelize.INTEGER},
        pd_model: { type: sequelize.STRING},
        pd_special: { type: sequelize.STRING},
		pd_new: { type: sequelize.STRING},
        pd_last_price: { type: sequelize.STRING},
        pd_sell_price: { type: sequelize.STRING},
        pd_img: { type: sequelize.STRING},
        pd_det_img: { type: sequelize.STRING}
    }, {
      classMethods: {
        getProd: function(){ return this.attributes.productId }
      },
      instanceMethods: {
        getProducts: function() { return this }
      }
  })
}