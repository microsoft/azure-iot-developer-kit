---
title: "Remote Monitoring"
permalink: /docs/projects/remote-monitoring/
redirect_to:
  - https://github.com/Microsoft/vscode-iot-workbench/blob/master/docs/iot-devkit/devkit_remote_monitoringv2.md
excerpt: "Visualize sensors status on DevKit using Azure IoT Suite Remote Monitoring."
PreviousVersionUrl: https://docs.microsoft.com/en-us/azure/iot-accelerators/iot-accelerators-arduino-iot-devkit-az3166-devkit-remote-monitoringv2
header:
  overlay_image: /assets/images/projects-remote-monitoring.jpg
  overlay_full: true
  teaser: /assets/images/projects-remote-monitoring-th.jpg
layouts_gallery:
  - url: /assets/images/mini-solution/remote-monitoring/connect-wifi.jpg
    image_path: /assets/images/mini-solution/remote-monitoring/connect-wifi.jpg
    alt: "Connect to Wi-Fi"
  - url: /assets/images/mini-solution/remote-monitoring/send-data.jpg
    image_path: /assets/images/mini-solution/remote-monitoring/send-data.jpg
    alt: "Send sensor data"
  - url: /assets/images/mini-solution/remote-monitoring/sensor-status.png
    image_path: /assets/images/mini-solution/remote-monitoring/sensor-status.png
    alt: "View sensor status"
icons:
  - url: /assets/images/icon-azure-iot-suite.svg
    target: https://azure.microsoft.com/en-us/suites/iot-suite/
    title: Azure IoT Suite
difficulty: EASY
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2017-06-28
---

In this tutorial, you learn how to run a sample app on your DevKit to send sensor data to your Azure IoT Suite.

{% include toc icon="columns" %}

## What you need

Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }}) to:

* Have your DevKit connected to Wi-Fi
* Prepare the development environment

An active Azure subscription. If you do not have one, you can register via one of these two methods:

* Activate a [free 30-day trial Microsoft Azure account](https://azure.microsoft.com/en-us/free/){:target="_blank"}
* Claim your [Azure credit](https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/){:target="_blank"} if you are MSDN or Visual Studio subscriber

## Step 1. Create an Azure IoT Suite

1. Go to [Azure IoT Suite site](https://www.azureiotsuite.com/) and click **Create a new solution**.

![remote-monitoring-azure-iot-suite-solution-types]({{"/assets/images/mini-solution/remote-monitoring/azure-iot-suite-solution-types.png" | absolute_url }})

**Notice:** By default, this creates an S2 IoT Hub after it creates one IoT Suite. If this IoT hub will not be used with massive number of devices, we highly recommend you downgrade it from S2 to S1, and delete the IoT Suite--the IoT Hub will also be deleted--when you no longer need it. This will save you money:). 
{: .notice--warning}

2. Select **Remote monitoring**.

3. Enter a solution name, select a subscription and a region, and then click **Create solution**. The solution may take a while to be provisioned.

![remote-monitoring-azure-iot-suite-new-solution]({{"/assets/images/mini-solution/remote-monitoring/azure-iot-suite-new-solution.png" | absolute_url }})

4. After the provision is completed, click **Launch**. Some simulated devices are created for the solution during the provision process. Click **DEVICES** to check them out.

![remote-monitoring-azure-iot-suite-new-solution-created]({{"/assets/images/mini-solution/remote-monitoring/azure-iot-suite-new-solution-created.png" | absolute_url }})

![remote-monitoring-azure-iot-suite-console]({{"/assets/images/mini-solution/remote-monitoring/azure-iot-suite-console.png" | absolute_url }})

5. Click **ADD A DEVICE**.

6. Click **Add New** for **Custom Device**.

![remote-monitoring-azure-iot-suite-add-new-device]({{"/assets/images/mini-solution/remote-monitoring/azure-iot-suite-add-new-device.png" | absolute_url }})

7. Click **Let me define my own Device ID**, enter `AZ3166`, and then click **Create**.

![remote-monitoring-azure-iot-suite-new-device-configuration]({{"/assets/images/mini-solution/remote-monitoring/azure-iot-suite-new-device-configuration.png" | absolute_url }})

8. Make a note of **IoT Hub Hostname**, and click **Done**.

## Step 2. Open the RemoteMonitoring sample

1. Disconnect the DevKit from your computer, if it is connected.

2. Start VS Code.

3. Connect the DevKit to your computer. VS Code automatically detects your DevKit and opens the following pages:
  * The DevKit introduction page.
  * Arduino Examples: Hands-on samples to get started with DevKit.

4. Expand left side **ARDUINO EXAMPLES** section, browse to **Examples for MXCHIP AZ3166 > AzureIoT**, and select **RemoteMonitoring**. This will open a new VS Code window with a project folder in it.

![mini-solution-vscode]({{"/assets/images/mini-solution/vscode_start.png" | absolute_url }})

If you happen to close the pane, you can reopen it. Use `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to open the command palette, type **Arduino**, and then find and select **Arduino: Examples**.

## Step 3. Provision required Azure services

In the solution window, run your task through `Ctrl+P` (macOS: `Cmd+P`) by entering `task cloud-provision` in the provided text box:

In the VS Code terminal, an interactive command line guides you through provisioning the required Azure services:

![remote-monitoring-provision]({{"/assets/images/mini-solution/remote-monitoring/provision.png" | absolute_url }})

**Notice:** If the page hangs in the loading status when trying to sign in to Azure, please check this [FAQ steps]({{"/docs/faq/#page-hangs-when-log-in-azure" | absolute_url}}) to resolve the issue. 
{: .notice--warning}

## Step 4. Build and upload the device code

{% include switch.html content = page.variable %}

### Windows

1. Use `Ctrl+P` to run `task config-device-connection`.

2. The terminal will ask you whether you want to use connection string that retrieves from `task cloud-provision` step. You could also input your own device connection string by clicking 'Create New...'

3. The terminal prompts you to enter configuration mode. To do so, hold down button A, then push and release the reset button. The screen displays the DevKit id and 'Configuration'.
  ![Verification and upload of the Arduino sketch]({{"/assets/images/mini-solution/remote-monitoring/config-device-connection.png" | absolute_url }})

4. After `task config-device-connection` finished, click `F1` to load VS Code commands and select `Arduino: Upload`, then VS Code starts verifying and uploading the Arduino sketch:
  ![Verification and upload of the Arduino sketch]({{"/assets/images/mini-solution/remote-monitoring/arduino-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you may get an "Error: AZ3166: Unknown package" error message. This occurs when the board package index is not refreshed correctly. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to resolve this issue.
{: .notice--warning}

### macOS

1. Put DevKit into configuration mode:
  Hold down button A, then push and release the reset button. The screen displays 'Configuration'.

2. Use `Cmd+P` to run `task config-device-connection`.

3. The terminal will ask you whether you want to use connection string that retrieves from `task cloud-provision` step. You could also input your own device connection string by clicking 'Create New...'
  ![device-upload]({{"/assets/images/mini-solution/remote-monitoring/config-device-connection.png" | absolute_url }})

4. After `task config-device-connection` finished, click `Cmd + shift + p` to load VS Code commands and select `Arduino: Upload`, then VS Code starts verifying and uploading the Arduino sketch:
  ![device-upload]({{"/assets/images/mini-solution/remote-monitoring/arduino-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you may get an "Error: AZ3166: Unknown package" error message. This occurs when the board package index is not refreshed correctly. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to resolve the issue.
{: .notice--warning}

## Test the project

When the sample app runs, DevKit sends sensor data over Wi-Fi to your Azure IoT Suite. To see the result, follow these steps:

1. Go to your Azure IoT Suite, and click **DASHBOARD**.

2. On the Azure IoT Suite solution console, you will see your DevKit sensor status.

{% include gallery id="layouts_gallery" caption="View sensor information within Azure IoT Suite." %}

## Customize device ID

You can customize device ID in IoT Hub by following [this doc]({{"/docs/customize-device-id/" | absolute_url }}), however, you still need to change the hardcoding `AZ3166` to customized device ID in the code currently. Here's the list of files you need to modify:

* [RemoteMonitoring.ino](https://github.com/Microsoft/devkit-sdk/blob/master/AZ3166/src/libraries/AzureIoT/examples/RemoteMonitoring/RemoteMonitoring.ino#L23)

## Problems and feedback

If you encounter problems, please refer to [FAQs]({{"/docs/faq/" | absolute_url }}) or reach out to us from the channels below.

{% include feedback.html tutorial="remote-monitoring" %}
