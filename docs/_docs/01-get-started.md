---
title: "Get Started"
permalink: /docs/get-started/
excerpt: "How to quickly install and setup your development environment to use the DevKit."
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

* MXChip IoT DevKit. [Get it now](https://blogs.msdn.microsoft.com/iotdev/devkit-contact/){:target="_blank"}
* A computer running Windows 10 or macOS 10.10+
* An active Azure subscription
  * Activate a [free 30-day trial Microsoft Azure account](https://azureinfo.microsoft.com/us-freetrial.html){:target="_blank"}
  * Claim your [Azure credit](https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/){:target="_blank"} if you are MSDN or Visual Studio subscriber

## Step 2. Prepare your hardware

Hook up the hardware to your computer.

### A. Hardware you need

* DevKit board
* Micro USB cable

![getting-started-hardware]({{"/assets/images/getting-started/hardware.jpg" | absolute_url }})

### B. Connect DevKit to your computer

1. Connect USB end to your PC
2. Connect Micro USB end to the DevKit
3. The green LED next to power confirms connection

![getting-started-connect]({{"/assets/images/getting-started/connect.jpg" | absolute_url }})

## Step 3. Configure WiFi

IoT projects rely on Internet connectivity. Use the following instructions to configure the DevKit to connect to WiFi.

### A. Enter AP Mode

Hold down button B, then push and release the reset button, then release button B. Your DevKit will enter AP Mode for configuring WiFi. The screen will display the Service Set Identifier(SSID) of the DevKit as well as the configuration portal IP address:

![getting-started-wifi-ap]({{"/assets/images/getting-started/wifi-ap.jpg" | absolute_url }})

### B. Connect to DevKit AP

Now, use another WiFi enabled device (PC or mobile phone) to connect to the DevKit SSID (highlighted in the screenshot above), leave the password empty.

![getting-started-ssid]({{"/assets/images/getting-started/connect-ssid.png" | absolute_url }})

### C. Configure WiFi for DevKit

Open the IP address shown on the DevKit screen on your PC or mobile phone browser, select the WiFi network you want the DevKit to connect to, then type the password. Click **Connect** to complete:

![getting-started-wifi-portal]({{"/assets/images/getting-started/wifi-portal.png" | absolute_url }})

Once the connection succeeds, the DevKit will reboot in a few seconds. If succeeded, you will see the WiFi name and IP address on the screen:

![getting-started-wifi-ip]({{"/assets/images/getting-started/wifi-ip.jpg" | absolute_url }})

**Note:** The IP address displayed in the photo may not match the actual IP assigned and displayed on the DevKit screen. This is normal as WiFi uses DHCP to dynamically assign IPs.
{: .notice--info}

After WiFi is configured, your credentials will be persisted on the device for that connection, even if unplugged. For example, if you configured the DevKit for WiFi in your home and then took the DevKit to the office, you will need to reconfigure AP mode (starting at step 3A) to connect the DevKit to your office WiFi. 

## Step 4. Start using DevKit

The default app running on DevKit will check the latest version of the firmware and display some sensor diagnosis data for you.

### A. Upgrade to the latest firmware

You will be prompted on the screen both the current and latest firmware version if there is an upgrade needed. Follow [Upgrade firmware]({{"/docs/upgrading/#upgrade-firmware" | absolute_url}}) guide to upgrade it.

![getting-started-firmware]({{"/assets/images/getting-started/firmware.jpg" | absolute_url }})

**Note:** This is a one-time effort, once you start developing on the DevKit and upload your app, you will have the latest firmware come with your app.
{: .notice--info}

### B. Test various sensors

Press button B to test sensors, continue pressing and releasing the B button to cycle through each sensor.

![getting-started-sensors]({{"/assets/images/getting-started/sensors.jpg" | absolute_url }})

## Step 5. Prepare development environment

Now it's time to set up the development environment: tools and packages for you to build stunning IoT applications.

{% include switch.html content = page.variable %}

### Windows

We encourage you to use the installation package to prepare the development environment. If you encounter any issues, you can follow the [manual steps]({{"/docs/installation/" | absolute_url }}) to get it done.

#### A. Download latest package

The `.zip` file you download contains all necessary tools and packages required for DevKit development.

[<i class='fa fa-download'></i> Download](https://azureboard.azureedge.net/installpackage/devkit_install_1.0.1.zip){: .click-action-tracker .btn .btn--success .btn--large}

**MD5:** 01527cb5c349601452d1f5546149f3be
{: .notice}

> The `.zip` file contains the following tools and packages. If you already have some components installed, the script will detect and skip them.
> * Node.js and Yarn: Runtime for the setup script and automated tasks
> * [Azure CLI 2.0 MSI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli#windows){:target="_blank"} - Cross-platform  command-line experience for managing Azure resources, the MSI contains dependent Python and pip.
> * [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"}: Lightweight code editor for DevKit development
> * [Visual Studio Code extension for Arduino](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino){:target="_blank"}: Enables Arduino development in VS Code
> * [Arduino IDE](https://www.arduino.cc/en/Main/Software){:target="_blank"}: The extension for Arduino relies on this tool
> * DevKit Board Package: Tool chains, libraries and projects for the DevKit
> * ST-Link Utility: Essential utilities and drivers

#### B. Run installation script

In Windows File Explorer, locate the `.zip` and extract it, find `install.cmd`, right-click and select **"Run as administrator"** to start.

![getting-started-run-admin]({{"/assets/images/getting-started/run-admin.png" | absolute_url }})

During installation, you will see the progress of each tool or package.

![getting-started-install]({{"/assets/images/getting-started/install.png" | absolute_url }})

#### C. Confirm to install drivers

The VS Code for Arduino extension relies on the Arduino IDE. If this is the first time you are installing the Arduino IDE, you will be prompted to install relevant drivers:

![getting-started-driver]({{"/assets/images/getting-started/driver.png" | absolute_url }})

It should take around 10 minutes to finish installation depending on your Internet speed. Once the installation is complete, you should see Visual Studio Code and Arduino IDE shortcuts on your desktop.

**Notice:** Occasionally, when you launch VS Code, you will be prompted with an error that cannot find Arduino IDE or related board package. To solve it, close VS Code, launch Arduino IDE once and VS Code should locate Arduino IDE path correctly.
{: .notice--warning}

### macOS (Preview)

Follow these steps to prepare development environment on macOS.

#### A. Install Azure CLI 2.0

Follow the [official guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli){:target="_blank"} to install Azure CLI 2.0:

Install Azure CLI 2.0 with one `curl` command:
```bash
curl -L https://aka.ms/InstallAzureCli | bash
```

And restart your command shell for changes to take effect:
```bash
exec -l $SHELL
```

#### B. Install Arduino IDE

The Visual Studio Code Arduino extension relies on the Arduino IDE. Download and install the [Arduino IDE for macOS](https://www.arduino.cc/en/Main/Software){:target="_blank"}.

#### C. Install Visual Studio Code

Download and install [Visual Studio Code for macOS](https://code.visualstudio.com/){:target="_blank"}. This will be the primary development tool for building DevKit IoT applications.

#### D. Download latest package

1. Install Node.js. You can use popular macOS package manager [Homebrew](https://brew.sh/){:target="_blank"} or [pre-built installer](https://nodejs.org/en/download/){:target="_blank"} to install it.

2. Download `.zip` file containing task scripts required for DevKit development in VS Code.

  [<i class='fa fa-download'></i> Download](https://azureboard.azureedge.net/installpackage/devkit_tasks_1.0.1.zip){: .click-action-tracker .btn .btn--success .btn--large}

  **MD5:** 64a305abd4ef7bd8a16a25bda173bd11
  {: .notice}

  Locate the `.zip` and extract it. Then launch **Terminal** app and run the following commands to configure:

  Move extracted folder to your macOS user folder:
  ```bash
  mv [.zip extracted folder]/azure-board-cli ~/. ; cd ~/azure-board-cli
  ```
  
  Install `npm` packages:
  ```
  npm install
  ```

#### E. Install VS Code extension for Arduino

Visual Studio Code allows you to install Marketplace extensions directly in the tool, simply click the extensions icon in the left menu pane and then search `Arduino` to install:

![installation-extensions]({{"/assets/images/installation-extensions-mac.png" | absolute_url}})

#### F. Install DevKit board package

You will need to add the DevKit board using the Boards Manager in Visual Studio Code.

1. Use `Cmd+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Board Manager**.

2. Click **'Additional URLs'** at the bottom right.
 ![installation-additional-urls]({{"/assets/images/installation-additional-urls-mac.png" | absolute_url}})

3. In the `settings.json` file, add a line at the bottom of `USER SETTINGS` pane and save.
 ```json
 "arduino.additionalUrls": "https://raw.githubusercontent.com/VSChina/azureiotdevkit_tools/master/package_azureboard_index.json"
 ```
 ![installation-settings-json]({{"/assets/images/installation-settings-json-mac.png" | absolute_url}})

4. Now in the Board Manager search for 'az3166' and install the latest version.
 ![installation-az3166]({{"/assets/images/installation-az3166-mac.png" | absolute_url}})

You now have all the necessary tools and packages installed for macOS.

## Problems and feedback

You can find [FAQs]({{"/docs/faq/" | absolute_url }}) if you encounter problems or reach out to us from our [Gitter channel](https://gitter.im/Microsoft/azure-iot-developer-kit){:target="_blank"}.

## Next Steps

You're all set! It's time to build your first IoT application. For samples, start with our [Projects Catalog]({{"/docs/projects/" | absolute_url }}).
