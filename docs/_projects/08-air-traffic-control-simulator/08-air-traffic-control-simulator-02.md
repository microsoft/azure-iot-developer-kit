---
title: "Air Traffic Control Simulator - Lab 2"
permalink: /docs/projects/air-traffic-control-simulator-02/
excerpt: "Using Azure Functions and Azure Event Hubs to Process IoT Data."
part: 2
header:
  overlay_image: /assets/images/mini-solution/air-traffic-control-simulator/lab2/app-in-flight.png
  overlay_full: true
  teaser: /assets/images/mini-solution/air-traffic-control-simulator/lab2/app-in-flight.png

difficulty: HARD

last_modified_at: 2017-10-30
---


<a name="Overview"></a>
## Overview ##

In [Lab 1]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }}), you configured an [MXChip](https://microsoft.github.io/azure-iot-developer-kit/) to transmit accelerometer data to an Azure IoT Hub. That IoT Hub receives a stream of data revealing the device's 3D orientation in space. It knows, for example, whether the device is tilted forward or backward (and by how much), and it knows when the device is rotated left and right. The app that you uploaded to the device transmits an event containing X, Y, and Z accelerometer readings every two seconds.

In this lab, you will build the infrastructure necessary to fly a simulated aircraft using your MXChip. That infrastructure will consist of an Azure Function that transforms accelerometer readings passing through the IoT Hub into flight data denoting the position and attitude of an aircraft, as well as an Azure Event Hub that receives data from the Azure Function. Once the Function and Event Hub are in place, you will connect a client app named **FlySim** to the Event Hub and practice flying an aircraft using your MXChip. The client app, pictured below, subscribes to events from the Event Hub and shows the disposition of your aircraft in near real time.

![The FlySim app]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/app-in-flight.png" | absolute_url }})

_The FlySim app_


<a name="Prerequisites"></a>
## Prerequisites ##

The following are required to complete this lab:

- An [MXChip IoT DevKit](https://microsoft.github.io/azure-iot-developer-kit/)
- A computer running [Windows 10 Anniversary Edition](https://www.microsoft.com/en-us/software-download/windows10) or higher
- Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }}) to:
    * Have your DevKit connected to Wi-Fi
    * Upgrade to the latest firmware
    * Prepare the development environment
- An active Azure subscription. If you do not have one, you can register via one of the methods:
    * Activate a [free 30-day trial Microsoft Azure account](https://azureinfo.microsoft.com/us-freetrial.html){:target="_blank"}
    * Claim your [Azure credit](https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/){:target="_blank"} if you are MSDN or Visual Studio subscriber
- An available Wi-Fi connection or mobile hotspot. Note that the Wi-Fi connection can (and should) be secure, but it must be ungated (i.e. no intermediate login page is required. Gated Wi-Fi is common in public venues and hotels).

	Note: For developers work on a Mac, please see [this article](https://docs.microsoft.com/en-us/windows/uwp/porting/setting-up-your-mac-with-windows-10) for installing Windows 10 to enable building and running the UWP portion of this lab.

<a name="Lab-Sections"></a>
## Lab Sections ##

Here are labs that comprise this project:

- [Lab 1 - Getting started with the Azure MxChip and Azure IoT]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }})
- [Lab 2 - Using Azure Functions and Azure Event Hubs to Process IoT Data.]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }})
- [Lab 3 - Performing Real-Time Proximity Detection with Azure Stream Analytics]({{"/docs/projects/air-traffic-control-simulator-03/" | absolute_url }})
- [Lab 4 - Complete the solution and enable Cloud-to-Device communication.]({{"/docs/projects/air-traffic-control-simulator-04/" | absolute_url }})

---

<a name="Exercises"></a>
## Exercises ##

This lab includes the following exercises:

- [Exercise 1: Provision an Azure Event Hub](#Exercise1)
- [Exercise 2: Provision an Azure storage account](#Exercise2)
- [Exercise 3: Write an Azure Function to transform data](#Exercise3)
- [Exercise 4: Deploy the Azure Function to the cloud](#Exercise4)
- [Exercise 5: Connect the client app to the Event Hub](#Exercise5)
 
Estimated time to complete this lab: **60** minutes.

<a name="Exercise1"></a>
### Exercise 1: Provision an Azure Event Hub ###

Azure IoT Hubs were created to provide secure, bidirectional endpoints for IoT devices to talk to. They are wrappers around [Azure Event Hubs](https://azure.microsoft.com/services/event-hubs/), which support unidirectional communication only but are ideal for aggregating events at scale and disseminating those events to interested clients. "Client" could mean another Azure service such as [Stream Analytics](https://azure.microsoft.com/services/stream-analytics/), or it could be an app you've written that subscribes to events reaching the Event Hub.

In this exercise, you will use the Azure Portal to create an Event Hub that will ultimately receive data from an Azure Function attached to the IoT Hub you created in [Lab 1]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }}), and that will provide input to the FlySim app. 

1. Open the [Azure Portal](https://portal.azure.com) in your browser. If asked to log in, do so using your Microsoft account.

1. Click **+ New**, followed by **Internet of Things** and **Event Hubs**.

	![Adding a new Event Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/new-event-hub.png" | absolute_url }})

    _Adding a new event hub_

1. Type a namespace name into the **Name** box. The name must be unique within Azure, so make sure a green check mark appears next to it. Also make sure **Pricing tier** is set to **Standard**. Select **Use existing** under **Resource group** and select the "FlySimResources" resource group that you created in Lab 1. Choose the **East US** region in the **Location** drop-down, and then click **Create**.

	> It is important to select the East US region to locate the Event Hub in the same region as the IoT Hub you created in [Lab 1]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }}). This reduces cost and minimizes latency.

    ![Creating a namespace]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/create-namespace.png" | absolute_url }})

    _Creating a namespace_

1. Click **Resource groups** in the ribbon on the left side of the portal, and then click **FlySimResources** to open the resource group.

	![Opening the resource group]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/open-resource-group.png" | absolute_url }})

    _Opening the resource group_

1. Wait until "Deploying" changes to "Succeeded," indicating that the IoT Hub has been provisioned. (You can click the **Refresh** button at the top of the blade to refresh the deployment status.) Then click the Event Hub that you just created.

	![Successful deployment]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/open-event-hub.png" | absolute_url }})

    _Successful deployment_
 
1. Click **+ Event Hub** at the top of the blade.

	![Adding an Event Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/add-event-hub.png" | absolute_url }})

    _Adding an Event Hub_
 
1. Type "flysim" (without quotation marks) into the **Name** box. Then click the **Create** button.
 
	![Creating an Event Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/create-event-hub.png" | absolute_url }})

    _Creating an Event Hub_

1. Wait a moment for the Event Hub to be created. Then confirm that "flysim" appears in the list of Event Hubs.
 
	![The new Event Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/flysim-event-hub.png" | absolute_url }})

    _The new Event Hub_

How much do Azure Event Hubs cost? The **Standard** pricing tier that you selected in Step 3 incurs a nominal charge per million events received, as well as a flat hourly charge per throughput unit. Currently, an Event Hub with one throughput unit (each throughput unit can handle 1 MB per second of data input and 2 MB per second of data output) that receives one million events per day costs less than a dollar a day. For more information and current pricing, see [Event Hubs pricing](https://azure.microsoft.com/pricing/details/event-hubs/).

<a name="Exercise2"></a>
### Exercise 2: Provision an Azure storage account ###

Before you deploy an Azure Function from Visual Studio, you need to create a repository for the Function's code, logs, and history. In this exercise, you will create an Azure storage account for that purpose.

1. Return to the Azure Portal. Click **+ New**, followed by **Storage** and **Storage account**.

	![Creating a new storage account]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/new-storage-account.png" | absolute_url }})

    _Creating a new storage account_
 
1. Enter a unique name for the storage account and make sure a green check mark appears next to it. Select **Use existing** under **Resource group** and select the "FlySimResources" resource group that you created in Lab 1. Choose **East US** as the **Location**, and then click the **Create** button.

	![Creating a new storage account]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/create-storage-account.png" | absolute_url }})

    _Creating a new storage account_
 
Now that the storage account has been created, it's time to create an Azure Function to transform accelerometer data reaching the IoT Hub into flight data and send it to the Event Hub you created in [Exercise 1](#Exercise1).

<a name="Exercise3"></a>
### Exercise 3: Write an Azure Function to transform data ###

[Azure Functions](https://azure.microsoft.com/services/functions/) enable you to deploy code to the cloud and execute it there without separately spinning up virtual machines (VMs) or other infrastructure to host them. They can be written in a number of languages, including C#, F#, Java, JavaScript, Python, Bash, and PowerShell, and they are easily connected to Azure IoT Hubs, Event Hubs and other Azure services.

You can write Azure Functions in the Azure Portal, or you can write them in Visual Studio 2017. The latter provides a more robust environment for testing and debugging your code. In this exercise, you will use Visual Studio 2017 to write an Azure Function that transforms raw accelerometer data arriving at the IoT Hub you created in Lab 1 into flight data denoting the disposition of an aircraft, and that transmits the transformed data to the Event Hub you created in [Exercise 1](#Exercise1). 

1. Start Visual Studio and use the **Help** > **About Microsoft Visual Studio** command to verify that you are running Visual Studio 15.3 or higher. If not, update Visual Studio now.

1. Select **Extensions and Updates...** from Visual Studio's **Tools** menu, and select **Visual Studio Marketplace** under **Updates** on the left. If "Azure Functions and Web Jobs Tools" appears in the list of updates, click the **Update** button next to it.

	![Installing the Azure Functions update]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/install-azure-tools.png" | absolute_url }})

    _Installing the Azure Functions update_

1. Use Visual Studio's **File** > **New Project** command to create a new C# Azure Functions project named "FlySimFunctions."

	![Creating a new Azure Functions project]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/vs-add-project.png" | absolute_url }})

    _Creating a new Azure Functions project_

1. Right-click the FlySimFunctions project in Solution Explorer and use the **Add** > **New Item...** command to add an Azure Function file named **FlySimIoTFlightData.cs**.

	![Adding an Azure Function to the project]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/vs-add-new-function.png" | absolute_url }})

    _Adding an Azure Function to the project_

1. In the "New Azure Function" dialog, select **Event Hub trigger**, type "IoTHubConnection" into the **Connection** box, delete any default **Path** value, and then click **OK**.

	![Specifying the Function trigger]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/vs-select-event-hub-trigger.png" | absolute_url }})

    _Specifying the Function trigger_

1. Replace the contents of **FlySimIotFlightData.cs** with the following code:

	```csharp
	using Microsoft.Azure.WebJobs;
	using Microsoft.Azure.WebJobs.Host;
	using Microsoft.Azure.WebJobs.ServiceBus;
	using Newtonsoft.Json;
	using Newtonsoft.Json.Converters;
	using System;
	using System.Threading.Tasks;
	
	namespace FlySimFunctions
	{
	    public static class FlySimIoTFlightData
	    {
	        private static DateTime? _last = null;
	        private static double _airspeed = 384.0;
	        private static double _heading = 0.0;
	        private static double _altitude = 32000.0;
	        private static double _latitude = 37.242;
	        private static double _longitude = -115.8190;
	        private static double _pitch = 0.0;
	        private static double _roll = 0.0;
	
	        [FunctionName("FlySimIoTFlightData")]
	        public async static Task Run([EventHubTrigger("", Connection = "IoTHubConnection")]string inputMessage, [EventHub("outeventhub", Connection = "EventHubConnection")] IAsyncCollector<string> outputMessage, TraceWriter log)
	        {
	            // Deserialize the JSON input
	            var converter = new IsoDateTimeConverter { DateTimeFormat = "MM/dd/yy HH:mm:ss" };
	            var input = JsonConvert.DeserializeObject<Input>(inputMessage, converter);
	            var outputPayload = "";
	
	            if (_last != null && input.timestamp > _last.Value)
	            {
	                // Compute milliseconds elapsed since last event was received
	                var milliseconds = (input.timestamp - _last.Value).TotalMilliseconds;
	                _last = input.timestamp;
	
	                // Constrain pitch to +/-15 degrees (positive == nose down)
	                _pitch = Math.Max(Math.Min(input.y / 11.0, 15.0), -15.0);
	
	                // Constrain roll to +/-30 degrees (positive == rolling right)
	                _roll = Math.Max(Math.Min(input.x / 11.0, 30.0), -30.0);
	
	                // Compute new heading assuming hard left or right turns 10 degrees per second
	                var delta = (milliseconds / 100.0) * (_roll / 30.0);
	                _heading += delta;
	
	                if (_heading < 0.0)
	                    _heading += 360.0;
	                else if (_heading >= 360.0)
	                    _heading -= 360.0;
	
	                // Compute new latitude and longitude
	                var radians = _heading * Math.PI / 180.0;
	                var distance = (milliseconds / 1000) * (_airspeed * 0.000277778); // 1 MPH == 0.000277778 miles per second
	                var dx = distance * Math.Sin(radians);
	                var dy = distance * Math.Cos(radians);
	                _latitude += (dy / 69.0); // Assume 69 miles per 1 degree of latitude
	                _longitude += (dx / 69.0); // Assume 69 miles per 1 degree of longitude
	
	                // Compute new altitude and constrain it to 1,000 to 40,000 feet
	                _altitude = _altitude - (distance * 5280.0 * Math.Sin(_pitch * Math.PI / 180.0));
	                _altitude = Math.Max(Math.Min(_altitude, 40000.0), 1000.0);
	
	                // Send JSON output
	                var output = new Output { deviceId = input.deviceId, timestamp = input.timestamp, temperature = input.temperature, humidity = input.humidity, airspeed = _airspeed, altitude = _altitude, heading = _heading, latitude = _latitude, longitude = _longitude, pitch = _pitch, roll = _roll };
	                outputPayload = JsonConvert.SerializeObject(output);
	            }
	            else
	            {
	                // This is the first event received, so compute initial parameters
	                _last = input.timestamp;
	
	                var hash = (uint)input.deviceId.GetHashCode();
	                _heading = hash % 360;
	                _altitude = 10000.0 + ((hash % 25) * 1000);
	                _latitude = 36.7 + ((double)((hash / 100) % 100) / 100.0);
	                _longitude = -116.8 + ((double)(hash % 100) / 50.0);

	                var output = new Output { deviceId = input.deviceId, timestamp = input.timestamp, temperature = input.temperature, humidity = input.humidity, airspeed = _airspeed, altitude = _altitude, heading = _heading, latitude = _latitude, longitude = _longitude, pitch = _pitch, roll = _roll };
	                outputPayload = JsonConvert.SerializeObject(output);
	                
	                log.Info("First event received");
	            }
	
	            await outputMessage.AddAsync(outputPayload);
	            log.Info(String.Format("Heading={0}, Altitude={1}, Latitude={2}, Longitude={3}", _heading, _altitude, _latitude, _longitude));
	            return;
	        }
	    }
	
	    class Input
	    {
	        public string deviceId;
	        public DateTime timestamp;
	        public string messageId;
	        public double temperature;
	        public double humidity;
	        public double x;
	        public double y;
	        public double z;
	    }
	
	    class Output
	    {
	        public string deviceId;
	        public DateTime timestamp;
	        public double airspeed;
	        public double heading;
	        public double altitude;
	        public double latitude;
	        public double longitude;
	        public double pitch;
	        public double roll;
	        public double temperature;
	        public double humidity;
	    }
	}
	```

	Take a moment to examine the code you pasted in, beginning with the method's parameter list. ```inputMessage``` holds the JSON-formatted message that arrived at the IoT Hub, while ```outputMessage``` represents the message (or messages) to be transmitted to the Event Hub. After deserializing the input message, this Azure Function computes new flight data — airspeed, heading, altitude, and so on — from the accelerometer values passed by the device. Then it serializes the flight data into JSON and outputs it to the Event Hub by calling ```AddAsync``` on the ```outputMessage``` parameter.


1. Open **local.settings.json** and replace the contents of the file with the following JSON:

	```json
	{
	  "IsEncrypted": false,
	  "Values": {
		"IoTHubConnection": "IOT_HUB_ENDPOINT;EntityPath=IOT_HUB_NAME",
		"EventHubConnection": "EVENT_HUB_ENDPOINT;EntityPath=flysim",
		"AzureWebJobsStorage": "STORAGE_ACCOUNT_ENDPOINT",
		"AzureWebJobsDashboard": "",
	  }
	}
	```

	This file contains three values that must be updated before you build and test your Function:

	- **IoTHubConnection** - Connection string for the IoT Hub created in the previous lab
	- **EventHubConnection** - Connection string for the Event Hub created in [Exercise 1](#Exercise1)
	- **AzureWebJobsStorage** - Connection string for the storage account created in [Exercise 2](#Exercise2)

	You will update these values in the next few steps.

1. Return to the "FlySimResources" resource group in the Azure Portal and click the IoT Hub that you created in [Lab 1]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }}).

	![Opening a blade for the IoT Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/open-iot-hub.png" | absolute_url }})

	_Opening a blade for the IoT Hub_

1. Click **Endpoints**, and then click **Events**.

	![Viewing endpoint information]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/portal-click-iot-endpoints.png" | absolute_url }})

    _Viewing endpoint information_

1. Click the **Copy** button next to "Event Hub-compatible endpoint" to copy the endpoint the clipboard.

	![_Copying the endpoint to the clipboard]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/portal-copy-iot-endpoint.png" | absolute_url }})

    _Copying the endpoint to the clipboard_

1. Return to Visual Studio and replace IOT_HUB_ENDPOINT in **local.settings.json** with the value on the clipboard. Then replace IOT_HUB_NAME on the same line with the name of your IoT Hub.

1. Return to the "FlySimResources" resource group in the Azure Portal and click the Event Hub that you created in [Exercise 1](#Exercise1).

	![Opening a blade for the Event Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/open-event-hub-2.png" | absolute_url }})

	_Opening a blade for the event hub_

1. Click **Shared access policies**, followed by **RootManageSharedAccessKey**.

	![Opening RootManageSharedAccessKey]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/portal-click-event-hub-policy.png" | absolute_url }})

    _Opening RootManageSharedAccessKey_

1. Click the **Copy** button next to "Connection string–primary key" to copy the connection string the clipboard.

	![Copying the connection string to the clipboard]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/portal-copy-event-hub-sas.png" | absolute_url }})

    _Copying the connection string to the clipboard_

1. Return to Visual Studio and replace EVENT_HUB_ENDPOINT in **local.settings.json** with the value on the clipboard.

1. Return to the "FlySimResources" resource group in the Azure Portal and click the storage account that you created in [Exercise 2](#Exercise2).

	![Opening a blade for the storage account]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/open-storage-account.png" | absolute_url }})

	_Opening a blade for the storage account_

1. Click **Access keys**, and then click the **Copy** button next to the first connection string to copy the connection string to the clipboard.

	![Copying the connection string to the clipboard]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/portal-copy-storage-key.png" | absolute_url }})

    _Copying the connection string to the clipboard_

1. Return to Visual Studio and replace STORAGE_ACCOUNT_ENDPOINT in **local.settings.json** with the value on the clipboard.

1. Now it's time to test the Function and make sure it is triggered each time an event from the MXChip reaches the IoT Hub. If your MXChip isn't plugged in, connect it to your laptop and confirm that the device screen says "IN FLIGHT."

	![The MXChip in flight]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/chip-in-flight.png" | absolute_url }})

    _The MXChip in flight_ 

1. Open **FlySimIoTFlightData.cs** in Visual Studio and set a breakpoint on line 27. Then press **F5** to start debugging.

	> If Visual Studio prompts you to download the Azure Functions CLI tools, answer yes. You may then be warned that Windows Firewall has "blocked some features of this app." If that happens, click **Allow access** to unblock the CLI tools. 

1. Wait for execution to stop at the breakpoint on line 27. Then hover the cursor over the ```inputMessage``` parameter to view the JSON payload sent from the device to the IoT Hub and input to the Azure Function.

	> If the breakpoint is never hit but your MXChip is plugged in and transmitting data, then the Azure Function isn't properly connected to the IoT Hub. If that's the case, confirm that the setting named "IoTHubConnection" in **local.settings.json** contains the connection string and IoT Hub name shown in Step 10 of this exercise.

	![Viewing the input message in the debugger]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/vs-view-debug-info.png" | absolute_url }})

    _Viewing the input message in the debugger_

1. Stop the debugger and remove the breakpoint from line 27.

The fact that the breakpoint was hit tells you that the IoT Hub is receiving messages from the device and that the Azure Function is being triggered when messages arrive. But at the moment, the Function is running locally. Testing Functions locally is a great way to work the bugs out and make sure they work as expected. But the ultimate home for an Azure Function is in the cloud.

<a name="Exercise4"></a>
### Exercise 4: Deploy the Azure Function to the cloud ###

In this exercise, you will use Visual Studio to deploy an Azure Function App containing the Azure Function that you wrote in the previous exercise.

1. In Solution Explorer, right-click the FlySimFunctions project and select **Publish...**. Make sure **Azure Function App** and **Create New** are selected, and then click the **Publish** button. 

	![Publishing an Azure Function App]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/vs-select-publish.png" | absolute_url }})

    _Publishing an Azure Function App_
 
1. In the ensuing "Create App Service" dialog, select the "FlySimResources" group so the Function App will be added to the same resource group as the other resources you've created, and select the storage account that you created in [Exercise 2](#Exercise2). Click the **New...** button next to "App Service Plan" and create a new App Service plan named "FlySimFunctionsPlan" in the East US region. Then click the **Create** button.

	> Azure Function Apps deployed with an App Service plan are billed at [normal App Service rates](https://azure.microsoft.com/pricing/details/app-service/). Function Apps can also employ a consumption plan that bills based on execution time, but Functions running under the consumption plan aren't guaranteed to execute immediately. For more information on consumption plans versus App Service plans, see [Azure Functions hosting plans comparison](https://docs.microsoft.com/azure/azure-functions/functions-scale).

	![Entering Function App parameters]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/vs-create-app-service-dialog.png" | absolute_url }})

    _Entering Function App parameters_

1. Wait for the Function App to be deployed. (It typically takes a few minutes.) Then return to the "FlySimResources" resource group in the Azure portal and click the Function App.

	![Opening the Function App]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/open-function-app.png" | absolute_url }})

    _Opening the Function App_
  
1. Click **Application settings**.

	![Opening application settings for the Function App]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/portal-click-app-settings.png" | absolute_url }})

    _Opening application settings for the Function App_
 
1. Click **+ Add new setting** in the "Application settings" section. Add a setting named "IoTHubConnection" and set its value equal to that of the setting with the same name in **local.settings.json**. Then add a setting named "EventHubConnection" whose value equals that of the same setting in **local.settings.json**. When you're finished, click **Save** at the top of the blade.

	> When you tested the Function locally, these settings came from **local.settings.json**. Now that the Function is running in the cloud, the same settings will come from the Function App's application settings.

	![Adding application settings]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/portal-add-app-settings.png" | absolute_url }})

    _Adding application settings_
 
1. Make sure your MXChip is plugged in and transmitting data. Then click the Function name in the menu on the left. Watch the output log at the bottom of the screen and confirm that the Function is sending and receiving data. A new entry should appear in the output log every couple of seconds. Observe that the JSON output includes properties such as "Heading" and "Altitude."

	> If the log shows no output but your MXChip is plugged in and transmitting data, then the Azure Function isn't properly connected to the IoT Hub. If that's the case, review Step 5 of this exercise and confirm that the application setting named "IoTHubConnection" contains the connection string and IoT Hub name shown in Exercise 3, Step 10.

	![The FlySimIoTFlightData Function running in the portal]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/portal-function-running.png" | absolute_url }})

    _The FlySimIoTFlightData Function running in the portal_

The Azure Function that you wrote is now running in cloud, transforming accelerometer data reaching the IoT Hub into flight data, and sending the flight data to the Event Hub. Now comes the fun part: wiring the Event Hub up to a client app so you can use the MXChip to fly an aircraft!

<a name="Exercise5"></a>
### Exercise 5: Connect the client app to the Event Hub ###

The "FlySim" folder in the lab's assets contains a Universal Windows Platform (UWP) app that you can run to fly a simulated aircraft on your laptop using your MXChip. Before you run it, you need to make some modifications to connect it to the Event Hub that receives data from the Azure Function.

1. Go to the "FlySim" folder included in the lab download and open **FlySim.sln** in Visual Studio.

1. Right-click the FlySim solution in Solution Explorer and select **Restore NuGet Packages** to load all the dependencies.

1. Repeat Steps 12 through 14 of [Exercise 3](#Exercise3) to copy the Event Hub's connection string to the clipboard.

1. Return to Visual Studio and open **CoreConstants.cs** in the project's "Common" folder. Replace EVENT_HUB_ENDPOINT on line 11 with the connection string that's on the clipboard.

1. Right-click the project in Solution Explorer and use the **Add** > **New Folder** command to add a folder named "Listeners."

1. Right-click the "Listeners" folder in Solution Explorer and use the **Add** > **Class...** command to add a class file named **FlightActivityListener.cs**. Then replace the contents of the file with the following code:

	```csharp
	using System;
	using System.Collections.ObjectModel;
	using System.Text;
	using System.Threading.Tasks;
	using Windows.ApplicationModel.Core;
	using Windows.Devices.Geolocation;
	using Windows.UI.Core;
	using FlySim.Common;
	using Newtonsoft.Json;
	using ppatierno.AzureSBLite.Messaging;
	
	namespace FlySim.Listeners
	{
	    public class FlightActivityListener
	    {
	        private EventHubClient client { get; set; }
	        private EventHubConsumerGroup consumerGroup { get; set; }
	        private EventHubReceiver receiver { get; set; }
	        private FlightInformation flightInformation { get; set; }
	        private ObservableCollection<ActivePlaneInformation> activePlanes { get; set; }
	
	        private bool isInitialized { get; set; }
	
	        public async void StartListeningAsync(FlightInformation flightInformation,
	            ObservableCollection<ActivePlaneInformation> activePlanes)
	        {
	            this.activePlanes = activePlanes;
	            this.flightInformation = flightInformation;
	             
	            var connectionString = $"{CoreConstants.FlightActivityEventHubEndpoint};EntityPath={CoreConstants.FlightActivityEventHubName}";
	
	            client = EventHubClient.CreateFromConnectionString(connectionString);
	            consumerGroup = client.GetDefaultConsumerGroup();
	            receiver = consumerGroup.CreateReceiver("0", DateTime.Now.ToUniversalTime());
	
	            await Task.Run(() => StartListeningForFlightActivityCommands());
	        }
	
	        private async void StartListeningForFlightActivityCommands()
	        {
	            while (true)
	            {
	                await Task.Delay(1);
	                var eventData = receiver.Receive();
	
	                if (eventData != null)
	                {
	                    var bytes = eventData.GetBytes();
	                    var payload = Encoding.UTF8.GetString(bytes);
	                    var flightInfo = JsonConvert.DeserializeObject<NewFlightInfo>(payload);
	                    UpdateFlightInformation(flightInfo);
	                }
	            }
	        }
	
	        private async void UpdateFlightInformation(NewFlightInfo info)
	        {
	            var dispatcher = CoreApplication.MainView.CoreWindow.Dispatcher;
	
	            await dispatcher.RunAsync(CoreDispatcherPriority.Normal, () =>
	            {
	                flightInformation.Hydrate(info);
	                
	                activePlanes.Add(new ActivePlaneInformation
	                {
	                    DisplayName = info.deviceId,
	                    Location = new Geopoint(new BasicGeoposition
	                    {
	                        Latitude = info.latitude,
	                        Longitude = info.longitude
	                    })
	                });
	
	                activePlanes.RemoveAt(0);
	                App.ViewModel.SetFlightStatus(info.deviceId);
	
	                if (!isInitialized)
	                {
	                    isInitialized = true;
	                    App.ViewModel.BringPlaneIntoView(info.latitude, info.longitude);
	                }
	            });
	        }
	    }
	}
	```

	 ```EventHubClient```, ```EventHubReceiver```, and other classes used here come from a popular NuGet package named [AzureSBLite](https://github.com/ppatierno/azuresblite). These classes make it extremely easy to connect to Azure Event Hubs and receive events from them asynchronously. The call to ```EventHubReceiver.Receive``` is performed on a background thread, and it blocks until a message arrives at the Event Hub. After the message is retrieved and deserialized, it is passed to ```UpdateFlightinformation```, which uses ```Dispatcher.RunAsync``` to marshal back to the UI thread and update the UI.

1. Open **MainViewModel.cs** in the project's "ViewModels" folder and the following ```using``` statement to those at the top of the file:

	```csharp
	using FlySim.Listeners;
	```

1. Now add the following statement just before the class constructor:

	```csharp
	public FlightActivityListener FlightActivityListener = new FlightActivityListener();
	```

	This statement creates an instance of the ```FlightActivityListener``` class you created in the previous step and assigns it to a public field.

1. Add the following statement to the ```MainViewModel``` class's ```InitializeSystem``` method to start listening for events from the Event Hub when the app starts up:

	```csharp
	FlightActivityListener.StartListeningAsync(CurrentFlightInformation, ActivePlanes);
	```

1. Save your changes and build the solution to make sure it builds successfully.

1. Reset your aircraft to its default starting position over the Nevada desert by going to the Function App in the Azure Portal and clicking **Restart**.

	![Restarting the Function App]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/restart-function-app.png" | absolute_url }})

    _Restarting the Function App_

1. Make sure your MXChip is plugged into your laptop. Then return to Visual Studio and press **Ctrl+F5** to launch FlySim. Confirm that the app starts and that after a few seconds, an "aircraft" labeled with the display name you entered in [Lab 1]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }}) appears on the screen. Maximize the window so you can see all the readouts and controls.

	> If your aircraft never appears in the app but your MXChip is plugged in and transmitting data, review Step 4 of this exercise and confirm that the connection string you pasted into **CoreConstants.cs** is the one shown in Exercise 3, Step 14. Also review Exercise 4, Step 5 and make sure the application setting named "EventHubConnection" contains the same connection string.

	![FlySim showing Amelia Earhart over the Nevada desert]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/app-in-flight.png" | absolute_url }})

    _FlySim showing Amelia Earhart over the Nevada desert_

1. Hold the MXChip in the palm of your hand so that the gold connectors are at the rear (pointed toward your body). Imagine that the MXChip is an aircraft, and that the end with the gold connectors is the tail of the plane and the end with the micro-USB connector is the nose of the plane.
 
1. Tilt the board to the right and confirm that the artificial horizon rotates accordingly. Note that the artificial horizon will rotate in the **opposite direction of the board** — just like the artificial horizon in the instrument panel of a real plane. Also confirm that if you hold the right turn, the heading readout increases and the airplane on the map rotates clockwise.

	> Expect a slight delay between the time you move the board and the app responds. Most of the delay is due to the fact that the app running on the MXChip is only transmitting events every couple of seconds. The latency resulting from events being transmitted from the MXChip to an IoT Hub in the cloud, then transformed, sent to an Event Hub, and transmitted down to the client app is minimal unless you have a very slow Wi-Fi connection.

	![Making a right turn]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/app-turning.png" | absolute_url }})

    _Making a right turn_

1. Now level the wings and tilt the nose of the plane up. Confirm that the background of the artificial horizon shifts down showing more blue, indicating that the plane is in a nose-up attitude. Also confirm that if you keep the nose up, the altitude readouts in the instrument panel and on the map increase over time.

	> Tip: If your plane flies off the screen and is no longer visible on the map, click the airplane in the artificial horizon to bring it back into view.

	![Pointing the nose up]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab2/app-ascending.png" | absolute_url }})

    _Pointing the nose up_

Practice flying around until you feel confident in your ability to control the plane. Try flying a straight heading while maintaining a constant altitude. Also pick landmarks on the ground and practice flying around them at different altitudes. These skills will come in handy in [Lab 4]({{"/docs/projects/air-traffic-control-simulator-04/" | absolute_url }}).

<a name="Summary"></a>
## Summary ##

You can now fly a simulated aircraft using the MXChip that you configured in [Lab 1]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }}). An Azure Function transforms accelerometer data from the MXChip into flight data, the flight data is transmitted to an Azure Event Hub, and a client app subscribes to events from the Event Hub so it can show the aircraft's position and attitude in real time.

In [Lab 3]({{"/docs/projects/air-traffic-control-simulator-03/" | absolute_url }}), you will add Azure Stream Analytics to the mix so it can see your peer's aircraft (or drones), determine when two aircraft are too close together, and transmit a warning to affected pilots. It's about to get very real — and very intense!