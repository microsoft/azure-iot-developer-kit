# Getting Started Guide

For the first time user of Microsoft Azure IoT Developer Kit, follow these quick steps to prepare your development environment and hookup the device to begin building IoT applications.

## Step 1. Before starting

### Required Hardware & Software

* Microsoft Azure IoT Developer Kit. [Get it now]  (http://microsoft.github.io/azure-iot-developer-kit)
* A desktop or laptop computer running Windows 10 or macOS 10.10+ (coming soon)

### Get an Azure account

* Activate your Azure account and bring your Microsoft account credentials. Don't have a Microsoft account? [Sign up now]()
* Activate a [free 30-day trial Microsoft Azure account](https://azureinfo.microsoft.com/us-freetrial.html) which gives you 200USD of credit to get started.
* If you subscribe to MSDN, activate your free [Azure MSDN subscriber benefits](https://azure.microsoft.com/en-us/pricing/member-offers/visual-studio-subscriptions/)

## Step 2. Set up the development environment

Use USB stick come with the kit to quickly set up the development environment including installation of tools and packages, as well as provisioning of the Azure services required for building your IoT app.

### A. Launch setup script

Connect USB stick to your PC. In the File Explorer, select the USB drive, then find `azure-install.cmd` and right click on it and select **"Run as administrator"** to start.

![][getting-started-install]

### B. Install tools and packages

The script is in charge of installation for all needed tools and packages for you.

VS Code for Arduino Extension relies on Arduino IDE to work. During Arduino IDE installation, you will be prompted to install relevant drivers:

![][getting-started-driver]

It normally takes a couple of minutes to finish all the installation depending on your Internet speed. Once installation finishes, you will see Visual Studio Code and Arduino shortcuts on your desktop.

![][getting-started-icons]

> Here is the list of tools and packages will be installed:
> * Node.js - Runtime for the setup script and automated tasks
> * Python and pip - For running Azure CLI 2.0
> * [Azure CLI 2.0](https://docs.microsoft.com/en-us/cli/azure/overview) - Cross platform new command-line experience for managing Azure resources
> * [Visual Studio Code](https://code.visualstudio.com/) - Code editor you will used to developer for the DevKit
> * [VS Code Arduino Extension](https://marketplace.visualstudio.com/VSCode) - Make VS Code perfect for Arduino development
> * DevKit Board Package - Toolchains, libraries and min solutions for the DevKit
> * ST-Link Utility - Essential utility and drivers

### C. Provision Azure services

**[TODO: Moved to Quick Start]**

## Step 3. Prepare your hardware

Hook up your hardware to your desktop or laptop computer.

### A. Make sure you have everything you need

All you need is a DevKit board and Micro USB cable:

![][getting-started-hardware]

### B. Launch Visual Studio Code

This is the primary editor for developing on the DevKit.

### C. Connect your DevKit board to PC via USB

![][getting-started-connect]

1. Connect USB end to your PC
2. Connect Micro USB to the DevKit's USB Port
3. The green LED next to power confirms connection

Visual Studio Code will detect DevKit and open Quick Start page with example panes automatically. Follow the Quick Start instructions on the welcome page as shown below:

![][getting-started-vscode]

# Next

You are all set now. It's time to build your first IoT application from mini solution catalog. You can access the catalog from the Quick Start page or directly from [here](http://microsoft.github.io/azure-iot-developer-kit)

# FAQ

**[TODO]**




[getting-started-install]: ./images/getting-started-install.png "Install"

[getting-started-driver]: ./images/getting-started-driver.png "Driver"

[getting-started-icons]: ./images/getting-started-icons.png "Icons"

[getting-started-hardware]: ./images/getting-started-hardware.jpg "Hardware"

[getting-started-connect]: ./images/getting-started-connect.jpg "Connect"

[getting-started-vscode]: ./images/getting-started-vscode.png "VS Code"
