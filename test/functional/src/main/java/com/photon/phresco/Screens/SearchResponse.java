/**
 * PHR_NodeJSWebService
 *
 * Copyright (C) 1999-2014 Photon Infotech Inc.
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
package com.photon.phresco.Screens;

import java.io.IOException;

import java.io.Serializable;
import java.lang.reflect.Type;
import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class SearchResponse implements Serializable {
	private final long serialVersionUID = 1L;

	private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrlValue() {
		return urlValue;
	}


	private String featureIcon;
	private String name;
	private String urlValue;

	public JSONObject getCategoryJSONObject(String url) throws IOException {
		// Log.i("getCategoryJSONObject","");
		JSONObject categoryJSONResponseObj = null;
		categoryJSONResponseObj = JSONHelper.getJSONObjectFromURL(url);
		// System.out.println(" in side search Response---->");
		return categoryJSONResponseObj;
	}
	
	
	@SuppressWarnings("unchecked")
	public List<SearchResponse> getCategoryGSONObject(JSONObject categoryJSONObj) {
		List<SearchResponse> categoryList = null;
		
		try {

			Gson jsonObj = new Gson();
			Type listType = new TypeToken<List<SearchResponse>>() {
			}.getType();
			categoryList = (List<SearchResponse>) jsonObj.fromJson(
					categoryJSONObj.getJSONArray("category").toString(),
					listType);

		} catch (JSONException ex) {
		}
		return categoryList;

	}
	
	
	@SuppressWarnings("unchecked")
	public List<SearchResponse> getCategoryList1GSONObject(JSONObject categoryList1JSONObj) {
		List<SearchResponse> categoryList1 = null;
		
		try {

			Gson jsonObj = new Gson();
			Type listType = new TypeToken<List<SearchResponse>>() {
			}.getType();
			categoryList1 = (List<SearchResponse>) jsonObj.fromJson(categoryList1JSONObj.getJSONArray("product").toString(),
					listType);

		} catch (JSONException ex) {
		}
		return categoryList1;

	}
	
	@SuppressWarnings("unchecked")
	public List<SearchResponse> getCategoryList2GSONObject(JSONObject categoryList2JSONObj) {
		List<SearchResponse> categoryList2 = null;
		
		try {

			Gson jsonObj = new Gson();
			Type listType = new TypeToken<List<SearchResponse>>() {
			}.getType();
			categoryList2 = (List<SearchResponse>) jsonObj.fromJson(categoryList2JSONObj.getJSONArray("product").toString(),
					listType);

		} catch (JSONException ex) {
		}
		return categoryList2;

	}
	
	@SuppressWarnings("unchecked")
	public List<SearchResponse> getCategoryList3GSONObject(JSONObject categoryList3JSONObj) {
		List<SearchResponse> categoryList3 = null;
		
		try {

			Gson jsonObj = new Gson();
			Type listType = new TypeToken<List<SearchResponse>>() {
			}.getType();
			categoryList3 = (List<SearchResponse>) jsonObj.fromJson(categoryList3JSONObj.getJSONArray("product").toString(),
					listType);

		} catch (JSONException ex) {
		}
		return categoryList3;

	}
	

	@SuppressWarnings("unchecked")
	public List<SearchResponse> getNewProductListGSONObject(JSONObject NewProductListJSONObj) {
		List<SearchResponse> NewProductList = null;
		
		try {

			Gson jsonObj = new Gson();
			Type listType = new TypeToken<List<SearchResponse>>() {
			}.getType();
			NewProductList = (List<SearchResponse>) jsonObj.fromJson(NewProductListJSONObj.getJSONArray("product").toString(),
					listType);

		} catch (JSONException ex) {
		}
		return NewProductList;

	}

	
	@SuppressWarnings("unchecked")
	public List<SearchResponse> getproductGSONObject(JSONObject productJSONObj) {
		List<SearchResponse> productList = null;
			try {
				Gson jsonObj = new Gson();
				Type listType = new TypeToken<List<SearchResponse>>() {
				}.getType();
				
				productList = (List<SearchResponse>) jsonObj.fromJson(productJSONObj.getJSONArray("product").toString(), listType);
				
			} catch (JSONException ex) {
			}
			return productList;
				
		
		
		
	}
	@SuppressWarnings("unchecked")
	public List<SearchResponse> getcomputerListGSONObject(JSONObject  computerListJSONObj) {
		List<SearchResponse>  computerList = null;
			try {
				Gson jsonObj = new Gson();
				Type listType = new TypeToken<List<SearchResponse>>() {
				}.getType();
				
				 computerList = (List<SearchResponse>) jsonObj.fromJson( computerListJSONObj.getJSONArray("product").toString(), listType);
				
			} catch (JSONException ex) {
			}
			return  computerList;
							
	}
	
	@SuppressWarnings("unchecked")
	public List<SearchResponse> getMobileListGSONObject(JSONObject  MobileListJSONObj) {
		List<SearchResponse>  MobileList = null;
			try {
				Gson jsonObj = new Gson();
				Type listType = new TypeToken<List<SearchResponse>>() {
				}.getType();
				
				MobileList = (List<SearchResponse>) jsonObj.fromJson(MobileListJSONObj.getJSONArray("product").toString(), listType);
				
			} catch (JSONException ex) {
			}
			return  MobileList;
							
	}
	@SuppressWarnings("unchecked")
	public List<SearchResponse> getProductsListGSONObject(JSONObject ProductsListJSONObj) {
		List<SearchResponse>   ProductsList = null;
			try {
				Gson jsonObj = new Gson();
				Type listType = new TypeToken<List<SearchResponse>>() {
				}.getType();
				
				 ProductsList = (List<SearchResponse>) jsonObj.fromJson(  ProductsListJSONObj.getJSONArray("product").toString(), listType);
				
			} catch (JSONException ex) {
			}
			return   ProductsList;
		
	}
	@SuppressWarnings("unchecked")
	public List<SearchResponse> getSpecialProductsListGSONObject(JSONObject SpecialProductsListJSONObj) {
		List<SearchResponse>   SpecialProductsList= null;
			try {
				Gson jsonObj = new Gson();
				Type listType = new TypeToken<List<SearchResponse>>() {
				}.getType();
				
				SpecialProductsList= (List<SearchResponse>) jsonObj.fromJson( SpecialProductsListJSONObj.getJSONArray("product").toString(), listType);
				
			} catch (JSONException ex) {
			}
			return   SpecialProductsList;
		
}
	

}
