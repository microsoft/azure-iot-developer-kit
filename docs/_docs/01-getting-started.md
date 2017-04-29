---
title: "Getting Started Guide"
permalink: /docs/getting-started/
excerpt: "How to quickly install and setup Minimal Mistakes for use with GitHub Pages."
last_modified_at: 2016-11-03T10:01:43-04:00
---

{% include toc icon="columns" %}

For the first time user of Microsoft Azure IoT Developer Kit, follow these quick steps to prepare your development environment and hookup the device to begin building IoT applications.

## Step 1. Before starting

### Required Hardware & Software

* Microsoft Azure IoT Developer Kit. [Get it now](http://microsoft.github.io/azure-iot-developer-kit){:target="_blank"}
* A desktop or laptop computer running Windows 10 or macOS 10.10+ (coming soon)

### Get an Azure account

* Activate your Azure account and bring your Microsoft account credentials. Don't have a Microsoft account? [Sign up now](https://signup.live.com/newuser.aspx){:target="_blank"}
* Activate a [free 30-day trial Microsoft Azure account](https://azureinfo.microsoft.com/us-freetrial.html){:target="_blank"} which gives you 200USD of credit to get started
* If you subscribe to MSDN, activate your free [Azure MSDN subscriber benefits](https://azure.microsoft.com/en-us/pricing/member-offers/visual-studio-subscriptions/){:target="_blank"}

## Step 2. Set up the development environment

Use USB stick come with the kit to quickly set up the development environment including installation of tools and packages, as well as provisioning of the Azure services required for building your IoT app.

### A. Copy all files to local drive

It is recommended to copy all files from USB stick to your local drive to speed up the installation.

### B. Launch setup script

In the File Explorer, locate the local folder you just copied files, find `azure-install.cmd` and right click on it and select **"Run as administrator"** to start.

![getting-started-run-admin]({{"/assets/images/getting-started-run-admin.jpg" | absolute_url }})

### C. Install tools and packages

The script is in charge of installation for all needed tools and packages for you.

![getting-started-install]({{"/assets/images/getting-started-install.png" | absolute_url }})

> Here is the list of tools and packages will be installed:
> * Node.js - Runtime for the setup script and automated tasks
> * Python and pip - For running Azure CLI 2.0
> * [Azure CLI 2.0](https://docs.microsoft.com/en-us/cli/azure/overview){:target="_blank"} - Cross platform new command-line experience for managing Azure resources
> * [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"} - Code editor you will used to developer for the DevKit
> * [VS Code Arduino Extension](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino){:target="_blank"} - Make VS Code perfect for Arduino development
> * DevKit Board Package - Toolchains, libraries and min solutions for the DevKit
> * ST-Link Utility - Essential utility and drivers

VS Code for Arduino Extension relies on Arduino IDE to work. During Arduino IDE installation, you will be prompted to install relevant drivers:

![getting-started-driver]({{"/assets/images/getting-started-driver.png" | absolute_url }})

It normally takes a couple of minutes to finish all installations depending on your Internet speed. Once installation finishes, you should see Visual Studio Code and Arduino shortcuts on your desktop.

![getting-started-icons]({{"/assets/images/getting-started-icons.png" | absolute_url }})

## Step 3. Prepare your hardware

Hook up your hardware to your desktop or laptop computer.

### A. Make sure you have everything you need

All you need are a DevKit board and a Micro USB cable:

![getting-started-hardware]({{"/assets/images/getting-started-hardware.jpg" | absolute_url }})

### B. Launch Visual Studio Code

This will be the primary editor for developing on DevKit. Make sure you open VS Code before connecting to the DevKit board so that it can identify the board successfully.

### C. Connect your DevKit board to PC via USB

![getting-started-connect]({{"/assets/images/getting-started-connect.jpg" | absolute_url }})

1. Connect USB end to your PC
2. Connect Micro USB to the DevKit's USB Port
3. The green LED next to power confirms connection

VS Code will detect DevKit and open Welcome page with examples and mini solutions next to it automatically:

![getting-started-vscode]({{"/assets/images/getting-started-vscode.png" | absolute_url }})

## Step.4 Configure WiFi

*This section is subject to be changed soon*

1. In VS Code, use `Ctrl+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Examples** to open example pane. Find `Examples for MXChip AZ3166 > AzureIoTHub > AzureIoTHubExample`
 ![mini-solution-solution-catalog]({{"/assets/images/mini-solution-solution-catalog.png" | absolute_url }})

2. Use **Quick Open** (`Ctrl+P`) to run 'task config_wifi'. It will open terminal and prompt you instructions on connecting to WiFi:
 ![mini-solution-wifi]({{"/assets/images/mini-solution-wifi.png" | absolute_url }})

3. In terminal window opened, you will be asked to put your DevKit into Factory Mode. To do so, click Button A and hold it, click Reset Button, then release Reset button before Button A:
 ![getting-started-configure-wifi]({{"/assets/images/getting-started-configure-wifi.png" | absolute_url }})

4. Then you will be prompted to enter SSID and password for the WiFi you want DevKit to connect to:
 ![getting-started-configure-wifi-ssid]({{"/assets/images/getting-started-configure-wifi-ssid.png" | absolute_url }})

4. Click **Enter** when succeeds. The DevKit will reboot and get WiFi connected, to verify the connection, you can see the WiFi LED light up with IP address:
 ![getting-started-wifi-ip]({{"/assets/images/getting-started-wifi-ip.jpg" | absolute_url }})

# Next

You are all set now. It's time to build your first IoT application by following instructions in [Mini Solution Catalog]({{"/docs/mini-solutions/" | absolute_url }}).
