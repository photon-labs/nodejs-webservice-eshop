/*
 * PHR_NodeJSWebService
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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