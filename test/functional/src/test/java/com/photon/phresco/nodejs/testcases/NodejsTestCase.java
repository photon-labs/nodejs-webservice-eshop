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
/*
 * Author by {phresco} QA Automation Team
 */
package com.photon.phresco.nodejs.testcases;

import java.io.IOException;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.photon.phresco.Screens.BaseScreen;
import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.uiconstants.NodeJs;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UiConstants;

public class NodejsTestCase extends BaseScreen {

	private PhrescoUiConstants phrsc;
	private NodeJs nodejsconst;
	private UiConstants uiconstants;
	private String selectedBrowser;
	private String selectedPlatform;
	private WelcomeScreen wel;
	private String serverURL;
	private String methodName;
	private String contextName;
	public String applicationContext;
	public String applicationURL;

	@Parameters(value = { "browser", "platform" })
	@BeforeTest
	public void setUp(String browser, String platform) throws Exception {

		try {
			phrsc = new PhrescoUiConstants();
			nodejsconst = new NodeJs();
			applicationURL = phrsc.PROTOCOL + "://" + phrsc.HOST + ":"
					+ phrsc.PORT + "/";
			selectedBrowser = browser;
			selectedPlatform = platform;
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			System.out.println("Selected Browser to execute testcases--->>"
					+ selectedBrowser);
			wel = new WelcomeScreen(selectedBrowser, selectedPlatform,
					applicationURL, phrsc.CONTEXT, phrsc, nodejsconst,
					uiconstants);

		} catch (Exception exception) {
			exception.printStackTrace();
		}
	}

	@Test
	public void testNodejsEshop() throws InterruptedException, IOException,
			Exception {
		try {

			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			System.out.println("methodName = " + methodName);
			wel.nodejsCategories(methodName);
			System.out.println("Sample Testing*******************************");
			wel.nodejsEshop(methodName);
			System.out.println("TestCategory1*******************************");
			wel.nodejsCategory1(methodName);
			System.out.println("TestCategory2*******************************");
			wel.nodejsCategory2(methodName);
			System.out.println("TestCategory3*******************************");
			wel.nodejsCategory3(methodName);
			System.out
					.println("TestNewProducts*******************************");
			wel.Nodejsnewproducts(methodName);
			System.out
					.println("TestAPIProducts*******************************");
			wel.nodejsProducts(methodName);
			System.out
					.println("TestSearchComputer*******************************");
			wel.nodejsSearchComputer(methodName);
			System.out
					.println("TestAPISearchMobile*******************************");
			wel.nodejsSearchMobile(methodName);
			System.out
					.println("TestAPISpecialProducts*******************************");
			wel.nodejsSpecialproducts(methodName);

			// contextName=phrsc.CONTEXT;
			// wel.navigatePath(applicationURL, contextName);
		} catch (Exception t) {
			// wel.ScreenCapturer();
		}
	}

	@Test
	public void testCategories() throws InterruptedException, IOException,
			Exception {
		try {

			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			contextName = phrsc.CONTEXT + nodejsconst.CONTEXCATEGORIES;
			System.out.println("The Context Name is:::::::::::::::"
					+ contextName);
			wel.navigatePath(applicationURL, contextName);
			wel.testCategories(applicationURL);

		} catch (Exception t) {
			// wel.ScreenCapturer();
		}
	}

	@Test
	public void testCategory1() throws InterruptedException, IOException,
			Exception {
		try {

			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			contextName = phrsc.CONTEXT + nodejsconst.CONTEXTCATEGORY1;
			System.out.println("The Context Name is:::::::::::::::"
					+ contextName);
			wel.navigatePath(applicationURL, contextName);
			wel.testCategory1(applicationURL, phrsc, nodejsconst);

		} catch (Exception t) {
		}
	}

	@Test
	public void testCategory2() throws InterruptedException, IOException,
			Exception {
		try {

			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			contextName = phrsc.CONTEXT + nodejsconst.CONTEXTCATEGORY2;
			System.out.println("The Context Name is:::::::::::::::"
					+ contextName);
			wel.navigatePath(applicationURL, contextName);
			wel.testCategory2(applicationURL, phrsc, nodejsconst);

		} catch (Exception t) {
			// wel.ScreenCapturer();
		}
	}

	@Test
	public void testCategory3() throws InterruptedException, IOException,
			Exception {
		try {

			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();

			contextName = phrsc.CONTEXT + nodejsconst.CONTEXTCATEGORY3;
			System.out.println("The Context Name is:::::::::::::::"
					+ contextName);
			wel.navigatePath(applicationURL, contextName);
			wel.testCategory3(applicationURL);

		} catch (Exception t) {
			// wel.ScreenCapturer();
		}
	}

	@Test
	public void testNewproducts() throws InterruptedException, IOException,
			Exception {
		try {

			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();

			contextName = phrsc.CONTEXT + nodejsconst.CONTEXTNEWPRODUCTS;
			System.out.println("The Context Name is:::::::::::::::"
					+ contextName);
			wel.navigatePath(applicationURL, contextName);
			wel.testNewProducts(applicationURL);

		} catch (Exception t) {
			// wel.ScreenCapturer();
		}
	}

	@Test
	public void testProducts() throws InterruptedException, IOException,
			Exception {
		try {

			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			contextName = phrsc.CONTEXT + nodejsconst.CONTEXTPRODUCTS;
			System.out.println("The Context Name is:::::::::::::::"
					+ contextName);
			wel.navigatePath(applicationURL, contextName);
			wel.Products(applicationURL);

		} catch (Exception t) {
			// wel.ScreenCapturer();
		}
	}

	@Test
	public void testSearchComputer() throws InterruptedException, IOException,
			Exception {
		try {

			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();

			contextName = phrsc.CONTEXT + nodejsconst.CONTEXTSEARCHCOMPUTER;
			System.out.println("The Context Name is:::::::::::::::"
					+ contextName);
			wel.navigatePath(applicationURL, contextName);
			wel.SearchComputer(applicationURL);

		} catch (Exception t) {
			// wel.ScreenCapturer();
		}
	}

	@Test
	public void testSearchMobile() throws InterruptedException, IOException,
			Exception {
		try {

			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();

			contextName = phrsc.CONTEXT + nodejsconst.CONTEXTSEARCHMOBILE;
			System.out.println("The Context Name is:::::::::::::::"
					+ contextName);
			wel.navigatePath(applicationURL, contextName);
			wel.SearchMobile(applicationURL);

		} catch (Exception t) {
			// wel.ScreenCapturer();
		}
	}

	@Test
	public void testSpecialProducts() throws InterruptedException, IOException,
			Exception {
		try {

			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();

			contextName = phrsc.CONTEXT + nodejsconst.CONTEXTSPECIALPRODUCTS;
			System.out.println("The Context Name is:::::::::::::::"
					+ contextName);
			wel.navigatePath(applicationURL, contextName);
			wel.SpecialProducts(applicationURL);

		} catch (Exception t) {
			// wel.ScreenCapturer();
		}
	}

	@AfterTest
	public void tearDown() {
		wel.closeBrowser();
	}

}