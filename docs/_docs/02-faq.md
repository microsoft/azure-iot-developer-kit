---
title: "Frequently asked questions"
permalink: /docs/faq/
excerpt: "Frequently asked questions"
last_modified_at: 2017-05-05T10:16:34-04:00
---

{% include toc icon="columns" %}



**Notice:** [Azure IoT Workbench](https://aka.ms/iot-workbench) is the new tool for developing on IoT DevKit. If you are looking for FAQ for old experiences by using the installer, you can try the [old one]({{"/docs/legacy/faq" | absolute_url}}) .
{: .notice--warning}


## General

### GDPR and IoT DevKit

Microsoft collects data to operate effectively and provide you the best experiences. 
Participation is voluntary and when you choose to participate, your device automatically sends data to Microsoft about how you use the IoT DevKit.

If you choose to participate, you can stop at any time as described [here](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting).



**Notice:** [Azure IoT Workbench](https://aka.ms/iot-workbench) is the tool for developing on IoT DevKit. If you are looking for disable the data collection for old installation package, please follow the steps in [this document]({{"/docs/legacy/disable-data-collection" | absolute_url}}) .
{: .notice--warning}



### Is the IoT DevKit Microsoft hardware?

No. The hardware manufacturer is [MXChip](http://www.mxchip.com), an established player for IoT hardware. Through a partnership between MXChip and Microsoft, we rapidly iterated on the design and engineering of an Arduino compatible board with rich pre-installed sensors. Microsoft's goal is to boost productivity for developers creating and prototyping IoT applications with awesome Visual Studio Code tooling that leverages the power of Microsoft Azure.

### Why Arduino compatible?

Based on industry data and customer research, we believe Arduino has a powerful and active community among professional makers. We want to be part of this strong community rather than building something from scratch.

### Are you going to open-source the product?

Yes, we open source the firmware, toolchains, and all samples. Also, the board itself will be [open-source hardware](https://www.arduino.cc/en/Main/FAQ#toc3). That means we will release all original hardware design files.

Our plan is to do that as soon as we reach a stage where the entire framework is stable.

### Where can I buy it?

You can purchase the kit from our hardware partner's product page: [https://aka.ms/iot-devkit-purchase](https://aka.ms/iot-devkit-purchase)

## Installation

### Failed to install Arduino Package for IoT DevKit

Sometimes, whatever in Arduino IDE or VS Code, people get failed to install the MXChip IoT DevKit package and have bellowing error:

![Smartscreen]({{"/assets/images/faq/crc.png" | absolute_url }})

This might be a cache issue both on local Arduino cache and remote CDN cache.
Please clean the local cache first:
1.	Uninstall the IoT DevKit package, whatever in Arduino IDE or VS Code.
2.	Manually remove the cache folder:
   * Windows: %localappdata%/Arduino15/staging/packages
   * macOS: ~/Library/Arduino15/staging
3. Then re-install the package.

If it's still not work please contact [us](https://gitter.im/Microsoft/azure-iot-developer-kit){:target="_blank"} for support.

### Windows Defender SmartScreen prevented an unrecognized app error.

Sometimes SmartScreen prevents applications you know are not bad – for example, it’s a CMD or VBS script.

![Smartscreen]({{"/assets/images/faq/smartscreen.png" | absolute_url }})

To resolve, click on the **'More info'** link and then click the **'Run anyway'** button. You can check this [knowledge base article](https://www.itsupportguides.com/knowledge-base/windows-10/windows-defender-smartscreen-prevented-an-unrecognized-app-error/) for more details.

## Wi-Fi Configuration

### Cannot connect to a Wi-Fi hotspot.

This may be because the Wi-Fi network needs extra certification (other than WPA/WPA2) or open Wi-Fi requires a captive portal to log in such as Starbucks Wi-Fi.

To resolve, try to use Wi-Fi with normal WPA/WPA2 authentication.

### Cannot connect to 5 GHz Wi-Fi.

Currently, IoT DevKit only can connect to 2.4 GHz Wi-Fi, 5 GHz is not supported due to hardware restrictions.

## Cloud Provisioning

### Cannot log in Azure as access token expired.

Due to a previous Azure login, your access token may have expired. 

To fix, delete the web browser history that includes login data and run the provisioning task again. Alternatively, you can try to log in to Azure manually by launching Command Prompt and running `az login`.

### Page hangs when log in Azure.

This issue can occur if you have logged in multiple Azure subscriptions in the browser.

To resolve the issue, please clear the browser's cache and cookies. 

For more details please check [I can't sign in to manage my Azure subscription](https://docs.microsoft.com/en-us/azure/billing/billing-cannot-login-subscription).

## Development

### Visual Studio Code cannot find Arduino IDE.

Occasionally, when you launch Visual Studio Code, you are prompted with an error message that it cannot find the Arduino IDE or related board package.

To resolve, close Visual Studio Code, then launches the actual Arduino IDE once. Subsequently, when you open Visual Studio Code it should correctly locate the Arduino IDE path.

### Additional warnings during compilation.

In certain environment, lots of warnings message pops up in the VS Code OUTPUT windows when you invoke `Arduino Verify`, `Arduino Upload` or `task device-upload` to compile the project.

It is caused by the incorrect warning handling between Visual Studio Code Arduino extension and Arduino IDE. To solve this problem, the work around is to uninstall Arduino IDE from your local system and install the latest version of [Arduino IDE](https://www.arduino.cc/en/Main/Software).

### Compilation error for Azure Function.

When the mini solution of Shake-Shake and IoT DevKit Translator do not work, in Azure portal, you got the following error for the Azure Function you deployed:

```
2017-11-15T03:24:23.426 Function compilation error
2017-11-15T03:24:23.426 run.csx(11,23): error CS0234: The type or namespace name 'Devices' does not exist in the namespace 'Microsoft.Azure' (are you missing an assembly reference?)
2017-11-15T03:24:23.426 run.csx(95,15): error CS0246: The type or namespace name 'ServiceClient' could not be found (are you missing a using directive or an assembly reference?)
2017-11-15T03:24:23.426 run.csx(95,45): error CS0103: The name 'ServiceClient' does not exist in the current context
```
And you could not find porject.lock.json in files of the Azure Function. This is caused by a new  [Azure Function issue](https://github.com/Azure/Azure-Functions/issues/590). 

Here is the workaround:
1. In `Platform features` tab of the deployed Function App, click `Application settings`.
2. Add a new Application setting named `WEBSITE_USE_PLACEHOLDER` with value 0.
3. Save and Restart the Function App.

### Get "Error Presented: #include errors detected" when opening a project

The error message is **Error Presented: #include errors detected. Please update your includePath.**

This is an issue coming from the [Microsoft C/C++ extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools).
Switch the IntelliSense engine to "**Tag Parser**" can workaround this issue:

* Press F1 and key in 'settings' and select the `Preference: Open User Settings`

 ![vsc-intellisense-issue-1]({{"/assets/images/faq/vsc-intellisense-1.png" | absolute_url }})

* Set the IntelliSense engine to "**Tag Parser**"

 ![vsc-intellisense-issue-2]({{"/assets/images/faq/vsc-intellisense-2.png" | absolute_url }})

* Press F1 and key in 'cpp' and select the `C/Cpp: Edit Configurations`

 ![vsc-intellisense-issue-3]({{"/assets/images/faq/vsc-intellisense-3.png" | absolute_url }})

* Open the **c_cpp_properties.json** file, add the path of Arduino package into the include  path

 ![vsc-intellisense-issue-4]({{"/assets/images/faq/vsc-intellisense-4.png" | absolute_url }})

You can get more detail from [C/C++ for VS Code](https://code.visualstudio.com/docs/languages/cpp). 

### Arduino upload return Error: STLinkMethod: Invalid option for "upload_method" option for board "MXCHIP_AZ3166" 

In Visual Studio Code, when trying to invoke "Arduion:Board Config" to configure MXChip board ,the Upload Method selection wasn’t visible:

![upload_method invisible]({{"/assets/images/faq/upload_method_invisible.png" | absolute_url }})

This is because Arduino configuration for curret project is not set correctly.
To solve this problem, in `.vsode\arduino.json`, replace `"configuration": "upload_method=STLinkMethod"` to `"configuration": "upload_method=OpenOCDMethod"`.


{% include social-share.html %}

[![Back to Top]({{"/assets/images/faq-back-to-top.png" | absolute_url }})](#){: .faq-back-to-top}
