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

For first-time users of the MXChip IoT DevKit (a.k.a. DevKit), follow these quick steps to:
- Prepare your development environment.
- Send temperature and humidity data from built-in DevKit sensors to the Azure IoT Hub.

If you have already done this, you can try more samples from the [Projects Catalog]({{"/docs/projects/" | absolute_url }}) or build your own IoT application.

{% include toc icon="columns" %}

## What you learn

* How to connect the DevKit to a wireless access point.
* How to install the development environment.
* How to create an IoT Hub and register a device for the DevKit.
* How to collect sensor data by running a sample application on the DevKit.
* How to send the DevKit sensor data to your IoT hub.

## What you need

* An MXChip IoT DevKit. [Get it now](https://aka.ms/iot-devkit-purchase){:target="_blank"}.
* A computer running Windows 10 or macOS 10.10+.
* An active Azure subscription. [Activate a free 30-day trial Microsoft Azure account](https://azure.microsoft.com/en-us/free/).

![Required hardware]({{"/assets/images/getting-started/hardware.jpg" | absolute_url }})

## Prepare your hardware

To connect the DevKit to your computer:

1. Connect the Micro-USB end to the DevKit.
2. Connect the USB end to your computer.
3. The green LED for power confirms the connection.

![Hardware connections]({{"/assets/images/getting-started/connect.jpg" | absolute_url }})

## Configure Wi-Fi

IoT projects rely on internet connectivity. Use AP Mode on the DevKit to configure and connect to Wi-Fi.

1. Hold down button B, push and release the reset button, and then release button B. Your DevKit enters AP mode for configuring the Wi-Fi connection. The screen displays the service set identifier (SSID) of the DevKit and the configuration portal IP address:
  ![Reset button, button B, and SSID]({{"/assets/images/getting-started/wifi-ap.jpg" | absolute_url }})

2. Use a Web browser on a different Wi-Fi enabled device (computer or mobile phone) to connect to the DevKit SSID displayed in the previous step. If it asks for a password, leave it empty.
  ![Network info and Connect button]({{"/assets/images/getting-started/connect-ssid.png" | absolute_url }})

3. Open **192.168.0.1** in the browser. Select the Wi-Fi network that you want the DevKit to connect to, type the password for the Wi-Fi conection, and then click **Connect**.
  ![Password box and Connect button]({{"/assets/images/getting-started/wifi-portal.png" | absolute_url }})

4. The DevKit reboots in a few seconds. You then see the Wi-Fi name and assigned IP address on the screen of the DevKit:
  ![Wi-Fi name and IP address]({{"/assets/images/getting-started/wifi-ip.jpg" | absolute_url }})

**Note:** After  asuccessful Wi-Fi connection, the currently-installed and latest available version of the DevKit's firmware is displayed on the DevKit screen. If the DevKit is not running on the latest available version, follow the [firmware upgrading guide]({{"/docs/firmware-upgrading/" | absolute_url }}) to install the latest version.
{: .notice--info}

## Install development environment

We encourage you to use the following one-click installation process to prepare the development environment. If you encounter any problems, you can always follow the [manual steps]({{"/docs/installation/" | absolute_url }}) to complete the process.

{% include switch.html content = page.variable %}

### Windows

1. Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).

2. Download and install [ST-Link Utility: Essential tools and drivers](http://www.st.com/en/development-tools/stsw-link009.html) (register required).

3. Download and install [Visual Studio Code](https://code.visualstudio.com/#alt-downloads).

4. Open Visual Studio Code and install [Azure IoT Workbench](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-iot-workbench) extension.

### macOS

1. Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software) (install Arduino IDE in `~/Applications`).

2. Download and install [Visual Studio Code](https://code.visualstudio.com/#alt-downloads).

3. Open Visual Studio Code and install [Azure IoT Workbench](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-iot-workbench) extension.

## Open sample projects folder

1. Open VS Code and open command palette using `F1` (or `Ctrl` + `Shift` + `P` on Windows, `Command` + `Shift` + `P` on macOS), execute **IoT Workbench: Examples**.

2. Select **IoT DevKit**, example gallery will open in a new tab.
   ![Example Gallery]({{"/assets/images/getting-started/example-gallery.png" | absolute_url }})

3. Find **Get Started** and click **Open Sample** button.

4. Select a workbench folder if you haven't set it. All IoT projects will be saved in this folder.

A new VS Code window opens with **Get Started** project files after download complete.

## Provision Azure services

1. Open VS Code command palette and execute **IoT Workbench: Cloud** command.

2. Select **Azure Provision**.

3. Follow the guide to log in to Azure and finish the provisioning process.
   ![Azure Provision Guide]({{"/assets/images/getting-started/azure-provision-guide.png" | absolute_url }})

## Configure device connection string

1. Open VS Code command palette and execute **IoT Workbench: Device** command.

2. Select **Config Device Settings**.

3. Click **Select IoT Hub Device Connection String**.
   ![Config Device Connection String]({{"/assets/images/getting-started/config-device-connection-string.png" | absolute_url }})

4. Hold down button A, push and release the reset button, and then release button A. Your DevKit enters configuration mode and saves the connection string.

## Build and upload Arduino sketch

1. Open VS Code command palette and execute **IoT Workbench: Device** command.

2. Select **Device Upload**.
   ![Device Upload]({{"/assets/images/getting-started/device-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

## Test the project

In VS Code, following these steps to open and set up the Serial Monitor:

1. Click the **COM[X]** on the status bar to set the right COM port with **STMicroelectronics**:
  ![Set COM Port]({{"/assets/images/mini-solution/connect-iothub/com-port.png" | absolute_url }})

2. Click the power plug icon on the status bar to open the Serial Monitor:
  ![Open serial monitor]({{"/assets/images/mini-solution/connect-iothub/serial-monitor.png" | absolute_url }})

The sample application is running successfully when you see the following results:

* The Serial Monitor displays the message sent to the IoT Hub.
* The LED on the MXChip IoT DevKit is blinking.

![Final output in VS Code]({{"/assets/images/mini-solution/connect-iothub/result-serial-output.png" | absolute_url }})

## Check data in Azure IoT Hub

In VS Code, you can use [Azure IoT Toolkit](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.azure-iot-toolkit) to monitor device-to-cloud (D2C) messages in IoT Hub.

1. Log in [Azure portal](https://portal.azure.com), find the IoT Hub you created.
  ![azure-portal-iot-hub]({{"/assets/images/mini-solution/connect-iothub/azure-iot-hub-portal.png" | absolute_url }})

2. In the **Shared access policies pane**, click the **iothubowner policy**, and write down the Connection string of your IoT hub.
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

8. In **OUTPUT** pane, you can see the incoming D2C messages to the IoT Hub.
  ![azure-iot-toolkit-output-console]({{"/assets/images/mini-solution/connect-iothub/azure-iot-toolkit-console.png" | absolute_url }})

## Problems and feedback

If you encounter problems, you can refer to [FAQs]({{"/docs/faq/" | absolute_url }}) or reach out to us from [Gitter channel](https://gitter.im/Microsoft/azure-iot-developer-kit){:target="_blank"}.

{% include feedback.html tutorial="get-started" %}

## Next Steps

You have successfully connected an MXChip IoT DevKit to your IoT hub, and you have sent the captured sensor data to your IoT hub. 
Check our [Projects Catalog]({{"/docs/projects/" | absolute_url }}) for more samples you can build with the DevKit and Azure multiple services.
