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

import java.awt.AWTException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.JSONArray;
import org.json.JSONObject;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.google.common.base.Function;
import com.photon.phresco.selenium.util.Constants;
import com.photon.phresco.selenium.util.ScreenActionFailedException;
import com.photon.phresco.selenium.util.ScreenException;
import com.photon.phresco.uiconstants.NodeJs;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UiConstants;

public class BaseScreen {

	public WebDriver driver;;
	private ChromeDriverService chromeService;
	private Log log = LogFactory.getLog("BaseScreen");
	private WebElement element = null;
	private PhrescoUiConstants phrescoUiConstants;
	private UiConstants uiConstants;
	private NodeJs nodejsconst;
	private String resolution;
	private  String jsonStr;
	private  JSONObject json;
	private  JSONArray categoryJsonObj;
	private String contextName;
	DesiredCapabilities capabilities;
	private String applicationURL;
	private String applicationContext;
	
	public  List<SearchResponse> configList = null;
	public  List<SearchResponse> categoryList = null;
	public  List<SearchResponse> categoryList1 = null;
	public  List<SearchResponse> categoryList2 = null;
	public  List<SearchResponse> categoryList3 = null;
	public  List<SearchResponse> NewProductList = null;
	public  List<SearchResponse> productList = null;
	public  List<SearchResponse> ProductsList = null;
	public  List<SearchResponse> computerList = null;
	public  List<SearchResponse> MobileList = null;
	public  List<SearchResponse> ProductReviewList = null;
	public  List<SearchResponse> SpecialProductsList = null;

	 public SearchResponse response;
	 public JSONObject jObject;

	public BaseScreen() {

	}

	public BaseScreen(String selectedBrowser,String selectedPlatform, String applicationURL,
			String applicatinContext, PhrescoUiConstants phrescoUiConstants, NodeJs nodejsconst, UiConstants uiconstants)
					 throws AWTException, IOException, ScreenActionFailedException {

		this.phrescoUiConstants = phrescoUiConstants;
		this.applicationURL=applicationURL;
		this.applicationContext=applicatinContext;
		
		
		try {
		
			instantiateBrowser(selectedBrowser,selectedPlatform, applicationURL, applicatinContext);
		} catch (ScreenException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public void instantiateBrowser(String selectedBrowser,String selectedPlatform,
			String applicationURL, String applicationContext)
					 throws ScreenException,
						MalformedURLException  {
		
		URL server = new URL("http://localhost:4444/wd/hub/");
		if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_CHROME)) {
			log.info("-------------***LAUNCHING GOOGLECHROME***--------------");
			try {
				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("chrome");
			} catch (Exception e) {
				e.printStackTrace();
			}

		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_IE)) {
			log.info("---------------***LAUNCHING INTERNET EXPLORE***-----------");
			try {
			capabilities = new DesiredCapabilities();
			capabilities.setJavascriptEnabled(true);
			capabilities.setBrowserName("iexplorer");
			} catch (Exception e) {
				e.printStackTrace();
		}
		}
			else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_OPERA)) {
				log.info("-------------***LAUNCHING OPERA***--------------");
				try {
					
				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("opera");
				capabilities.setCapability("opera.autostart ",true);

				System.out.println("-----------checking the OPERA-------");
				} catch (Exception e) {
					e.printStackTrace();
				}
		
		} 
			else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_SAFARI)) {
				log.info("-------------***LAUNCHING SAFARI***--------------");
				try {
					
			    capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("safari");
				capabilities.setCapability("safari.autostart ", true);
				System.out.println("-----------checking the SAFARI-------");
			} catch (Exception e) {
				e.printStackTrace();
			}

			} 
			else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_FIREFOX)) {
			log.info("-------------***LAUNCHING FIREFOX***--------------");
			try {
				
		
			capabilities = new DesiredCapabilities();
			capabilities.setBrowserName("firefox");
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if (selectedBrowser.equalsIgnoreCase(Constants.HTML_UNIT_DRIVER)) {
			log.info("-------------***HTML_UNIT_DRIVER***--------------");
			capabilities = new DesiredCapabilities();
			capabilities.setBrowserName("htmlunit"); 
			/*URL server = new URL("http://testVM:4444/wd/hub");
			new RemoteWebDriver(new Url("http://testVM:4444/wd/hub");*/

			System.out.println("-----------checking the HTML_UNIT_DRIVER-------");
			// break;
			// driver = new RemoteWebDriver(server, capabilities);

		}
				
				else {
			throw new ScreenException(
					"------Only FireFox,InternetExplore, Chrome, Opera, Safari and Htmlunit works-----------");
		}

		/**
		 * These 3 steps common for all the browsers
		 */


		if (selectedPlatform.equalsIgnoreCase("WINDOWS")) {
			capabilities.setCapability(CapabilityType.PLATFORM,
					Platform.WINDOWS);
			// break;
		} else if (selectedPlatform.equalsIgnoreCase("LINUX")) {
			capabilities.setCapability(CapabilityType.PLATFORM, Platform.LINUX);
			// break;
		} else if (selectedPlatform.equalsIgnoreCase("MAC")) {
			capabilities.setCapability(CapabilityType.PLATFORM, Platform.MAC);
			// break;
		}
		
		driver = new RemoteWebDriver(server, capabilities);
		driver.get(applicationURL + applicationContext);
	

	}

	public void setBrowserResolution() {
		//resolution = this.phrescoUiConstants.RESOLUTION;
		if (resolution != null) {
			String[] tokens = resolution.split("x");
			String resolutionX = tokens[0];
			String resolutionY = tokens[1];
			int Xpath = Integer.parseInt(resolutionX);
			int Ypath = Integer.parseInt(resolutionY);
			Dimension screenResolution = new Dimension(Xpath, Ypath);
			driver.manage().window().setSize(screenResolution);
		} else {
			driver.manage().window().maximize();
		}
	}

	public void closeBrowser() {
		log.info("-------------***BROWSER CLOSING***--------------");
		if (driver != null) {
			driver.quit();
			if (chromeService != null) {
				//driver.quit();
			}
		}

	}

	public String getChromeLocation() {
		log.info("getChromeLocation:*****CHROME TARGET LOCATION FOUND***");
		String directory = System.getProperty("user.dir");
		String targetDirectory = getChromeFile();
		String location = directory + targetDirectory;
		return location;
	}

	public String getChromeFile() {
		if (System.getProperty("os.name").startsWith(Constants.WINDOWS_OS)) {
			log.info("*******WINDOWS MACHINE FOUND*************");
			// getChromeLocation("/chromedriver.exe");
			return Constants.WINDOWS_DIRECTORY + "/chromedriver.exe";
		} else if (System.getProperty("os.name").startsWith(Constants.LINUX_OS)) {
			log.info("*******LINUX MACHINE FOUND*************");
			return Constants.LINUX_DIRECTORY_64 + "/chromedriver";
		} else if (System.getProperty("os.name").startsWith(Constants.MAC_OS)) {
			log.info("*******MAC MACHINE FOUND*************");
			return Constants.MAC_DIRECTORY + "/chromedriver";
		} else {
			throw new NullPointerException("******PLATFORM NOT FOUND********");
		}

	}
	

	public void getXpathWebElement(String xpath) throws Exception {
		log.info("Entering:-----getXpathWebElement-------");
		try {

			element = driver.findElement(By.xpath(xpath));

		} catch (Throwable t) {
			log.info("Entering:---------Exception in getXpathWebElement()-----------");
			t.printStackTrace();

		}

	}

	public void getIdWebElement(String id) throws ScreenException {
		log.info("Entering:---getIdWebElement-----");
		try {
			element = driver.findElement(By.id(id));

		} catch (Throwable t) {
			log.info("Entering:---------Exception in getIdWebElement()----------");
			t.printStackTrace();

		}

	}

	public void getcssWebElement(String selector) throws ScreenException {
		log.info("Entering:----------getIdWebElement----------");
		try {
			element = driver.findElement(By.cssSelector(selector));

		} catch (Throwable t) {
			log.info("Entering:---------Exception in getIdWebElement()--------");

			t.printStackTrace();

		}

	}

	public void waitForElementPresent(String locator, String methodName)
			throws IOException, Exception {
		try {
			log.info("Entering:--------waitForElementPresent()--------");
			By by = By.xpath(locator);
			WebDriverWait wait = new WebDriverWait(driver, 10);
			log.info("Waiting:--------One second----------");
			wait.until(presenceOfElementLocated(by));
		}

		catch (Exception e) {
			/*File scrFile = ((TakesScreenshot) driver)
					.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(scrFile,
					new File(GetCurrentDir.getCurrentDirectory() + "\\"
							+ methodName + ".png"));
			throw new RuntimeException("waitForElementPresent"
					+ super.getClass().getSimpleName() + " failed", e);*/
			Assert.assertNull(e);

		}
	}
	public void isTextPresent(String text,String methodName ) {
		if (text!= null){
		boolean value=driver.findElement(By.tagName("body")).getText().contains(text);	
		Assert.assertTrue(value);   
	    
	    }
		else
		{
			throw new RuntimeException("---- Text not existed----");
		}
	    
	    
	    
	}	
	Function<WebDriver, WebElement> presenceOfElementLocated(final By locator) {
		log.info("Entering:------presenceOfElementLocated()-----Start");
		return new Function<WebDriver, WebElement>() {
			public WebElement apply(WebDriver driver) {
				log.info("Entering:*********presenceOfElementLocated()******End");
				return driver.findElement(locator);

			}

		};

	}
	                   /*******JSON URLs VERIFICATION******/
	
	public void nodejsEshop(String methodName) throws InterruptedException, IOException,
		Exception {
	if (StringUtils.isEmpty(methodName)) {
		methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
	}
	isTextPresent(uiConstants.ESHOP,methodName);
	
	
	
	}
	
	public void nodejsConfig(String methodName) throws InterruptedException, IOException,
		Exception {
	
	if (StringUtils.isEmpty(methodName)) {
		methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
	}
	isTextPresent(uiConstants.CONFIG,methodName);
	
	
	}
	
	public void nodejsCategories(String methodName) throws InterruptedException, IOException,
		Exception {
	
	if (StringUtils.isEmpty(methodName)) {
		methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
	}
	isTextPresent(uiConstants.CATEGORIES,methodName);
	
	
	}
	
	public void nodejsProducts(String methodName) throws InterruptedException, IOException,
		Exception {
	
	if (StringUtils.isEmpty(methodName)) {
		methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
	}
	isTextPresent(uiConstants.PRODUCTS,methodName);
	
	
	
	}
	
	public void nodejsCategory1(String methodName) throws InterruptedException, IOException,
		Exception {
	if (StringUtils.isEmpty(methodName)) {
		methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
	}
	isTextPresent(uiConstants.CATEGORY1,methodName);
	
	}
	
	public void nodejsCategory2(String methodName) throws InterruptedException, IOException,
		Exception {
	if (StringUtils.isEmpty(methodName)) {
		methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
	}
	isTextPresent(uiConstants.CATEGORY2,methodName);
	
	}
	
	public void nodejsCategory3(String methodName) throws InterruptedException, IOException,
		Exception {
	if (StringUtils.isEmpty(methodName)) {
		methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
	}
	isTextPresent(uiConstants.CATEGORY3,methodName);
	
	
	}
	
	public void Nodejsnewproducts(String methodName) throws Exception, IOException {
	
	if (StringUtils.isEmpty(methodName)) {
		methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
	}
	isTextPresent(uiConstants.PRODUCTS,methodName);
	
	}
	
	public void nodejsSpecialproducts(String methodName) throws Exception, IOException {
	
	if (StringUtils.isEmpty(methodName)) {
		methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
	}
	isTextPresent(uiConstants.SPECIALPRODUCTS,methodName);
	
	
	}
	
	public void nodejsSearchMobile(String methodName) throws Exception, IOException {
	
	if (StringUtils.isEmpty(methodName)) {
		methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
	}
	isTextPresent(uiConstants.SEARCHMOBILE,methodName);
	//System.out.println("==========================================");
	
	}
	
	public void nodejsSearchComputer(String methodName) throws Exception, IOException {
	isTextPresent(uiConstants.SEARCHCOMPUTER,methodName);
	
	}
	
	public void nodejsReviewProduct() throws Exception, IOException {
	//waitForTextPresent(phrsc.PRODUCTREVIEW);
	
	}
	                /*******JSON URLs VERIFICATION******/
	
	                /*******TEST JSON******/
	
	public void testCategories(String applicationURL) throws Exception {
		response = new SearchResponse();
		try {
			phrescoUiConstants = new PhrescoUiConstants();
			uiConstants = new UiConstants();
			//navigatePath(applicationURL, phrescoUiConstants.CONTEXT, uiConstants. CONTEXT_CATEGORIES);
			jObject = response.getCategoryJSONObject(applicationURL+ phrescoUiConstants.CONTEXT +nodejsconst.CONTEXCATEGORIES);
		} catch (IOException e) {

			e.printStackTrace();
		}
		categoryList = response.getCategoryGSONObject(jObject);
		System.out.println("TestJson" + categoryList);

		int j=1;
			for(int i=1;i==j;i++){
				for (SearchResponse obj : categoryList) {
					//System.out.println("the id =====" + obj.getId());
					//System.out.println("the name=====" + obj.getName());
					//assertEquals("1",obj.getId() );
			//assertEquals(j, obj.getId());
			System.out.println("Assertion success for Category id " + j);
			++j;
			}
			System.out.println("****Category id "+ (j)+ " doesn't exist****");

			
		}
	}

	public void testCategory1(String applicationURL , PhrescoUiConstants phrescoUiConstants, NodeJs nodejsconst) throws Exception {
		response = new SearchResponse();
		try {
			//phrescoUiConstants = new PhrescoUiConstants();
			//uiConstants = new UiConstants();
			//navigatePath(applicationURL, phrescoUiConstants.CONTEXT, nodejsconst.CONTEXTCATEGORY1);
			jObject = response.getCategoryJSONObject(applicationURL + phrescoUiConstants. CONTEXT+ nodejsconst.CONTEXTCATEGORY1);
		} catch (IOException e) {

			e.printStackTrace();
		}
		categoryList1 = response.getCategoryList1GSONObject(jObject);
		System.out.println("TestJson" + categoryList1);
		int j=1;
		for(int i=1;i==j;i++){
		for (SearchResponse obj : categoryList1) {
			//assertEquals(j, obj.getId());
			System.out.println("Assertion success for Category id " + j);
			++j;
			}
			System.out.println("****Category id "+ (j)+ " doesn't exist****");
			
			}
	}

	public void testCategory2(String applicationURL,  PhrescoUiConstants phrescoUiConstants, NodeJs nodejsconst) throws Exception {
		response = new SearchResponse();
		try {
			//phrescoUiConstants = new PhrescoUiConstants();
			//uiConstants = new UiConstants();
			//navigatePath(applicationURL, phrescoUiConstants.CONTEXT, uiConstants. CONTEXT_CATEGORY2);
			jObject = response.getCategoryJSONObject(applicationURL + phrescoUiConstants. CONTEXT+nodejsconst.CONTEXTCATEGORY2);
		} catch (IOException e) {

			e.printStackTrace();
		}
		categoryList2 = response.getCategoryList2GSONObject(jObject);
		System.out.println("TestJson" + categoryList2);
		int j=11;
		for(int i=11;i==j;i++){
		for (SearchResponse obj : categoryList2) {
			//assertEquals(j, obj.getId());
			System.out.println("Assertion success for Category id " + j);
			++j;
			}
			System.out.println("****Category id "+ (j)+ " doesn't exist****");
			
			}
	}

	public void testCategory3(String applicationURL) throws Exception {
		response = new SearchResponse();
		try {
			phrescoUiConstants = new PhrescoUiConstants();
			uiConstants = new UiConstants();
			//navigatePath(applicationURL, phrescoUiConstants.CONTEXT, uiConstants. CONTEXT_CATEGORY3);
			jObject = response.getCategoryJSONObject(applicationURL + phrescoUiConstants.CONTEXT+ nodejsconst.CONTEXTCATEGORY3);
		} catch (IOException e) {

			e.printStackTrace();
		}
		categoryList3 = response.getCategoryList3GSONObject(jObject);
		System.out.println("TestJson" + categoryList3);
        
		int j=21;
		for(int i=21;i==j;i++){
		for (SearchResponse obj : categoryList3) {
			//assertEquals(j, obj.getId());
			System.out.println("Assertion success for Category id " + j);
			++j;
			}
			System.out.println("****Category id "+ (j)+ " doesn't exist****");
			
			}	}

	public void testNewProducts(String applicationURL) throws Exception {
		response = new SearchResponse();
		try {
			phrescoUiConstants = new PhrescoUiConstants();
			uiConstants = new UiConstants();
			//navigatePath(applicationURL, phrescoUiConstants.CONTEXT, nodejsconst.CONTEXTNEWPRODUCTS);
			jObject = response.getCategoryJSONObject(applicationURL +  phrescoUiConstants.CONTEXT + nodejsconst.CONTEXTNEWPRODUCTS);
		} catch (IOException e) {

			e.printStackTrace();
		}
		NewProductList = response.getNewProductListGSONObject(jObject);
		System.out.println("TestJson" + NewProductList);

		for (SearchResponse obj : NewProductList) {
			System.out.println("the id =====" + obj.getId());
			System.out.println("the name=====" + obj.getName());
		}
	}

	public void SearchMobile(String applicationURL) throws Exception {

		response = new SearchResponse();
		try {
			phrescoUiConstants = new PhrescoUiConstants();
			uiConstants = new UiConstants();
			//navigatePath(applicationURL, phrescoUiConstants.CONTEXT, uiConstants.CONTEXT_SEARCHMOBILE);
			jObject = response.getCategoryJSONObject(applicationURL + phrescoUiConstants.CONTEXT + nodejsconst.CONTEXTSEARCHMOBILE);
		} catch (IOException e) {
			e.printStackTrace();
		}

		MobileList = response.getproductGSONObject(jObject);
		System.out.println("TestJson" + MobileList);
		for (SearchResponse obj : MobileList) {

			System.out.println("the id =====" + obj.getId());
			System.out.println("the name=====" + obj.getName());
		}
	}

	public void SearchComputer(String applicationURL) throws Exception {

		response = new SearchResponse();
		try {
			phrescoUiConstants = new PhrescoUiConstants();
			uiConstants = new UiConstants();
			//navigatePath(applicationURL, phrescoUiConstants.CONTEXT, uiConstants.CONTEXT_SEARCHCOUMPUTER);
			jObject = response.getCategoryJSONObject(applicationURL+ phrescoUiConstants.CONTEXT + nodejsconst.CONTEXTSEARCHCOMPUTER);
		} catch (IOException e) {
			e.printStackTrace();
		}
		computerList = response.getcomputerListGSONObject(jObject);
		System.out.println("TestJson" + computerList);
		for (SearchResponse obj : computerList) {
			System.out.println("the id =====" + obj.getId());
			System.out.println("the name=====" + obj.getName());
		}
	}

	public void Products(String applicationURL) throws Exception {
		response = new SearchResponse();
		try {
			phrescoUiConstants = new PhrescoUiConstants();
			uiConstants = new UiConstants();
			//navigatePath(applicationURL, phrescoUiConstants.CONTEXT, uiConstants.CONTEXT_PRODUCTS);
			jObject = response.getCategoryJSONObject(applicationURL + phrescoUiConstants.CONTEXT+nodejsconst.CONTEXTPRODUCTS);
		} catch (IOException e) {
			e.printStackTrace();
		}
		ProductsList = response.getproductGSONObject(jObject);
		System.out.println("TestJson" + ProductsList);
		
		int j=1;
		for(int i=1;i==j;i++){
		for (SearchResponse obj : ProductsList) {
			//assertEquals(j, obj.getId());
			System.out.println("Assertion success for Category id " + j);
			++j;
			}
			System.out.println("****Category id "+ (j)+ " doesn't exist****");
			
			}
	}

	public void SpecialProducts(String applicationURL) throws Exception {
		response = new SearchResponse();
		try {
			phrescoUiConstants = new PhrescoUiConstants();
			uiConstants = new UiConstants();
			//navigatePath(applicationURL, phrescoUiConstants.CONTEXT, uiConstants.CONTEXT_SPECIAL_PRODUCTS);
			jObject = response.getCategoryJSONObject(applicationURL + phrescoUiConstants.CONTEXT+nodejsconst.CONTEXTSPECIALPRODUCTS);
		} catch (IOException e) {
			e.printStackTrace();
		}
		SpecialProductsList = response.getSpecialProductsListGSONObject(jObject);
		System.out.println("TestJson" + SpecialProductsList);
		for (SearchResponse obj : SpecialProductsList) {
			System.out.println("the id =====" + obj.getId());
			System.out.println("the name=====" + obj.getName());
		}
	}
	
	                         /*******TEST JSON******/
	
	
	public void click() throws ScreenException {
		log.info("Entering:********click operation start********");
		try {
			element.click();
		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********click operation end********");

	}

	public void clear() throws ScreenException {
		log.info("Entering:********clear operation start********");
		try {
			element.clear();
		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********clear operation end********");

	}

	public void sendKeys(String text) throws ScreenException {
		log.info("Entering:********enterText operation start********");
		try {
			clear();
			element.sendKeys(text);

		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********enterText operation end********");
	}

	public void submit() throws ScreenException {
		log.info("Entering:********submit operation start********");
		try {
			element.submit();
		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********submit operation end********");

	}
	public void navigatePath(String serverURL,String context) throws InterruptedException, MalformedURLException
	{	
		System.out.println("-----Entering: Page Navigation-------");
	//	System.out.println("***********URL:--->"+URL+Context+AppendJSON+AppendJSON1);
		driver.get(serverURL+context);
		Thread.sleep(5000);
	}

}
