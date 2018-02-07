---
title: "Connect to Azure IoT Hub"
permalink: /docs/projects/connect-iot-hub/
excerpt: "Collect and send temperature and humidity data from DevKit to Azure IoT Hub."
header:
  overlay_image: /assets/images/projects-iothub.jpg
  overlay_full: true
  teaser: /assets/images/projects-iothub-th.jpg
icons:
  - url: /assets/images/icon-iot-hub.svg
    target: https://azure.microsoft.com/en-us/services/iot-hub/
    title: IoT Hub
difficulty: EASY
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2017-06-28
---

{% include toc icon="columns" %}

In this project, you will create an Azure IoT Hub, connect DevKit to it, and collect the temperature and humidity data from sensors and send the data to the IoT hub.

## What you learn

* How to create an IoT Hub and register a device for MXChip IoT DevKit.
* How to collect sensor data by running a sample application on MXChip IoT DevKit.
* How to send the sensor data to your IoT hub.

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

**Notice:** Occasionally, when you launch VS Code, you are prompted with error that cannot find Arduino IDE or related board package. Close VS Code, launch Arduino IDE once again, and VS Code should locate Arduino IDE path correctly.
{: .notice--warning}

### B. Open the Arduino Examples folder

Expand left side **ARDUINO EXAMPLES** section, browse to **Examples for MXCHIP AZ3166 > AzureIoT**, and select **GetStarted**. This will open a new VS Code window with project folder in it.

![Arduino Examples tab]({{"/assets/images/mini-solution/vscode_examples.png" | absolute_url }})

If you happen to close the pane, you can reopen it. Use `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to open the command palette, type **Arduino**, and then find and select **Arduino: Examples**.

## Step 2. Provision Azure services

1. In the solution window, run your task through `Ctrl+P` (macOS: `Cmd+P`) by entering `task cloud-provision`: In the VS Code terminal, an interactive command line guides you through provisioning the required Azure services:

    ![Interactive command line]({{"/assets/images/mini-solution/connect-iothub/cloud-provision.png" | absolute_url }})

    **Notice:** If the page hangs in the loading status when trying to sign in to Azure, please check this [FAQ steps]({{"/docs/faq/#page-hangs-when-log-in-azure" | absolute_url}}) to solve it. 
    {: .notice--warning}

2. When a list of Azure subscriptions display in the terminal, use the **up** and **down** arrow keys to select the Azure subscription that you will use to provision the Azure IoT Hub. Then press **Enter** to confirm the selected subscription.

    ![Select Azure subscription]({{"/assets/images/mini-solution/connect-iothub/select-subscription.png" | absolute_url }})

3. Provision IoT Hub
      * If you've provisioned IoT Hub(s) before, a list of IoT Hubs associated with the subscription appears in the terminal. Please use **up** and **down** arrow keys to select one from the list and press **Enter** to confirm.

        ![Select an existing IoT Hub]({{"/assets/images/mini-solution/connect-iothub/select-existing-iothub.png" | absolute_url }})

        _Select existing Free IoT Hub_

        Wait several minutes to finish ARM Template deployment and IoT Hub Device provision. Then press any key to exit the terminal.

        ![Select an existing IoT Hub done]({{"/assets/images/mini-solution/connect-iothub/select-iothub-done.png" | absolute_url }})

        _Finish selecting IoT Hub_

      * If you don't have any IoT Hub, please follow the steps to create a free IoT Hub:
      
        * Resource group provision:
          Use **up** and **down** arrow keys to choose a resource group you've created before or select **Create New...** to provision a new resource group. Complete the resource group provision according to the command line prompt.

          ![Select or create Azure resource group]({{"/assets/images/mini-solution/connect-iothub/select-or-create-resource-group.png" | absolute_url }})

          If you choose to create a new resource group:
          * Use **up** and **down** arrow keys to select region for a new resource group provision, and then press **Enter** to confirm.

            ![Select region for a new resource group]({{"/assets/images/mini-solution/connect-iothub/select-region-for-resource-group.png" | absolute_url }})

            _Select region for resource group provision_

          * Input a name for new resource group.

            ![Input name for resource group]({{"/assets/images/mini-solution/connect-iothub/input-name-for-resource-group.png" | absolute_url }})

            _Input a name for resource group provision_

        * IoT Hub provision:

          Enter a name for your new IoT Hub, and press **Enter** to confirm.

          ![Input a name for IoT Hub]({{"/assets/images/mini-solution/connect-iothub/input-name-for-iothub.png" | absolute_url }})

          _Input a name for IoT Hub provision_

          Wait several minutes to finish ARM Template deployment and IoT Hub Device provision. Then press any key to exit the terminal.

          ![Provision Azure IoT Hub done]({{"/assets/images/mini-solution/connect-iothub/provision-iothub-done.png" | absolute_url }})

          _Finish cloud provision_

## Step 3. Build and upload Arduino sketch

{% include switch.html content = page.variable %}

#### Windows

1. Use `Ctrl+P` to run `task config-device-connection`.

2. The terminal will ask you whether you want to use connection string that retrieves from `task cloud-provision` step. You could also input your own device connection string by clicking 'Create New...'

3. The terminal prompts you to enter configuration mode. To do so, hold down button A, then push and release the reset button. The screen displays the DevKit id and 'Configuration'.
  ![Verification and upload of the Arduino sketch]({{"/assets/images/mini-solution/connect-iothub/config-device-connection.png" | absolute_url }})

4. After `task config-device-connection` finished, click `F1` to load VS Code commands and select `Arduino: Upload`, then VS Code starts verifying and uploading the Arduino sketch:
  ![Verification and upload of the Arduino sketch]({{"/assets/images/mini-solution/connect-iothub/arduino-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you get error "Error: AZ3166: Unknown package". This is due to the board package index is not refreshed. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to solve it.
{: .notice--warning}

#### macOS

1. Put DevKit into configuration mode:
  Hold down button A, then push and release the reset button. The screen displays 'Configuration'.

2. Use `Cmd+P` to run `task config-device-connection`.

3. The terminal will ask you whether you want to use connection string that retrieves from `task cloud-provision` step. You could also input your own device connection string by clicking 'Create New...'
  ![device-upload]({{"/assets/images/mini-solution/connect-iothub/config-device-connection.png" | absolute_url }})

4. After `task config-device-connection` finished, click `Cmd + shift + p` to load VS Code commands and select `Arduino: Upload`, then VS Code starts verifying and uploading the Arduino sketch:
  ![device-upload]({{"/assets/images/mini-solution/connect-iothub/arduino-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you get error "Error: AZ3166: Unknown package". This is due to the board package index is not refreshed. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to solve it.
{: .notice--warning}

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

## Check data in IoT Hub

In VS Code, following these steps to monitor D2C messages in IoT Hub:

1. Bring up the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of VS Code or the View: Extensions command `(Ctrl+Shift+X)`:
  ![vscode-extensions-icon]({{"/assets/images/mini-solution/connect-iothub/vscode-extensions-icon.png" | absolute_url }})

2. In `Search Extensions in Marketplace` bar on the left size, type `Azure IoT Toolkit` and press Enter. 

3. After a while for search, you will find `Azure IoT Toolkit` appears as the first extension in the list.
  ![azure-iot-toolkit-in-extensions-list]({{"/assets/images/mini-solution/connect-iothub/azure-iot-toolkit-in-extensions-list.png" | absolute_url }})

4. Click `Install` button and it will enter Installing status.
  ![azure-iot-toolkit-installing]({{"/assets/images/mini-solution/connect-iothub/azure-iot-toolkit-installing.png" | absolute_url }})

5. Click `Reload` button after it appears then click `Reload Window` button in the small popup window
  ![azure-iot-toolkit-reload]({{"/assets/images/mini-solution/connect-iothub/azure-iot-toolkit-reload.png" | absolute_url }})

6. In Explorer of VS Code, click `IoT Hub Devices` in the bottom left corner.
  ![azure-iot-toolkit-iot-hub-devices]({{"/assets/images/mini-solution/connect-iothub/azure-iot-toolkit-iot-hub-devices.png" | absolute_url }})

7. Click `Set IoT Hub Connection String` in context menu.
  ![azure-iot-toolkit-iot-hub-conn-string]({{"/assets/images/mini-solution/connect-iothub/azure-iot-toolkit-iot-hub-conn-string.png" | absolute_url }})

  To find the IoT Hub connection string,
    a. login in Azure portal and find IoT Hub you created on `Step 2. Provision Azure services`, and then click Shared access policies.
      ![azure-portal-iot-hub]({{"/assets/images/mini-solution/connect-iothub/azure-portal-iot-hub.png" | absolute_url }})

    b. In the Shared access policies pane, click the iothubowner policy, and then copy and make a note of the Connection string of your IoT hub.
      ![azure-portal-iot-hub-conn-string]({{"/assets/images/mini-solution/connect-iothub/azure-portal-iot-hub-conn-string.png" | absolute_url }})

8. Click `IoT: Start monitoring D2C message` in context menu of `IoT Hub Devices`.

9. In `OUTPUT` console at the right bottom window, you would see the incoming D2C messages to IoT Hub.
  ![azure-iot-toolkit-output-console]({{"/assets/images/mini-solution/connect-iothub/azure-iot-toolkit-output-console.png" | absolute_url }})

## Customize device ID

You can customize device ID in IoT Hub by following [this doc]({{"/docs/customize-device-id/" | absolute_url }}), however, you still need to change the hardcoding `AZ3166` to customized device ID in the code currently. Here's the list of files you need to modify:

* [config.h](https://github.com/Microsoft/devkit-sdk/blob/master/AZ3166/src/libraries/AzureIoT/examples/GetStarted/config.h#L9)

## Problems and feedback

If you encounter problems, you can find [FAQs]({{"/docs/faq/" | absolute_url }}) if you encounter problems or reach out to us from the channels below.

{% include feedback.html tutorial="happy-path" %}

## Next steps

You have successfully connected an MXChip IoT DevKit to your IoT hub, and you have sent the captured sensor data to your IoT hub.

To continue getting started with Azure IoT Hub and to explore other IoT scenarios, see:

- [Manage cloud device messaging with iothub-explorer](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-explorer-cloud-device-messaging){:target="_blank"}
- [Save IoT Hub messages to Azure data storage](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-store-data-in-azure-table-storage){:target="_blank"}
- [Use Power BI to visualize real-time sensor data from Azure IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-live-data-visualization-in-power-bi){:target="_blank"}
- [Use Web Apps to visualize real-time sensor data from Azure IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-live-data-visualization-in-web-apps){:target="_blank"}
- [Weather forecast using the sensor data from your IoT hub in Azure Machine Learning](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-weather-forecast-machine-learning){:target="_blank"}
- [Device management with iothub-explorer](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-device-management-iothub-explorer){:target="_blank"}
- [Remote monitoring and notifications with ​​Logic ​​Apps](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-monitoring-notifications-with-azure-logic-apps){:target="_blank"}
