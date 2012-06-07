/*
 /*
 * Author by {phresco} QA Automation Team
 */
package photon.phresco.nodejs.testcases;

import java.io.IOException;

import junit.framework.TestCase;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.junit.Test;
import org.openqa.selenium.server.SeleniumServer;

import com.photon.phresco.Screens.TestJson;
import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.uiconstants.PhrescoNodejsUiConstants;
import com.thoughtworks.selenium.Selenium;

public class RestApiCategory2 extends TestCase {
	

	private SeleniumServer serv;
	private PhrescoNodejsUiConstants phrsc;
	private Selenium selenium;
	private int SELENIUM_PORT;
	private String browserAppends;
	//private LoginScreen loginObject;
	private Log log = LogFactory.getLog(getClass());
	private String contextName;
	WelcomeScreen wel;
	String serverURL;
	String methodName;

	@Test
	public void testCategory2() throws InterruptedException, IOException, Exception {
		try{
			
		    assertNotNull("Browser name should not be null",browserAppends);
			SELENIUM_PORT = Integer.parseInt(phrsc.SERVER_PORT);
			assertNotNull("selenium-port number should not be null",SELENIUM_PORT);
			wel=new WelcomeScreen(phrsc.SELENIUM_HOST, SELENIUM_PORT,
					browserAppends, serverURL, phrsc.SPEED,
					contextName);
			assertNotNull(wel);
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
			System.out.println("methodName = " + methodName);
			wel.nodejsCategory2(methodName);
			TestJson nodejson = new TestJson();
			nodejson.testCategory2();
		} catch(Exception t){
			//wel.ScreenCapturer();	
    	}
	}

	public void setUp() throws Exception {

		phrsc = new PhrescoNodejsUiConstants();
		serverURL = phrsc.PROTOCOL + "://"
				+ phrsc.HOST + ":"
				+ phrsc.PORT + "/";
		browserAppends = "*" + phrsc.BROWSER;
	    contextName = phrsc. CONTEXT_ESHOP+ phrsc.CONTEXT_REST_API+phrsc. CONTEXT_CATEGORY2;
	}

	public void tearDown() {
		clean();
	}

	private void clean() {
		wel.closeBrowser();
	}

}