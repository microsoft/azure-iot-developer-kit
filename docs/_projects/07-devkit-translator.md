---
title: "DevKit Translator"
permalink: /docs/projects/devkit-translator/
redirect_to:
  - https://github.com/Microsoft/vscode-iot-workbench/blob/master/docs/iot-devkit/devkit-translator.md
excerpt: "Turn DevKit as a translator by using Bing Speech Translator service."
PreviousVersionText: "Previous version"
PreviousVersionUrl: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-arduino-iot-devkit-az3166-translator
header:
  overlay_image: /assets/images/projects-devkit-translator.jpg
  overlay_full: true
  teaser: /assets/images/projects-devkit-translator-th.jpg
layouts_gallery:
  - url: /assets/images/mini-solution/devkit-translator/result-1.jpg
    image_path: /assets/images/mini-solution/devkit-translator/result-1.jpg
    alt: "Arduino application initializing"
  - url: /assets/images/mini-solution/devkit-translator/result-2.jpg
    image_path: /assets/images/mini-solution/devkit-translator/result-2.jpg
    alt: "DevKit Initialized"
  - url: /assets/images/mini-solution/devkit-translator/result-3.jpg
    image_path: /assets/images/mini-solution/devkit-translator/result-3.jpg
    alt: "Choose source language-1"
  - url: /assets/images/mini-solution/devkit-translator/result-4.jpg
    image_path: /assets/images/mini-solution/devkit-translator/result-4.jpg
    alt: "Choose source language-2"
  - url: /assets/images/mini-solution/devkit-translator/result-5.jpg
    image_path: /assets/images/mini-solution/devkit-translator/result-5.jpg
    alt:  "Ready to talk"
  - url: /assets/images/mini-solution/devkit-translator/result-6.jpg
    image_path: /assets/images/mini-solution/devkit-translator/result-6.jpg
    alt:  "Translation"
icons:
  - url: /assets/images/icon-iot-hub.svg
    target: https://azure.microsoft.com/en-us/services/iot-hub/
    title: IoT Hub
  - url: /assets/images/icon-azure-functions.svg
    target: https://azure.microsoft.com/en-us/services/functions/
    title: Azure Functions
  - url: /assets/images/icon-cognitive-services.svg
    target: https://azure.microsoft.com/en-us/services/cognitive-services/?v=17.29
    title: Cognitive Services
difficulty: MEDIUM
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2017-07-17
---

In this project, you learn how to use DevKit as a translator. The app records your voice and translates it to English text shown on the DevKit screen.

{% include toc icon="columns" %}

## What you need

Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }}) to:

* Have your DevKit connected to Wi-Fi
* Prepare the development environment

An active Azure subscription. If you do not have one, you can register via one of the methods:

* Activate a [free 30-day trial Microsoft Azure account](https://azure.microsoft.com/en-us/free/){:target="_blank"}
* Claim your [Azure credit](https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/){:target="_blank"} if you are MSDN or Visual Studio subscriber

## Step 1. Open the project folder

### A. Start VS Code

- Make sure your DevKit is not connected to your PC.
- Start VS Code
- Connect the DevKit to your computer.

VS Code automatically finds the DevKit and opens an introduction page:

![Introduction page]({{"/assets/images/mini-solution/vscode_start.png" | absolute_url }})

**Notice:** Occasionally, when you launch VS Code, you may be prompted with error saying that the Arduino IDE or related board package cannot be found. If this happens, close VS Code, launch the Arduino IDE once again, and VS Code should locate the Arduino IDE path correctly.
{: .notice--warning}

### B. Open the Arduino Examples folder

Expand left side **ARDUINO EXAMPLES** section, browse to **Examples for MXCHIP AZ3166 > AzureIoT**, and select **DevKitTranslator**. This will open a new VS Code window with the DEVKITTRANSLATOR project folder in it.

![mini-solution-examples]({{"/assets/images/mini-solution/vscode_examples.png" | absolute_url }})

If you happen to close the pane, you can reopen it. Use `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to open the command palette, type **Arduino**, and then find and select **Arduino: Examples**.

## Step 2. Provision Azure services

In the solution window, run the cloud-provisioniong task by typing `Ctrl+P` (macOS: `Cmd+P`) and entering `task cloud-provision` in the text box:

In the VS Code terminal, an interactive command line will guide you through provisioning all required Azure services:

![mini-solution-provision-sub]({{"/assets/images/mini-solution/devkit-translator/cloud-provision.png" | absolute_url }})

**Notice:** If the page hangs in the loading status when trying to sign in to Azure, please check this [FAQ steps]({{"/docs/faq/#page-hangs-when-log-in-azure" | absolute_url}}) to resolve this issue. 
{: .notice--warning}

## Step 3. Deploy Azure Functions

Use `Ctrl+P` (macOS: `Cmd+P`) to run `task cloud-deploy` to deploy the Azure Functions code. This process usually takes 2 to 5 minutes to complete:

![mini-solution-deploy]({{"/assets/images/mini-solution/devkit-translator/cloud-deploy.png" | absolute_url }})

After Azure Function deploys successfully, fill in the azure_config.h file with function app name. You can navigate to [Azure portal](https://portal.azure.com/){:target="_blank"} to find it:

![mini-solution-function-app]({{"/assets/images/mini-solution/devkit-translator/azure-function.png" | absolute_url }})

**Notice:** If the Azure Function does not work properly, please check this [FAQ steps]({{"/docs/faq/#compilation-error-for-azure-function" | absolute_url}}) to resolve this issue.
{: .notice--warning}

## Step 4. Build and upload the device code

{% include switch.html content = page.variable %}

### Windows

1. Use `Ctrl+P` to run `task config-device-connection`.

2. The terminal will ask you whether you want to use connection string that retrieves from `task cloud-provision` step. You could also input your own device connection string by clicking 'Create New...'

3. The terminal prompts you to enter configuration mode. To do so, hold down button A, then push and release the reset button. The screen displays the DevKit id and 'Configuration'.
  ![Verification and upload of the Arduino sketch]({{"/assets/images/mini-solution/devkit-translator/config-device-connection.png" | absolute_url }})

4. After `task config-device-connection` finished, click `F1` to load VS Code commands and select `Arduino: Upload`, then VS Code starts verifying and uploading the Arduino sketch:
  ![Verification and upload of the Arduino sketch]({{"/assets/images/mini-solution/devkit-translator/arduino-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you may get an "Error: AZ3166: Unknown package" eror message. This occurs when the board package index is not refreshed correctly. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to resolve this issue.
{: .notice--warning}

### macOS

1. Put DevKit into configuration mode:
  Hold down button A, then push and release the reset button. The screen displays 'Configuration'.

2. Use `Cmd+P` to run `task config-device-connection`.

3. The terminal will ask you whether you want to use connection string that retrieves from `task cloud-provision` step. You could also input your own device connection string by clicking 'Create New...'
  ![device-upload]({{"/assets/images/mini-solution/devkit-translator/config-device-connection.png" | absolute_url }})

4. After `task config-device-connection` finished, click `Cmd + shift + p` to load VS Code commands and select `Arduino: Upload`, then VS Code starts verifying and uploading the Arduino sketch:
  ![device-upload]({{"/assets/images/mini-solution/devkit-translator/arduino-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you may get an "Error: AZ3166: Unknown package" error message. This is occurs when the board package index is not refreshed correctly. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to resolve this issue.
{: .notice--warning}

## Test the project

After app initialization, follow the instructions on the DevKit screen.
The default source language is Chinese.

To translate Chinese to English:

- Simply press and hold button B while speaking, then release button B to initiate the translation. Several seconds later, the translation will be shown on the screen.

To select a source language other than Chinese:

- Press button A to enter setup mode.
- Press button B to scroll all supported source languages.
- Press button A to confirm your choice of source language.
- Press and hold button B while speaking, then release button B to initiate the translation. Several seconds later, the translation will be shown on the screen.

{% include gallery id="layouts_gallery" caption="Translate as you go" %}

- Press button A and B to scroll and select the source language.
- Press button B to talk, release to send the voice and get the translation text

## How it works

![mini-solution-voice-to-tweet-diagram]({{"/assets/images/mini-solution/devkit-translator/diagram.png" | absolute_url }})

The Arduino sketch records your voice then posts an HTTP request to trigger Azure Functions. Azure Functions calls the cognitive service speech translator API to do the translation. After Azure Functions gets the translation text, it sends a C2D message to the device. Then the translation is displayed on the screen.

## Customize device ID

You can customize device ID in IoT Hub by following [this doc]({{"/docs/customize-device-id/" | absolute_url }}), however, you still need to change the hardcoding `AZ3166` to customized device ID in the code currently. Here's the list of files you need to modify:

* [azurefunction/devkit-translator/run.csx](https://github.com/Microsoft/devkit-sdk/blob/master/AZ3166/src/libraries/AzureIoT/examples/DevKitTranslator/azurefunction/devkit-translator/run.csx#L42)

## Problems and feedback

If you encounter problems, you can refer to [FAQs]({{"/docs/faq/" | absolute_url }}) or reach out to us from the channels below.

{% include feedback.html tutorial="devkit-translator" %}
