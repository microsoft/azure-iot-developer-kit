---
title: "Frequently Asked Questions"
permalink: /docs/faq/
excerpt: "Frequently Asked Questions"
last_modified_at: 2017-05-05T10:16:34-04:00
---

{% include toc icon="columns" %}

## General

### Is the DevKit Microsoft hardware?

No. The hardware manufacturer is [MXChip](http://www.mxchip.com){:target="_blank"}, an established player for IoT hardware. Through a partnership between MXChip and Microsoft, we rapidly iterated on the design and engineering of an Arduino compatible board with rich pre-installed sensors. Microsoft's goal is to boost productivity for developers creating and prototyping IoT applications with awesome Visual Studio Code tooling that leverages the power of Microsoft Azure.

### Why Arduino compatible?

Based on industry data and customer research, we believe Arduino has a powerful and active community among professional makers. We want to be part of this strong community rather than building something from scratch.

### Are you going to open-source the product?

Yes, we open source the firmware, toolchains, and all samples. Also, the board itself will be [open-source hardware](https://www.arduino.cc/en/Main/FAQ#toc3){:target="_blank"}. That means we will release all original hardware design files.

Our plan is to do that as soon as we reach a stage where the entire framework is stable.

### Where can I buy it?

You can purchase the kit from our hardware partner's product page: [https://aka.ms/iot-devkit-purchase](https://aka.ms/iot-devkit-purchase){:target="_blank"}

## Installation

### Command window seems stuck and there is no progress update for a while.

This could be due to putting the Windows command window in "Selection" mode. To verify, check the command window title:

![getting-started-faq-select]({{"/assets/images/getting-started-faq-select.png" | absolute_url }})

If you see **select** on the title, this means you are in Selection mode. It prevents refresh of the output, that is why you cannot see any progress.

To resolve, press any key within the command window area and you see **select** disappear in the title.

### Windows Defender SmartScreen prevented an unrecognized app error.

![getting-started-faq-select]({{"/assets/images/getting-started-faq-smartscreen.png" | absolute_url }})

Sometimes SmartScreen prevents applications you know are not bad – for example, it’s a CMD or VBS script.

To resolve, click on the **'More info'** link and then click the **'Run anyway'** button. You can check this [knowledge base article](https://www.itsupportguides.com/knowledge-base/windows-10/windows-defender-smartscreen-prevented-an-unrecognized-app-error/){:target="_blank"} for more details.

## Wi-Fi Configuration

### Cannot connect to a Wi-Fi hotspot.

This may be because the Wi-Fi network needs extra certification (other than WPA/WPA2) or open Wi-Fi requires a captive portal to log in such as Starbucks Wi-Fi.

To resolve, try to use Wi-Fi with normal WPA/WPA2 authentication.

### Cannot connect to 5 GHz Wi-Fi.

Currently, DevKit only can connect to 2.4 GHz Wi-Fi, 5 GHz is not supported due to hardware restrictions.

## Cloud Provisioning

### Cannot log in Azure as access token expired.

Due to a previous Azure login, your access token may have expired. 

To fix, delete the web browser history that includes login data and run the provisioning task again. Alternatively, you can try to log in to Azure manually by launching Command Prompt and running `az login`.

### Creating new Azure IoT Hub fails

You may encounter the error message as the screen below:

![getting-started-faq-iothub]({{"/assets/images/getting-started-faq-iothub.png" | absolute_url }})

This is because Azure IoT Hub only allows [one free hub per Azure subscription](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal){:target="_blank"}. In this case, you may select the existing IoT Hub instead of trying to create a new one.

## Development

### Visual Studio Code cannot find Arduino IDE

Occasionally, when you launch Visual Studio Code, you are prompted with an error message that it cannot find the Arduino IDE or related board package.

To resolve, close Visual Studio Code, then launches the actual Arduino IDE once. Subsequently, when you open Visual Studio Code it should correctly locate the Arduino IDE path.

### Terminal text misaligned in Visual Studio Code.

This is a known bug for the latest version of Visual Studio Code ([#19665](https://github.com/Microsoft/vscode/issues/19665){:target="_blank"}) if you are using Powershell or CMD in the terminal.

To resolve, there is a known [workaround](https://github.com/Microsoft/vscode/issues/19665#issuecomment-294536524){:target="_blank"}. Add this snippet to VS Code settings file:

```json
"terminal.integrated.shellArgs.windows": [
  "-NoExit",
  "/c",
  "chcp.com 65001"
]
```

[![Back to Top]({{"/assets/images/faq-back-to-top.png" | absolute_url }})](#){: .faq-back-to-top}
