---
title: "Connect to Azure IoT Hub"
permalink: /docs/projects/connect-iot-hub
excerpt: "Collect and send temperature and humidity data from DevKit to Azure IoT Hub."
header:
  overlay_image: /assets/images/projects-iothub.jpg
  overlay_full: true
  teaser: /assets/images/projects-iothub-th.jpg
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2017-06-28
---

{% include toc icon="columns" %}

In this project, you will create an Azure IoT Hub, connect DevKit to it, and collect the temperature and humidity data from sensors and send the data to IoT hub.

## What you learn

* How to create an IoT Hub and register a device for MXChip IoT DevKit.
* How to collect sensor data by running a sample application on MXChip IoT DevKit.
* How to send the sensor data to your IoT hub.

## What you need

Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }}) to:

* Have your DevKit connected to WiFi
* Prepare the development environment

An active Azure subscription. If you do not have one, you can register via one of the methods:

* Activate a [free 30-day trial Microsoft Azure account](https://azureinfo.microsoft.com/us-freetrial.html){:target="_blank"}
* Claim your [Azure credit](https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/){:target="_blank"} if you are MSDN or Visual Studio subscriber

## Step 1. Open project folder

### A. Launch VS Code

Make sure your DevKit is not connected. Launch VS Code first and connect the DevKit to your computer. VS Code will automatically find it and pop up an introduction page:

![mini-solution-vscode]({{"/assets/images/mini-solution-vscode.png" | absolute_url }})

**Notice:** Occasionally, when you launch VS Code, you will be prompted with error that cannot find Arduino IDE or related board package. To solve it, close VS Code, launch Arduino IDE once again and VS Code should locate Arduino IDE path correctly.
{: .notice--warning}

### B. Open Arduino Examples folder

Switch to **'Arduino Examples'** tab, navigate to `Examples for MXCHIP AZ3166 > AzureIoT` and click on `GetStarted`.

![mini-solution-examples]({{"/assets/images/mini-solution-examples.png" | absolute_url }})

If you happen to close the pane, to reload it, use `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to invoke command palette and type **Arduino** to find and select **Arduino: Examples**.

## Step 2. Provision Azure services

In the solution window, run your task through `Ctrl+P` (macOS: `Cmd+P`) by typing 'task cloud-provision':

In the VS Code terminal, an interactive command line will guide you through provisioning the required Azure services:

![mini-solution-cloud-provision]({{"/assets/images/mini-solution/connect-iothub/cloud-provision.png" | absolute_url }})

## Step 3. Build and upload Arduino sketch

### A. Install required library

1. Press `F1` or `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to invoke command palette and type **Arduino** then find and select **Arduino: Library Manager**.

2. Search for `ArduinoJson` library and click **Install**

### B. Build and upload the device code

Use `Ctrl+P` (macOS: `Cmd+P`) to run 'task device-upload'. The terminal will prompt you to enter configuration mode. To do so, hold down button A, then push and release the reset button. The screen will display 'Configuration'. This is to set the connection string that retrieves from 'task cloud-provision' step.

Then it will start verifying and uploading the Arduino sketch:

![mini-solution-device-upload]({{"/assets/images/mini-solution/connect-iothub/device-upload.png" | absolute_url }})

The DevKit will reboot and start running the code.

## Test the project

In VS Code, following these steps to open and set up the Serial Monitor:

1. Click the `COM[X]` word on the status bar to set the right COM port with `STMicroelectronics`:
  ![com-port]({{"/assets/images/mini-solution/connect-iothub/com-port.png" | absolute_url }})

2. Click power plug icon on the status bar to open the Serial Monitor:
  ![serial-monitor]({{"/assets/images/mini-solution/connect-iothub/serial-monitor.png" | absolute_url }})

3. On the status bar, click the number that represents the Baud Rate and set to `115200`:
  ![baud-rate]({{"/assets/images/mini-solution/connect-iothub/baud-rate.png" | absolute_url }})

The sample application is running successfully when you see the following results:

* The Serial Monitor displays the same information as the content in the screenshot below.
* The LED on MXChip IoT DevKit is blinking.

![Final output in VS Code]({{"/assets/images/mini-solution/connect-iothub/result-serial-output.png" | absolute_url }})

## Problems and feedback

You can find [FAQs]({{"/docs/faq/" | absolute_url }}) if you encounter problems or reach out to us from the channels below.

## Next steps

You have successfully connected an MXChip IoT DevKit to your IoT Hub, and sent the captured sensor data to your IoT hub.

To continue getting started with IoT Hub and to explore other IoT scenarios, see:

- [Manage cloud device messaging with iothub-explorer](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-explorer-cloud-device-messaging){:target="_blank"}
- [Save IoT Hub messages to Azure data storage](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-store-data-in-azure-table-storage){:target="_blank"}
- [Use Power BI to visualize real-time sensor data from Azure IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-live-data-visualization-in-power-bi){:target="_blank"}
- [Use Azure Web Apps to visualize real-time sensor data from Azure IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-live-data-visualization-in-web-apps){:target="_blank"}
- [Weather forecast using the sensor data from your IoT hub in Azure Machine Learning](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-weather-forecast-machine-learning){:target="_blank"}
- [Device management with iothub-explorer](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-device-management-iothub-explorer){:target="_blank"}
- [Remote monitoring and notifications with ​​Logic ​​Apps](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-monitoring-notifications-with-azure-logic-apps){:target="_blank"}
