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

In this project, you learn how to use the motion sensor to trigger an event using Azure Functions. The app will retrieve a random tweet with a #hashtag you have configured in your Arduino sketch. The tweet will display on the DevKit screen.

{% include toc icon="columns" %}

## What you need

Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }}) to:

* Have your DevKit connected to Wi-Fi
* Prepare the development environment

An active Azure subscription. If you do not have one, you can register via one of these methods:

* Activate a [free 30-day trial Microsoft Azure account](https://azureinfo.microsoft.com/us-freetrial.html){:target="_blank"}
* Claim your [Azure credit](https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/){:target="_blank"} if you are an MSDN or Visual Studio subscriber

## Step 1. Open the project folder

### A. Start VS Code

- Make sure your DevKit is **not** connected to your computer.
- Start VS Code.
- Connect the DevKit to your computer.

VS Code will automatically find your DevKit and display an introduction page:

![mini-solution-vscode]({{"/assets/images/mini-solution/vscode_start.png" | absolute_url }})

**Notice:** Occasionally, when you launch VS Code, you may be prompted with an error message saying that the Arduino IDE or related board package cannot be found. If this should occur, close VS Code, launch the Arduino IDE again and VS Code should locate Arduino IDE path correctly.
{: .notice--warning}

### B. Open Arduino Examples folder

Expand left side **ARDUINO EXAMPLES** section, browse to **Examples for MXCHIP AZ3166 > AzureIoT**, and select **ShakeShake**. This opens a new VS Code window with a project folder in it.

![mini-solution-examples]({{"/assets/images/mini-solution/vscode_examples.png" | absolute_url }})

If you happen to close the pane, you can reopen it. Use `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to open the command palette, type **Arduino**, and then find and select **Arduino: Examples**.

## Step 2. Provision Azure services

1. In the solution window, run your task through `Ctrl+P` (macOS: `Cmd+P`) by entering `task cloud-provision`:

In the VS Code terminal, an interactive command line will guide you through provisioning the required Azure services:

![cloud-provision]({{"/assets/images/mini-solution/shake-shake/cloud-provision.png" | absolute_url }})

**Notice:** If the page hangs in the loading status when trying to sign in to Azure, please refer to this [FAQ steps]({{"/docs/faq/#page-hangs-when-log-in-azure" | absolute_url}}) to resolve the issue. 
{: .notice--warning}

2. When a list of Azure subscriptions display in the terminal, use the **up** and **down** arrow keys to select the Azure subscription that you will use to provision the Azure IoT Hub. Then press **Enter** to confirm the selected subscription.

    ![Select Azure subscription]({{"/assets/images/mini-solution/shake-shake/select-subscription.png" | absolute_url }})

    _Select Azure subscription_

3. Provision IoT Hub
      * If you've provisioned IoT Hub(s) before, a list of IoT Hubs associated with the subscription appears in the terminal. Please use **up** and **down** arrow keys to select one from the list and press **Enter** to confirm.

        ![Select an existing IoT Hub]({{"/assets/images/mini-solution/shake-shake/select-existing-iothub.png" | absolute_url }})

        _Select existing Free IoT Hub_

        Wait several minutes to finish ARM Template deployment and IoT Hub Device provision. Then press any key to exit the terminal.

        ![Select an existing IoT Hub done]({{"/assets/images/mini-solution/shake-shake/select-iothub-done.png" | absolute_url }})

        _Finish selecting IoT Hub_

      * If you don't have any IoT Hub, please follow the steps to create a free IoT Hub:
        * Resource group provision:
          Use **up** and **down** arrow keys to choose a resource group you've created before or select **Create New...** to provision a new resource group. Complete the resource group provision according to the command line prompt.

          ![Select or create Azure resource group]({{"/assets/images/mini-solution/shake-shake/select-or-create-resource-group.png" | absolute_url }})

          If you choose to create a new resource group:
          * Use **up** and **down** arrow keys to select region for a new resource group provision, and then press **Enter** to confirm.

            ![Select region for a new resource group provision]({{"/assets/images/mini-solution/shake-shake/select-region-for-resource-group.png" | absolute_url }})

            _Select region for resource group provision_

          * Input a name for new resource group.

            ![Input name for resource group]({{"/assets/images/mini-solution/shake-shake/input-name-for-resource-group.png" | absolute_url }})

            _Input a name for resource group provision_

        * IoT Hub provision:

          Enter a name for your new IoT Hub, and press **Enter** to confirm.

          ![Input a name for IoT Hub]({{"/assets/images/mini-solution/shake-shake/input-name-for-iothub.png" | absolute_url }})

          _Input a name for IoT Hub provision_

          Wait several minutes to finish ARM Template deployment and IoT Hub Device provision. Then press any key to exit the terminal.

          ![Provision Azure IoT Hub done]({{"/assets/images/mini-solution/shake-shake/provision-iothub-done.png" | absolute_url }})

          _Finish cloud provision_

## Step 3. Modify the #hashtag

Open `ShakeShake.ino` and look for this line of code:

```cpp
static const char* iot_event = "{\"topic\":\"iot\"}";
```

Replace the string `iot` within the curly braces with your preferred hashtag. DevKit will later retrieve a random tweet containing the hashtag you specified here.

## Step 4. Deploy Azure Functions

Use `Ctrl+P` (macOS: `Cmd+P`) to run `task cloud-deploy`. This will start deploying the Azure Functions code:

![cloud-deploy]({{"/assets/images/mini-solution/shake-shake/cloud-deploy.png" | absolute_url }})

**Notice:** Occasionally, the Azure Function may not work properly. If this occurs, please check this [FAQ steps]({{"/docs/faq/#compilation-error-for-azure-function" | absolute_url}}) to resolve this issue.
{: .notice--warning}

## Step 5. Build and upload the device code

{% include switch.html content = page.variable %}

### Windows

1. Use `Ctrl+P` to run `task config-device-connection`.

2. The terminal will ask you whether you want to use connection string that retrieves from `task cloud-provision` step. You could also input your own device connection string by clicking 'Create New...'

3. The terminal prompts you to enter configuration mode. To do so, hold down button A, then push and release the reset button. The screen displays the DevKit id and 'Configuration'.
  ![Verification and upload of the Arduino sketch]({{"/assets/images/mini-solution/shake-shake/config-device-connection.png" | absolute_url }})

4. After `task config-device-connection` finished, click `F1` to load VS Code commands and select `Arduino: Upload`, then VS Code starts verifying and uploading the Arduino sketch:
  ![Verification and upload of the Arduino sketch]({{"/assets/images/mini-solution/shake-shake/arduino-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you may get an "Error: AZ3166: Unknown package" error message. This occurs when the board package index is not refreshed correctly. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to resolve this issue.
{: .notice--warning}

### macOS

1. Put DevKit into configuration mode:
  Hold down button A, then push and release the reset button. The screen displays 'Configuration'.

2. Use `Cmd+P` to run `task config-device-connection`.

3. The terminal will ask you whether you want to use connection string that retrieves from `task cloud-provision` step. You could also input your own device connection string by clicking 'Create New...'
  ![device-upload]({{"/assets/images/mini-solution/shake-shake/config-device-connection.png" | absolute_url }})

4. After `task config-device-connection` finished, click `Cmd + shift + p` to load VS Code commands and select `Arduino: Upload`, then VS Code starts verifying and uploading the Arduino sketch:
  ![device-upload]({{"/assets/images/mini-solution/shake-shake/arduino-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you may get an "Error: AZ3166: Unknown package" error message. This occurs when the board package index is not refreshed correctly. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to resolve this issue.
{: .notice--warning}

## Test the project

After app initialization, click button A and gently shake the DevKit board to retrieve a random tweet containing your hashtag (e.g. #iot). Within a few seconds, a tweet will display on your DevKit screen.:

{% include gallery id="layouts_gallery" caption="Shake, shake for a random tweet containing the #hashtag you set in the code." %}

- Press button A again, then shake for a new tweet.
- Press button B to scroll through the rest of the tweet.

**Notice:** If the screen displays **No Tweets**, please check [this step]({{"/docs/projects/shake-shake/#problems-and-feedback" | absolute_url}}).
{: .notice--warning}

## How it works

![diagram]({{"/assets/images/mini-solution/shake-shake/diagram.png" | absolute_url }})

The Arduino sketch sends an event to Azure IoT Hub which triggers the Azure Functions app. Azure Functions contains the logic to connect to Twitter's API and retrieve a tweet. It wraps the tweet text into a C2D (Cloud-to-device) message and sends it back to the device.

## Optional: Use your own Twitter bearer token

This sample project uses a pre-configured Twitter bearer token for testing purposes. But there is a [rate limit](https://dev.twitter.com/rest/reference/get/search/tweets){:target="_blank"} for every Twitter account. You might want to consider using your own token. Here are simple instructions to do so:

1. Go to [Twitter Developer portal](https://dev.twitter.com/){:target="_blank"} to register a new Twitter app.

2. [Get Consumer Key and Consumer Secrets](https://support.yapsody.com/hc/en-us/articles/203068116-How-do-I-get-a-Twitter-Consumer-Key-and-Consumer-Secret-key-){:target="_blank"} of your app.

3. Use [some utility](https://gearside.com/nebula/utilities/twitter-bearer-token-generator/){:target="_blank"} to generate a Twitter bearer token from these two keys.

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

This normally happens for the first time you deploy and run the sample. This is because the function app requires anywhere from a couple of seconds to as much as one minute to cold start the app. Or, there are some blips when running the code that will cause restarting of the app. When this happens, the device app can get a timeout for fetching the tweet. In this case, you may try one or both of these methods to solve this issue:

1. Click the reset button on the DevKit to run the device app again.

2. In the [Azure portal](https://portal.azure.com/){:target="_blank"}, find the Azure Functions app you created and restart it:
  ![azure-function-restart]({{"/assets/images/mini-solution/shake-shake/azure-function-restart.png" | absolute_url }})

### Feedback

If you encounter problems, you can refer to [FAQs]({{"/docs/faq/" | absolute_url }}) or reach out to us from the channels below.

## Customize device ID

You can customize device ID in IoT Hub by following [this doc]({{"/docs/customize-device-id/" | absolute_url }}), however, you still need to change the hardcoding `AZ3166` to customized device ID in the code currently. Here's the list of files you need to modify:

* [azureFunction/shakeshake-cs/run.csx](https://github.com/Microsoft/devkit-sdk/blob/master/AZ3166/src/libraries/AzureIoT/examples/ShakeShake/azureFunction/shakeshake-cs/run.csx#L91)
* [azureFunction/shakeshake-node/index.js](https://github.com/Microsoft/devkit-sdk/blob/master/AZ3166/src/libraries/AzureIoT/examples/ShakeShake/azureFunction/shakeshake-node/index.js#L29)

{% include feedback.html tutorial="shake-shake" %}
