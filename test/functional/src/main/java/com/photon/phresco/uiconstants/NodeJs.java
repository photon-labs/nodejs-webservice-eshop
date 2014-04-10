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
package com.photon.phresco.uiconstants;

import java.lang.reflect.Field;


import org.openqa.selenium.server.InjectionHelper;

public class NodeJs {

	private ReadXMLFile readXml;
	
	
	public String CONTEXTCONFIG="context.config";
	public String CONTEXCATEGORIES="context.categories";
	public String CONTEXTPRODUCTS="context.products";
	public String CONTEXTCATEGORY1="context.category1";
	public String CONTEXTCATEGORY2="context.category2";
	public String CONTEXTCATEGORY3="context.category3";
	public String CONTEXTPRODUCTREVIEW="context.productreview";
	public String CONTEXTSEARCHMOBILE="context.searchmobile";
	public String CONTEXTSEARCHCOMPUTER="context.searchcomputer";
	public String CONTEXTNEWPRODUCTS="context.newproducts";
	public String CONTEXTSPECIALPRODUCTS="context.specialproducts";

	public NodeJs() {
		
		try {
			readXml = new ReadXMLFile();
			readXml.NodejsData();
			Field[] arrayOfField1 = super.getClass().getFields();
			Field[] arrayOfField2 = arrayOfField1;
			int i = arrayOfField2.length;
			for (int j = 0; j < i; ++j) {
				Field localField = arrayOfField2[j];
				Object localObject = localField.get(this);
				if (localObject instanceof String)
					localField.set(this, readXml.getValue((String) localObject));

			}
		} catch (Exception localException) {
			throw new RuntimeException("Loading "
					+ super.getClass().getSimpleName() + " failed",
					localException);
		}
	}
}
