---
title: "Getting Started Guide"
permalink: /docs/getting-started/
excerpt: "How to quickly install and setup development environment for use with DevKit."
last_modified_at: 2016-04-30T10:01:43-04:00
---

{% include toc icon="columns" %}

For the first time user of Microsoft Azure IoT Developer Kit, follow these quick steps to prepare your development environment and hookup the device to begin building IoT applications.

## Step 1. Before starting

### Required Environment

* Microsoft Azure IoT Developer Kit. [Get it now](http://microsoft.github.io/azure-iot-developer-kit){:target="_blank"}
* A desktop or laptop computer running Windows 10 or macOS 10.10+ (coming soon)

### Get an Azure account

* Activate your Azure account and bring your Microsoft account credentials. Don't have a Microsoft account? [Sign up now](https://signup.live.com/newuser.aspx){:target="_blank"}
* Activate a [free 30-day trial Microsoft Azure account](https://azureinfo.microsoft.com/us-freetrial.html){:target="_blank"} which gives you 200USD of credit to get started
* If you subscribe to MSDN, activate your free [Azure MSDN subscriber benefits](https://azure.microsoft.com/en-us/pricing/member-offers/visual-studio-subscriptions/){:target="_blank"}

### Download latest package

The `.zip` file you need to download contains all necessary tools and packages required for developing on DevKit.

[<i class='fa fa-download'></i> Download the Package](http://10.172.15.140:8080/job/AzureIoTDeveloperKit/){: .btn .btn--success .btn--large}

> Here is the list of tools and packages in the `.zip` file, see [Manual Installation]({{"/docs/installation" | absolute_url }}) guide for more details:
> * Node.js - Runtime for the setup script and automated tasks
> * Python and pip - For running Azure CLI 2.0
> * [Azure CLI 2.0](https://docs.microsoft.com/en-us/cli/azure/overview){:target="_blank"} - Cross platform new command-line experience for managing Azure resources
> * [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"} - Code editor you will used to developer for the DevKit
> * [VS Code Arduino Extension](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino){:target="_blank"} - Make VS Code perfect for Arduino development
> * [Arduino IDE](https://www.arduino.cc/en/Main/Software){:target="_blank"} - VS Code Arduino Extension relies on it
> * DevKit Board Package - Toolchains, libraries and min solutions for the DevKit
> * ST-Link Utility - Essential utility and drivers

## Step 2. Set up the development environment

Run the script to install tools and packages automatically.

### A. Run installation script

In the File Explorer, locate the local folder you just copied files, find `azure-install.cmd` and right click on it and select **"Run as administrator"** to start.

![getting-started-run-admin]({{"/assets/images/getting-started-run-admin.png" | absolute_url }})

During installation, you will see the progress of each tool or package.

![getting-started-install]({{"/assets/images/getting-started-install.png" | absolute_url }})

**ProTip:** If you have those tools such as Arduino IDE already installed on your environment, the script will detect it and skip. If you encounter any errors that terminate the installation, you can refer to [Manual Installation]({{"/docs/installation" | absolute_url }}) guide to download and install every component individually.
{: .notice--info}

### B. Confirm to install drivers

VS Code for Arduino Extension relies on Arduino IDE to work. If this is the first time for you to install Arduino IDE, you will be prompted to install relevant drivers:

![getting-started-driver]({{"/assets/images/getting-started-driver.png" | absolute_url }})

It normally takes a couple of minutes to finish all installations depending on your Internet speed. Once installation finishes, you should see Visual Studio Code and Arduino IDE shortcuts on your desktop.

![getting-started-icons]({{"/assets/images/getting-started-icons.jpg" | absolute_url }})

## Step 3. Prepare your hardware

Hook up your hardware to your desktop or laptop computer.

### A. Make sure you have everything you need

All you need are a DevKit board and a Micro USB cable:

![getting-started-hardware]({{"/assets/images/getting-started-hardware.jpg" | absolute_url }})

### B. Launch Visual Studio Code

This will be the primary editor for developing on DevKit. Make sure you open VS Code before connecting to the DevKit board so that it can identify the board automatically.

### C. Connect your DevKit board to PC via USB

![getting-started-connect]({{"/assets/images/getting-started-connect.jpg" | absolute_url }})

1. Connect USB end to your PC
2. Connect Micro USB to the DevKit's USB Port
3. The green LED next to power confirms connection

VS Code will detect DevKit and open Welcome page with examples and mini solutions next to it automatically:

![getting-started-vscode]({{"/assets/images/getting-started-vscode.png" | absolute_url }})

## Step.4 Configure WiFi

**Subject to be changed:** This method is not yet an optimied way to configure WiFi, it is subject to be changed soon.
{: .notice--warning}

1. In VS Code, use `Ctrl+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Examples** to open example pane. Find `Examples for MXChip AZ3166 > AzureIoTHub > AzureIoTHubExample`
 ![mini-solution-solution-catalog]({{"/assets/images/mini-solution-catalog.png" | absolute_url }})

2. Use **Quick Open** (`Ctrl+P`) to run 'task config_wifi'. It will open terminal and prompt you instructions on connecting to WiFi:
 ![mini-solution-wifi]({{"/assets/images/mini-solution-wifi.png" | absolute_url }})

3. In terminal window opened, you will be asked to put your DevKit into Factory Mode. To do so, click Button A and hold it, click Reset Button, then release Reset button before Button A:
 ![getting-started-configure-wifi]({{"/assets/images/getting-started-configure-mode.png" | absolute_url }})

4. Then you will be prompted to enter SSID and password for the WiFi you want DevKit to connect to:
 ![getting-started-configure-wifi-ssid]({{"/assets/images/getting-started-configure-wifi-ssid.png" | absolute_url }})

4. Click **Enter** when succeeds. The DevKit will reboot and get WiFi connected, to verify the connection, you can see the WiFi LED light up with IP address on the screen:
 ![getting-started-wifi-ip]({{"/assets/images/getting-started-wifi-ip.jpg" | absolute_url }})

# Next

You are all set now. It's time to build your first IoT application by following instructions in [Mini Solution Catalog]({{"/docs/mini-solutions/" | absolute_url }}).
