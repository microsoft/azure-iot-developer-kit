---
title: "Get Started"
permalink: /docs/get-started/
excerpt: "How to quickly install and set up your development environment to use the DevKit."
variable:
  - platform: windows
    name: Windows
  - platform: macos-preview
    name: macOS
last_modified_at: 2017-07-17
---

For first-time users of the MXChip IoT DevKit (a.k.a DevKit), follow these quick steps to prepare your development environment and begin building IoT applications.

{% include toc icon="columns" %}

## Step 1. Before starting

### A. What you need

* MXChip IoT DevKit. [Get it now](https://aka.ms/iot-devkit-purchase){:target="_blank"}
* A computer running Windows 10 or macOS 10.10+
* Wi-Fi or hotspot on mobile phone that DevKit can connect to

## Step 2. Prepare your hardware

Hook up the hardware to your computer.

### A. Hardware you need

* DevKit board
* Micro-USB cable

![Required hardware]({{"/assets/images/getting-started/hardware.jpg" | absolute_url }})

### B. Connect DevKit to your computer

1. Connect Micro-USB end to the DevKit
2. Connect USB end to your computer
3. The green LED for power confirms the connection

![Hardware connections]({{"/assets/images/getting-started/connect.jpg" | absolute_url }})

## Step 3. Configure Wi-Fi

IoT projects rely on internet connectivity. Use the following instructions to configure the DevKit to connect to Wi-Fi.

### A. Enter AP Mode

Hold down button B, push and release the reset button, and then release button B. Your DevKit enters AP mode for configuring Wi-Fi. The screen displays the service set identifier(SSID) of the DevKit and the configuration portal IP address:

![Reset button, button B, and SSID]({{"/assets/images/getting-started/wifi-ap.jpg" | absolute_url }})

### B. Connect to DevKit AP

Now, use another Wi-Fi enabled device (computer or mobile phone) to connect to the DevKit SSID (highlighted in the preview image). Leave the password empty.

![Network info and Connect button]({{"/assets/images/getting-started/connect-ssid.png" | absolute_url }})

### C. Configure Wi-Fi for the DevKit

Open the IP address shown on the DevKit screen on your computer or mobile phone browser, select the Wi-Fi network that you want the DevKit to connect to, and then type the password. Select **Connect**:

![Password box and Connect button]({{"/assets/images/getting-started/wifi-portal.png" | absolute_url }})

When the connection succeeds, the DevKit reboots in a few seconds. You then see the Wi-Fi name and IP address on the screen:

![Wi-Fi name and IP address]({{"/assets/images/getting-started/wifi-ip.jpg" | absolute_url }})

**Note:** The IP address displayed in the photo might not match the actual IP address assigned and displayed on the DevKit screen. This is normal, because Wi-Fi uses DHCP to dynamically assign IPs.
{: .notice--info}

After Wi-Fi is configured, your credentials will persist on the device for that connection, even if the device is unplugged. For example, if you configure the DevKit for Wi-Fi in your home and then take the DevKit to the office, you will need to reconfigure AP mode (starting at the step in the "Enter AP Mode" section) to connect the DevKit to your office Wi-Fi. 

## Step 4. Start using the DevKit

The default app running on the DevKit checks the latest version of the firmware and displays some sensor diagnosis data for you.

### A. Upgrade to the latest firmware

**Notice:** Since v1.1, DevKit enables ST-SAFE in bootloader. You need to upgrade firmware if you are running under v1.1 in order to make it work probably.
{: .notice--warning}

If you need a firmware upgrade, the screen will show the current and latest firmware versions. To upgrade, follow the [Upgrade firmware](https://microsoft.github.io/azure-iot-developer-kit/docs/upgrading/) guide.

![Display of current and latest firmware versions]({{"/assets/images/getting-started/firmware.jpg" | absolute_url }})

**Note:** This is a one-time effort. After you start developing on the DevKit and upload your app, the latest firmware will come with your app.
{: .notice--info}

### B. Test various sensors

Press button B to test sensors. Continue pressing and releasing the button B to cycle through each sensor.

![Button B and sensor display]({{"/assets/images/getting-started/sensors.jpg" | absolute_url }})

## Step 5. Prepare the development environment

Now it's time to set up the development environment: tools and packages for you to build stunning IoT applications. You can choose the Windows or macOS version according to your operating system.

{% include switch.html content = page.variable %}

### Windows

We encourage you to use the installation package to prepare the development environment. If you encounter any problems, you can follow the [manual steps]({{"/docs/installation/" | absolute_url }}) to get it done.

#### A. Download the latest package

The .zip file that you download contains all the necessary tools and packages for DevKit development.

[<i class='fa fa-download'></i> Download](https://aka.ms/devkit/prod/installpackage/latest){: .click-action-tracker .btn .btn--success .btn--large}

**MD5:** f8c032a4b22fd3a401308fce349b7fe8
{: .notice}

> The .zip file contains the following tools and packages. If you already have some components installed, the script will detect and skip them.
> * Node.js and Yarn: Runtime for the setup script and automated tasks.
> * [Azure CLI 2.0 MSI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli#windows){:target="_blank"} - Cross-platform  command-line experience for managing Azure resources. The MSI contains dependent Python and pip.
> * [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"} (VS Code): Lightweight code editor for DevKit development.
> * [Visual Studio Code extension for Arduino](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino){:target="_blank"}: Extension that enables Arduino development in Visual Studio Code. 
> * [Arduino IDE](https://www.arduino.cc/en/Main/Software){:target="_blank"}: The extension for Arduino relies on this tool.
> * DevKit Board Package: Tool chains, libraries, and projects for the DevKit
> * ST-Link Utility: Essential tools and drivers.

#### B. Run the installation script

In Windows File Explorer, locate the .zip and extract it. Find `install.cmd`, right-click it, and select **Run as administrator**:

![File Explorer]({{"/assets/images/getting-started/run-admin.png" | absolute_url }})

During installation, you see the progress of each tool or package.

![Installation progress]({{"/assets/images/getting-started/install.png" | absolute_url }})

**Notice:** Depending on your environment, sometimes you will get failure when installing Arduino IDE. In this case, you may try [install Arduino IDE individually]({{"/docs/installation/#windows" | absolute_url}}) and run `install.cmd` again. Otherwise, please follow the [manual steps]({{"/docs/installation/#windows" | absolute_url}}) to install all necessary tools and packages.
{: .notice--warning}

#### C. Install drivers

The VS Code for Arduino extension relies on the Arduino IDE. If this is the first time you are installing the Arduino IDE, you are prompted to install relevant drivers:

![getting-started-driver]({{"/assets/images/getting-started/driver.png" | absolute_url }})

Installation should take around 10 minutes, depending on your internet speed. After the installation is complete, you should see Visual Studio Code and Arduino IDE shortcuts on your desktop.

**Notice:** Occasionally, when you start VS Code, you're prompted with an error that it cannot find the Arduino IDE or related board package. To solve it, close VS Code and restart the Arduino IDE. VS Code should then locate the Arduino IDE path correctly.
{: .notice--warning}

### macOS (preview)

Follow these steps to prepare the development environment on macOS.

#### A. Install Azure CLI 2.0

Follow the [official guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli){:target="_blank"} to install Azure CLI 2.0:

1. Install Azure CLI 2.0 by using one `curl` command:
  ```bash
  curl -L https://aka.ms/InstallAzureCli | bash
  ```

2. Restart your command shell for changes to take effect:
  ```bash
  exec -l $SHELL
  ```

#### B. Install Arduino IDE

The Visual Studio Code Arduino extension relies on the Arduino IDE. Download and install the [Arduino IDE for macOS](https://www.arduino.cc/en/Main/Software){:target="_blank"}.

#### C. Install Visual Studio Code

Download and install [Visual Studio Code for macOS](https://code.visualstudio.com/){:target="_blank"}. This is the primary development tool for building DevKit IoT applications.

#### D. Download the latest package

1. Install Node.js. You can use popular macOS package manager [Homebrew](https://brew.sh/){:target="_blank"} or [pre-built installer](https://nodejs.org/en/download/){:target="_blank"} to install it.

2. Download the .zip file that contains required task scripts for DevKit development in VS Code.

  [<i class='fa fa-download'></i> Download](https://aka.ms/devkit/prod/installpackage/mac/latest){: .click-action-tracker .btn .btn--success .btn--large}

  **MD5:** e70a4db1b90dbb279bb21420d6d008b0
  {: .notice}

  Locate the .zip file and extract it. Then start the **Terminal** app and run the following commands:

  a. Move extracted folder to your macOS user folder:
  ```bash
  mv [.zip extracted folder]/azure-board-cli ~/. ; cd ~/azure-board-cli
  ```
  
  b. Install npm packages:
  ```
  npm install
  ```

#### E. Install the VS Code extension for Arduino

You can install Azure Marketplace extensions directly in Visual Studio Code. Select the extensions icon in the left pane, search for **Arduino**, and then select **Install**:

![Finding an Arduino extension]({{"/assets/images/installation-extensions-mac.png" | absolute_url}})

After VS Code extension is installed, open `settings.json`, add the setting of "arduino.path" with the path you install Arduino IDE.
 ![update setting az3166]({{"/assets/images/update-setting-az3166-mac.png" | absolute_url}})
 
#### F. Install the DevKit board package

Add the DevKit board by using Board Manager in Visual Studio Code.

1. Use `Cmd+Shift+P` to open the command palette, type **Arduino**, and then find and select **Arduino: Board Manager**.

2. Select **Additional URLs** at the lower right.
 ![Additional URLs link]({{"/assets/images/installation-additional-urls-mac.png" | absolute_url}})

3. In the `settings.json` file, add a line at the bottom of the **USER SETTINGS** pane and save.
 ```json
 "arduino.additionalUrls": "https://raw.githubusercontent.com/VSChina/azureiotdevkit_tools/master/package_azureboard_index.json"
 ```
 ![Code added to USER SETTINGS pane]({{"/assets/images/installation-settings-json-mac.png" | absolute_url}})

4. In Board Manager, search for **az3166** and install the [latest version]({{"/versions" | absolute_url }}).
 ![Installing az3166]({{"/assets/images/installation-az3166-mac.png" | absolute_url}})

You now have all the necessary tools and packages installed for macOS.

## Problems and feedback

If you encounter problems, you can find [FAQs]({{"/docs/faq/" | absolute_url }}) if you encounter problems or reach out to us from our [Gitter channel](https://gitter.im/Microsoft/azure-iot-developer-kit){:target="_blank"}.

{% include feedback.html tutorial="get-started" %}

## Next Steps

You're all set! It's time to build your first IoT application. For samples, start with our [Projects Catalog]({{"/docs/projects/" | absolute_url }}).
