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

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;

import org.apache.http.client.ClientProtocolException;
import org.json.JSONObject;


/**
 * Base class to read the JSON from web server
 *
 * @author viral_b
 *
 */
public class JSONHelper {
	private static final String TAG = "JSONHelper ***** ";

	protected JSONHelper() {}

	/**
	 * Get the JSON object from the specified URL
	 *
	 * @param url
	 * @return JSONObject
	 * @throws IOException
	 * @throws ioException
	 * @throws ClientProtocolException
	 */
	public static JSONObject getJSONObjectFromURL(String url)
			throws IOException {
		InputStream is = null;
		String result = null;
		JSONObject jObject = null;

		try {
			is = HttpRequest.get(url);
		} catch (MalformedURLException ex) {
			
		} catch (UnsupportedEncodingException ex) {
			
		} catch (IllegalStateException ex) {
			
		}

		// Convert the input stream in to string
		if (is != null) {
			try {
				BufferedReader reader = new BufferedReader(
						new InputStreamReader(is, "iso-8859-1"), Integer.parseInt("8"));
				StringBuilder sb = new StringBuilder();
				String line = null;
				while ((line = reader.readLine()) != null) {
					sb.append(line + "\n");
				}
				is.close();
				reader.close();
				result = sb.toString();
			} catch (Exception ex) {
				
			}

			// Parse the string to a JSON object
			try {
				jObject = new JSONObject(result);
			} catch (Exception ex) {
				
			}
		}

		return jObject;
	}

	/**
	 * POST the JSON object to the specified URL, and get the response back
	 *
	 * @param url
	 * @return JSONObject
	 * @throws Exception
	 */
	public static JSONObject postJSONObjectToURL(String url, String jsonParam)
			throws IOException {
		InputStream is = null;
		String result = null;
		JSONObject jObject = null;

		// Post json data to server, and get the response
		try {
//			jObject = new JSONObject();
			jObject = new JSONObject(jsonParam);
//			jObject.getJSONObject(jsonParam);
			
		} catch (Exception ex) {
			
		}

		try {
			is = HttpRequest.post(url, jObject);
		} catch (ClientProtocolException ex) {
			
		} catch (MalformedURLException ex) {
			
		} catch (UnsupportedEncodingException ex) {
			
		} catch (IllegalStateException ex) {
			
		}

		// Convert the input stream in to string
		try {
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					is, "iso-8859-1"), Integer.parseInt("8"));
			StringBuilder sb = new StringBuilder();
			String line = null;
			while ((line = reader.readLine()) != null) {
				sb.append(line + "\n");
			}
			is.close();
			reader.close();
			result = sb.toString();
//			PhrescoLogger.info(TAG + "JSON Response String: " + result);
		} catch (Exception ex) {
			
		}

		// Parse the string to a JSON object
		try {
			jObject = new JSONObject(result);
		} catch (Exception ex) {
			
		}

		return jObject;
	}
}