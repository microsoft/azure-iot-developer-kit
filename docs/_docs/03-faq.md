---
title: "Frequently Asked Questions"
permalink: /docs/faq/
excerpt: "Frequently Asked Questions"
last_modified_at: 2017-05-05T10:16:34-04:00
---

## Installation

### Command window seems stuck and there is no progress updated for a while

This could probably due to you put the Windows command window into "Selection" mode. To verify it, check the command window title:

![getting-started-faq-select]({{"/assets/images/getting-started-faq-select.png" | absolute_url }})

If you see **select** on the title, this means you are in Selection mode. It will prevent the refresh of the output. And that is why you cannot see the latest progress.

To solve it, press any key within the command window area and you will see the **select** disappear on the title.

### Windows Defender SmartScreen prevented an unrecognized app error

![getting-started-faq-select]({{"/assets/images/getting-started-faq-smartscreen.png" | absolute_url }})

Sometimes SmartScreen will prevent applications you know are not bad – for example, it’s a CMD or VBS script.

To solve it, click on the **'More info'** link and then click the **'Run anyway'** button. You can check this [knowledge base article](https://www.itsupportguides.com/knowledge-base/windows-10/windows-defender-smartscreen-prevented-an-unrecognized-app-error/){:target="_blank"} for more details.

## WiFi Configuration

### Cannot connect to some WiFi hotspot

This is probably due to you are connecting to a WiFi that needs extra certification other than WPA/WPA2 or open WiFi requires captive portal for logging in such as WiFi in Starbucks.

To solve it, try use WiFi with normal WPA/WPA2 authentication.

### Cannot connect to 5GHz WiFi

Currently DevKit only can connect to 2.4GHz WiFi, 5GHz is not supported due to hardware restrictions.

## Cloud Provision

### Cannot log in Azure as access token expired

When you previous have log in Azure, the access token may expired. Normally it will be handled by provision task.

To solve it, delete the web browser history that includes the login data and run provision task again.

### Creating new Azure IoT Hub fails

You may encounter the error message as the screen below:

![getting-started-faq-iothub]({{"/assets/images/getting-started-faq-iothub.png" | absolute_url }})

This is due to IoT Hub only allows [one free hub per Azure subscription](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal){:target="_blank"}. In this case, you may select the existing IoT Hub instead of trying to create a new one.

## Development

### Terminal text misaligned in VS Code

This is a known bug for latest version VS Code ([#19665](https://github.com/Microsoft/vscode/issues/19665){:target="_blank"}) if you are using Powershell or CMD in terminal.

To solve it, there is a [workaround](https://github.com/Microsoft/vscode/issues/19665#issuecomment-294536524){:target="_blank"}. Add this snippet into VS Code settings file:

```json
"terminal.integrated.shellArgs.windows": [
  "-NoExit",
  "/c",
  "chcp.com 65001"
]
```

