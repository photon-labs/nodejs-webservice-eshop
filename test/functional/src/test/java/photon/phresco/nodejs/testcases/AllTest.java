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
