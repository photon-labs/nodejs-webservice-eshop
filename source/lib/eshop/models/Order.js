/*
 * ###
 * PHR_NodeJSWebService
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ###
 */
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


