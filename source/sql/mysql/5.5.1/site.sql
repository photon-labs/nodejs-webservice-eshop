--
-- PHR_NodeJSWebService
--
-- Copyright (C) 1999-2014 Photon Infotech Inc.
--
-- Licensed under the Apache License, Version 2.0 (the "License");
-- you may not use this file except in compliance with the License.
-- You may obtain a copy of the License at
--
--         http://www.apache.org/licenses/LICENSE-2.0
--
-- Unless required by applicable law or agreed to in writing, software
-- distributed under the License is distributed on an "AS IS" BASIS,
-- WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
-- See the License for the specific language governing permissions and
-- limitations under the License.
--

-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 12, 2012 at 05:15 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `eshopj`
--

-- --------------------------------------------------------

--
-- Table structure for table `eshop_cart`
--

CREATE TABLE IF NOT EXISTS `eshop_cart` (
  `ct_id` int(11) NOT NULL,
  `pd_id` int(11) DEFAULT NULL,
  `ct_session_id` char(1) DEFAULT NULL,
  `ct_qty` int(11) DEFAULT NULL,
  `ct_date` date DEFAULT NULL,
  PRIMARY KEY (`ct_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eshop_cart`
--


-- --------------------------------------------------------

--
-- Table structure for table `eshop_categories`
--

CREATE TABLE IF NOT EXISTS `eshop_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(255) DEFAULT NULL,
  `cat_image` varchar(255) DEFAULT NULL,
  `cat_details_image` varchar(255) DEFAULT NULL,
  `cat_parent_id` int(11) DEFAULT NULL,
  `cat_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `eshop_categories`
--

INSERT INTO `eshop_categories` (`id`, `cat_name`, `cat_image`, `cat_details_image`, `cat_parent_id`, `cat_description`) VALUES
(1, 'Television', 'categories/tv_1.png', 'categories/tv_1_details.png', 0, NULL),
(2, 'Computers', 'categories/computers_2.png', 'categories/computers_2_details.png', 0, NULL),
(3, 'Mobile Phones', 'categories/mobile_3.png', 'categories/mobile_3_details.png', 0, NULL),
(4, 'Audio Devices', 'categories/audio_4.png', 'categories/audio_4_details.png', 0, NULL),
(5, 'Cameras', 'categories/cameras_5.png', 'categories/cameras_5_details.png', 0, NULL),
(6, 'Tablets', 'categories/tablets_6.png', 'categories/tablets_6_details.png', 0, NULL),
(7, 'Movies and Music', 'categories/movies_7.png', 'categories/movies_7_details.png', 0, NULL),
(8, 'Video Games', 'categories/videogames_8.png', 'categories/videogames_8_details.png', 0, NULL),
(9, 'MP3 Players', 'categories/mp3players_9.png', 'categories/mp3players_9_details.png', 0, NULL),
(10, 'Accessories', 'categories/accessories_10.png', 'categories/accessories_10_details.png', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `eshop_currencies`
--

CREATE TABLE IF NOT EXISTS `eshop_currencies` (
  `cy_id` int(11) NOT NULL,
  `cy_code` char(1) DEFAULT NULL,
  `cy_symbol` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eshop_currencies`
--


-- --------------------------------------------------------

--
-- Table structure for table `eshop_orders`
--

/*Table structure for table `eshop_orders` */



CREATE TABLE `eshop_orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `od_date` date DEFAULT NULL,
  `od_last_update` date DEFAULT NULL,
  `userid` int(11) NOT NULL,
  `od_status` bit(1) DEFAULT NULL,
  `od_shipping_first_name` varchar(255) DEFAULT NULL,
  `od_shipping_last_name` varchar(255) DEFAULT NULL,
  `od_shipping_address1` varchar(255) DEFAULT NULL,
  `od_shipping_address2` varchar(255) DEFAULT NULL,
  `od_shipping_city` varchar(255) DEFAULT NULL,
  `od_shipping_postal_code` int(11) DEFAULT NULL,
  `od_shipping_cost` double DEFAULT NULL,
  `od_payment_first_name` varchar(255) DEFAULT NULL,
  `od_payment_last_name` varchar(255) DEFAULT NULL,
  `od_payment_address1` varchar(255) DEFAULT NULL,
  `od_payment_address2` varchar(255) DEFAULT NULL,
  `od_payment_city` varchar(255) DEFAULT NULL,
  `od_payment_postal_code` int(11) DEFAULT NULL,
  `od_comments` text,
  `od_totalqty` int(11) DEFAULT NULL,
  `od_totalprice` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;


--
-- Dumping data for table `eshop_orders`
--


-- --------------------------------------------------------

--
-- Table structure for table `eshop_order_items`
--

CREATE TABLE `eshop_order_items` (
  `id` int(11) NOT NULL,
  `pd_id` int(11) NOT NULL,
  `od_qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eshop_order_items`
--


-- --------------------------------------------------------

--
-- Table structure for table `eshop_products`
--

CREATE TABLE IF NOT EXISTS `eshop_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pd_name` varchar(255) DEFAULT NULL,
  `pd_description` varchar(4000) DEFAULT NULL,
  `pd_qty` int(11) DEFAULT NULL,
  `pd_manufacturer` varchar(255) DEFAULT NULL,
  `cat_id` int(11) DEFAULT NULL,
  `pd_model` varchar(255) DEFAULT NULL,
  `pd_special` tinyint(1) DEFAULT NULL,
  `pd_new` tinyint(1) DEFAULT NULL,
  `pd_list_price` double DEFAULT NULL,
  `pd_sell_price` double DEFAULT NULL,
  `pd_img` varchar(255) DEFAULT NULL,
  `pd_det_img` varchar(255) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `last_updated_date` date DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=101 ;

--
-- Dumping data for table `eshop_products`
--

insert  into `eshop_products`(`id`,`pd_name`,`pd_description`,`pd_qty`,`pd_manufacturer`,`cat_id`,`pd_model`,`pd_special`,`pd_new`,`pd_list_price`,`pd_sell_price`,`pd_img`,`pd_det_img`,`created_date`,`last_updated_date`) values (1,'LG Electronics 42PW350 3D Plasma HDTV ',' I2With HD 1080p resolution and SimpLink connectivity, the 42PW350 3D Plasma HDTV from LG Electronics lets you tap into the virtual limitless possibilities of accessing movies, shows and info directly from the Internet. The 42PW350 yields images that truly show off any source material, be it Blu-ray movies, broadcast and cable TV, or video games. LG\'s proprietary technologies also ensure that whatever you\'re watching comes across in rich, detailed color. The 42PW350 TV\'s high contrast ratio and low respons',0,'Lg',1,'1001.0',0,0,629,600,'product/lg_tv_1.png','product/details/lg_tv_1.png','2011-12-03','2011-12-03'),(2,'LED3DTV4086 40\" Class 3D LED TV w/ 2 Pairs of 3D Glasses','Delivers the next generation of home theater to its customers Experience high resolution 3D with active shutter technology  Active shutter 3D glasses included  Advanced 120Hz motion engine generates lightning fast video while reducing motion blur Enjoy video in stunning high resolution 1080p LED technology for a thin and attractive design Three high speed HDMI 1.4 connectors support the newest devices (and all existing devices) Supports computer monitor connection Extras - removable stand, closed caption (CC), V-chip, 3D deinterlace + 3D noise reduction, 3:2/2:2 reverse pull-down',0,'Coby',1,'1002.0',1,0,799,750,'product/coby_tv_2.png','product/details/coby_tv_2.png','2011-12-03','2011-12-03'),(3,'LED3DTV4686 46\" Class 3D LED TV w/ 2 Pairs of 3D Glasses','The LED3DTV4686 40\" Class 3D LED TV from Coby is up to the challenge of displaying Blu-ray native 3D discs or turning your 2D content into an immersive experience. Coby includes two pairs of 3D glasses with the LED TV. The combination of dynamic contrast (which delivers a ratio of 40,000:1) and full 1080p HD makes the LED3DTV4686 a remarkable TV by any standard. It also includes an advanced 120Hz motion engine, which generates lightning fast video while reducing motion blur.',0,'Coby',1,'1003.0',0,0,1095,1050,'product/coby_tv_3.png','product/details/coby_tv_3.png','2011-12-03','2011-12-03'),(4,'LED3DTV5586 55\" Class 3D LED TV w/ 2 Pairs of 3D Glasses','The LED3DTV5586 55\" Class 3D LED TV from Coby is up to the challenge of displaying Blu-ray native 3D discs or turning your 2D content into an immersive experience. Coby includes two pairs of 3D glasses with the LED TV. The combination of dynamic contrast (which delivers a ratio of 40,000:1) and full 1080p HD makes the LED3DTV5586 a remarkable TV by any standard. It also includes an advanced 120Hz motion engine, which generates lightning fast video while reducing motion blur.`',0,'Coby',1,'1004.0',0,1,1549,1500,'product/coby_tv_4.png','product/details/coby_tv_4.png','2011-12-03','2011-12-03'),(5,'LG Electronics\n47LW5600 47\" 1080p 3D LED TV\n','The LG 47LW5600 47\" 1080p 3D LED TV packs a vast amount of great high-end specs and convenience features into a seamless glass panel which looks like it was retro-engineered from a trip to the future.\r\n\r\nThe 47LW5600 is up to the challenge of displaying Blu-ray native 3D discs or turning your 2D content into an immersive experience. Just add optional 3D glasses. The combination of Dynamic Contrast (which delivers a ratio of 8,000,000:1) and full 1080p HD makes the 47LW5600 a remarkable TV by any standard but we\'re just getting started. LG hasn\'t sacrificed creature comforts for strong specs.\r\n',0,'Lg',1,'1005.0',1,0,1529,1500,'product/lg_tv_5.png','product/details/lg_tv_5.png','2011-12-03','2011-12-03'),(6,'LG Electronics\n47LW6500 47\" 1080p 3D LED TV\n','The LG 47LW6500 47\" 1080p 3D LED TV is up to the challenge of displaying Blu-ray native 3D discs or turning your 2D content into an immersive experience. Just add optional 3D shutter glasses. The combination of Dynamic Contrast (which delivers a ratio of 9,000,000:1) and full 1080p HD makes the 47LW6500 a remarkable TV by any standard but we\'re just getting started.\r\n\r\nSince every room is different, the 47LW6500 automatically calibrates the optimal settings to match the color and light level of your specific space. The 47LW6500 is also ISFccc Ready, meaning that it can be professionally calibrated to your specs and the settings saved as a preset. You can switch back and forth from the factory settings with the push of a button.\r\n',0,'Lg',1,'1006.0',0,1,1709,1650,'product/lg_tv_6.png','product/details/lg_tv_6.png','2011-12-03','2011-12-03'),(7,'LG Electronics\n50PW350 50\" 3D Plasma TV\n','With HD 1080p resolution and SimpLink connectivity, the 50PW350 50\" 3D Plasma TV from LG Electronics lets you tap into the virtual limitless possibilities of accessing movies, shows and info directly from the Internet.\r\n\r\nThe 50PW350 yields images that truly show off any source material, be it Blu-ray movies, broadcast and cable TV, or video games. LG\'s proprietary technologies also ensure that whatever you\'re watching comes across in rich, detailed color. The 50PW350 TV\'s high contrast ratio and low response time make the unit capable of being the centerpiece in any home entertainment system.',0,'Lg',1,'1007.0',0,0,809,735,'product/lg_tv_7.png','product/details/lg_tv_7.png','2011-12-03','2011-12-03'),(8,'LG Electronics\n50PZ550 50\" 3D 1080p Plasma TV\n','With HD 1080p resolution and SimpLink connectivity, the 50PZ550 50\" 3D 1080p Plasma TV from LG Electronics lets you tap into the virtual limitless possibilities of accessing movies, shows and info directly from the Internet.\r\n\r\nThe 50PZ550 yields images that truly show off any source material, be it Blu-ray movies, broadcast and cable TV, or video games. LG\'s proprietary technologies also ensure that whatever you\'re watching comes across in rich, detailed color. The 50PZ550 TV\'s high contrast ratio and low response time make the unit capable of being the centerpiece in any home entertainment system.\r\n',0,'Lg',1,'1008.0',0,0,989.99,865,'product/lg_tv_8.png','product/details/lg_tv_8.png','2011-12-03','2011-12-03'),(9,'LG Electronics\n50PZ750 50\" 1080p 3D Plasma Smart TV\n','The 50PZ750 50\" 1080p 3D Plasma Smart TV from LG is the perfect blend of design, price and performance in a superb TV. Full HD 1080p resolution, 3M:1 dynamic contrast ratio, and incredibly fast sync time give you pictures that make the most out of any media you are using. LG\'s 600Hz Sub Field Driving ensures that fast-moving content is delivered in vivid color and striking detail so nothing goes by in a blur. The mega dynamic contrast ratio creates a sense of depth, fine gradation in color and tonal values and a general feeling of \"being there\" once thought impossible on a two-dimensional panel.',0,'Lg',1,'1009.0',0,0,1259,1200,'product/lg_tv_9.png','product/details/lg_tv_9.png','2011-12-03','2011-12-03'),(10,'LG Electronics\n50PZ950 50\" 1080p 3D Plasma Smart TV\n','The 50PZ950 50\" 1080p 3D Plasma Smart TV from LG is the perfect blend of design, price and performance in a superb TV. Full HD 1080p resolution, 5M:1 dynamic contrast ratio, and incredibly fast sync time give you pictures that make the most out of any media you are using. LG\'s 600Hz Sub Field Driving ensures that fast-moving content is delivered in vivid color and striking detail so nothing goes by in a blur. The mega dynamic contrast ratio creates a sense of depth, fine gradation in color and tonal values and a general feeling of \"being there\" once thought impossible on a two-dimensional panel. LG\'s 2D to 3D conversion feature adds a 3D effect to 2D television, movies, sports, video games and images, at the touch of a button.\r\n\r\nThe 50PZ950 comes with a full complement of inputs, ensuring that you\'ll be able to hook up any equipment you have or may get in the future. The unit includes four HDMI and two component jacks for high-definition devices. And if one of those devices happens to be a gaming console, gamers will be happy to know that game mode, which speeds up the scaling process, virtually eliminates video lag time.\r\n',0,'Lg',1,'1010.0',1,1,1529,1500,'product/lg_tv_10.png','product/details/lg_tv_10.png','2011-12-03','2011-12-03'),(11,'Apple\n11.6\" MacBook Air Notebook Computer\n','The 11.6\" MacBook Air Notebook Computer from Apple is an extremely portable, stunningly designed laptop computer. Apple\'s engineers have leveraged the lessons they learned in designing the miniaturized iPad and applied them to the design of this 2.3-pound computer.\r\n\r\nThe original MacBook Air\'s slim profile was made possible due to the lack of an optical drive. This system eschews the hard drive as well -- opting instead for 128GB of flash storage -- resulting in an even slimmer profile. When closed, the computer is only 0.68\" at its thickest point.\r\n\r\nFlash storage doesn\'t just give you a lighter, thinner computer. It also allows for impressive battery life -- up to 5 hours of web browsing and an amazing 30 days of standby time!\r\n\r\nThe MacBook Air is housed in an aluminum unibody enclosure, which is as strong as it is light. Because it is cut from a solid block of aluminum, the housing is stronger than those found on laptops built via traditional means.\r\n',0,'Apple',2,'1011.0',0,0,869,800,'product/apple_comp_11.png','product/details/apple_comp_11.png','2011-12-03','2011-12-03'),(12,' Apple\n11.6\" MacBook Air Notebook Computer\n','    1.6GHz Intel Core i5\n    2GB RAM\n    64GB Flash Storage\n    Intel GMA HD 3000 Graphics\n    11.6\" Glossy Widescreen LED Backlit Display\n    FaceTime Webcam\n    Bluetooth 4.0\n    802.11a/b/g/n Wi-Fi\n    Mac OS X 10.7 Lion\n    2.4 lb\n\n   \n',0,'Apple',2,'1012.0',0,1,939,900,'product/apple_comp_12.png','product/details/apple_comp_12.png','2011-12-03','2011-12-03'),(13,'Apple\n11.6\" MacBook Air Notebook Computer\n','    1.8GHz Intel Core i7\n    4GB RAM\n    128GB Flash Storage\n    Intel GMA HD 3000 Graphics\n    11.6\" Glossy Widescreen LED Backlit Display\n    FaceTime Webcam\n    Bluetooth 4.0\n    802.11a/b/g/n Wi-Fi\n    Mac OS X 10.7 Lion\n    2.4 lb\n',0,'Apple',2,'1013.0',0,0,1139,1100,'product/apple_comp_13.png','product/details/apple_comp_13.png','2011-12-03','2011-12-03'),(14,'Apple\n13.3\" MacBook Air Notebook Computer','    1.7GHz Intel Core i5\n    4GB RAM\n    128GB Flash Storage\n    Intel GMA HD 3000 Graphics\n    13.3\" Glossy Widescreen LED Backlit Display\n    FaceTime Webcam\n    Bluetooth 4.0\n    802.11a/b/g/n Wi-Fi\n    Mac OS X 10.7 Lion\n    3 lb\n',0,'Apple',2,'1014.0',0,0,1234,1200,'product/apple_comp_14.png','product/details/apple_comp_14.png','2011-12-03','2011-12-03'),(15,'Apple\n13.3\" MacBook Air Notebook Computer\n\n','    1.7GHz Intel Core i5\n    4GB RAM\n    256GB Flash Storage\n    Intel GMA HD 3000 Graphics\n    13.3\" Glossy Widescreen LED Backlit Display\n    FaceTime Webcam\n    Bluetooth 4.0\n    802.11a/b/g/n Wi-Fi\n    Mac OS X 10.7 Lion\n    3 lb\n',0,'Apple',2,'1015.0',1,0,1499,1400,'product/apple_comp_15.png','product/details/apple_comp_15.png','2011-12-03','2011-12-03'),(16,'Acer\n1TB Aspire X3 AX3950-UR31P Desktop Computer\n','    Intel Core i3-540 Dual-Core 3.06GHz CPU\n    Standard 4GB DDR3 SDRAM with 8GB Max\n    SATA/300 5400 RPM 1TB Hard Drive\n    Genuine Windows 7 Home Premium (64 Bit)\n    Intel HD Graphics 2000\n    VGA Port & 11 USB 2.0 Ports\n    HDMI Port & Multi-in-1 Card Reader\n    SuperMulti 16X DVD Burner\n    Gigabit Ethernet & 802.11 b/g/n WiFi\n    High-Definition Audio Support\n',0,'Acer',2,'1016.0',0,1,399,350,'product/acer_comp_16.png','product/details/acer_comp_16.png','2011-12-03','2011-12-03'),(17,'\nAcer\n1TB Predator G3 AG3610-UR30P Desktop Computer\n','    Intel Core i5-2320 Quad-Core 3.0GHz CPU\n    Dual-Channel 6GB DDR3 SDRAM Memory\n    SATA 5400 RPM 1TB Hard Drive\n    Genuine Windows 7 Home Premium (64 Bit)\n    NVIDIA GeForce GT520 Graphics\n    Intel H67 Express Chipset\n    SuperMulti DVD Burner Optical Drive\n    HDMI Port & 12-in-1 Memory Card Reader\n    Gigabit Ethernet & 802.11 b/g/n WiFi\n    USB Keyboard & Optical Mouse Included\n',0,'Acer',2,'1017.0',0,0,699,675,'product/acer_comp_17.png','product/details/acer_comp_17.png','2011-12-03','2011-12-03'),(18,'Acer\n320GB 10.1\" Aspire One D257 AOD257-1646 Netbook (Aquamarine)\n','    Intel Atom Dual-Core N570 1.66 GHz Processor\n    CrystalBrite WSVGA 1024 x 600 LCD Screen\n    Standard 1GB DDR3 SDRAM with 2GB Maximum\n    SATA 5400 RPM HDD with 320GB Capacity\n    Genuine Windows 7 Starter OS - 32 Bit\n    Intel Graphics Media Accelerator 3150\n    Fast Ethernet & WiFi 802.11 b/g/n\n    VGA Port & 3 x USB 2.0 Ports\n    Webcam, Mic & 5-in-1 Memory Card Reader\n',0,'Acer',2,'1018.0',0,0,269,250,'product/acer_comp_18.png','product/details/acer_comp_18.png','2011-12-03','2011-12-03'),(19,'Acer\n320GB 15.6\" Aspire AS5250-0437 Notebook (Mesh Grey)\n','    AMD 1.65GHz E-Series Dual-Core E-450 CPU\n    LED Backlit 15.6\" HD CineCrystal TFT LCD\n    Widescreen 1366 x 768 Display Resolution\n    Standard 4GB DDR3 Dual-Channel Memory\n    SATA 5400 RPM 320GB Hard Drive\n    Genuine Windows 7 Home Premium - 64 Bit\n    AMD ATI Radeon HD 6320 Graphics\n    Gigabit Ethernet & WiFi 802.11 b/g/n\n    VGA Ports x 1 & USB 2.0 Ports x 3\n    Optical DVD Drive & SD / MMC Card Reader\n',0,'Acer',2,'1019.0',0,0,371,350,'product/acer_comp_19.png','product/details/acer_comp_19.png','2011-12-03','2011-12-03'),(20,'Acer\n500GB 11.6\" Aspire One 722 AO722-0418 Netbook (Expresso Black)\n','    AMD Fusion C-60 Dual-Core 1.0 GHz CPU\n    CineCrystal 11.6\" HD+ Color LCD Display\n    Widescreen 1366 x 768 Resolution\n    Internal 4GB DDR3 SDRAM Memory\n    SATA 5400 RPM HDD with 500GB Capacity\n    Genuine Windows 7 Home Premium - 64 Bit\n    AMD ATI Radeon HD 6290 Graphics\n    Fast Ethernet & WiFi 802.11 b/g/n\n    HDMI Port & Three USB 2.0 Ports\n    VGA Port & 5-in-1 Memory Card Reader\n',0,'Acer',2,'1020.0',0,1,376,349,'product/acer_comp_20.png','product/details/acer_comp_20.png','2011-12-03','2011-12-03'),(21,'Apple iPhone 4 ','Cpu :\n    1 ghz arm cortex-a8 processor, powervr sgx535gpu, apple a4 chipset\nOs :\n    Ios4\nDimensions :\n    115.2 x 58.6 x 9.3 mm\nInternal :\n    16/32 gb storage, 512 mb ram\nPrimary :\n    5 mp, 2592 x 1944 pixels, autofocus, led flash, check quality\n3g :\n    Hsdpa, 7.2 mbps hsupa, 5.76 mbps ',0,'Apple',3,'1021.0',0,0,690,685,'product/apple_mobile_21.png','product/details/apple_mobile_21.png','2011-12-03','2011-12-03'),(22,' BlackBerry Bold 9780 ','Cpu :\n    624 mhz processor\nPrimary :\n    5 mp, 2592x1944 pixels, autofocus, led flash, check quality\nWlan :\n    Wi-fi 802.11 b/g, uma\nCard slot :\n    Micro sd, up to 32gb, 2gb card included ',0,'Blackberry',3,'1022.0',0,0,387,380,'product/bb_mobile_22.png','product/details/bb_mobile_22.png','2011-12-03','2011-12-03'),(23,'HTC Desire S ','Cpu :\n    1 ghz scorpion processor, adreno 205 gpu, qualcomm msm8255 snapdragon\nOs :\n    Android \nCard slot :\n    Microsd, up to 32gb\nPrimary :\n    5 mp, 2592 x 1944 pixels, autofocus, led flash\nWlan :\n    Wi-fi 802.11 b/g/n, dlna, wi-fi hotspot\n3g :\n    Hsdpa, 14.4 mbps hsupa, 5.76 mbps ',0,'Htc ',3,'1023.0',0,0,445,442,'product/htc_mobile_23.png','product/details/htc_mobile_23.png','2011-12-03','2011-12-03'),(24,'BlackBerry Torch 9800 ','3g network :\n    Hsdpa 850 / 1900 / 2100 /800\nCard slot :\n    Micro sd, up to 32gb, 4gb card included\nGprs :\n    Class 10 (4+1/3+2 slots), 32 - 48 kbps\nWlan :\n    Wi-fi 802.11 b/g/n, uma (carrier-dependent)\nCpu :\n    624 mhz processor ',0,'Blackberry',3,'1024.0',1,1,517,512,'product/bb_mobile_24.png','product/details/bb_mobile_24.png','2011-12-03','2011-12-03'),(25,'HTC Wildfire ','Cpu :\n    528 mhz arm 11 processor, adreno 200 gpu, qualcomm msm7225 chipset\nOs :\n    Android \nPrimary :\n    5 mp, 2592 x 1944 pixels, autofocus, led flash\nCard slot :\n    Micro sd, up to 32gb\nWlan :\n    Wi-fi 802.11 b/g, wi-fi hotspot (android 2.2)\n3g :\n    Hsdpa, 7.2 mbps ',0,'Htc ',3,'1025.0',0,0,260,255,'product/htc_mobile_25.png','product/details/htc_mobile_25.png','2011-12-03','2011-12-03'),(26,'Nokia C6-01 ','C6-01 is a 3.2 inches Multi-TouchTouchScreen phone with a AMOLED ClearBlack Display that is protected by Scratch and Impact resistant Gorilla Glass. Equipped with Proximity sensor for auto turn-off and Accelerometer sensor for UI auto-rotate for improved',0,'Nokia',3,'1026.0',1,1,283,273,'product/nokia_mobile_26.png','product/details/nokia_mobile_26.png','2011-12-03','2011-12-03'),(27,'Sony Ericsson Hazel ','Ericsson Hazel sports an impressive minimalist design and is part of Sony Ericsson\'s GreenHeart range. The phones design is straightforward, with curved edges that provide better ergonomic elements to allow a sturdy built and better in-hand grip. It sport',0,'Sony',3,'1027.0',0,0,167,160,'product/sony_mobile_27.png','product/details/sony_mobile_27.png','2011-12-03','2011-12-03'),(28,'Sony Ericsson Xperia Play ','Java\n    Via third party application \nGps\n    Yes, with A- \nColors\n    Black, White \nGames\n    Yes + downloadable, motion & gesture gaming \nRadio\n    No \nBrowser\n    WAP 2.0/xHTML, HTML \nMessaging\n    SMS (threaded view), MMS, Email, Push Email, IM \nCpu\n    1GHz Scorpion processor, Adreno 205 GPU, Qualcomm MSM8255 Snapdragon \nOs\n    Android \nOthers\n    SNS integration, Active noise cancellation with dedicated mic, Document viewer/editor, Organizer, Track ID, Google Search, Maps, Gmail,, MP3/eAAC+/WMA/WAV player, MP4/H.263/H.264/WMV player, Digital compass ',0,'Sony',3,'1028.0',0,0,437,430,'product/sony_mobile_28.png','product/details/sony_mobile_28.png','2011-12-03','2011-12-03'),(29,' Sony Ericsson Yendo ','Java\n    Yes, MIDP 2.0 \nGps\n    No \nColors\n    Black, Blue, Green, Orange, Pink, Purple, Red, Silver, White, Yellow \nGames\n    Yes \nRadio\n    Stereo FM radio with RDS \nBrowser\n    HTML \nMessaging\n    SMS, MMS, Email \nCpu\n    156 MHz processor \nOs\n    N/A \nOthers\n    Google search, TrackID music recognition, N/A, N/A, N/A, Voice memo, Facebook, Twitter apps, Walkman player, MP4/H.263 player ',0,'Sony',3,'1029.0',0,0,90,85,'product/sony_mobile_29.png','product/details/sony_mobile_29.png','2011-12-03','2011-12-03'),(30,'Motorola DEFY ','The Motorola Defy is a full touch phone that runs on Android OS 2.1 - Eclair. The mobile phone has a TI OMAP 3610 800 MHz processor with 512 MB RAM. The Defy is a sturdy phone with dustproof, water and scratch resistant features.Imaging and video is taken',0,'Motorola',3,'1030.0',0,1,286,280,'product/sony_mobile_30.png','product/details/sony_mobile_30.png','2011-12-03','2011-12-03'),(31,'Pearstone\nB&H Kit\nVocal Microphone Accessory Bundle - Deluxe\n','Product Highlights\n\n    Nylon Pop Filter\n    Microphone Stand with Boom\n    Microphone Cable (XLR)\n    Headphones\n    Headphones Extension Cable\n\n',0,'Pearstone',4,'1031.0',0,0,134,130,'product/perlstone_audio_31.png','product/details/perlstone_audio_31.png','2011-12-03','2011-12-03'),(32,'Pearstone\nB&H Kit\nVocal Microphone Accessory Bundle - Essential\n','Product Highlights\n\n    Nylon Pop Filter\n    Microphone Stand with Boom\n    Microphone Cable (XLR)\n\n',0,'Pearstone',4,'1032.0',0,1,66,60,'product/perlstone_audio_32.png','product/details/perlstone_audio_32.png','2011-12-03','2011-12-03'),(33,'AKG\nB&H Kit\nC 1000 S Stereo Twin Pack\n','Product Highlights\n\n    Two C 1000 S Microphones\n    A Studio/Stage Model\n    For Vocal/Instrument Recording\n    Cardioid Pattern\n    Wide Frequency Response\n    Phantom or 9V Battery Operation\n    LED Low-Battery Indicator\n    Inc. Polar Pattern Converter\n    Inc. Boost Adapter\n    Silent On/Off Switch\n\n',0,'Akg',4,'1033.0',0,0,399,380,'product/akg_audio_33.png','product/details/akg_audio_33.png','2011-12-03','2011-12-03'),(34,'AKG\nC 414 XL II Large Diaphragm Condenser Microphone\n','Product Highlights\n\n    5 Selectable Polar Patterns\n    Metal Body\n    Transformerless Design\n    Elastic Capsule Suspension\n    Bi-Color Indicator LEDs\n    3 Bass Cut Filters and Pads\n    Accessories Included\n\n',0,'Akg',4,'1034.0',1,0,999,895,'product/akg_audio_34.png','product/details/akg_audio_34.png','2011-12-03','2011-12-03'),(35,'AKG\nC 414 XL II/ST Large Diaphragm Condenser Microphone (Matched Pair)\n','Product Highlights\n\n    5 Selectable Polar Patterns\n    Metal Body\n    Transformerless Design\n    Elastic Capsule Suspension\n    Bi-Color Indicator LEDs\n    3 Bass Cut Filters and Pads\n    Accessories Included\n\n',0,'Akg',4,'1035.0',0,1,2199,2186,'product/akg_audio_35.png','product/details/akg_audio_35.png','2011-12-03','2011-12-03'),(36,'AKG\nC 414 XLS Large Diaphragm Condenser Microphone\n','Product Highlights\n\n    5 Selectable Polar Patterns\n    Metal Body\n    Transformerless Design\n    Elastic Capsule Suspension\n    Bi-Color Indicator LEDs\n    3 Bass Cut Filters and Pads\n    Accessories Included\n\n',0,'Akg',4,'1036.0',0,0,999,987,'product/akg_audio_36.png','product/details/akg_audio_36.png','2011-12-03','2011-12-03'),(37,'AKG\nC2000B - Studio Condenser Mic\n','The AKG C 2000B is the \"entry level\" model for anyone looking for an affordable high quality recording microphone. Its almost ruler-flat response provides a crystal-clear, \"up-front\" sound. A switchable bass roll-off filter for eliminating proximity effect and a switchable 10dB pre-attenuation pad let you adjust the C 2000B\'s response to all recording or live miking situations. A built-in pop screen reduces unwanted noise that may be caused by plosive sounds if you use the microphone extremely close-in. Rugged construction, an elegantly styled die-cast metal housing, and silver-gray finish add to the professional level quality of the C 2000B.',0,'Akg',4,'1037.0',0,0,199,190,'product/akg_audio_37.png','product/details/akg_audio_37.png','2011-12-03','2011-12-03'),(38,'AKG\nC214 - Cardioid Studio Condenser Microphone\n','The AKG C214 Studio Condenser Microphone is designed to provide a cost-effective alternative to the dual-diaphragm C414 studio microphone. The C214 delivers the pristine sound reproduction of the classic condenser microphone, in a single-pattern cardioid design.',0,'Akg',4,'1038.0',1,0,399,392,'product/akg_audio_38.png','product/details/akg_audio_38.png','2011-12-03','2011-12-03'),(39,'AKG\nC214 Cardioid Studio Condenser Microphone (Stereo Pair)\n','Product Highlights\n\n    Matched Stereo Pair\n    Large Diaphragm Condenser\n    Cardioid Polar Pattern\n    Patented Back-Plate Technology\n    -20dB Pad and Low Cut Switch\n    Accessories and Case Included\n    Made in Austria\n\n',0,'Akg',4,'1039.0',0,0,899,892,'product/akg_audio_39.png','product/details/akg_audio_39.png','2011-12-03','2011-12-03'),(40,'AKG\nC3000 Studio Microphone\n','Product Highlights\n\n    Cardioid Polar Pattern\n    Wide Frequency Response\n    -10dB Pad Switch\n    Low Frequency Roll-Off Switch\n    Internal Shock Mounting\n\n',0,'Akg',4,'1040.0',0,0,249,240,'product/akg_audio_40.png','product/details/akg_audio_40.png','2011-12-03','2011-12-03'),(41,'Canon\nEOS 1D Mark IV SLR Digital Camera (Body Only)\n','Product Highlights\n\n    16.1 Megapixels\n    3.0\" LCD\n    High Sensitivity (ISO 102,400)\n    10fps Burst Mode\n    45 Point AF System\n    HD Video Recording\n    Selectable Video Exposure + Frame Rates\n    Dust & Weather Resistant\n    100% Viewfinder\n    Self Cleaning Sensor\n\n',0,'Canon',5,'1041.0',0,0,4999,4990,'product/canon_cam_41.png','product/details/canon_cam_41.png','2011-12-03','2011-12-03'),(42,'Canon\nEOS 5D Mark II Digital Camera (Body Only)\n','Product Highlights\n\n    21.1 Megapixel Full-Frame Sensor\n    3.0\" High Resolution LCD Display\n    Live View Mode\n    1080p Movie Mode\n    Dust & Weather-Resistant\n    Self Cleaning Sensor\n    Broad ISO Range (50-25600)\n    3.9 fps Burst Mode\n\n',0,'Canon',5,'1042.0',1,1,2499,2400,'product/canon_cam_42.png','product/details/canon_cam_42.png','2011-12-03','2011-12-03'),(43,'Canon\nEOS 5D Mark II Digital Camera Kit with Canon 24-105mm f/4L IS USM AF Lens\n','Product Highlights\n\n    21.1 Megapixel Full-Frame Sensor\n    3.0\" High Resolution LCD Display\n    Live View Mode\n    1080p Movie Mode\n    Dust & Weather-Resistant\n    Self Cleaning Sensor\n    Broad ISO Range (50-25600)\n    3.9 fps Burst Mode\n\n',0,'Canon',5,'1043.0',0,0,3299,3287,'product/canon_cam_43.png','product/details/canon_cam_43.png','2011-12-03','2011-12-03'),(44,'Canon\nB&H Kit\nEOS 60D Camera with 18-135mm Lens Kit with Pro 9000 Printer & Paper\n','This Canon EOS 60D Camera with 18-135mm Lens Kit with Pro 9000 Printer & Paper Kit, bundled by B&H, consists of the Canon EOS 60D SLR Digital Camera Kit with Canon 18-135mm IS Lens, Canon PIXMA Pro9000 Mark II Inkjet Printer and a pack of (13x19) glossy paper. Be ready to print right from the start with this professional lab quality printer.',0,'Canon',5,'1044.0',1,0,1606,1586,'product/canon_cam_44.png','product/details/canon_cam_44.png','2011-12-03','2011-12-03'),(45,'Canon\nEOS 60D DSLR Camera (Body Only)\n','Product Highlights\n\n    18MP APS-C CMOS Sensor\n    1920 x 1080 HD Video Capture\n    SD/SDHC/SDXC Memory Card Slot\n    Vari-Angle Clear View 3.0\" Flip-Out LCD\n    DIGIC 4 Image Processor\n    5.3 fps Continuous Shooting\n    Works with all Canon EF and EF-S Lenses\n    ISO 6400 - Expandable to 12800\n    HDMI Output to HDTV\n    In-Camera Editing Options\n\n',0,'Canon',5,'1045.0',0,1,969,869,'product/canon_cam_45.png','product/details/canon_cam_45.png','2011-12-03','2011-12-03'),(46,'Canon\nEOS Rebel T2i Digital SLR Camera w/ EF-S 18-135mm f/3.5-5.6 IS Lens\n','Product Highlights\n\n    18.0 MP CMOS (APS-C) Sensor\n    Full HD 1080p Video\n    Advanced Live View\n    3.0\" 1.04 Million Dot Clear View LCD\n    Up to 3.7 fps RAW, JPEG, or RAW+JPEG\n    ISO 100-6400, Expandable to 12800\n    63-Zone Metering / 9-Point AF System\n    Compatible with SD, SDHC, and SDXC\n    Eye-Fi Menu Status Indicator Support\n\n',0,'Canon',5,'1046.0',0,0,999,867,'product/canon_cam_46.png','product/details/canon_cam_46.png','2011-12-03','2011-12-03'),(47,'Canon\nEOS Rebel T2i Digital SLR Kit w/ EF-S/18-55 IS II\n','Product Highlights\n\n    18.0 MP CMOS (APS-C) Sensor\n    Full HD 1080p Video\n    Advanced Live View\n    3.0\" 1.04 Million Dot Clear View LCD\n    Up to 3.7 fps RAW, JPEG, or RAW+JPEG\n    ISO 100-6400, Expandable to 12800\n    63-Zone Metering / 9-Point AF system\n    Compatible with SD, SDHC, and SDXC\n    Eye-Fi Menu Status Indicator Support\n    EF-S 18-55mm IS II Zoom Lens\n\n',0,'Canon',5,'1047.0',0,0,799,750,'product/canon_cam_47.png','product/details/canon_cam_47.png','2011-12-03','2011-12-03'),(48,'Canon\nEOS Rebel T3 Digital Camera and 18-55mm IS II Lens Kit\n','    12.2MP APS-C CMOS Sensor\n    18-55 EF-S Lens Included\n    SD/SDHC/SDXC Memory Card Slot\n    DIGIC 4 Imaging Processor\n    2.7\" Clear View LCD\n    720p HD Movie Mode\n    100-6400 ISO\n    Compatible with Canon EF and EF-S Lenses\n    63 Zone Dual-Layer System / 9 Point AF\n    3 fps Continuous Shooting\n',0,'Canon',5,'1048.0',0,0,876,800,'product/canon_cam_48.png','product/details/canon_cam_48.png','2011-12-03','2011-12-03'),(49,'Canon\nEOS Rebel T3i Digital Camera (Body Only)\n','    SD/SDHC/SDXC Memory Card Slot\n    18MP APS-C CMOS Sensor\n    DIGIC 4 Imaging Processor\n    3.0\" Clear View Vari-Angle LCD\n    100-6400 ISO\n    Full HD Movie Mode w/ Manual Exposure\n    Compatible with Canon EF and EF-S Lenses\n    3.7 Frames/Second Continuous Shooting\n    63 Zone Dual-Layer Metering / 9-Point AF\n    Intelligent Auto Mode\n',0,'Canon',5,'1049.0',0,1,458,432,'product/canon_cam_49.png','product/details/canon_cam_49.png','2011-12-03','2011-12-03'),(50,'Canon\nPowershot 100 HS Digital ELPH Camera (Blue)\n','    12.1MP CMOS Sensor\n    4x Optical Zoom 28-112mm Lens\n    28mm Wide-Angle\n    Optical Image Stabilizer\n    Improved Low Light/High ISO Photos\n    Full 1080p HD Video W/Stereo Sound\n    Hi-Speed Burst Shooting at Up to 8.2fps\n    Slow Motion Movie Mode--240fps\n    Effects Include Toy Camera & Monochrome\n    Smart AUTO Has 32 Scene Modes\n',0,'Canon',5,'1050.0',0,0,658,624,'product/canon_cam_50.png','product/details/canon_cam_50.png','2011-12-03','2011-12-03'),(51,'Acer\n16GB Iconia Tab A500 10.1\" Multi-Touch Screen Tablet','NVIDIA Tegra 250 Dual-Core Processor \nActive Matrix 10.1\" TFT Color LCD Screen \nWidescreen HD WXGA 1280 x 800 Resolution \nDDR2 SDRAM 1GB Memory & 16GB of Storage \nAndroid 3.0 Honeycomb Operating System \nWiFi 802.11 b/g/n & Bluetooth Enabled \nMicro-HDMI & High-Speed USB 2.0 Port \nFront 2MP Camera & Back 5MP Camera \nNVIDIA GeForce Graphics \nDual Speakers & Dolby Mobile Technology .\nThe Acer 16GB Iconia Tab A500 10.1\" Multi-Touch Screen Tablet is an ultra-portable tablet equipped with a high-definition 10.1\" Active Matrix TFT color LCD display with cinematic WXGA 1280 x 800 resolution. It runs the Android 3.0 Honeycomb operating system with an NVIDIA Tegra 250 dual-core processor capable of a 1.0GHz processing speed. It supports NVIDIA GeForce graphics and has an internal 1GB DDR2 SDRAM memory, as well as 16GB of storage capacity that can be expanded by utilizing the MicroSD/SDHC card slot.\n\n\n',0,'acer',6,'1051.0',0,0,382,349.99,'product/acer_tablet_51.png','product/details/acer_tablet_51.png','2011-12-03','2011-12-03'),(52,'Acer\n8GB Iconia Tab A100 VanGogh 7.0\" Multi-Touch Tablet PC (Steel Blue) ','nVidia Tegra 250 Dual-Core 1.0GHz CPU \nActive Matrix 7.0\" TFT Color LCD Screen \nWXGA 1024 x 600 HD Resolution \nInternal 8GB Storage & 1GB DDR2 SDRAM \nWiFi 802.11 b/g/n & Bluetooth 2.1 + EDR \nAndroid Honeycomb Operating System Brilliant nVidia GeForce Graphics Micro HDMI Port & Micro USB 2.0 Port Dolby Mobile Technology & Dual Speakers MicroSD & MicroSDHC Memory Card Reader \nThe Acer 8GB Iconia Tab A100 VanGogh 7.0\" Multi-Touch Tablet PC (Steel Blue) is an ultra-portable tablet equipped with a high-definition 7.0\" Active Matrix TFT color LCD multi-touch display that supports cinematic WXGA 1024 x 600 resolution. It features an Android Honeycomb operating system, nVidia Tegra 250 Dual-Core 1.0GHz mobile processor and stunning nVidia GeForce graphics. The A100 utilizes a generous 1GB of DDR2 SDRAM internal memory to ensure fast computing. For storing documents and media, the tablet features a sufficient 8GB storage capacity, which can easily be expanded by taking advantage of the integrated MicroSD/MicroSDHC memory card slot.\n\n',0,'acer',6,'1052.0',0,1,321,299.99,'product/acer_tablet_52.png','product/details/acer_tablet_52.png','2011-12-03','2011-12-03'),(53,'Acer\nW500 10.1\" Multi-Touch Screen Tablet ','AMD 1GHz C-Series Processor C-50 \nHD CrystalBrite 10.1\" TFT LCD Display \nLED Backlight & 1280 x 800 Resolution DDR3 2GB Memory & mSATA SSD 32GB Storage\n Genuine Windows 7 Home Premium 32-bit OS \nWi-Fi 802.11 b/g/n & Bluetooth Enabled \nHDMI, RJ-45 LAN & Dual USB 2.0 Ports \nDual Acer Crystal Eye WebCams \nAMD Radeon HD 6250 Graphics \nIntegrated Bottom US Keyboard Dock ',0,'acer',6,'1053.0',1,0,489,450,'product/acer_tablet_53.png','product/details/acer_tablet_53.png','2011-12-03','2011-12-03'),(54,'Apple\n16GB iPad 2 with Wi-Fi (Black) ','9.7\" LED Multi-Touch Display \nFront & Rear Cameras FaceTime Support Dual-Core A5 CPU 802.11n Wi-Fi Bluetooth 2.1+EDR \nDock Connector \n10 Hours of Battery Per Charge Mac & Windows Compatibility ',0,'apple',6,'1054.0',0,0,495,479,'product/acer_tablet_54.png','product/details/acer_tablet_54.png','2011-12-03','2011-12-03'),(55,'Apple\n16GB iPad 2 with Wi-Fi (White) ','9.7\" LED Multi-Touch Display \nFront & Rear Cameras FaceTime Support Dual-Core A5 CPU 802.11n Wi-Fi Bluetooth 2.1+EDR \nDock Connector \n10 Hours of Battery Per Charge Mac & Windows Compatibility ',0,'apple',6,'1055.0',0,0,495,479,'product/apple_tablet_55.png','product/details/apple_tablet_55.png','2011-12-03','2011-12-03'),(56,'Apple\n16GB iPad 2 with Wi-Fi + 3G (AT&T, Black) ','AT&T 3G Broadband 9.7\" LED Multi-Touch Display Front & Rear Cameras FaceTime Support Dual-Core A5 CPU 802.11n Wi-Fi Bluetooth 2.1+EDR Dock Connector 10 Hours of Battery Per Charge Mac & Windows Compatibility ',0,'apple',6,'1056.0',0,1,628.95,6,'product/apple_tablet_56.png','product/details/apple_tablet_56.png','2011-12-03','2011-12-03'),(57,'Apple\n16GB iPad 2 with Wi-Fi + 3G (AT&T, White)','AT&T 3G Broadband 9.7\" LED Multi-Touch Display Front & Rear Cameras FaceTime Support Dual-Core A5 CPU 802.11n Wi-Fi Bluetooth 2.1+EDR Dock Connector 10 Hours of Battery Per Charge Mac & Windows Compatibility ',0,'apple',6,'1057.0',0,0,628.95,6,'product/apple_tablet_57.png','product/details/apple_tablet_57.png','2011-12-03','2011-12-03'),(58,' Archos\n101 internet tablet (16GB) ','Android 2.2 Platform MicroSD Expansion Slot USB Host 10.1\" 1024 x 600 Touch Screen Display Bluetooth and WiFi Connectivity HDMI Connection Home Streaming with UPnP and Samba Connects to External Keyboard and Mouse 3D Graphics Accelerator Web Cam, Apps, and Games! ',0,'archos',6,'1058.0',0,0,259.95,259.95,'product/archos_tablet_58.png','product/details/archos_tablet_58.png','2011-12-03','2011-12-03'),(59,'Archos\n32GB 9 PCtablet with 8.9\" Resistive Touch Screen \n','Android 2.2 Platform MicroSD Expansion Slot USB Host 10.1\" 1024 x 600 Touch Screen Display Bluetooth and WiFi Connectivity HDMI Connection Home Streaming with UPnP and Samba Connects to External Keyboard and Mouse 3D Graphics Accelerator Web Cam, Apps, and Games!',0,'archos',6,'1059.0',0,1,399.99,349.99,'product/archos_tablet_59.png','product/details/archos_tablet_59.png','2011-12-03','2011-12-03'),(60,'ASUS\n16GB Eee Pad Slider SL101 Tablet (Pearl White)','LED Backlight 10.1\" Multi-Touch Display Integrated Full QWERTY Keyboard NVIDIA Tegra 2 Dual-Core 1.0GHz CPU Android 3.1 Honeycomb Operating System 16GB Storage Capacity & 1GB Memory IPS Panel & WXGA 1280 x 800 Resolution Front & Rear Facing Cameras Record In HD Mini HDMI Port & 2-In-1 Audio Jack High-Quality Speaker & Supreme SRS Sound Scratch-Resistant Corning Gorilla Glass ',0,'archos',6,'1060.0',0,0,471,4599.99,'product/archos_tablet_60.png','product/details/archos_tablet_60.png','2011-12-03','2011-12-03'),(61,'Sony\nVegas Movie Studio HD Platinum Production Suite ','Product Highlights\nVegas Movie Studio HD Platinum 10 \nDVD Architect Studio 5 \nSound Forge Audio Studio 10 \nVocal Eraser Tool \n1,001 Sound Effects \nNewBlueFX Audio & Video Effects \nVideo Tutorial DVD \n400 Exclusive Music Soundtracks\n',0,'sony',7,'1061.0',0,1,34.95,30.99,'product/sony_moviesandmusic_61.png','product/details/sony_moviesandmusic_61.png','2011-12-03','2011-12-03'),(62,'Coby\nTFDVD7009 Portable DVD Player','Plays Multiple Movie and Music Formats \nPlays Multiple Movie and Music Formats \nHome Theater Friendly \nStereo Speakers \nMultiple Language Support \nParental Lock Control\n\n\n\n\n\n\n',0,'coby',7,'1062.0',0,0,58.9,55.9,'product/coby_moviesandmusic_62.png','product/details/coby_moviesandmusic_62.png','2011-12-03','2011-12-03'),(63,'Sony\nDVP-FX970 9\" Portable DVD Playe','9\" 180 Swivel LCD Screen \nWidescreen (800 x 430) Resolution \nMulti-Format Disc Playback Built-in Dolby Digital Decoding \nUSB Port for Movies, Music & Pictures \nUp to 6 Hrs of Playback Time on a Charge A/V Input/Output \nTwo Headphone Jacks \nCar Adapter for Portable Use \nTouch Key Controls',0,'sony',7,'1063.0',0,0,139.99,119.99,'product/sony_moviesandmusic_63.png','product/details/sony_moviesandmusic_63.png','2011-12-03','2011-12-03'),(64,'Coby\nTFDVD7052 7\" Portable Tablet DVD Player ','\n 7\" Portable Tablet Design \nPlays Multiple Movie and Music Formats \nHome Theater Friendly Anti-Skip Protection \nHeadphone Jacks (x2) Multiple Language Support \nParental Lock Control Car Kit Included \n\n\n',0,'coby',7,'1064.0',0,1,78.56,65.56,'product/coby_moviesandmusic_64.png','product/details/coby_moviesandmusic_64.png','2011-12-03','2011-12-03'),(65,'Impecca\nDVP915B Portable DVD Player (Electric Blue)','9\" LCD Display \n180 Image Rotation Screen \nTop Loading Disc \nUSB Port and SD/SDHC/MMC Card Reader \nPlays Multiple Movie and Music Formats Small Footprint \nBuilt-in Stereo Speakers Home Theater Friendly\n\n\n\n\n\n',0,'impecca',7,'1065.0',0,0,115.99,100.99,'product/impecca_moviesandmusic_65.png','product/details/impecca_moviesandmusic_65.png','2011-12-03','2011-12-03'),(66,'RJ Technology Inc.\n3.5\" Portable Digital TV (1GB Internal Memory)','ATSC Digital Tuner \n320 x 240 Resolution \nmicroSD Card Slot \nBuilt-In TV Antenna \nElectronic Program Guide \nSupports Movie and Music Files \nRead eBooks & View Photos Built-In Voice Recorder \nEarphone Jack \n',0,'rj',7,'1066.0',0,1,78.56,65.56,'product/rj_moviesandmusic_66.png','product/details/rj_moviesandmusic_66.png','2011-12-03','2011-12-03'),(67,'Sony\nWHG-SLK1i Micro Hi-Fi System with Video ','130W Total Sound \nMedia Card Playback \niPod Dock \nUSB Music/Photo/Movie Playback \n9\" LCD Screen \nS-Master Digital Amplifier \nPhoto Slideshow Compact Design \nMultiple Connectivity Options \n',0,'sony',7,'1067.0',1,0,385.76,350,'product/sony_moviesandmusic_67.png','product/details/sony_moviesandmusic_67.png','2011-12-03','2011-12-03'),(68,'Roku\nRoku 2 XD Streaming Player ','Stream 300+ Channels on Your Television \nWatch Shows & Movies or Listen to Music \nBuilt-In WiFi b/g/n Wireless Connection \nPlays Up to 1080p HD Video Works with Virtually Any TV \nSmall Enough to Fit in Your Pocket \nRequires Wireless High-Speed Internet\n',0,'roku',7,'1068.0',0,0,79,75,'product/roku_moviesandmusic_68.png','product/details/roku_moviesandmusic_68.png','2011-12-03','2011-12-03'),(69,'Pinnacle\nDazzle DVD Recorder Plus Video Capture Cable ','Creates Movies \nPinnacle Studio 12 Video Editing S/W \nTransitions / Music / Effects Library \nUSB Connectivity \nCaptures Video from any Source \nWeb Sharing Support Exports Video to iPod, PSP, or DVD \nTV and PC-compatible \n\n',0,'pinnacle',7,'1069.0',0,0,39.99,35,'product/pinnacle_moviesandmusic_69.png','product/details/pinnacle_moviesandmusic_69.png','2011-12-03','2011-12-03'),(70,'Video Copilot\nDesigner Sound FX ','500 Sound Effects/Audio Elements \n5 Categories of Sound Effects \nAbstract/Swishes/Drums/Ambience/Impacts \n5 Pre-scored Audio Tracks \nEntire Promo Video Project File/Footage \nVideo Tutorials (Over 80 min) \nMixing Tips from Andrew Kramer \nSuitable for Movie Trailers/Promos \nUsed in Flash Intro/Button Roll-over \nIdeal for DVD Menus/Video Games\n\n\n\n\n',0,'VideoCopilo',7,'1070.0',0,0,98.95,90.99,'product/videocopilot_moviesandmusic_70.png','product/details/videocopilot_moviesandmusic_70.png','2011-12-03','2011-12-03'),(71,'Call of Duty: Modern Warfare 3 ','Call of Duty: Modern Warfare 3 by Activision Publishing (Video Game - Nov 8, 2011) - Xbox 360',0,'Xbox 360',8,'1071.0',0,0,44.99,45.99,'product/videogames_71.png','product/details/videogames_71.png','2011-12-03','2011-12-03'),(72,'Halo: Combat Evolved Anniversary by Microsoft','Halo: Combat Evolved Anniversary by Microsoft (Video Game - Nov 15, 2011) - Xbox 360',0,'Xbox 360',8,'1072.0',0,0,29.97,28,'product/videogames_72.png','product/details/videogames_72.png','2011-12-03','2011-12-03'),(73,'Uncharted 3: Drake\'s Deception','Uncharted 3: Drake\'s Deception by Sony Computer Entertainment (Video Game - Nov 1, 2011) - PlayStation 3',0,'PlayStation 3',8,'1073.0',0,0,29.97,28,'product/videogames_73.png','product/details/videogames_73.png','2011-12-03','2011-12-03'),(74,'Just Dance 3 by UBI Soft','Just Dance 3 by UBI Soft (Video Game - Oct 7, 2011) - Nintendo Wii ',0,'Nintendo Wii',8,'1074.0',0,0,29.99,25.99,'product/videogames_74.png','product/details/videogames_74.png','2011-12-03','2011-12-03'),(75,'New Super Mario Bros. Wii','New Super Mario Bros. Wii by Nintendo (Video Game - Nov 15, 2009) - Nintendo Wii \n',0,'Nintendo Wii',8,'1075.0',0,1,15.99,14.99,'product/videogames_75.png','product/details/videogames_75.png','2011-12-03','2011-12-03'),(76,'Battlefield 3','\nBattlefield 3 by Electronic Arts (Video Game - Oct 2011) - Xbox 360 ',0,'Xbox 360',8,'1076.0',0,0,22.99,20.99,'product/videogames_76.png','product/details/videogames_76.png','2011-12-03','2011-12-03'),(77,'Batman: Arkham City','Batman: Arkham City by Warner Bros (Video Game - Oct 18, 2011) - PlayStation 3',0,'PlayStation 3',8,'1077.0',0,1,22.99,20.99,'product/videogames_77.png','product/details/videogames_77.png','2011-12-03','2011-12-03'),(78,'Assassin\'s Creed Revelations','Assassin\'s Creed Revelations by UBI Soft (Video Game - Nov 15, 2011) - Xbox 360',0,'Xbox 360',8,'1078.0',0,0,27.99,25.99,'product/videogames_78.png','product/details/videogames_78.png','2011-12-03','2011-12-03'),(79,'Mario Kart 7','Mario Kart 7 by Nintendo (Video Game - Dec 4, 2011) - Nintendo 3DS',0,'Nintendo 3DS',8,'1079.0',0,1,12.99,10.99,'product/videogames_79.png','product/details/videogames_79.png','2011-12-03','2011-12-03'),(80,'LEGO Harry Potter: Years 5-7','LEGO Harry Potter: Years 5-7 by Warner Bros (Video Game - Nov 11, 2011) - Nintendo Wii \n',0,'Nintendo Wii',8,'1080.0',0,0,47.99,40.99,'product/videogames_80.png','product/details/videogames_80.png','2011-12-03','2011-12-03'),(81,'Aluratek\nCINEPAL High Definition Personal Media Player (8\") ','4GB Built-In Memory \nSD/SDHC Expansion Slot USB Flash and USB Hard Drives Supported \n8\" LCD Display \n720p and 1080i Video Support \n720p and 1080i Out to HDTV \nEnjoy Video, Music, Photo, Text \nHigh-Capacity Rechargeable Battery ',0,'Aluratek',9,'1081.0',0,0,129.99,79.99,'product/mp3players_81.png','product/details/mp3players_81.png','2011-12-03','2011-12-03'),(82,'Aluratek\nvNote Personal Video/Audio Recorder ','Simple Device for Video/Audio Notes Single-Button Recording & Playback Records Full 640 x 480 Video Accepts (1) SD Card for Up to 32 GB 32 MB Internal Storage Built-In Magnet for Fridge Mounting Handy 2.9\"-Square Shape ',0,'Aluratek',9,'1082.0',0,1,35.24,33.22,'product/mp3players_82.png','product/details/mp3players_82.png','2011-12-03','2011-12-03'),(83,'Apple\n160GB iPod classic (Black, Current Model)','2.5\" LED Backlit LCD Display \nAudio, Video, Games, Photos \nApplications, Audiobooks, Podcasts Genius Feature \nClick Wheel Navigation \nBuilt-In Lithium-Ion Battery \n36 Hour Audio Battery Life \nMac & Windows Compatibility \nEarphones Included ',0,'Apple',9,'1083.0',0,0,229.95,200.99,'product/mp3players_83.png','product/details/mp3players_83.png','2011-12-03','2011-12-03'),(84,'Apple\n32GB iPod touch (Current Model) \n','4th Generation 3.5\" \nMulti-Touch Retina Display \nA4 Processor \nFront and Rear Cameras with FaceTime \nHD Video Recording and Editing \nGame Center \nWiFi Nike+iPod \nMac and PC Compatible \nStereo Earbuds',0,'Apple',99,'1084.0',0,0,274.99,201.99,'product/mp3players_84.png','product/details/mp3players_84.png','2011-12-03','2011-12-03'),(85,'Apple\n32GB iPod touch (White) (4th Generation) ','Unique White 32GB 4th Gen iPod touch \n3.5\" Multi-Touch Retina Display A4 Processor \nFront and Rear Cameras with FaceTime \nHD Video Recording and Editing \nGame Center WiFi \nNike+iPod \nMac and PC Compatible \nStereo Earbuds ',0,'Apple',9,'1085.0',0,1,274.99,201.99,'product/mp3players_85.png','product/details/mp3players_85.png','2011-12-03','2011-12-03'),(86,'Apple\n32GB Refurbished iPod touch (Current Model) ','Fourth Generation with Built-In WiFi \nMulti-Touch 3.5\" Retina Display \nA4 Processor & 32GB Storage Capacity \nFront & Rear Cameras with FaceTime \nHD Video Recording & Editing \nGame Center, Email & Safari Web Browser \nStereo Earbuds, Email Access & Nike+iPod \nFull Virtual QWERTY Style Soft Keyboard \nMac & PC Compatible ',0,'Apple',9,'1086.0',0,0,344.54,302.45,'product/mp3players_86.png','product/details/mp3players_86.png','2011-12-03','2011-12-03'),(87,'Archos\n15 Vision MP3 Player','4GB Flash Memory 1.5\" LCD Display \nMusic, Photos, Video, Text FM Tuner \nVoice and FM Radio Recording Built-In Lithium-Ion Battery \n10 Hour Battery Life Windows and Mac Compatible \nEarphones Included ',0,'MP3Players',9,'1087.0',0,1,25.85,22.85,'product/mp3players_87.png','product/details/mp3players_87.png','2011-12-03','2011-12-03'),(88,'Archos\n15b Vision (4GB) ','Portable 4GB Media Player & Viewer \nColor TFT 1.5\" Display w/ 16,384 Pixels \nPlay Music, View Photos & Watch Video \nStore Up to 2000 Songs & 20 hrs of Video \nView & Store Thousands of Photos \nVoice Recorder w/ Built-In Microphone \nAdjustable Sound Equalizer \nBattery Plays Up to 22 hrs of Music \nUSB 2.0 High-Speed \nComputer Interface Compatible w/ Mac, Windows & Linux',0,'MP3Players',9,'1088.0',0,0,25.97,25.97,'product/mp3players_88.png','product/details/mp3players_88.png','2011-12-03','2011-12-03'),(89,'Archos\n35 Vision ','Portable 8GB Media Player & Viewer \nColor TFT 3.5\" Touch Screen Display \nPlay Back Video In Up to 1080p Full HD \nPlay Music, View Photos & Watch Video \nStore Up to 4000 Songs & 40 hrs of Video \nView & Store Thousands of Photos HDMI Output to HDTV \nVoice Recorder w/ Built-In Microphone \nAdjustable Sound Equalizer \nUSB 2.0 High-Speed Computer Interface ',0,'MP3Players',9,'1089.0',0,0,82.48,80,'product/mp3players_89.png','product/details/mp3players_89.png','2011-12-03','2011-12-03'),(90,'Califone\n8100 MP3 Player/Recorder with 512MB','Records up to 18 Hours \nSlot for SD Card \nInternal Microphone ',0,'MP3Players',9,'1090.0',0,0,94.95,89.99,'product/mp3players_90.png','product/details/mp3players_90.png','2011-12-03','2011-12-03'),(91,'Bracket1\nAccessory Rain Cover ','Protects Bracket 1 Mounted Gear from Rain ',0,'Bracket1',10,'1091.0',0,1,34.95,30.99,'product/accessories_91.png','product/details/accessories_91.png','2011-12-03','2011-12-03'),(92,'Pro Video Accessories\nBNC FEMALE to DIN 1.0/2.3 RG179 / 1\'','Designed for Anton/Bauer Gold Mount \nStandard 1/4\"-20 Holes for Accessories \nBattery Weight Used as Counterbalance \nMounts up to 2 BP-U Battery Plates \nCompatible with Nano Flash',0,'Pro Video Accessories',10,'1092.0',0,0,14.99,13.99,'product/accessories_92.png','product/details/accessories_92.png','2011-12-03','2011-12-03'),(93,'Pro Video Accessories\nBNC FEMALE to DIN 1.0/2.3 RG59 / 3\'','Designed for Anton/Bauer Gold Mount \nStandard 1/4\"-20 Holes for Accessories \nBattery Weight Used as Counterbalance \nMounts up to 2 BP-U Battery Plates \nCompatible with Nano Flash',0,'Pro Video Accessories',10,'1093.0',0,1,19.99,15.99,'product/accessories_93.png','product/details/accessories_93.png','2011-12-03','2011-12-03'),(94,'DM-Accessories\nPivoting Back Plate Upgrade for EX3-SHLD','Designed for Anton/Bauer Gold Mount \nStandard 1/4\"-20 Holes for Accessories \nBattery Weight Used as Counterbalance \nMounts up to 2 BP-U Battery Plates \nCompatible with Nano Flash',0,'DM-Accessories',10,'1094.0',0,0,65.95,60.99,'product/accessories_94.png','product/details/accessories_94.png','2011-12-03','2011-12-03'),(95,'Pearstone\nAccessory Shoe Adapter with 1/4\"-20 Stud Connector','Pearstone\nAccessory Shoe Adapter with 1/4\"-20 Stud Connector',0,'Pearstone',10,'1095.0',0,1,34.95,34.95,'product/accessories_95.png','product/details/accessories_95.png','2011-12-03','2011-12-03'),(96,'Vello\nUniversal Accessory Shoe Mount With 1/4\" Screw and Knob ','Fits Variety of Accessory Shoes \nIncludes 1/4\" Screw, Low-Profile Knob ',0,'Vello',10,'1096.0',0,0,8.95,7.95,'product/accessories_96.png','product/details/accessories_96.png','2011-12-03','2011-12-03'),(97,'Lowepro\nApex 60 AW All-Weather Camera Pouch','Apex 60 AW All-Weather Camera Pouch - for Ultra-Compact Camera or Ultra-Compact Video Camera and Accessories (Black)',0,'Lowepro',10,'1097.0',0,0,23.95,23.95,'product/accessories_97.png','product/details/accessories_97.png','2011-12-03','2011-12-03'),(98,'Sony\nLCS-AMSC30 Soft Carrying Case','LCS-AMSC30 Soft Carrying Case - for Sony DSLR-A100 Digital Camera with Accessories',0,'Sony',10,'1098.0',0,1,68.95,58.95,'product/accessories_98.png','product/details/accessories_98.png','2011-12-03','2011-12-03'),(99,' Domke\nF-903 Medium Pouch','\nCotton Canvas Pouch \nFront pocket \nInterior Pocket \nTwo Media Pockets \nRemovable Shoulder Strap   ',0,'Domke',10,'1099.0',0,1,9,9,'product/accessories_99.png','product/details/accessories_99.png','2011-12-03','2011-12-03'),(100,'Quantum Instruments\n1.5\' Accessory Cable ','1.5\' Accessory Cable to Qflash & Unimod Accessory Converter ',0,'Quantum Instruments',10,'1100.0',0,0,36,32.99,'product/accessories_100.png','product/details/accessories_100.png','2011-12-03','2011-12-03');

-- --------------------------------------------------------

--
-- Table structure for table `eshop_reviews`
--

CREATE TABLE IF NOT EXISTS `eshop_reviews` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pd_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `rating` int(10) unsigned NOT NULL,
  `comment` varchar(4000) NOT NULL,
  `comment_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=56 ;

--
-- Dumping data for table `eshop_reviews`
--

INSERT INTO `eshop_reviews` (`id`, `pd_id`, `user_id`, `rating`, `comment`, `comment_date`) VALUES
(1, 1, 1, 1, 'Many advanced controls for tweaking picture quality, ISF calibration ready, as LG put it. This is a huge plus for an entry level TV ', '2010-10-18 20:00:00'),
(2, 1, 2, 2, 'Excellent picture quality and color accuracy, especially after being properly calibrated ', '2010-10-10 00:00:00'),
(3, 1, 13, 3, 'Low power consumption for a plasma TV, has built-in smart power-saving feature. After being calibrated, it''s less than 100 watts in 2D mode which is very low for a plasma TV and within the territory of LCD TVs. ', '2010-10-10 00:00:00'),
(4, 1, 4, 1, 'A small annoying issue I found when I tried to calibrate the TV. No big deal but still annoying. I will explain later. ', '2010-10-11 00:00:00'),
(5, 2, 1, 4, 'The LED3DTV4086s wide connectivity, which includes three HDMI connections, enables one-cable connection of your A/V components.', '2010-10-10 00:00:00'),
(6, 2, 2, 2, 'The LED3DTV4086s wide connectivity, which includes three HDMI connections, enables one-cable connection of your A/V components.', '2010-10-10 00:00:00'),
(7, 2, 13, 3, 'The LED3DTV4086s wide connectivity, which includes three HDMI connections, enables one-cable connection of your A/V components.', '2010-10-10 00:00:00'),
(8, 2, 4, 1, 'The LED3DTV4086s wide connectivity, which includes three HDMI connections, enables one-cable connection of your A/V components.', '2010-10-10 00:00:00'),
(9, 3, 1, 1, 'LED technology for a thin and attractive design ', '2010-10-10 00:00:00'),
(10, 3, 2, 2, 'Three high speed HDMI 1.4 connectors support the newest devices (and all existing devices) ', '2010-10-10 00:00:00'),
(11, 3, 13, 1, 'Active shutter 3D glasses included', '2010-10-10 00:00:00'),
(12, 2, 11, 3, 'Enjoy video in stunning high-resolution 1080p.', '2010-10-18 20:00:00'),
(13, 2, 10, 3, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2010-10-18 20:00:00'),
(14, 2, 11, 3, 'Enjoy video in stunning high-resolution 1080p.', '2010-10-18 20:00:00'),
(15, 2, 10, 3, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2010-10-18 20:00:00'),
(16, 2, 11, 3, 'Enjoy video in stunning high-resolution 1080p.', '2010-10-18 20:00:00'),
(17, 2, 10, 3, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2010-10-18 20:00:00'),
(18, 2, 11, 3, 'Enjoy video in stunning high-resolution 1080p.', '2010-10-18 20:00:00'),
(19, 2, 10, 3, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2010-10-18 20:00:00'),
(20, 2, 11, 3, 'Enjoy video in stunning high-resolution 1080p.', '2010-10-18 20:00:00'),
(21, 2, 10, 3, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2010-10-18 20:00:00'),
(22, 2, 11, 2, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(23, 2, 10, 2, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(24, 2, 11, 2, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(25, 2, 10, 2, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(26, 2, 11, 2, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(27, 2, 10, 2, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(28, 2, 11, 2, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(29, 2, 10, 2, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(30, 2, 11, 5, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(31, 2, 10, 5, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(32, 2, 11, 5, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(33, 2, 10, 5, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(34, 2, 11, 5, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(35, 2, 10, 5, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(36, 2, 11, 5, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(37, 2, 10, 5, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(38, 2, 11, 4, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(39, 2, 10, 4, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(40, 2, 11, 1, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(41, 2, 10, 1, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(42, 2, 11, 1, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(43, 2, 10, 1, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(44, 2, 11, 1, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(45, 2, 10, 1, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(46, 2, 11, 1, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(47, 2, 10, 1, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(48, 2, 11, 1, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(49, 2, 10, 1, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(50, 2, 11, 1, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(51, 2, 10, 1, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(52, 2, 11, 1, 'Enjoy video in stunning high-resolution 1080p.', '2012-01-12 16:48:07'),
(53, 2, 10, 1, 'Advanced 120Hz motion engine generates lightning fast video while reducing motion blur.', '2012-01-12 16:48:20'),
(54, 6, 12, 3, 'This HDTV was designed for both professional and home entertainment enthusiasts with the capability to deliver a full, clear, and vivid picture.', '2010-12-26 00:00:00'),
(55, 32, 12, 2, 'Pearstone B&H Kit Vocal Microphone Accessory Bundle.', '2010-12-26 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `eshop_shop_configurations`
--

CREATE TABLE IF NOT EXISTS `eshop_shop_configurations` (
  `sc_name` varchar(255) NOT NULL,
  `sc_address` varchar(255) DEFAULT NULL,
  `sc_email` varchar(255) DEFAULT NULL,
  `sc_phone` int(11) DEFAULT NULL,
  `sc_shipping_cost` double DEFAULT NULL,
  `sc_currency` int(11) DEFAULT NULL,
  PRIMARY KEY (`sc_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eshop_shop_configurations`
--


-- --------------------------------------------------------

--
-- Table structure for table `eshop_users`
--

CREATE TABLE IF NOT EXISTS `eshop_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(45) NOT NULL,
  `company` varchar(45) DEFAULT NULL,
  `address_type` varchar(10) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `zipcode` varchar(45) DEFAULT NULL,
  `phone` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `eshop_users`
--

INSERT INTO `eshop_users` (`id`, `first_name`, `last_name`, `email`, `password`, `company`, `address_type`, `address1`, `address2`, `city`, `state`, `country`, `zipcode`, `phone`) VALUES
(0, 'Anonymous', 'Anonymous', '', '', NULL, '', NULL, NULL, '', '', '', '', ''),
(1, 'John', 'Anderson', 'john@phresco.com', 'john', 'Phresco', 'test', 'test', 'test', 'test', 'test', 'test', '12345', '12345'),
(2, 'Alex', 'Martin', 'alexmartin@gmail.com', 'alexgarry', 'Wincorp', '123,West s', '', '', 'NJ', 'NJ', 'US', '12345', '12345'),
(4, 'Lijo', 'Carrey', 'lijocarrey@gmail.com', 'lijocarrey', 'Phresco', 'test', 'address', 'address', 'city', 'state', 'india', '12345', '12345'),
(10, 'Mary', 'Anderson', 'maryanderson@gmail.com', 'maryanderson', 'Wirsrer', '23,West st', NULL, NULL, 'NY', 'NY', 'US', '9876', ''),
(11, 'Nicole', 'Kidman', 'nicolekidman@testmailcom', 'nicolekidman', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(12, 'Ray', 'Anthony', 'rayanthony@hotmail.com', 'rayanthony', 'Syscom', 'North stre', NULL, NULL, NULL, NULL, NULL, NULL, ''),
(13, 'Robert', 'Arthur', 'robertarthur@ymail.com', 'robertarthur', '32', 'wellington', NULL, NULL, NULL, NULL, NULL, NULL, '');
