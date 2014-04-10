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

import java.io.IOException;

import org.apache.commons.lang.StringUtils;

import com.photon.phresco.uiconstants.NodeJs;
import com.photon.phresco.uiconstants.UiConstants;
import com.photon.phresco.uiconstants.PhrescoUiConstants;

public class WelcomeScreen extends PhotonAbstractScreen {
	private UiConstants phrsc = new UiConstants();

	public WelcomeScreen(String selectedBrowser, String selectedPlatform,
			String url, String contextName,PhrescoUiConstants phrescoUiConstants, NodeJs nodejsconst, UiConstants uiConstants) throws InterruptedException,
			IOException, Exception {
		super(selectedBrowser,selectedPlatform,url,contextName,phrescoUiConstants, nodejsconst, uiConstants);

		/*
		 * waitForElementPresent(phrsc.HOME); click(phrsc.HOME);
		 */

	}
	
//	public static void main (String args[]) throws JSONException {
	//	TestJson json = new TestJson();
		
//	}

	

}
