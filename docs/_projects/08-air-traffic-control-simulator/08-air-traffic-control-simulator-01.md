---
title: "Air Traffic Control Simulator"
permalink: /docs/projects/air-traffic-control-simulator/
excerpt: "Build a comprehensive IoT solution that demonstrates some of the very best features Microsoft Azure has to offer."
part: 1
header:
  overlay_image: /assets/images/mini-solution/air-traffic-control-simulator/lab2/app-in-flight.png
  overlay_full: true
  teaser: /assets/images/mini-solution/air-traffic-control-simulator/lab2/app-in-flight.png

difficulty: HARD

last_modified_at: 2017-10-30
---

<a name="Introduction"></a>
## Introduction ##

In this hands-on lab and the ones that follow, you will build a comprehensive IoT solution that demonstrates some of the very best features Microsoft Azure has to offer, including [IoT Hubs](https://azure.microsoft.com/services/iot-hub/), [Event Hubs](https://azure.microsoft.com/services/event-hubs/), [Azure Functions](https://azure.microsoft.com/services/functions/), [Stream Analytics](https://azure.microsoft.com/services/stream-analytics/), and [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/). The solution you build today will culminate with an air-traffic control (ATC) app that shows simulated aircraft flying through an ATC sector and warns users when aircraft get too close to each other. While these labs are best to do with several peers, there is an application in the lab assets which can inject simulated drones into the workstream (details available in the [Labs section](#labs).)

![A user interface for an Air Traffic Control Application with dots and heading information overlaid on a geographical map.  Also includes summary statistics for all flights shown on the map, as well as attitude information for selected airplanes.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/atc-app.png" | absolute_url }})

_The air-traffic control application_

You will be the pilot of one of these aircraft. And to do the flying, you will use the [MXChip](https://microsoft.github.io/azure-iot-developer-kit/), which is an Arduino-based device that is ideal for prototyping IoT solutions. It features an array of sensors, including an accelerometer, a gyrometer, and temperature and humidity sensors, and it includes built-in WiFi so it can transmit data to Azure IoT Hubs wirelessly. It also features a micro-USB port by which you can connect it to your laptop, upload software, and power the hardware. You will control your aircraft by tilting the MXChip backward and forward to go up and down, and rotating it left and right to turn.

![A Micro USB cable placed next to an Azure MXChip IoT Development Board]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/cable-and-chip.png" | absolute_url }})

_IoT development board_

Here is how the solution is architected, with elements that you will build or deploy highlighted in light blue:

![A data flow diagram showing IoT information originating from an Azure MXChip flowing through IoT Hub and onto an Azure Function.  From the Azure Function, data is bifercated to flow through a client application, as well as to an Event Hub shared by all workshop participants.  The shared Event Hub forwads data to Azure Stream Analytics, where it is forwarded onto another event hub for distribution to the client application.  Additionally, there are data flows from the client application to Cognitive Services and from Stream Analytics to Cosmos DB]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/architecture.png" | absolute_url }})

_Solution architecture_

Accelerometer data from the device is transmitted to an Azure IoT Hub. An Azure Function transforms the raw accelerometer data into *flight data* denoting airspeed, heading, altitude, latitude, longitude, pitch, and roll. The destination for that data is a pair of Event Hubs — one that you set up, and one that is shared by your peers or the simulator drones. Events from the your Event Hub are consumed by a client app running on your laptop that shows the position and attitude of your aircraft. The events sent to the shared Event Hub go to a Stream Analytics job that analyzes fast-moving data for aircraft that are in danger of colliding and provides that data to the client app and the ATC app. When your aircraft comes too close to another, it turns red on the screen, and a warning appears on the screen of your MXChip. To top it off, Microsoft Cognitive Services translates the warning into the language of your choice.

The goal of this lab is to get the device up and running and sending events to an Azure IoT Hub. Let's get started!

<a name="Labs"></a>
## Labs ##

Here's a synopsis of the four labs that comprise this project:

- [Lab 1]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }}) - Create an Azure IoT Hub and program an [MXCHIP]([MXChip](https://microsoft.github.io/azure-iot-developer-kit/)) to send accelerometer data to it.
- [Lab 2]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }}) - Create an Azure Event Hub and deploy an Azure Function that transforms accelerometer data input to the IoT Hub into "flight data" denoting the disposition on an airplane and transmits it to the Event Hub. Then connect a UWP client app to the Event Hub and use their MXChip to fly a simulated airplane.
- [Lab 3]({{"/docs/projects/air-traffic-control-simulator-03/" | absolute_url }}) - Creates a pair of Event Hubs and deploy a Stream Analytics job that analyzes all the air traffic for aircraft that are within two miles of each another. Also deploys a UWP app that shows all the air traffic.
- [Lab 4]({{"/docs/projects/air-traffic-control-simulator-04/" | absolute_url }}) - Modify the Azure Function deployed in [Lab 2]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }}) to transmit flight data to the input hub used by Stream Analytics. Then connect the client app to the Stream Analytics output and modify the app to transmit warning messages back to the MXChip when aircraft are within two miles of another.

The [asset repository](https://github.com/Azure/CloudIoTHack) also has four source-code folders:

- FlySim - A Visual Studio 2017 solution containing the client app that you use to fly simulated airplanes.
- FlySimEmbedded - The code you upload to the MXChip to program it to send accelerometer data to an Azure IoT Hub.
- AirTrafficSim - A Visual Studio 2017 solution containing the air-traffic control (ATC) app that shows all the airplanes in flight and highlights those that are within two miles of each other.
- FlySimTest - A Visual Studio 2017 solution containing a command-line app for injecting simulated aircraft into AirTrafficSim. It's great for testing, and also for adding airplanes to the ATC sector, if you don't have peers working with you through this content. To prepare it for use, replace SHARED_EVENT_HUB_ENDPOINT on line 54 with the endpoint connection string for the Event Hub that provides input to Stream Analytics. By default, it injects 20 airplanes. You can inject more (or less) by specifying the desired number as a command-line parameter.

<a name="Prerequisites"></a>
## Prerequisites ##

The following are required to complete this lab:

- An [MXChip IoT DevKit](https://microsoft.github.io/azure-iot-developer-kit/)
- A computer running [Windows 10 Anniversary Edition](https://www.microsoft.com/en-us/software-download/windows10) or higher
- Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }}) to:

    * Have your DevKit connected to Wi-Fi
    * Prepare the development environment

- An active Azure subscription. If you do not have one, you can register via one of the methods:

    * Activate a [free 30-day trial Microsoft Azure account](https://azureinfo.microsoft.com/us-freetrial.html){:target="_blank"}
    * Claim your [Azure credit](https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/){:target="_blank"} if you are MSDN or Visual Studio subscriber

---

## Exercises ##

This lab includes the following exercises:

- [Exercise 1: Provision an Azure IoT Hub](#Exercise1)
- [Exercise 2: Deploy an app to the device](#Exercise2)
- [Exercise 3: Check IoT Hub activity](#Exercise3)
 
Estimated time to complete this lab: **60** minutes including development environment setup.

<a name="Exercise1"></a>
### Exercise 1: Provision an Azure IoT Hub ###

[Azure IoT Hubs](https://docs.microsoft.com/azure/iot-hub/iot-hub-what-is-iot-hub) enable IoT devices to connect securely to the cloud and transmit messages (events) that can be ingested by apps and other Azure services. They support bidirectional communication, and they are built to be massively scalable. A single IoT Hub can handle millions of events per second. Messages can be sent over HTTP, or using the [Advanced Message Queuing Protocol](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-what-is-iot-hub) (AMQP) or [Message Queueing Telemetry Transport](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-what-is-iot-hub) (MQTT) protocol. Devices can be authenticated using per-device security keys or X.509 certificates.

In this exercise, you will provision an Azure IoT Hub for your MXChip to transmit events to.

1. Open the [Azure Portal](https://portal.azure.com) in your browser. If asked to log in, do so using your Microsoft account.

1. Click **+ New**, followed by **Internet of Things** and **IoT Hub**.

	![The Azure Portal quick start menu shows the selection to add a new IoT Hub to a subscription.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/portal-select-new.png" | absolute_url }})

    _Provisioning a new IoT Hub_
 
1. Enter a unique name for IoT Hub in the **Name** field. IoT Hub names must be unique across Azure, so make sure a green check mark appears next to it. Also make sure **S1 - Standard** is selected as the pricing tier. Select **Create new** under **Resource group** and enter the resource-group name "FlySimResources." Select **East US** as the **Location** (important!). Accept the default values everywhere else, and then click **Create**.

	> You selected East US as the location because in [Lab 3]({{"/docs/projects/air-traffic-control-simulator-03/" | absolute_url }}), you will create Azure resources in that same region for the IoT Hub to connect to. Azure resources can be connected across regions, but keeping everything within the same data center reduces cost and minimizes latency.

	![The Azure Portal's IoT Hub Configuration pane shows relevant configuration settings.  The pricing tier is set to S1, and a single unit of IoT Hub and 4 Device-to-cloud partitions are entered.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/portal-configure-hub.png" | absolute_url }})

    _Configuring an IoT Hub_
 
1. Click **Resource groups** in the ribbon on the left side of the portal, and then click **FlySimResources** to open the resource group.

	![The Azure Portal's Resource Groups pane displays the newly created IoT Hub.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/open-resource-group.png" | absolute_url }})

    _Opening the resource group_

1. Wait until "Deploying" changes to "Succeeded," indicating that the IoT Hub has been provisioned. You can click the **Refresh** button at the top of the blade to refresh the deployment status.

	![The Asure Portal's Resource Group indicates that the IoT Hub deployment completed successfully.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/deployment-succeeded.png" | absolute_url }})

    _Successful deployment_

Because you selected **S1 - Standard** as the pricing tier in Step 3, you can transmit up to 400,000 messages a day to the IoT Hub for $50 per month. A **Free** tier that accepts up to 8,000 messages per day is also available, but that tier might be too limiting for this exercise. For more information on the various pricing tiers that are available, see [IoT Hub pricing](https://azure.microsoft.com/pricing/details/iot-hub/).

<a name="Exercise2"></a>
### Exercise 2: Deploy an app to the device ###

In this exercise, you will compile an embedded C++ app that transmits events to your Azure IoT Hub and use Visual Studio Code to upload it to the MXChip. Once the app is uploaded, it will begin executing on the device, and it will send a JSON payload containing three accelerometer values (X, Y, and Z) as well as temperature and humidity readings approximately every two seconds. The app is persisted in the firmware and automatically resumes execution if the device is powered off and back on.

1. Using git, clone the [lab's assets](https://github.com/Azure/CloudIoTHack) to your local file system. You can optionally use the download link on the repository's home page to download the assets as a zip file.

1. Start Visual Studio Code and select **Open Folder...** from the **File** menu. Browse to the "FlySimEmbedded" folder included in the lab's assets. 

1. Open **config.h** and replace YOUR_DISPLAY_NAME with a friendly display name. Then save the file. **This name will be seen by everyone when the ATC app is run in Lab 4**, so please choose a name that's appropriate. Also make it as **unique as possible** by including birth dates (for example, "Amelia Earhart 093059") or other values that are unlikely to be duplicated.

	![Entering a display name]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/vs-enter-display-name.png" | absolute_url }})

    _Entering a display name_
 
1. Press **F1** and type "terminal" into the search box. Then select **Select Default Shell**.

	![The VSCode quick start menu has the word 'terminal' entered in it's text box with the selection 'Terminal: Select Default Shell' highlighted.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/select-default-shell-1.png" | absolute_url }})

    _Selecting the default shell_

1. Select **PowerShell** from the list of shells to make PowerShell the default shell.

	![The VSCode quick start menu displays the available terminals to set as default; 'PowerShell' has been highlighted.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/select-default-shell-2.png" | absolute_url }})

    _Making PowerShell the default shell_

1. Select **Run Task** from Visual Studio Code's **Tasks** menu, and then select **cloud-provision** from the drop-down list of tasks. This will begin the process of authorizing your device to access the IoT Hub created in the previous exercise. 

	![The VSCode task selection pane has the 'cloud-provision' task highlighted.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/vs-select-cloud-provision.png" | absolute_url }})

    _Starting the cloud-provisioning process_

1. When a "Device Login" screen appears in your browser, copy the login code displayed in Visual Studio Code's Terminal window to the clipboard.

	![A VSCode terminakl is displaying a device login code as the result of running the 'cloud-provision' task.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/vs-code-prompt.png" | absolute_url }})

    _Getting the device-login code_

1. Return to the "Device Login" screen in the browser, paste the login code into the input field, and click **Continue**.

	![An Azure CLI device login screen with an indication of where to enter a device authorization code.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/portal-enter-device-login.png" | absolute_url }})

    _Logging in to the device_
	 
1. Return to the Terminal window in Visual Studio Code and wait for a list of Azure subscriptions to appear. Use the up- and down-arrow keys to select the Azure subscription that you used to provision the Azure IoT Hub in [Exercise 1](#Exercise1). Then press **Enter** to select that subscription.

1. When a list of IoT Hubs associated with the subscription appears in the Terminal window, select the IoT Hub that you provisioned in [Exercise 1](#Exercise1).

	![The VSCode terminal windows is displayed, showing an IoT Hub from the user's subscription.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/vs-select-iot-hub.png" | absolute_url }})

    _Selecting an Azure IoT Hub_

1. Wait until the message "Terminal will be reused by tasks, press any key to close it" appears in the Terminal window. This indicates that the cloud-provisioning process completed successfully. Your MXChip can now authenticate with the IoT Hub and send messages to it securely.

	![The VSCode terminal window is displayed showing the results of running the 'cloud-provision' task.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/vs-completed-provisioning.png" | absolute_url }})

    _A successful cloud-provision task_

1. Now it's time to upload code to the device to have it transmit events to the IoT Hub. Select **Tasks** > **Run Task** again, and then select **device-upload**. 

	![The VSCode menu displays a list of executable tasks including 'cloud-provision', 'config_wifi' and 'device-upload'.  The 'device-upload' selection is highlighted.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/vs-select-device-upload.png" | absolute_url }})

    _Starting the device-upload process_

1. Wait until you are prompted in the Terminal window to "hold on Button A and then press Button Reset to enter configuration mode." Then do the following:

	- Press and hold the **A button** on the device 
	- With the A button held down, press and release the **Reset button**
	- Release the **A button**

	After a brief pause, the C++ app that reads accelerometer data and transmits it to the IoT Hub will begin uploading to your device. If you are curious to see what the source code looks like, examine the CPP files in the project directory in Visual Studio Code. 

1. Wait until the message "Terminal will be reused by tasks, press any key to close it" appears in the Terminal window. After the device restarts, confirm that the message "IN FLIGHT" appears on the screen of the device, followed by X, Y, and Z values that change when you tilt the board in any direction. These are the accelerometer values passed to the IoT Hub. The fact that they appear on the screen confirms that the upload was successful and that the app is running on the device.

	![The MXChip display shows a label of "In Flight" with telemetry data for x, y and z axis readings from the onboard gyroscope.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/chip-in-flight.png" | absolute_url }})

    _MXChip with your embedded code running on it_

We know that the device is transmitting events. Now let's make sure those events are being received by the IoT Hub.

<a name="Exercise3"></a>
### Exercise 3: Check IoT Hub activity ###

In this exercise, you will use the Azure portal to confirm that the MXCHip is registered with the IoT Hub you created in [Exercise 1](#Exercise1), and also confirm that the hub is receiving messages from the device.

1.  Return to the Azure portal and to the "FlySimResources" resource group. Then click the IoT Hub that you created in Exercise 1.

	![The Azure Portal's Resource Group for this workshop is displayed with the IoT Hub resource selected.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/open-iot-hub.png" | absolute_url }})

    _Opening a blade for the IoT Hub_

1. Click **Overview** and look at the count of messages received and the number of devices registered. Confirm that the device count is 1, and that the number of messages received is greater than zero.

	![The Azure Portal's IoT Hub blade is displaying the Overview tab with a highlight over the Usage statistics panel.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/portal-hub-usage.png" | absolute_url }})

    _Stats regarding the IoT Hub_

1. Click **Device Explorer** to display a list of all devices that are registered to communicate with this IoT Hub. Confirm that your device ("AZ3166") appears in the list.

	![The Azure Portal's IoT Hub blade is displayed with the Device Explorer tab highlighted.  The pane to the right shows that the MXChip has been registered with IoT Hub.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/portal-device-explorer.png" | absolute_url }})

    _Devices registered with the IoT Hub_

1. Return to Visual Studio Code and click the **Connect** icon in the status bar at lower right.

	![The document information display bar at the bottom of a VSCode window shows a two-prong plug symbol indicating where to click to change the baud rate of the MXChip connection.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/vs-click-connect.png" | absolute_url }})

    _Connecting to the device via a COM port_

1. When the icon changes to an 'X', click the Baud rate on the left and select **115200** from the drop-down list to increase the Baud rate. 

	![The document information display bar at the bottom of a VSCode window that shows the baud rate configuration selection menu set to 9600.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/vs-click-baud-rate.png" | absolute_url }})

    _Increasing the Baud rate_

1. Look in Visual Studio Code's Output window and confirm that events are being transmitted. You can also see the JSON format in which they're transmitted. This is the raw data streaming to the IoT Hub. Note that the display name you entered in the previous exercise is transmitted in a field named "deviceId," and that each message includes a timestamp in the "timestamp" field.

	![A VSCode terminal window displays the telemetry data generated by the MXChip.]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab1/vs-viewing-com-data.png" | absolute_url }})

    _Events transmitted from the device to the IoT Hub_

The MXChip is now running embedded code that sends accelerometer data to the IoT Hub. Consumers of that data can examine the X, Y, and Z values and determine the device's physical orientation in space. This sets the stage for the next lab, in which you will make use of that data.

<a name="Summary"></a>
## Summary ##

In this lab, you created an Azure IoT Hub and configured your MXChip to send data to it.

In [Lab 2]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }}), you will build the infrastructure necessary to fly a simulated aircraft using the MXChip. That infrastructure will consist of an Azure Function that transforms accelerometer readings passing through the IoT Hub into flight data denoting the position and attitude of an aircraft, as well as an Azure Event Hub that receives data from the Azure Function. Once the Function and Event Hub are in place, you will connect a client app to the Event Hub and practice flying an aircraft by tilting your MXChip backward and forward to go up and down and rotating it right and left to bank and turn. In other words, the fun is just beginning!
