---
title: "DevKit Translator"
permalink: /docs/projects/devkit-translator/
excerpt: "Turn DevKit as a translator by using Bing Speech Translator service."
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

In this project, you will learn how to use DevKit as a translator. The app will record your voice and translate it to English text show on the screen.

{% include toc icon="columns" %}

## What you need

Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }}) to:

* Have your DevKit connected to Wi-Fi
* Prepare the development environment

An active Azure subscription. If you do not have one, you can register via one of the methods:

* Activate a [free 30-day trial Microsoft Azure account](https://azureinfo.microsoft.com/us-freetrial.html){:target="_blank"}
* Claim your [Azure credit](https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/){:target="_blank"} if you are MSDN or Visual Studio subscriber

## Step 1. Open the project folder

### A. Start VS Code

Make sure your DevKit is not connected. Start VS Code first and connect the DevKit to your computer. VS Code automatically finds the DevKit and opens an introduction page:

![Introduction page]({{"/assets/images/mini-solution/vscode_start.png" | absolute_url }})

**Notice:** Occasionally, when you launch VS Code, you will be prompted with error that cannot find Arduino IDE or related board package. Close VS Code, launch Arduino IDE once again and VS Code should locate Arduino IDE path correctly.
{: .notice--warning}

### B. Open the Arduino Examples folder

Expand left side **ARDUINO EXAMPLES** section, browse to **Examples for MXCHIP AZ3166 > AzureIoT**, and select **DevKitTranslator**. This will open a new VS Code window with project folder in it.

![mini-solution-examples]({{"/assets/images/mini-solution/vscode_examples.png" | absolute_url }})

If you happen to close the pane, you can reopen it. Use `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to open the command palette, type **Arduino**, and then find and select **Arduino: Examples**.

## Step 2. Provision Azure services

In the solution window, run your task through `Ctrl+P` (macOS: `Cmd+P`) by entering `task cloud-provision`:

In the VS Code terminal, an interactive command line will guide you through provisioning all required Azure services:

![mini-solution-provision-sub]({{"/assets/images/mini-solution/devkit-translator/cloud-provision.png" | absolute_url }})

**Notice:** If the page hangs in the loading status when trying to sign in to Azure, plese check this [FAQ steps]({{"/docs/faq/#page-hangs-when-log-in-azure" | absolute_url}}) to solve it. 
{: .notice--warning}

## Step 3. Deploy Azure Functions

Use `Ctrl+P` (macOS: `Cmd+P`) to run `task cloud-deploy` to deploy the Azure Functions code. It usually takes 2 to 5 minutes to complete:

![mini-solution-deploy]({{"/assets/images/mini-solution/devkit-translator/cloud-deploy.png" | absolute_url }})

After auzre function deployed successfully, fill in the azure_config.h file with function app name. You could navigate to [Azure portal](https://portal.azure.com/){:target="_blank"} to find it:

![mini-solution-function-app]({{"/assets/images/mini-solution/devkit-translator/azure-function.png" | absolute_url }})

**Notice:** Occasionally, if the Azure Function can't work properly please check this [FAQ steps]({{"/docs/faq/#compilation-error-for-azure-function" | absolute_url}}) to solve it.
{: .notice--warning}

## Step 4. Build and upload the device code

{% include switch.html content = page.variable %}

### Windows

1. Use `Ctrl+P` to run `task device-upload`.
2. The terminal prompts you to enter configuration mode. To do so, hold down button A, then push and release the reset button. The screen displays the DevKit id and 'Configuration'.

This is to set the connection string that retrieves from `task cloud-provision` step.

Then VS Code starts verifying and uploading the Arduino sketch:

![device-upload]({{"/assets/images/mini-solution/devkit-translator/device-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you get error "Error: AZ3166: Unknown package". This is due to the board package index is not refreshed. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to solve it.
{: .notice--warning}

### macOS

1. Put DevKit into configuration mode:
  Hold down button A, then push and release the reset button. The screen displays 'Configuration'.
2. Use `Cmd+P` to run `task device-upload`.

This is to set the connection string that retrieves from `task cloud-provision` step.

Then VS Code starts verifying and uploading the Arduino sketch:

![device-upload]({{"/assets/images/mini-solution/devkit-translator/device-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you get error "Error: AZ3166: Unknown package". This is due to the board package index is not refreshed. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to solve it.
{: .notice--warning}

## Test the project

After app initialization, follow the instructions on the screen to setup. You could just press button B to talk. The default language is Chinese. Or, you may press button A to enter setup mode. Press button B to scroll all supported languages, then press button A to confirm your choice. After source language is set, press button B to talk and release to send the voice. Several seconds later, the translation will be shown on the screen.

{% include gallery id="layouts_gallery" caption="Translate as you go" %}

- Press button A and B to scroll and select source language
- Press button B to talk, release to send the voice and get the translation text

## How it works

![mini-solution-voice-to-tweet-diagram]({{"/assets/images/mini-solution/devkit-translator/diagram.png" | absolute_url }})

The Arduino sketch records your voice, post a HTTP request to trigger Azure Functions. Azure Functions calls the cognitive service speech translator API to do the translation. After Azure Functions gets the translation text, it sends a C2D message to the device. Then the translation shows on the screen.

## Problems and feedback

If you encounter problems, you can find [FAQs]({{"/docs/faq/" | absolute_url }}) if you encounter other problems or reach out to us from the channels below.

{% include feedback.html tutorial="devkit-translator" %}
