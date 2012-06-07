/*
 * Author by {phresco} QA Automation Team
 */
package photon.phresco.nodejs.testcases;

import junit.framework.Test;
import junit.framework.TestSuite;

public class AllTest {

	public static Test suite() {
		TestSuite suite = new TestSuite(AllTest.class.getName());
		suite.addTestSuite(NodejsEshop.class);
		suite.addTestSuite(RestApiCategories.class);
		suite.addTestSuite(RestApiCategory1.class);
		suite.addTestSuite(RestApiCategory2.class);
		suite.addTestSuite(RestApiCategory3.class);
        suite.addTestSuite(RestApiProducts.class);
        //suite.addTestSuite(RestApiNewproducts.class);
        //suite.addTestSuite(RestApiSpecialProducts.class);
        suite.addTestSuite(RestApiSearchMobile.class);
        suite.addTestSuite(RestApiSearchComputer.class);
        return suite;
	}

}
