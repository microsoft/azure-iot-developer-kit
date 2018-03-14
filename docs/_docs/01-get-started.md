---
title: "Get started"
permalink: /docs/get-started/
excerpt: "How to quickly install and set up your development environment to use the DevKit."
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2018-03-12
---

For first-time users of the MXChip IoT DevKit (a.k.a. DevKit), follow these quick steps to prepare your development environment, and send temperature and humidity data from sensors to the Azure IoT Hub.

If you already did it, you can try more samples from [Projects Catalog]({{"/docs/projects/" | absolute_url }}) or build your own IoT application.

{% include toc icon="columns" %}

## What you learn

* How to connect the IoT DevKit to a wireless access point and install development environment.
* How to create an IoT Hub and register a device for MXChip IoT DevKit.
* How to collect sensor data by running a sample application on MXChip IoT DevKit.
* How to send the sensor data to your IoT hub.

## What you need

* A MXChip IoT DevKit. [Get it now](https://aka.ms/iot-devkit-purchase){:target="_blank"}.
* A computer running Windows 10 or macOS 10.10+.
* An active Azure subscription. [Activate a free 30-day trial Microsoft Azure account](https://azureinfo.microsoft.com/us-freetrial.html).

![Required hardware]({{"/assets/images/getting-started/hardware.jpg" | absolute_url }})

## Prepare your hardware

To connect the DevKit to your computer:

1. Connect the USB end to your computer.
2. Connect the Micro-USB end to the DevKit.
3. The green LED for power confirms the connection.

![Hardware connections]({{"/assets/images/getting-started/connect.jpg" | absolute_url }})

## Configure Wi-Fi

IoT projects rely on internet connectivity. Use AP Mode on the DevKit to configure and connect to Wi-Fi.

1. Hold down button B, push and release the reset button, and then release button B. Your DevKit enters AP mode for configuring Wi-Fi. The screen displays the service set identifier (SSID) of the DevKit and the configuration portal IP address:
  ![Reset button, button B, and SSID]({{"/assets/images/getting-started/wifi-ap.jpg" | absolute_url }})

2. Use another Wi-Fi enabled device (computer or mobile phone) to connect to the DevKit SSID. If it asks password, leave it empty.
  ![Network info and Connect button]({{"/assets/images/getting-started/connect-ssid.png" | absolute_url }})

3. Open **192.168.0.1** in the browser. Select the Wi-Fi network that you want the DevKit to connect to, and then type the password. Click **Connect**.
  ![Password box and Connect button]({{"/assets/images/getting-started/wifi-portal.png" | absolute_url }})

4. The DevKit reboots in a few seconds. You then see the Wi-Fi name and assigned IP address on the screen:
  ![Wi-Fi name and IP address]({{"/assets/images/getting-started/wifi-ip.jpg" | absolute_url }})

**Note:** After Wi-Fi connection, you can see the current firmware version on the DevKit. Follow [firmware upgrading guide]({{"/docs/firmware-upgrading/" | absolute_url }}) to make sure the DevKit is running on the latest version.
{: .notice--info}

## Install development environment

We encourage you to use one-click installation experience to prepare the development environment. If you encounter any problems, you can follow the [manual steps]({{"/docs/installation/" | absolute_url }}) to get it done.

{% include switch.html content = page.variable %}

### Windows

1. Download the .zip file that contains all the tools and packages for DevKit development.
  [<i class='fa fa-download'></i> Download](https://aka.ms/devkit/prod/installpackage/latest){: .click-action-tracker .btn .btn--success .btn--large}
  > The .zip file installs the following tools and packages. If you already have some of them installed, the script will can and skip them.
  > * Node.js and Yarn: Runtime for the setup script and automated tasks.
  > * [Azure CLI 2.0 MSI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest#install-on-windows){:target="_blank"} - Cross-platform  command-line experience for managing Azure resources. The MSI contains dependent Python and pip.
  > * [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"} (VS Code): Lightweight code editor for DevKit development.
  > * [Visual Studio Code extension for Arduino](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino){:target="_blank"}: Extension that enables Arduino development in Visual Studio Code. 
  > * [Arduino IDE](https://www.arduino.cc/en/Main/Software){:target="_blank"}: The extension for Arduino relies on this tool.
  > * DevKit Board Package: Tool chains, libraries, and projects for the DevKit
  > * ST-Link Utility: Essential tools and drivers.

2. Extract downloaded file. Find `install.cmd`, right-click it, and select **Run as administrator**:
  ![File Explorer]({{"/assets/images/getting-started/run-admin.png" | absolute_url }})

3. Click **Next** to confirm install utilities like ST-Link drivers.
  ![getting-started-driver]({{"/assets/images/getting-started/driver.png" | absolute_url }})

**Notice:** Don't unzip the downloaded .zip file into a network folder and install from it. Arduino IDE can cause error to find correct file locations.
{: .notice--warning}

The installation should take around 5 to 10 minutes, depending on your internet speed. After it is complete, you should see Visual Studio Code and Arduino IDE shortcuts on your desktop.

### macOS

Homebrew is the easiest way to manage your CLI install. It provides convenient ways to install, update, and uninstall. If you don't have homebrew available on your system, [install homebrew](https://docs.brew.sh/Installation.html) before continuing.

1. Download the .zip file that contains all the tools and packages for DevKit development.
  [<i class='fa fa-download'></i> Download](https://aka.ms/devkit/prod/installpackage/mac/latest){: .click-action-tracker .btn .btn--success .btn--large}
  > The .zip file installs the following tools and packages. If you already have some of them installed, the script can detect and skip them.
  > * Node.js and Yarn: Runtime for the setup script and automated tasks.
  > * [Azure CLI 2.0](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest#a-namemacosinstall-on-macos){:target="_blank"} - Cross-platform  command-line experience for managing Azure resources.
  > * [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"} (VS Code): Lightweight code editor for DevKit development.
  > * [Visual Studio Code extension for Arduino](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino){:target="_blank"}: Extension that enables Arduino development in Visual Studio Code. 
  > * [Arduino IDE](https://www.arduino.cc/en/Main/Software){:target="_blank"}: The extension for Arduino relies on this tool.
  > * DevKit Board Package: Tool chains, libraries, and projects for the DevKit
  > * ST-Link Utility: Essential tools and drivers.

2. Extract downloaded file.
  ![macOS finder]({{"/assets/images/getting-started/mac-finder.png" | absolute_url }})

3. Launch Terminal app, locate the folder you extract .zip file and run:
  ```bash
  ./install.sh
  ```
  ![macOS install]({{"/assets/images/getting-started/mac-install-sh.png" | absolute_url }})

**Notice:** If you meet Homebrew permission error, run `brew doctor` to get it fixed. Check [FAQ]({{"/docs/faq/#homebrew-permission-error-on-macos" | absolute_url }}) for more details.
{: .notice--warning}

**Notice:** Don't unzip the downloaded .zip file into a network folder and install from it. Arduino IDE can cause error to find correct file locations.
{: .notice--warning}

## Open sample projects folder

1. Make sure your DevKit is not connected. Start VS Code first and connect the DevKit to your computer.
  ![Introduction page]({{"/assets/images/mini-solution/vscode_start.png" | absolute_url }})

2. Expand left side **ARDUINO EXAMPLES** section, browse to **Examples for MXCHIP AZ3166 > AzureIoT**, and select **GetStarted**.
  ![Arduino Examples tab]({{"/assets/images/mini-solution/vscode_examples.png" | absolute_url }})

A new VS Code window opens with **GetStarted** project files.

**Note:** If you happen to close the pane, you can reopen it. Click `F1` to open the command palette, type **Arduino**, and then find and select **Arduino: Examples**.
{: .notice--info}

## Provision Azure services

1. Run your task through `Ctrl+P` (macOS: `Cmd+P`), then type **task** and select **task cloud-provision**. An interactive terminal window opens and guides you to provision the required Azure services.
  ![Interactive command line]({{"/assets/images/mini-solution/connect-iothub/cloud-provision.png" | absolute_url }})

2. Follow the guide to log in Azure and finish the provision.
  ![Provision Azure IoT Hub done]({{"/assets/images/mini-solution/connect-iothub/provision-iothub-done.png" | absolute_url }})
  > The task automates Azure services provision. Here are the required items for getting the provision done.
  > * Azure subscription: It is tied to your Azure account.
  > * [Azure Resource Group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview): It provides a way to monitor, control access, provision and manage billing for collections of assets that are required to run an application, or used by a client or company department.
  > * [Azure IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-what-is-iot-hub): A fully managed service that enables reliable and secure bidirectional communications between millions of IoT devices and a solution back end.
  > * [Device ID](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-identity-registry): Before a device can connect to an IoT hub, there must be an entry for that device in the IoT hub's identity registry.

3. After done, press any key to close the terminal window.

## Configure device connection string

1. Run your task through `Ctrl+P` (macOS: `Cmd+P`), then type **task** and select **task config-device-connection**.
  ![Configure connection string]({{"/assets/images/mini-solution/connect-iothub/config-device-connection.png" | absolute_url }})

2. Click `Enter` to configure the connection string that retrieves from cloud provisioning step.

3. Hold down button A, push and release the reset button, and then release button A. Your DevKit enters configuration mode and save the connection string.

4. After done, press any key to close the terminal window.

## Build and upload Arduino sketch

1. Click `F1`, then type **Arduino** and select **Arduino: Upload**.
  ![Verification and upload of the Arduino sketch]({{"/assets/images/mini-solution/connect-iothub/arduino-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

## Test the project

In VS Code, following these steps to open and set up the Serial Monitor:

1. Click the **COM[X]** on the status bar to set the right COM port with **STMicroelectronics**:
  ![Set COM Port]({{"/assets/images/mini-solution/connect-iothub/com-port.png" | absolute_url }})

2. Click power plug icon on the status bar to open the Serial Monitor:
  ![Open serial monitor]({{"/assets/images/mini-solution/connect-iothub/serial-monitor.png" | absolute_url }})

The sample application is running successfully when you see the following results:

* The Serial Monitor displays the message send to IoT Hub.
* The LED on MXChip IoT DevKit is blinking.

![Final output in VS Code]({{"/assets/images/mini-solution/connect-iothub/result-serial-output.png" | absolute_url }})

## Check data in Azure IoT Hub

In VS Code, you can use [Azure IoT Toolkit](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.azure-iot-toolkit) to monitor device to cloud (D2C) messages in IoT Hub.

1. Log in [Azure portal](https://portal.azure.com), find the IoT Hub you created.
  ![azure-portal-iot-hub]({{"/assets/images/mini-solution/connect-iothub/azure-iot-hub-portal.png" | absolute_url }})

2. In the **Shared access policies pane**, click the **iothubowner policy**, and note down the Connection string of your IoT hub.
  ![azure-portal-iot-hub-conn-string]({{"/assets/images/mini-solution/connect-iothub/azure-portal-conn-string.png" | absolute_url }})

3. In VS Code, click the Extensions icon in the Activity Bar:
  ![vscode-extensions-icon]({{"/assets/images/mini-solution/connect-iothub/vsc-extensions-icon.png" | absolute_url }})

4. Search for **Azure IoT Toolkit** and install it.
  ![azure-iot-toolkit-installing]({{"/assets/images/mini-solution/connect-iothub/azure-iot-toolkit-install.png" | absolute_url }})

5. Expand **IoT Hub Devices** on the bottom left corner.
  ![azure-iot-toolkit-iot-hub-devices]({{"/assets/images/mini-solution/connect-iothub/azure-iot-toolkit-devices.png" | absolute_url }})

6. Click **Set IoT Hub Connection String** in context menu.
  ![azure-iot-toolkit-iot-hub-conn-string]({{"/assets/images/mini-solution/connect-iothub/azure-iot-toolkit-conn-string.png" | absolute_url }})

7. Click **IoT: Start monitoring D2C message** in context menu.

8. In **OUTPUT** pane, you can see the incoming D2C messages to IoT Hub.
  ![azure-iot-toolkit-output-console]({{"/assets/images/mini-solution/connect-iothub/azure-iot-toolkit-console.png" | absolute_url }})

## Problems and feedback

If you encounter problems, you can find [FAQs]({{"/docs/faq/" | absolute_url }}) or reach out to us from [Gitter channel](https://gitter.im/Microsoft/azure-iot-developer-kit){:target="_blank"}.

{% include feedback.html tutorial="get-started" %}

## Next Steps

You have successfully connected an MXChip IoT DevKit to your IoT hub, and you have sent the captured sensor data to your IoT hub. 
Check our [Projects Catalog]({{"/docs/projects/" | absolute_url }}) for more samples you can build with the DevKit and Azure multiple services.
