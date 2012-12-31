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
