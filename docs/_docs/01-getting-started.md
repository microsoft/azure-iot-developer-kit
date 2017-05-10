---
title: "Getting Started Guide"
permalink: /docs/getting-started/
excerpt: "How to quickly install and setup development environment for use with DevKit."
last_modified_at: 2017-05-05T10:01:43-04:00
---

For a first-time user of the MXChip IoT Developer Kit (a.k.a DevKit), follow these quick steps to prepare your development environment and begin building IoT applications.

{% include toc icon="columns" %}

## Step 1. Before starting

### A. What you need

* MXChip IoT Developer Kit. [Get it now](https://blogs.msdn.microsoft.com/iotdev/devkit-contact/){:target="_blank"}
* A computer running Windows 10 or macOS 10.10+ (coming soon)
* An active Azure subscription
  * Activate a [free 30-day trial Microsoft Azure account](https://azureinfo.microsoft.com/us-freetrial.html){:target="_blank"}

## Step 2. Prepare your hardware

Hook up your hardware to your computer.

### A. What you need

* DevKit board
* Micro USB cable

![getting-started-hardware]({{"/assets/images/getting-started-hardware.jpg" | absolute_url }})

### B. Connect DevKit to your computer

1. Connect USB end to your PC
2. Connect Micro USB end to the DevKit
3. The green LED next to power confirms connection

![getting-started-connect]({{"/assets/images/getting-started-connect.jpg" | absolute_url }})

### C. (Optional) Upgrade to latest firmware

To have everything work properly, follow [Upgrading]({{"/docs/upgrading/" | absolute_url}}) guide to upgrade the DevKit firmware to latest version.

This is an one-time effort, once you started developing on the DevKit and uploading your app, you will have the latest firmware with it.

### D. Test sensors and WiFi on DevKit

Now you have connected your DevKit to computer. Follow the instructions on the screen to test sensors and WiFi:

- Press button A to test WiFi connection
- Press button B to test sensors, press again to switch a sensor

![getting-started-sensors]({{"/assets/images/getting-started-sensors.png" | absolute_url }})

## Step 3. Configure WiFi

Most IoT projects are relying on Internet connectivity. Use AP (Access Point) Mode on DevKit to configure WiFi.

### A. Enter AP Mode

Hold down button B, click Reset button, then release button B. The screen will display SSID of the DevKit as well as the configuration portal IP address:

![getting-started-wifi-ap]({{"/assets/images/getting-started-wifi-ap.jpg" | absolute_url }})

### B. Connect to DevKit AP

Use your computer or mobile phone to connect to DevKit AP (highlighted in the screenshot above), leave the password as empty.

### C. Configure WiFi for DevKit

Open IP address on the screen in browser, select WiFi you want your DevKit connect to, then type the password. Click **'Connect'** to configure and connect to WiFi.

![getting-started-wifi-portal]({{"/assets/images/getting-started-wifi-portal.png" | absolute_url }})

Once the connection is succeeded, the DevKit will reboot in a few seconds. After reboot, you can test the connection by clicking button A. The WiFi SSID and IP address will display on the screen.

![getting-started-wifi-ip]({{"/assets/images/getting-started-wifi-ip.jpg" | absolute_url }})

**Note:** The IP address displays on the web page might not be identical to the actual IP address assigned and displayed on screen. This is normal as the WiFi is using DHCP to dynamically IP assignment.
{: .notice--info}


## Step 4. Prepare development environment

Now it is time to set up the developerment environment: tools and packages for you to build stunning IoT applications.

### A. Download latest package

The `.zip` file you download contains all necessary tools and packages required for DevKit development.

[<i class='fa fa-download'></i> Download](https://azureboard.blob.core.windows.net/installpackage/usb_install_latest.zip){: .btn .btn--success .btn--large}

**Note:** If you are using the old version of the DevKit, download [legacy build](https://azureboard.blob.core.windows.net/installpackage/usb_install_legacy.zip).
{: .notice--info}

> The `.zip` file contains the following tools and packageas. If you already have some components installed, the script will detect and skip them.
> * Node.js and Yarn: Runtime for the setup script and automated tasks
> * Python and pip: For running Azure CLI 2.0
> * [Azure CLI 2.0](https://docs.microsoft.com/en-us/cli/azure/overview){:target="_blank"} - Cross-platform  command-line experience for managing Azure resources
> * [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"} (VS Code): Lightweight code editor for DevKit development
> * [VS Code Arduino Extension](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino){:target="_blank"}: Enables Arduino development in VS Code
> * [Arduino IDE](https://www.arduino.cc/en/Main/Software){:target="_blank"}: VS Code Arduino Extension relies on this tool
> * DevKit Board Package: Toolchains, libraries and projects for the DevKit
> * ST-Link Utility: Essential utility and drivers

### B. Run installation script

In the File Explorer, locate the `.zip` and extract it, find `azure-install.cmd`, right-click and select **"Run as administrator"** to start.

![getting-started-run-admin]({{"/assets/images/getting-started-run-admin.png" | absolute_url }})

During installation, you will see the progress of each tool or package.

![getting-started-install]({{"/assets/images/getting-started-install.png" | absolute_url }})

### C. Confirm to install drivers

The VS Code for Arduino extension relies on the Arduino IDE to work. If this is the first time you are installing Arduino IDE, you will be prompted to install relevant drivers:

![getting-started-driver]({{"/assets/images/getting-started-driver.png" | absolute_url }})

It should take around 10 minutes to finish all installations depending on your Internet speed. Once installation is complete, you should see Visual Studio Code and Arduino IDE shortcuts on your desktop.

## Next Steps

You are all set! It's time to build your first IoT application by following instructions in [Projects Catalog]({{"/docs/projects/" | absolute_url }}).
