---
title: "Air Traffic Control Simulator - Lab 3"
permalink: /docs/projects/air-traffic-control-simulator-03/
excerpt: "Performing Real-Time Proximity Detection with Azure Stream Analytics"
part: 3
header:
  overlay_image: /assets/images/mini-solution/air-traffic-control-simulator/lab2/app-in-flight.png
  overlay_full: true
  teaser: /assets/images/mini-solution/air-traffic-control-simulator/lab2/app-in-flight.png

difficulty: HARD

last_modified_at: 2017-10-30
---


<a name="Overview"></a>
## Overview ##

[Azure Stream Analytics](https://azure.microsoft.com/services/stream-analytics/) is a cloud-based service for ingesting high-velocity data streaming from devices, sensors, applications, Web sites, and other data sources and analyzing that data in real time. It supports a [SQL-like query language](https://msdn.microsoft.com/library/azure/dn834998.aspx) that works over dynamic data streams and makes analyzing constantly changing data no more difficult than performing queries on static data stored in traditional databases. With Azure Stream Analytics, you can set up jobs that analyze incoming data for anomalies or information of interest and record the results, present notifications on dashboards, or even fire off alerts to mobile devices. And all of it can be done at low cost and with a minimum of effort.

Scenarios for the application of real-time data analytics are legion and include fraud detection, identity-theft protection, optimizing the allocation of resources (think of an Uber-like transportation service that sends drivers to areas of increasing demand *before* that demand peaks), click-stream analysis on Web sites, shopping suggestions on retail-sales sites, and countless others. Having the ability to process data *as it comes in* rather than waiting until after it has been aggregated offers a competitive advantage to businesses that are agile enough to make adjustments on the fly.

In this lab, you will create an Azure Stream Analytics job and use it to analyze data streaming in from the simulated aircraft driven by the IoT device. Specifically, you will perform a query that identifies aircraft that are within a specified distance of each other in order to alert the pilots of those aircraft that evasive maneuvers might be required. Then you will connect the ATC app to the Stream Analytics inputs and outputs so that in Lab 4, the ATC app can show all air traffic and color-code aircraft that are too close together.

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

<a name="Lab-Sections"></a>
## Lab Sections ##

Here's a synopsis of the four labs that comprise this project:

- [Lab 1 - Getting started with the Azure MxChip and Azure IoT]({{"/docs/projects/air-traffic-control-simulator/" | absolute_url }})
- [Lab 2 - Using Azure Functions and Azure Event Hubs to Process IoT Data.]({{"/docs/projects/air-traffic-control-simulator-02/" | absolute_url }})
- [Lab 3 - Performing Real-Time Proximity Detection with Azure Stream Analytics]({{"/docs/projects/air-traffic-control-simulator-03/" | absolute_url }})
- [Lab 4 - Complete the solution with Cloud-to-Device communication]({{"/docs/projects/air-traffic-control-simulator-04/" | absolute_url }})

---

<a name="Exercises"></a>
## Exercises ##

This lab includes the following exercises:

- [Exercise 1: Create Event Hubs for input and output](#Exercise1)
- [Exercise 2: Create a Stream Analytics job](#Exercise2)
- [Exercise 3: Prepare a query and test with sample data](#Exercise3)
- [Exercise 4: Connect the ATC app to the Event Hubs](#Exercise4)

Estimated time to complete this lab: **45** minutes.

<a name="Exercise1"></a>
## Exercise 1: Create Event Hubs for input and output ##

Azure Stream Analytics supports several types of input, including input from Azure blobs,  input from Azure Event Hubs, and input from Azure IoT Hubs. A single Azure Event Hub or IoT Hub can handle millions of events per second transmitted from devices spread throughout the world.

In this exercise, you will create two Azure Event Hubs. One will provide input to Stream Analytics, while the other will receive output from Stream Analytics. In the next lab, you will modify the Azure Function written in Lab 2 to transmit data to the input Event Hub, enabling Stream Analytics to see all activity emanating from all aircraft. You will also connect the client app to the output Event Hub and modify the app to transmit messages back to their MXChips.

1. In your browser, navigate to the [Azure Portal](https://portal.azure.com). If you are asked to sign in, do so using your Microsoft account.

1. In the portal, click **+ New**, followed by **Internet of Things** and **Event Hubs**.

    ![Adding a new Event Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/new-event-hub.png" | absolute_url }})

    _Adding a new Event Hub_

1. Type a namespace name into the **Name** box. The name must be unique within Azure, so make sure a green check mark appears next to it. Select **Create new** under **Resource group** and enter the resource-group name "cloud-city-rg" (without quotation marks). Choose the **East US** region in the **Location** drop-down, and then click the **Create** button.

	> It is important to select the East US region to locate the Event Hub in the same region as the other resources. Keeping everything in one data center reduces cost and minimizes latency.

    ![Creating a namespace]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/create-namespace.png" | absolute_url }})

    _Creating a namespace_

1. Click **Resource groups** in the ribbon on the left, and then click the resource group created in the previous step.

    ![Opening the resource group]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/open-resource-group.png" | absolute_url }})

    _Opening the resource group_

1. Wait until "Deploying" changes to "Succeeded." (You can click the **Refresh** button at the top of the blade to refresh the deployment status.) Then click the namespace whose name you specified in Step 3.

    ![Opening the namespace]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/open-namespace.png" | absolute_url }})

    _Opening the namespace_

1. Click **+ Event Hub** to add an Event Hub to the namespace.

    ![Adding an Event Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/add-event-hub.png" | absolute_url }})

    _Adding an Event Hub_

1. Type "flysim-shared-input-hub" (without quotation marks) into the **Name** box. Then click the **Create** button.

    ![Creating an Event Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/create-input-hub.png" | absolute_url }})

    _Creating an Event Hub_

1. Wait a moment for the Event Hub to be created. Then click **+ Event Hub** again.

    ![Adding an Event Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/add-event-hub.png" | absolute_url }})

    _Adding an Event Hub_

1. Type "flysim-shared-output-hub" (without quotation marks) into the **Name** box. Then click the **Create** button.

    ![Creating an Event Hub]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/create-output-hub.png" | absolute_url }})

    _Creating an Event Hub_

1. Wait a moment for the Event Hub to be created. Then scroll to the bottom of the blade and confirm that both Event Hubs appear in the list. Also confirm the spelling, since the apps that connect to these Event Hubs assume that the Event Hubs are named exactly as shown.

    ![Event Hubs created for input and output]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/event-hubs.png" | absolute_url }})

    _Event Hubs created for input and output_

1. Click **Shared access policies**, followed by **RootManageSharedAccessKey**.

    ![Opening the shared access key]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/open-shared-access-key.png" | absolute_url }})

    _Opening the shared access key_

1. Click the **Copy** button next to "Connection string—primary key" to copy the connection string to the clipboard.

    ![Copying the connection string]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/copy-connection-string.png" | absolute_url }})

    _Copying the connection string_

1. Go to https://gist.github.com/ and sign in with your GitHub account if you aren't already signed in. Type "Endpoint for connecting to shared input and output hubs" into the description box, and paste the connection string that's on the clipboard into the content box. Then click **Create public gist** to create a public gist. Leave your browser window open so you can easily retrieve the connection string in Exercise 4.

	> Remember to delete this gist when the event is over since it contains a shared-access signature that allows anyone to connect to the Event Hubs you just created.

	![Creating a gist]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/create-gist.png" | absolute_url }})

	_Creating a gist_

You have created a pair of Event Hubs: one to provide input to Stream Analytics, and another to receive output from Stream Analytics. The next step is to create the Stream Analytics job itself.

<a name="Exercise2"></a>
## Exercise 2: Create a Stream Analytics job ##

In this exercise, you will use the Azure Portal to create a Stream Analytics job and connect it to the Event Hubs you created in [Exercise 1](#Exercise1). The purpose of the Stream Analytics job is to examine all positional data being transmitted by all aircraft and identify aircraft that are too close together — *precisely the type of service that air-traffic controllers provide*.

1. Return to the [Azure Portal](https://portal.azure.com) and click **+ New**, followed by **Internet of Things** and **Stream Analytics job**.

    ![Creating a Stream Analytics job]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/new-stream-analytics-job.png" | absolute_url }})

    _Creating a Stream Analytics job_

1. Type "flysim-analytics" (without quotation marks) into the **Job name** box. Select **Use Existing** under **Resource group** and select the "cloud-city-rg" resource group that you created in [Exercise 1](#Exercise1). Select the **East US** region in the **Location** drop-down. Then click the **Create** button.

    ![Specifying parameters for the Stream Analytics job]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/create-stream-analytics-job.png" | absolute_url }})

    _Specifying parameters for the Stream Analytics job_

1. Click **Resource groups** in the ribbon on the left, and then click the "cloud-city-rg" resource group.

    ![Opening the resource group]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/open-resource-group.png" | absolute_url }})

    _Opening the resource group_

1. Wait until the Stream Analytics job is created. Then click **flysim-analytics** to open the Stream Analytics job in the portal.

    ![Opening the Stream Analytics job]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/open-stream-analytics-job.png" | absolute_url }})

    _Opening the Stream Analytics job_

1. Click **Inputs** to add an input to the Stream Analytics job.

    ![Adding an input]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/add-input-1.png" | absolute_url }})

    _Adding an input_

1. Click **+ Add**.

    ![Adding an input]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/add-input-2.png" | absolute_url }})

    _Adding an input_

1. Type "FlightDataInput" (without quotation marks) into the **Input alias** box. Select the namespace that you created in Exercise 1 in the **Service bus namespace** drop-down, and select **flysim-shared-input-hub** as the **Event Hub name**. Fill out the remainder of the form exactly as shown, and then click the **Create** button at the bottom of the blade.

    ![Creating an input]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/create-input.png" | absolute_url }})

    _Creating an input_

1. Confirm that the new input appears in the list of inputs to the Stream Analytics job.

    ![Confirming the input]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/confirm-input.png" | absolute_url }})

    _Confirming the input_

1. Return to the blade for the Stream Analytics job and click **Outputs** to add an output.

    ![Adding an output]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/add-output-1.png" | absolute_url }})

    _Adding an output_

1. Click **+ Add**.

    ![Adding an output]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/add-output-2.png" | absolute_url }})

    _Adding an output_

1. Type "FlightDataOutput" (without quotation marks) into the **Output alias** box. Select the namespace that you created in Exercise 1 in the **Service bus namespace** drop-down, and select **flysim-shared-output-hub** as the **Event Hub name**. Fill out the remainder of the form exactly as shown, and then click the **Create** button at the bottom of the blade.

    ![Creating an input]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/create-output.png" | absolute_url }})

    _Creating an input_

1. Confirm that the new output appears in the list of outputs.

    ![Confirming the input]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/confirm-output.png" | absolute_url }})

    _Confirming the output_

You have connected a Stream Analytics job to an input Event Hub and an output Event Hub. The next step is to do something with it — specifically, to bring the power of Azure Stream Analytics to bear on the data flowing into the input hub.  

<a name="Exercise3"></a>
## Exercise 3: Prepare a query and test with sample data ##

In this exercise, you will use the [Stream Analytics Query Language](https://msdn.microsoft.com/en-us/library/azure/Dn834998.aspx) to query a sample data set for aircraft that are too close together. It is always a good idea to test your queries against sample data before deploying them against live data streams, because with sample data, you can verify that a known set of inputs produces the expected outputs.

To identify aircraft that are too close together, the query will ask for all aircraft that are within four miles of each other. And it will use a [tumbling window](https://msdn.microsoft.com/en-us/library/azure/dn835055.aspx) to output a list of such aircraft every 2 seconds.

1. Return to the blade for the Stream Analytics job and click **Query**.

    ![Opening the query viewer]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/add-query.png" | absolute_url }})

    _Opening the query viewer_

1. Click the **ellipsis** (the three dots) to the right of **FlightDataInput** and select **Upload sample data from file** from the menu.

    ![Uploading sample data for testing queries]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/upload-test-data-1.png" | absolute_url }})

    _Uploading sample data for testing queries_

1. Click the **folder** icon on the right and select the file named **flysim-2-in-proximity.json** from the "resources" subdirectory of this lab. Then click **OK** to upload the file.

    ![Uploading flysim-2-in-proximity.json]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/upload-test-data-2.png" | absolute_url }})

    _Uploading flysim-2-in-proximity.json_

1. When the upload is complete, enter the following query:

	```sql
	WITH Results AS
	(
	    SELECT System.Timestamp as endtime,
	        F1.deviceId AS plane1, F2.deviceId AS plane2,
	        SQRT(SQUARE((F2.latitude - F1.latitude) * 364320) + SQUARE((F2.longitude - F1.longitude) * 364320) + SQUARE(F2.altitude - F1.altitude)) as distance,
	        COUNT(*)
	    FROM FlightDataInput F1 TIMESTAMP BY timestamp
	    JOIN FlightDataInput F2 TIMESTAMP BY timestamp
	    ON DATEDIFF(second, F1, F2) BETWEEN 0 and 2
	    AND SQRT(SQUARE((F2.latitude - F1.latitude) * 364320) + SQUARE((F2.longitude - F1.longitude) * 364320) + SQUARE(F2.altitude - F1.altitude)) < 21120
	    WHERE F1.deviceId != F2.deviceId
	    GROUP BY F1.deviceId, F1.latitude, F1.longitude, F1.altitude,
	        F2.deviceId, F2.latitude, F2.longitude, F2.altitude,
	        TumblingWindow(second,2)
	)
	SELECT plane1, plane2, distance INTO FlightDataOutput FROM Results
	```

	This query uses a [tumbling window](https://msdn.microsoft.com/library/azure/dn835055.aspx) to detect aircraft that are within four miles of each other and produce a list every two seconds. Aircraft that are within two miles of each are considered "at risk."

	TIMESTAMP BY is an important element of the [Stream Analytics Query Language](https://msdn.microsoft.com/library/azure/dn834998.aspx). If it was omitted from the query, distance calculations would be performed based on the times that the events arrived *at the Event Hub* rather than the times specified in the data stream. TIMESTAMP BY allows you to specify a field in the input stream — in this case, the "timestamp" field — as the event time.

1. Click the **Save** button at the top of the blade to save the query. Then click the **Test** button to execute it against the sample data you uploaded.

    ![Testing a query]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/test-query.png" | absolute_url }})

    _Testing a query_

1. Confirm that you see the output pictured below. The test data contains 20 rows of flight data for two aircraft. The data was intentionally constructed so that the two aircraft pass within four miles of each other. The output comprises a 20-second time period, and each row identifies two aircraft that were within four miles of each other during that time and the distance (in feet) that separates them.

    ![Query results]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/query-results.png" | absolute_url }})

    _Query results_

1. With the query now formulated and tested against a set of sample data, it's time to start the Stream Analytics job so it can process live data. Return to the blade for the Stream Analytics job. Then click **Start**.

    ![Starting the Stream Analytics job]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/start-stream-analytics-job-1.png" | absolute_url }})

    _Starting the Stream Analytics job_

1. Make sure **Job output start time** is set to **Now**, and then click the **Start** button to start running the job.

	> Billing for a Stream Analytics job starts when the job is fully running. A Stream Analytics job configured to use one streaming unit costs a few cents an hour to run. For the latest information regarding pricing, see [Stream Analytics pricing](https://azure.microsoft.com/pricing/details/stream-analytics/).

    ![Specifying the job start time]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/start-stream-analytics-job-2.png" | absolute_url }})

    _Specifying the job start time_

It will probably take the Stream Analytics job a minute or two to start, but that's OK because it's not receiving data at the moment anyway. The live data stream will start in Lab 4 when you modify the Azure Function to send output to the shared input hub that provides input to Stream Analytics.

<a name="Exercise4"></a>
## Exercise 4: Connect the ATC app to the Event Hubs ##

Now it's time to connect the ATC app, which is located in the "AirTrafficSim" folder of the Cloud City download, to the Event Hubs you created in Exercise 1. The app, named **AirTrafficSim**, is a Universal Windows Platform (UWP) app. Connecting AirTrafficSim to the Event Hub named "flysim-shared-input-hub" enables it to see all the aircraft that are flying. Connecting it to the Event Hub named "flysim-shared-output-hub" lets it know when two aircraft are too close together so it can color them red. Modifying the app to connect to the Event Hubs is a simple matter of copying a connection string into the source code.

1. Open **AirTrafficSim.sln** in Visual Studio.

1. Right-click the AirTrafficSim solution in Solution Explorer and select **Restore NuGet Packages** to load all the dependencies.

1. Open **CoreConstants.cs** in the project's "Common" folder. Replace "SHARED_EVENT_HUB_ENDPOINT" on line 11 with the connection string you saved as a gist in Exercise 1, Step 13. Then save the file.

1. Press **Ctrl+F5** to launch the app. After a short delay, AirTrafficSim will load and display an empty air traffic control map somewhere over the Nevada desert. The flight-information panel (A) shows the number of aircraft that are flying and indicates how many are "safe" and how many are "at risk" — that is, within two miles of each other. The Altitudes panel (B) shows the altitudes of the aircraft. The traffic map (C) shows where the aircraft are, and the status bar (D) shows the current time and provides controls for zooming out to show all active flights and showing the original grid coordinates. You can zoom in and out by clicking the **+** and **-** buttons, or by placing the cursor over the map and rolling the mouse wheel. You can also pan by dragging the map.

	![The AirTrafficSim app]({{"/assets/images/mini-solution/air-traffic-control-simulator/lab3/app-environment-labels.png" | absolute_url }})

    _The AirTrafficSim app_
 
AirTrafficSim won't show any activity until the pilots have connected to the Event Hubs, too. But we will take care of that in the next lab. The fun is about to begin!

<a name="Summary"></a>
## Summary ##

Azure Stream Analytics is a powerful tool for analyzing live data streams from IoT devices or anything else that transmits data. In this lab, you created a Stream Analytics job, configured a pair of Event Hubs to provide input and receive output, and formulated a query that examines a real-time data stream and determines when two aircraft are too close together.

In closing, be aware that a single Stream Analytics job can accept multiple inputs and outputs. If you wanted to create a permanent record of all the events produced by the query's tumbling window, for example, you could add a second output — a Cosmos DB output — to the Stream Analytics job. Then output would flow both to the Event Hub and to a [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) database, and you could dive into the database to view a history of close calls.

Continue on to [Lab 4]({{"/docs/projects/air-traffic-control-simulator-04/" | absolute_url }}) where you will complete the solution by setting up Cloud-to-Device communication. 