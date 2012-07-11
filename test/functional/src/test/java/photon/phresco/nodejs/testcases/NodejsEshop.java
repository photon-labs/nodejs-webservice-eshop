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
/*
 * Author by {phresco} QA Automation Team
 */
package photon.phresco.nodejs.testcases;

import java.io.IOException;

import junit.framework.TestCase;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.server.SeleniumServer;
import com.photon.phresco.Screens.TestJson;
import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.uiconstants.PhrescoNodejsUiConstants;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.thoughtworks.selenium.Selenium;

public class NodejsEshop extends TestCase {
	

	private SeleniumServer serv;
	private PhrescoUiConstants phrsc;
	private Selenium selenium;
	private int SELENIUM_PORT;
	private String browserAppends;
	private Log log = LogFactory.getLog(getClass());
	private String contextName;
	WelcomeScreen wel;
	String serverURL;
	String methodName;

	@Test
	public void testNodejsEshop() throws InterruptedException, IOException, Exception {
		try{
			
			assertNotNull("Browser name should not be null",browserAppends);
			SELENIUM_PORT = Integer.parseInt(phrsc.SERVER_PORT);
			System.out.println("selenium port value"+SELENIUM_PORT);
			assertNotNull("selenium-port number should not be null",SELENIUM_PORT);
			wel=new WelcomeScreen(phrsc.SELENIUM_HOST, SELENIUM_PORT,
					browserAppends, serverURL, phrsc.SPEED,
					contextName);
			assertNotNull(wel);
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
			System.out.println("methodName = " + methodName);
			wel.nodejsEshop(methodName);
			//TestJson.testEshop(); 
		} catch(Exception t){
			//wel.ScreenCapturer();
    	}
	}

	@Override
	public void setUp() throws Exception {

		phrsc = new PhrescoUiConstants();
		//nodejs = new PhrescoNodejsUiConstants();
		serverURL = phrsc.PROTOCOL + "://"
				+ phrsc.HOST + ":"
				+ phrsc.PORT + "/";
		
		browserAppends = "*" + phrsc.BROWSER;
		contextName = phrsc.CONTEXT;
	}

	public void tearDown() {
		clean();
	}

	private void clean() {
		wel.closeBrowser();
	}

}