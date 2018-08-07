---
title: "Air Traffic Control Simulator - Lab 4"
permalink: /docs/projects/air-traffic-control-simulator-04/
excerpt: "Complete the solution and enable Cloud-to-Device communication."
part: 4
header:
  overlay_image: /assets/images/mini-solution/air-traffic-control-simulator/lab2/app-in-flight.png
  overlay_full: true
  teaser: /assets/images/mini-solution/air-traffic-control-simulator/lab2/app-in-flight-th.jpg

difficulty: HARD

last_modified_at: 2017-10-30
---

{% include toc icon="columns" %}

## Overview

In the previous session, you or your peer created an [Azure Stream Analytics](https://azure.microsoft.com/services/stream-analytics/) job that analyzes incoming data for aircraft that are too close together. Additionally, you created a pair of Event Hubs: one to provide input to the Stream Analytics job, and another to receive output.

In this lab, you will close the loop by marrying what you built in Labs 1 and 2 with the Event Hubs and Azure Stream Analytics query built in [Lab 3]({{"/docs/projects/air-traffic-control-simulator-03/" | absolute_url }}) to assemble a complete end-to-end solution. First, you will modify the Azure Function you wrote in [Lab 2]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }}) to transmit flight data to the shared input hub — the one that provides input to Stream Analytics — so Stream Analytics *and* the ATC app presented at the end of the previous session can see all of the aircraft.

![The ATC app with many planes in flight]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/atc-app.png" | absolute_url }})

_The ATC app with many planes in flight_

Second, you will connect the client app that you built in [Lab 2]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }}) to the shared output hub — the one that receives output from Stream Analytics — so that when your aircraft comes too close to another and turns red in the ATC app, it turns red in the client app, too.

Third, you will modify the client app so that when it is notified that your aircraft is too close to another, it transmits a warning message back to the MXChip IoT DevKit through the IoT Hub that the device is connected to. The MXChip IoT DevKit will respond by displaying the warning on its screen and lighting an LED. To top it off, you will use [Microsoft Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) to translate the warning message into the language of the user's choice.

Finally, you will join with your peers (or the drones spawned by the **FlySimTest** application) to fly through a crowded air-traffic control sector, and see all the different pieces of the solution work together to analyze large volumes of data in real time and help ensure that all planes arrive safely at their destinations.

<a name="Prerequisites"></a>
## Prerequisites ##

The following are required to complete this lab:

- An [MXChip IoT DevKit](https://microsoft.github.io/azure-iot-developer-kit/)
- A computer running [Windows 10 Anniversary Edition](https://www.microsoft.com/en-us/software-download/windows10) or higher
- Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }}) to:
    * Have your IoT DevKit connected to Wi-Fi
    * Upgrade to the latest firmware
    * Prepare the development environment
- An active Azure subscription. If you do not have one, you can register via one of the methods:
    * Activate a [free 30-day trial Microsoft Azure account](https://azure.microsoft.com/en-us/free/){:target="_blank"}
    * Claim your [Azure credit](https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/){:target="_blank"} if you are MSDN or Visual Studio subscriber
- An available Wi-Fi connection or mobile hotspot. Note that the Wi-Fi connection can (and should) be secure, but it must be ungated (i.e. no intermediate login page is required. Gated Wi-Fi is common in public venues and hotels).

**Note:** For developers work on a Mac, please see [this article](https://docs.microsoft.com/en-us/windows/uwp/porting/setting-up-your-mac-with-windows-10) for installing Windows 10 to enable building and running the UWP portion of this lab.
{: .notice--info}

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

- [Exercise 1: Connect the Azure Function to the shared input hub](#Exercise1)
- [Exercise 2: Connect the client app to the shared output hub](#Exercise2)
- [Exercise 3: Update the client app to talk back to the device](#Exercise3)
- [Exercise 4: Test the finished solution](#Exercise4)
 
Estimated time to complete this lab: **60** minutes.

<a name="Exercise1"></a>
## Exercise 1: Connect the Azure Function to the shared input hub ##

In [Lab 2]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }}), you deployed an Azure Function that reads input from an Azure IoT Hub, transforms accelerometer data coming from your MXChip IoT DevKit into flight data, and transmits the output to an Azure Event Hub that provides input to the FlySim app. In this exercise, you will add an output to the Azure Function so that it transmits the same flight data to the shared input hub created by the instructor in [Lab 3]({{"/docs/projects/air-traffic-control-simulator-03/" | absolute_url }}). Because you and your peers are making the same modification, and because the shared input hub provides data to the ATC app and to Stream Analytics, the ATC app will be able to show all the aircraft that are in the air, and the Stream Analytics job will be able to detect when aircraft come too close together.   

1. Start Visual Studio and open the FlySimFunctions solution that you created in [Lab 2]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }}).

1. Add the following parameter to the ```Run``` method:

	```csharp
	[EventHub("sharedouteventhub", Connection = "SharedEventHubConnection")] IAsyncCollector<string> sharedOutputMessage,
	```

	The modified method signature should look like this:

	![The modified Run method]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/modified-function-1.png" | absolute_url }})

    _The modified Run method_

	The ```sharedOutputMessage``` parameter that you added represents output messages to the shared Event Hub.

1. Scroll down to the end of the ```Run``` method and add the following statement, just after the statement that calls ```outputMessage.AddAsync()``` and before the call to ```log.Info()```:

	```csharp
	await sharedOutputMessage.AddAsync(outputPayload);
	```

	The last four lines of the method should now look like this:

	![The modified Run method]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/modified-function-2.png" | absolute_url }})

    _The modified Run method_

	The statement that you added transmits the same flight data to the shared Event Hub that is already being transmitted to the personal Event Hub created in [Lab 2]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }}).

1. Open **local.settings.json** and insert the following statement directly below   "EventHubConnection:"

	```json
	 "SharedEventHubConnection": "SHARED_EVENT_HUB_ENDPOINT;EntityPath=flysim-shared-input-hub",
	```

1. Navigate to the Gist URL you created in [Lab 3]({{"/docs/projects/air-traffic-control-simulator-03/" | absolute_url }}) (for example, https://gist.github.com/scottgu) and copy the connection string from the public gist to the clipboard. Leave the browser window open so you can easily retrieve this connection string again.

	![Copying the connection string to the clipboard]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/copy-from-gist.png" | absolute_url }})

	_Copying the connection string to the clipboard_

1. Return to Visual Studio and replace "SHARED_EVENT_HUB_ENDPOINT" in **local.settings.json** with the value on the clipboard. 

1. Save your changes and rebuild the solution to ensure that it builds successfully. Then right-click the project in Solution Explorer and use the **Publish...** command to publish the updated Azure Function.

1. The next step is to add the shared input hub's connection string to the Function App's application settings. Go to the Azure Portal and open the Function App that you published in [Lab 2]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }}). Then click **Application settings**.

	![Opening application settings]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/open-application-settings.png" | absolute_url }})

	_Opening application settings_

1. Click **+ Add new setting** in the "Application settings" section. Add a setting named "SharedEventHubConnection" and set its value equal to the connection string that you copied to the clipboard in Step 5. When you're finished, click **Save** at the top of the blade.

	![Adding an application setting]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/new-application-setting.png" | absolute_url }})

    _Adding an application setting_

1. Connect your MXChip IoT DevKit to your laptop if it isn't already connected. Confirm that it's sending data by watching for "IN FLIGHT" to appear on the screen of the device. Then turn to the ATC app and watch for your airplane to appear. If necessary, zoom the ATC app out so that all aircraft are visible. Seeing your airplane in the ATC app is confirmation that you did everything correctly in this exercise.

	> If your airplane doesn't show up, go to the Azure Function in the portal and check the output log to make sure it's sending and receiving data. If it's not, unplug the MXChip IoT DevKit and plug it back in. If the Azure Function *is* sending and receiving data, double-check the application setting named "SharedEventHubConnection" you added in Step 9 of this exercise and make sure its value is the connection string you retrieved in Step 5.

The Azure Function has now been updated to send flight information to the shared input hub, enabling air-traffic control to be aware of your plane's location. Now it's time to connect the Event Hub that receives output from Stream Analytics to the client app so the client app can be notified when your airplane is too close to another.

<a name="Exercise2"></a>
## Exercise 2: Connect the client app to the shared output hub ##

In [Lab 3]({{"/docs/projects/air-traffic-control-simulator-03/" | absolute_url }}), you created an Event Hub and configured Stream Analytics to send output to it. You also connected the ATC app to the Event Hub so the app could highlight planes that are too close together on the air-traffic control map. In this exercise, you will connect the FlySim client app to the same Event Hub so it can notify individual pilots when the distance between their aircraft and any other is less than two miles.

1. Open the FlySim solution from [Lab 2]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }}) in Visual Studio.

1. Open **CoreConstants.cs** in the "Common" folder, and add the following statements after the statements that declare static strings named ```FlightActivityEventHubEndpoint``` and ```FlightActivityEventHubName```:

	```csharp
	public static string SharedAirTrafficEventHubEndpoint = "SHARED_EVENT_HUB_ENDPOINT";
    public static string SharedAirTrafficHubName = "flysim-shared-output-hub";
	```
1. Return to the gist that you opened in the previous exercise and copy the connection string to the clipboard again.

	![Copying the connection string to the clipboard]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/copy-from-gist.png" | absolute_url }})

	_Copying the connection string to the clipboard_

1. Return to Visual Studio and replace "SHARED_EVENT_HUB_ENDPOINT" in **CoreConstants.cs** with the value on the clipboard. 

1. Right-click the "Listeners" folder in Solution Explorer and use the **Add** > **Class...** command to add a class file named **AirTrafficListener.cs**. Then replace the contents of the file with the following code:

	```csharp
	using Newtonsoft.Json;
	using ppatierno.AzureSBLite.Messaging;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Linq;
	using System.Numerics;
	using System.Text;
	using System.Threading.Tasks;
	using Windows.UI.Core;
	
	namespace FlySim.Listeners
	{
	    public class AirTrafficListener
	    {
	        private EventHubClient client { get; set; }
	        private EventHubConsumerGroup consumerGroup { get; set; }
	        private EventHubReceiver primaryReceiver { get; set; }
	        private EventHubReceiver secondaryReceiver { get; set; }
	
	        readonly List<PlaneStatusInformation> statusInfo = new List<PlaneStatusInformation>();
	        private List<FilteredPlaneStatusInfo> filteredStatus = new List<FilteredPlaneStatusInfo>();
	
	        public async void StartListeningAsync()
	        {
	            this.client = EventHubClient.CreateFromConnectionString(Common.CoreConstants.SharedAirTrafficEventHubEndpoint, Common.CoreConstants.SharedAirTrafficHubName);
	
	            this.consumerGroup = this.client.GetDefaultConsumerGroup();
	            this.primaryReceiver = this.consumerGroup.CreateReceiver("0", DateTime.Now.ToUniversalTime());
	            this.secondaryReceiver = this.consumerGroup.CreateReceiver("1", DateTime.Now.ToUniversalTime());
	
	            await Task.Run(() => StartListeningForTrafficCommands());
	        }
	
	        private async void StartListeningForTrafficCommands()
	        {
	            while (true)
	            {
	                await Task.Delay(1);
	
	                try
	                {
	                    var primaryEventData = this.primaryReceiver.Receive();
	
	                    if (primaryEventData != null)
	                    {
	                        GeneratePlaneStatus(primaryEventData.GetBytes());
	                    }
	
	                    var secondaryEventData = this.primaryReceiver.Receive();
	
	                    if (secondaryEventData != null)
	                    {
	                        GeneratePlaneStatus(secondaryEventData.GetBytes());
	                    }
	
	                    filteredStatus = new List<FilteredPlaneStatusInfo>();
	
	                    filteredStatus.AddRange(from info in statusInfo select new FilteredPlaneStatusInfo() { DisplayName = info.Plane1, Distance = info.Distance, });
	                    filteredStatus.AddRange(from info in statusInfo select new FilteredPlaneStatusInfo() { DisplayName = info.Plane2, Distance = info.Distance, });
	
	                    var orderedPlanes = filteredStatus.OrderBy(o => o.Distance).GroupBy(g => g.DisplayName);
	
	                    var finalPlaneStatus = from plane in orderedPlanes
	                                           select new
	                                           {
	                                               displayName = plane.Key,
	                                               minimumDistance = plane.First().Distance,
	                                           };
	
	                    var atRiskPlanes = (finalPlaneStatus
	                        .Where(item => item.minimumDistance < Common.CoreConstants.AtRiskThreshold)
	                        .Select(item => item.displayName)).Distinct().ToList();
	
	                    App.ViewModel.AtRiskPlanes = atRiskPlanes;
	                    
	                }
	                catch { }
	            }
	        }
	
	        private void GeneratePlaneStatus(byte[] bytes)
	        {
	            if (bytes == null) return;
	
	            statusInfo.Clear();
	
	            try
	            {
	                var payload = Encoding.UTF8.GetString(bytes);
	
	                foreach (var info in payload.Split("\r\n".ToCharArray(),
	                    StringSplitOptions.RemoveEmptyEntries))
	                {
	                    var status = JsonConvert.DeserializeObject<PlaneStatusInfo>(info);
	
	                    statusInfo.Add(new PlaneStatusInformation()
	                    {
	                        Plane1 = status.plane1,
	                        Plane2 = status.plane2,
	                        Distance = Convert.ToDouble(status.distance),
	                    });
	                }
	            }
	            catch { }
	        }
	    }
	}
	```

	The purpose of this code is to listen for events coming from the shared output hub and to update the view-model so that if your plane is among those "at risk," it turns red in the view. The heavy lifting is performed by the ```EventHubClient``` and ```EventHubReciver``` classes, which are part of the NuGet package [AzureSBLite](https://github.com/ppatierno/azuresblite). 

1. Open **MainViewModel.cs** in the project's "ViewModels" folder and insert the following line of code below the ```FlightActivityListener``` property on line 40 to create an instance of ```AirTrafficListener```:

	```csharp
	public AirTrafficListener AirTrafficListener = new AirTrafficListener();
	```

1. Still in **MainViewModel.cs**, locate the ```InitializeSystem``` method and add the following line of code to it: 

	```csharp
	AirTrafficListener.StartListeningAsync();
	```

1. Rebuild the solution and confirm that your changes compile successfully.
 
FlySim now has the smarts to turn your airplane red if it receives information from the shared output hub indicating that it's within two miles of another plane. But don't run it just yet. Let's further enhance the app to display a warning on the screen of the MXChip IoT DevKit when your plane is too close to another.

<a name="Exercise3"></a>
## Exercise 3: Update the client app to talk back to the device ##

One of the benefits of using Azure IoT Hubs is that they support bidirectional communication. Devices can send messages to IoT Hubs, and IoT Hubs can send messages back to the devices connected to them. In this exercise, you will modify the FlySim client app to send a message to your MXChip IoT DevKit through the IoT Hub it's connected to when your airplane is too close to another airplane. That message will command the MXChip IoT DevKit to display a warning message on its screen. For an added touch, you will use Microsoft Cognitive Services to translate the warning message into the language of the user's choice. 

1. In Visual Studio, open **CoreConstants.cs** in the project's "Common" folder and insert the following statement after the statement declaring ```SharedAirTrafficHubName``` that you added in the previous exercise:

	```csharp
	public static string DeviceMessagingConnectionString = "IOT_DEVICE_ENDPOINT";
	```

1. Return to the Azure Portal and open the IoT Hub that you created in [Lab 1]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }}). Click **Shared access policies**, and then click **iothubowner**.

	![Viewing shared access policies for the IoT Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/open-shared-access-policies.png" | absolute_url }})

	_Viewing shared access policies for the IoT Hub_

1. Click the **Copy** button to the right of "Connection string—primary key" to copy the connection string to the clipboard.

	![Copying the connection string to the clipboard]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/portal-iot-hub-endpoint.png" | absolute_url }})

    _Copying the connection string to the clipboard_

1. Return to Visual Studio and replace "IOT_DEVICE_ENDPOINT" in **CoreConstants.cs** with the connection string on the clipboard.

1. Right-click the "Helpers" folder in Solution Explorer and use the **Add** > **Class...** command to add a class file named **MessageHelper.cs**. Then replace the contents of the file with the following code:

	```csharp
	using Microsoft.Azure.Devices;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text;
	using System.Threading.Tasks;
	
	namespace FlySim.Helpers
	{
	    public static class MessageHelper
	    {
	        public async static Task<bool> SendMessageToDeviceAsync(string message)
	        {
	            bool successful = false;
	
	            try
	            {
	                var serviceClient = ServiceClient.CreateFromConnectionString(Common.CoreConstants.DeviceMessagingConnectionString);
	                var commandMessage = new Message(Encoding.ASCII.GetBytes(message.ToUpper()));
	                await serviceClient.SendAsync("AZ3166", commandMessage);
	                successful = true;
	            }
	            catch(Exception) { }
	
	            return successful;
	        }
	    }
	}
	```

	The ```MessageHelper``` class contains a method named ```SendMessageToDeviceAsync``` that transmits an ASCII message to the device connected to the IoT hub. The message is transmitted by calling ```SendAsync``` on an instance of the ```Microsoft.Azure.Devices.ServiceClient``` class, which is included in the NuGet package named Microsoft.Azure.Devices. A listener in the embedded code you uploaded to the device in [Lab 1]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }}) handles the message and executes the appropriate commands to display the text contained in the message on the screen of the device for 5 seconds before reverting back to the normal "IN FLIGHT" display. It also lights the red LED on the board.

1. In the lower-right corner of the FlySim app, there is a ```ComboBox``` control containing a list of languages. The default is English. The purpose of the ```ComboBox``` is to allow you to select the language used for warning messages displayed on the screen of the MXChip.

	The app retrieves a list of supported languages from the [Translator Text API](https://www.microsoft.com/translator/translatorapi.aspx), which is one of more than two dozen services available in [Microsoft Cognitive Services](https://azure.microsoft.com/services/cognitive-services/). The Translator Text API can translate text from English into more than 50 different languages. It can also provide a list of languages it can translate to, which forms the basis for the list you see in the ```ComboBox``` control.

	In order to call the Translator Text API, you must go to the Azure Portal and obtain an API key. Calls to the Translator Text API work right now because **CoreConstants.cs** contains a key that was provided for you. Before going further, you need to obtain a key of your own and replace the one in **CoreConstants.cs**.

	To that end, return to the [Azure Portal](https"//portal.azure.com) and click **+ New**, followed by **AI + Cognitive Services** and **See all**.

	![Adding a Cognitive Service]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/new-translator-text-1.png" | absolute_url }})

	_Adding a Cognitive Service_

1. Click **More** in the "Cognitive Service" section to see a list of all Cognitive Services.

	![Viewing all Cognitive Services]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/new-translator-text-2.png" | absolute_url }})

	_Viewing all Cognitive Services_

1. Scroll down and click **Translator Text API**. Then click the **Create** button at the bottom of the ensuing "Translator Text API" blade.

	![Selecting the Translator Text API]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/new-translator-text-3.png" | absolute_url }})

	_Selecting the Translator Text API_

1. Fill in the information shown below. Then click the **Create** button.

	![Creating an API key]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/new-translator-text-4.png" | absolute_url }})

	_Creating an API key_

1. Return to the "FlySimResources" resource group and click **translator-text-api-key**.

	![Opening the API key]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/open-api-key.png" | absolute_url }})

	_Opening the API key_

1. Click **Keys** in the menu on the left. Then click the **Copy** button to the right of "KEY 1" to copy the API key to the clipboard.

	![Copying the API key to the clipboard]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/copy-api-key.png" | absolute_url }})

	_Copying the API key to the clipboard_

1. Return to Visual Studio. In **CoreConstants.cs**, replace the value of the field named ```TranslatorTextSubscriptionKey``` with the API key on the clipboard.

1. The project already contains a class named ```TranslationHelper``` located in the "Helpers" folder. Open the file named **TranslationHelper.cs** in that folder and take a moment to examine the code. The class contains three methods. The one that translates text from one language to another is named ```GetTextTranslationAsync```. It uses the Universal Windows Platform's ```HttpClient``` class to place a REST call to the Translator Text API's HTTP endpoint with the API key embedded in an ```Ocp-Apim-Subscription-Key``` header. It is that simple to translate text when you utilize the Translator Text API.

1. Return to **MainViewModel.cs** in Visual Studio and replace the ```SendWarningMessage``` method with this one:

	```csharp
	private async void SendWarningMessage()
    {
        string message = "Warning";

        if (!this.SelectedLanguage.DisplayName.Equals("English"))
        {
            message = await Helpers.TranslationHelper.GetTextTranslationAsync(message, this.SelectedLanguage.Abbreviation);
        }

        await Helpers.MessageHelper.SendMessageToDeviceAsync(message);
    }
	```

	This method calls ```TranslationHelper.GetTextTranslationAsync``` to convert the warning message to the language selected in the ```ComboBox``` (unless English is selected, in which case no translation is necessary). Then it calls ```MessageHelper.SendMessageToDeviceAsync``` to send the message to the device.

1. Finish up by building the solution and verifying that it builds without errors.

The stage is set. The FlySim app is connected to the output from Stream Analytics so it can warn you when your airplane is too close to another. All that remains is to test it out. It's time to get back into the air. And this time, you won't be alone. 

<a name="Exercise4"></a>
## Exercise 4: Test the finished solution ##

In this exercise, you will join your peers (or the drones spawned by the **FlySimTest** app) to fly your airplane through a crowded air-traffic control sector. And each time you come within two miles of another airplane, you will confirm that your airplane turns red in the ATC app and in the client app, and that the MXChip IoT DevKit alerts you to the danger.

1. Reset your aircraft to its default starting position over the Nevada desert by going to the Function App in the Azure Portal and clicking the **Restart** button.

	![Restarting the Function App]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/restart-function-app.png" | absolute_url }})

    _Restarting the Function App_

1. Make sure your MXChip IoT DevKit is plugged into your laptop. Then return to Visual Studio and press **Ctrl+F5** to launch the FlySim app. Confirm that the app starts and that after a few seconds, an aircraft labeled with the display name you entered in [Lab 1]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }}) appears on the screen. Maximize the window so you can see all the readouts and controls.

	> Remember that if your plane flies off the screen and is no longer visible on the map, you can click the airplane in the artificial horizon to bring it back into view.

	![FlySim showing Amelia Earhart over the Nevada desert]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/app-in-flight.png" | absolute_url }})

    _FlySim showing Amelia Earhart over the Nevada desert_

1. Use the ComboBox in the lower-right corner the of the client app to select the language in which you want proximity warnings to appear.

	![Specifying a language preference]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/select-language.png" | absolute_url }})

	_Specifying a language preference_

1. Turn to the ATC app running on the big screen in the front of the room and find your airplane. Navigate toward an airplane near you and try to get within two miles of it. Pay attention to the altitude of the two aircraft, because if one is at 10,000 feet and the other is at 30,000, they won't turn red even if their flight paths cross. Remember that you can control your altitude by tilting your MXChip IoT DevKit forward (down) and backward (up).

	![Two airplanes approaching each other]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/two-approaching.png" | absolute_url }})

	_Two airplanes approaching each other_

1. When you get within two miles of another aircraft, confirm that your airplane turns red in the client app AND in the ATC app.

	> If your airplane doesn't turn red in the client app, review Exercise 2, Step 4 and confirm that the field named ```SharedAirTrafficEventHubEndpoint``` in **CoreConstants.cs** is assigned the connection string you retrieved in Exercise 2, Step 3.

	![Two airplanes within two miles of each other]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/two-at-risk.png" | absolute_url }})

	_Two airplanes within two miles of each other_

1. At the same time, check your MXChip IoT DevKit. Confirm that the red LED in the lower-left corner lights up, and that the screen displays a warning message in the language selected in Step 3. The message disappears after 5 seconds, so if you miss it, circle around and aim for another close encounter.

	![Warning messages displayed in English, French, and Polish]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/warning-messages.png" | absolute_url }})

	_Warning messages displayed in English, French, and Polish_

1. Continue flying until you're comfortable that your app — and your device — are working as expected. If your airplane freezes on the screen, try unplugging your MXChip IoT DevKit and plugging it back in again. And if, at any time, you would like to reset your aircraft to its original position, restart the Function App as you did at the beginning of this exercise.

When you're finished, unplug your MXChip IoT DevKit from your laptop to stop the flow of messages to the IoT Hub. Also go into the Azure Portal and stop the Function App since your subscription incurs charges while it's running, even if it isn't processing messages — that is, even when the VM that hosts the Function App is idle. If you want to stop all charges for all of the Azure resources you deployed today, simply go into the portal and delete the "FlySimResources" resource group. But be careful, because once a resource group is deleted, it can't be undeleted.

<a name="Summary"></a>
## Summary ##

Let's take a moment to review what you built today. Here is the architecture diagram presented at the start of [Lab 1]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }}):

![Solution architecture]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab4/architecture.png" | absolute_url }})

_Solution architecture_

Your MXChip IoT DevKit transmits messages containing accelerometer data to an Azure IoT Hub. An Azure Function receives those messages and transforms the accelerometer data into flight data. Flight data flows to a personal event hub connected to the client app, and to a shared event hub that provides input to Azure Stream Analytics and to the ATC app. The Stream Analytics job analyzes the data for aircraft that are in close proximity and provides that information to the client app and the ATC app. When your aircraft comes too close to another, it turns red on the screen, and a warning appears on the screen of your MXChip IoT DevKit. Microsoft Cognitive Services translates the warning into the language selected in the client app.

This a great example of how enterprise developers build end-to-end solutions by connecting Azure services and utilizing those services from their code. And the fact that you could assemble it all in one day, from scratch, is indicative of the richness of the Azure ecosystem and of the tools that support it.

Cloud City — over and out!