package com.photon.phresco.Screens;

import java.io.IOException;

import org.apache.commons.lang.StringUtils;

import com.photon.phresco.uiconstants.PhrescoNodejsUiConstants;

public class WelcomeScreen extends PhotonAbstractScreen {
	private PhrescoNodejsUiConstants phrsc = new PhrescoNodejsUiConstants();

	public WelcomeScreen(String host, int port, String browser, String url,
			String speed, String contextName) throws InterruptedException,
			IOException, Exception {
		super(host, port, browser, url, speed, contextName);

		/*
		 * waitForElementPresent(phrsc.HOME); click(phrsc.HOME);
		 */

	}
	
//	public static void main (String args[]) throws JSONException {
	//	TestJson json = new TestJson();
		
//	}

	public void nodejsEshop(String methodName) throws InterruptedException, IOException,
			Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
		isTextPresent(phrsc.ESHOP,methodName);
		
	

	}

	public void nodejsConfig(String methodName) throws InterruptedException, IOException,
			Exception {
		
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
		isTextPresent(phrsc.CONFIG,methodName);
		

	}

	public void nodejsCategories(String methodName) throws InterruptedException, IOException,
			Exception {
		
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
		isTextPresent(phrsc.CATEGORIES,methodName);


	}

	public void nodejsProducts(String methodName) throws InterruptedException, IOException,
			Exception {
		
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
		isTextPresent(phrsc.PRODUCTS,methodName);
		


	}

	public void nodejsCategory1(String methodName) throws InterruptedException, IOException,
			Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
		isTextPresent(phrsc.CATEGORY1,methodName);
		
	}

	public void nodejsCategory2(String methodName) throws InterruptedException, IOException,
			Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
		isTextPresent(phrsc.CATEGORY2,methodName);
		
	}

	public void nodejsCategory3(String methodName) throws InterruptedException, IOException,
			Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
		isTextPresent(phrsc.CATEGORY3,methodName);
		

	}

	public void Nodejsnewproducts(String methodName) throws Exception, IOException {
		
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
		isTextPresent(phrsc.PRODUCTS,methodName);
		
	}

	public void nodejsSpecialproducts(String methodName) throws Exception, IOException {
		
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
		isTextPresent(phrsc.SPECIALPRODUCTS,methodName);
		

	}

	public void nodejsSearchMobile(String methodName) throws Exception, IOException {
		
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
		isTextPresent(phrsc.SEARCHMOBILE,methodName);
		//System.out.println("==========================================");
		
	}

	public void nodejsSearchComputer(String methodName) throws Exception, IOException {
		isTextPresent(phrsc.SEARCHCOMPUTER,methodName);
		
	}

	public void nodejsReviewProduct() throws Exception, IOException {
		//waitForTextPresent(phrsc.PRODUCTREVIEW);
		
	}

}
