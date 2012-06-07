package com.photon.phresco.uiconstants;

import java.lang.reflect.Field;


public class PhrescoNodejsUiConstants {
	
	private ReadXMLFile readXml;

	public String PROTOCOL = "protocol";
	public String SERVER_PORT = "selenium.port";
	public String CONTEXT_ESHOP = "context";
	public String CONTEXT_REST_API="server.context.restapi";
	public String CONTEXT_CONFIG= "server.context.config";
	public String CONTEXT_CATEGORIES= "server.context.categories";
	public String CONTEXT_PRODUCTS= "server.context.products";
	public String CONTEXT_CATEGORY1= "server.context.category1";
	public String CONTEXT_CATEGORY2= "server.context.category2";
	public String CONTEXT_CATEGORY3= "server.context.category3";
	public String CONTEXT_PRODUCTREVIEW="server.context.productreview";
	public String CONTEXT_SEARCHMOBILE="server.context.searchmobile";
	public String CONTEXT_SEARCHCOUMPUTER="server.context.searchcomputer";
	public String CONTEXT_NEWPRODUCTS = "server.context.newproducts";
	public String CONTEXT_SPECIAL_PRODUCTS ="server.context.specialproducts";
	
	public String SPECIALPRODUCTS="stringCaptureSpecialProductsUrl";
	public String  SEARCHMOBILE="stringCaptureSearchMobileUrl";
	public String SEARCHCOMPUTER="stringCaptureSearchComputerUrl";
	public String PRODUCTREVIEW="stringCaptureProductReviewUrl";
	
	
	public String SELENIUM_HOST = "selenium.host";
	public String HOST = "host";
	public String PORT = "port";
	public String BROWSER = "Browser";
	public String SPEED = "speed";
	public String ESHOP = "stringCaptureEshopUrl";
	public String CONFIG = "stringCaptureConfigUrl";
	public String CATEGORIES= "stringCaptureCategoriesUrl";
	public String PRODUCTS= "stringCaptureProductsUrl";
	public String CATEGORY1= "stringCaptureCategory1Url";
	public String CATEGORY2= "stringCaptureCategory2Url";
	public String CATEGORY3= "stringCaptureCategory3Url";

	



	

	public PhrescoNodejsUiConstants() {
		try {
		    readXml = new ReadXMLFile();
			Field[] arrayOfField1 = super.getClass().getFields();
			Field[] arrayOfField2 = arrayOfField1;
			int i = arrayOfField2.length;
			for (int j = 0; j < i; ++j) {
				Field localField = arrayOfField2[j];
				Object localObject = localField.get(this);
				if (localObject instanceof String)
					localField
							.set(this, readXml.getValue((String) localObject));

			}
		} catch (Exception localException) {
			throw new RuntimeException("Loading "
					+ super.getClass().getSimpleName() + " failed",
					localException);
		}
	}
}
