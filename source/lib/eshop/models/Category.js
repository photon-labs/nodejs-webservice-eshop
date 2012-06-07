module.exports = function(sequelize, DataTypes) {
  return sequelize.define("eshop_categories", {
        id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        cat_name: { type: sequelize.STRING},
        cat_image: { type: sequelize.STRING},
        cat_details_image: { type: sequelize.STRING},
        cat_parent_id: { type: sequelize.INTEGER},
        cat_description: { type: sequelize.STRING}
    }, {
      classMethods: {
        getProduct: function(){ return this.attributes.id }
      },
      instanceMethods: {
        getProducts: function() { return this }
      }
  })
}