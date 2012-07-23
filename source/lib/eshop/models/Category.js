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
  return sequelize.define("eshop_categories", {
        id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        cat_name: { type: sequelize.STRING},
        cat_image: { type: sequelize.STRING},
        cat_details_image: { type: sequelize.STRING},
        cat_parent_id: { type: sequelize.INTEGER},
        cat_description: { type: sequelize.STRING};
    }, {
      classMethods: {
        getProduct: function(){ return this.attributes.id; }
      },
      instanceMethods: {
        getProducts: function() { return this; }
      }
  });
}