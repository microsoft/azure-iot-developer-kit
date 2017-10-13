---
title: "Shake, Shake for a Tweet"
permalink: /docs/projects/shake-shake/
excerpt: "Use the motion sensor to detect shaking and  find a random tweet with a #hashtag."
header:
  overlay_image: /assets/images/projects-shake-shake.jpg
  overlay_full: true
  teaser: /assets/images/projects-shake-shake-th.jpg
layouts_gallery:
  - url: /assets/images/mini-solution/shake-shake/result-1.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-1.jpg
    alt: "Arduino application initializing"
  - url: /assets/images/mini-solution/shake-shake/result-2.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-2.jpg
    alt: "Press A to shake"
  - url: /assets/images/mini-solution/shake-shake/result-3.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-3.jpg
    alt: "Ready to shake"
  - url: /assets/images/mini-solution/shake-shake/result-4.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-4.jpg
    alt: "Processing..."
  - url: /assets/images/mini-solution/shake-shake/result-5.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-5.jpg
    alt: "Press B to read"
  - url: /assets/images/mini-solution/shake-shake/result-6.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-6.jpg
    alt: "Display a random tweet"
icons:
  - url: /assets/images/icon-iot-hub.svg
    target: https://azure.microsoft.com/en-us/services/iot-hub/
    title: IoT Hub
  - url: /assets/images/icon-azure-functions.svg
    target: https://azure.microsoft.com/en-us/services/functions/
    title: Azure Functions
difficulty: MEDIUM
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2017-07-05
---

In this project, you will learn how to use the motion sensor to trigger an event using Azure Functions. The app will retrieve a random tweet with a #hashtag you have configured in your Arduino sketch. The tweet will display on the DevKit screen.

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

Make sure your DevKit is not connected. Start VS Code first and connect the DevKit to your computer. VS Code will automatically find it and pops up introduction page:

![mini-solution-vscode]({{"/assets/images/mini-solution-vscode.png" | absolute_url }})

**Notice:** Occasionally, when you launch VS Code, you will be prompted with an error that cannot find Arduino IDE or related board package. Close VS Code, launch Arduino IDE once and VS Code should locate Arduino IDE path correctly.
{: .notice--warning}

### B. Open Arduino Examples folder

Expand left side **ARDUINO EXAMPLES** section, browse to **Examples for MXCHIP AZ3166 > AzureIoT**, and select **ShakeShake**. This will open a new VS Code window with project folder in it.

![mini-solution-examples]({{"/assets/images/mini-solution-examples.png" | absolute_url }})

If you happen to close the pane, you can reopen it. Use `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to open the command palette, type **Arduino**, and then find and select **Arduino: Examples**.

## Step 2. Provision Azure services

**Notice:** There is a IoT Hub service issue from **Oct, 12** which caused provision failed, for more detail please check [FAQ steps]({{"/docs/faq/#running-task-cloud-provision-fails" | absolute_url}}).
{: .notice--warning}

In the solution window, run your task through `Ctrl+P` (macOS: `Cmd+P`) by entering `task cloud-provision`:

In the VS Code terminal, an interactive command line will guide you through provisioning the required Azure services:

![cloud-provision]({{"/assets/images/mini-solution/shake-shake/cloud-provision.png" | absolute_url }})

## Step 3. Modify the #hashtag

Open `ShakeShake.ino` and look for the line of code:

```cpp
static const char* iot_event = "{\"topic\":\"iot\"}";
```

Replace the string `iot` in the curly brace with your preferred hashtag. And DevKit will later retrieve a random tweet with the hashtag you set here.

## Step 4. Deploy Azure Functions

Use `Ctrl+P` (macOS: `Cmd+P`) to run `task cloud-deploy`. It will start deploying the Azure Functions code:

![cloud-deploy]({{"/assets/images/mini-solution/shake-shake/cloud-deploy.png" | absolute_url }})

## Step 5. Build and upload the device code

{% include switch.html content = page.variable %}

### Windows

1. Use `Ctrl+P` to run `task device-upload`.
2. The terminal prompts you to enter configuration mode. To do so, hold down button A, then push and release the reset button. The screen displays the DevKit id and 'Configuration'.

This is to set the connection string that retrieves from `task cloud-provision` step.

Then VS Code starts verifying and uploading the Arduino sketch:

![device-upload]({{"/assets/images/mini-solution/shake-shake/device-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you get error "Error: AZ3166: Unknown package". This is due to the board package index is not refreshed. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to solve it.
{: .notice--warning}

### macOS

1. Put DevKit into configuration mode:
  Hold down button A, then push and release the reset button. The screen displays 'Configuration'.
2. Use `Cmd+P` to run `task device-upload`.

This is to set the connection string that retrieves from `task cloud-provision` step.

Then VS Code starts verifying and uploading the Arduino sketch:

![device-upload]({{"/assets/images/mini-solution/shake-shake/device-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you get error "Error: AZ3166: Unknown package". This is due to the board package index is not refreshed. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to solve it.
{: .notice--warning}

## Test the project

After app initialization, click button A and mildly shake the board to retrieve a random tweet with your hashtag (e.g. #iot). A tweet will display on your screen in a few seconds:

{% include gallery id="layouts_gallery" caption="Shake, shake for a random tweet with #hashtag you set in the code." %}

- Press button A again, then shake for a new tweet.
- Press button B to scroll through the rest of the tweet.

## How it works

![diagram]({{"/assets/images/mini-solution/shake-shake/diagram.png" | absolute_url }})

The Arduino sketch sends an event to Azure IoT Hub which triggers the Azure Functions app. Azure Functions contains the logic to connect to Twitter's API and retrieve a tweet. It wraps the tweet text into a C2D (Cloud-to-device) message and sends it back to the device.

## Optional: Use your own Twitter bearer token

This sample project uses a pre-configured Twitter bearer token for testing purpose. But there is a [rate limit](https://dev.twitter.com/rest/reference/get/search/tweets){:target="_blank"} for every Twitter account. You might want to consider using your own token. Here are simple instructions to do so:

1. Go to [Twitter Developer portal](https://dev.twitter.com/){:target="_blank"} to register a new Twitter app.

2. [Get Consumer Key and Consumer Secrets](https://support.yapsody.com/hc/en-us/articles/203068116-How-do-I-get-a-Twitter-Consumer-Key-and-Consumer-Secret-key-){:target="_blank"} of your app.

3. Use [some utility](https://gearside.com/nebula/utilities/twitter-bearer-token-generator/){:target="_blank"} to generate Twitter bearer token from these two keys.

4. In the [Azure portal](https://portal.azure.com/){:target="_blank"}, get into the **Resource Group** and find the Azure Function (Type: App Service) for your "Shake, Shake" project. The name always contains 'shake...' string.
  ![azure-function]({{"/assets/images/mini-solution/shake-shake/azure-function.png" | absolute_url }})

5. Update the code for `run.csx` within **Functions > shakeshake-cs** with your own token:
  ```csharp
  ...
  string authHeader = "Bearer " + "[your own token]";
  ...
  ```
  ![twitter-token]({{"/assets/images/mini-solution/shake-shake/twitter-token.png" | absolute_url }})

5. Save the file and click **Run**.


## Problems and feedback

### Problems

#### The screen displays 'No Tweets' while every step has run successfully

It normally happens for the first time you deploy and run the sample. This is because the function app will require a couple of seconds up to one minute to cold start the app. Or there are some blips when running the code that will cause restarting of the app. Then the device app can get timeout for fetching the tweet. In this case, you may try one or both methods to solve this issue:

1. Click reset button on the DevKit to run the device app again.

2. In the [Azure portal](https://portal.azure.com/){:target="_blank"}, find the Azure Functions app you created and restart it:
  ![azure-function-restart]({{"/assets/images/mini-solution/shake-shake/azure-function-restart.png" | absolute_url }})

### Feedback

If you encounter problems, you can find [FAQs]({{"/docs/faq/" | absolute_url }}) if you encounter other problems or reach out to us from the channels below.

{% include feedback.html tutorial="shake-shake" %}