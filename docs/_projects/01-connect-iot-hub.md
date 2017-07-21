---
title: "Connect to Azure IoT Hub"
permalink: /docs/projects/connect-iot-hub
excerpt: "Connect DevKit to an Azure IoT hub that you create, collect the temperature and humidity data from sensors and send the data to IoT hub."
header:
  image: /assets/images/projects-iothub.jpg
  teaser: /assets/images/projects-iothub-th.jpg
last_modified_at: 2017-06-28
---

{% include toc icon="columns" %}

## What you do

Connect DevKit to an Azure IoT hub that you create, collect the temperature and humidity data from sensors and send the data to IoT hub.

## What you learn

* How to create an IoT hub and register a device for MXChip IoT DevKit.
* How to collect sensor data by running a sample application on MXChip IoT DevKit.
* How to send the sensor data to your IoT hub.

## What you need

* Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }})

## Create an IoT hub and register a device for MXChip IoT DevKit

### Create an IoT hub

1. In the [Azure portal](https://portal.azure.com/){:target="_blank"}, click **New** > **Internet of Things** > **IoT Hub**.

   ![Create an iot hub in the Azure portal]({{"/assets/images/happy-path-create-azure-iot-hub-portal.png" | absolute_url }})
2. In the **IoT hub** pane, enter the following information for your IoT hub:

   **Name**: It is the name for your IoT hub. If the name you enter is valid, a green check mark appears.

   **Pricing and scale tier**: Select the free F1 tier. This option is sufficient for this demo. See [pricing and scale tier](https://azure.microsoft.com/pricing/details/iot-hub/){:target="_blank"}.

   **Resource group**: Create a resource group to host the IoT hub or use an existing one. See [Using resource groups to manage your Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-portal){:target="_blank"}.

   **Location**: Select the closest location to you where the IoT hub is created.

   **Pin the dashboard**: Check this option for easy access to your IoT hub from the dashboard.

   ![Fill in the fields for creating your Azure IoT hub]({{"/assets/images/happy-path-fill-in-fields-for-azure-iot-hub-portal.png" | absolute_url }})

3. Click **Create**. It could take a few minutes for your IoT hub to be created. You can see the progress in the **Notifications** pane.

   ![See notifications of your IoT hub creation progress]({{"/assets/images/happy-path-notification-azure-iot-hub-creation-progress-portal.png" | absolute_url }})

4. Once your IoT hub is created, click it from the dashboard. Make a note of the **Hostname**, and then click **Shared access policies**.

   ![Get the hostname of your IoT hub]({{"/assets/images/happy-path-get-azure-iot-hub-hostname-portal.png" | absolute_url }})

5. In the **Shared access policies** pane, click the **iothubowner** policy, and then make a note of the **Connection string** of your IoT hub. For more information, see [Control access to IoT Hub](iot-hub-devguide-security.md).

   ![Get your IoT hub connection string]({{"/assets/images/happy-path-get-azure-iot-hub-connection-string-portal.png" | absolute_url }})

### Register a device in the IoT hub for the your device

1. In the [Azure portal](https://portal.azure.com/){:target="_blank"}, open your IoT hub.

2. Click **Device Explorer**.

3. In the Device Explorer pane, click **Add**, and then enter the following information to create a device in your IoT hub:

   **Device ID**: The ID of the new device.

   **Authentication Type**: Select **Symmetric Key**.

   **Auto Generate Keys**: Check this field.

   **Connect device to IoT Hub**: Click **Enable**.

   ![Add a device in the device explorer of your IoT hub]({{"/assets/images/happy-path-add-device-in-azure-iot-hub-device-explorer-portal.png" | absolute_url }})

4. Click **Save**.

5. After the device is created, open the device in the **Device Explorer** pane.

6. Make a note of the primary key of the **device connection string**.

   ![Get the device connection string]({{"/assets/images/happy-path-get-device-connection-string-in-device-explorer-portal.png" | absolute_url }})

## Connect MXChip IoT DevKit with your computer

Use the Micro USB to Type A USB cable to connect MXChip IoT DevKit to your computer.

## Collect sensor data and send it to your IoT hub

In this section, you deploy and run a sample application on MXChip IoT DevKit. The sample application blinks the LED on MXChip IoT DevKit, and sends the temperature and humidity data collected from the sensor to your IoT hub.

### Get the sample application

1. In Visual Studio Code, press `F1` or `Ctrl + Shift + P` to open the command palette, and then type `Arduino: Examples`.

2. In the `Arduino Examples` tab, expand `Examples for MXCHIP AZ3166` > `AzureIoTHub`, and then click `GetStarted`.

###  Install required libraries

1. In the Visual Studio Code, press `F1` or `Ctrl + Shift + P` to open command palette, type **Arduino: Libraries Manager**.

2. Search for the `ArduinoJson` library and click **Install**. 

### Configure device connection string to DevKit (Windows)

1. Download and install [PuTTY](http://www.putty.org/){:target="_blank"}.

2. Configure PuTTY with the following settings in the sequence they are listed:
   * **Connection type**: select **Serial**.
   * **Serial line**: Enter the port that MXChip IoT DevKit uses to connect to your computer. For example, you enter `COM5`. You can find the port on the status bar of Visual Studio Code.
   * **Speed**: Enter `115200`.

3. Click **Open** to open a PuTTY command-line window.

   ![putty-config]({{"/assets/images/happy-path-putty-config.png" | absolute_url }})

4. On MXChip IoT DevKit, press and hold button A, press the Reset button, and then release button A.
   This makes the PuTTY command-line to start with a `#` prompt.

5. Configure the device connection string for MXChip IoT DevKit by running the following command in the PuTTY command-line window:
   ```bash
   set_az_iothub [device connection string]
   ```

   If the configuration is successful, the following information is displayed:
   ```bash
   INFO: Set Azure Iot hub connection string successfully.
   ```

6. Close the PuTTY command-line window.

### Deploy the sample application to MXChip IoT DevKit

1. In Visual Studio Code, click `COM<Port>` on the status bar, and then click `COM<Port> STMicroelectronics` in the command palette.

2. Press `F1` or `Ctrl + Shift + P`, type `arduino:upload`, and then click `Arduino: Upload` to build and deploy the sample application to MXChip IoT DevKit.

### Verify the sample application is running successfully

In Visual Studio Code, click the power plug icon in the status bar to open the Serial Monitor.

The sample application is running successfully when you see the following results:

* The Serial Monitor dispalys the same information as the content in the screenshot below.
* The LED on MXChip IoT DevKit is blinking.

![Final output in VS Code]({{"/assets/images/happy-path-vscode-final-output.png" | absolute_url }})

## Problems and feedback

You can find [FAQs]({{"/docs/faq/" | absolute_url }}) if you encounter problems or reach out to us from the channels below.

## Next steps

You have successfully connected a MXChip IoT DevKit to your IoT hub, and sent the captured sensor data to your IoT hub.

To continue getting started with IoT Hub and to explore other IoT scenarios, see:

- [Manage cloud device messaging with iothub-explorer](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-explorer-cloud-device-messaging){:target="_blank"}
- [Save IoT Hub messages to Azure data storage](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-store-data-in-azure-table-storage){:target="_blank"}
- [Use Power BI to visualize real-time sensor data from Azure IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-live-data-visualization-in-power-bi){:target="_blank"}
- [Use Azure Web Apps to visualize real-time sensor data from Azure IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-live-data-visualization-in-web-apps){:target="_blank"}
- [Weather forecast using the sensor data from your IoT hub in Azure Machine Learning](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-weather-forecast-machine-learning){:target="_blank"}
- [Device management with iothub-explorer](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-device-management-iothub-explorer){:target="_blank"}
- [Remote monitoring and notifications with ​​Logic ​​Apps](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-monitoring-notifications-with-azure-logic-apps){:target="_blank"}
