---
title: "Manual Installation"
permalink: /docs/installation/
excerpt: "Instructions for manually install tools and packages."
variable:
  - platform: windows
    name: Windows
  - platform: macos-preview
    name: macOS
last_modified_at: 2017-07-19
---

Follow these  steps to manually install tools and packages for DevKit development. If you are on Windows, we suggest you use the [installation package]({{"/docs/get-started/#a-download-latest-package" | absolute_url}}) to install everything automatically.

{% include switch.html content = page.variable %}

## Windows

### Step 1. Install Azure CLI 2.0 MSI

Follow the [official guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli#windows){:target="_blank"} to install Azure CLI 2.0 with MSI:

Download and run MSI for the Windows command line from: [https://aka.ms/InstallAzureCliWindows](https://aka.ms/InstallAzureCliWindows){:target="_blank"}

### Step 2. Install Arduino IDE

The Visual Studio Code Arduino extension relies on the Arduino IDE. Download and install the [Arduino IDE for Windows](https://www.arduino.cc/en/Main/Software){:target="_blank"}. Make sure you download the **Windows Installer** version.

### Step 3. Install Visual Studio Code

Download and install [Visual Studio Code for Windows](https://code.visualstudio.com/){:target="_blank"}. This is the primary development tool for building DevKit IoT applications.

### Step 4. Download the latest package

1. Download [Windows Installer](https://nodejs.org/en/download/){:target="_blank"} to install Node.js.

2. Download the .zip file that contains required task scripts for DevKit development in VS Code.

  [<i class='fa fa-download'></i> Download](https://aka.ms/devkit/prod/installpackage/tasks/latest){: .click-download-tracker .btn .btn--success .btn--large}

  **MD5:** e70a4db1b90dbb279bb21420d6d008b0
  {: .notice}

  Locate the .zip and extract it to your Windows user folder (`C:\Users\[your name]`). Then launch **Command Prompt** (`cmd`) and run the following commands to configure:

  ```
  cd C:\Users\[your name]\azure-board-cli

  npm install
  ```

### Step 5. Install the VS Code extension for Arduino

You can install Azure Marketplace extensions directly in Visual Studio Code. Select the extensions icon in the left pane, search for **Arduino**, and then select **Install**:

![installation-extensions]({{"/assets/images/installation-extensions-win.png" | absolute_url}})

### Step 6. Install the DevKit board package

Add the DevKit board by using Board Manager in Visual Studio Code.

1. Use `Ctrl+Shift+P` to open the command palette, type **Arduino**, and then find and select **Arduino: Board Manager**.

2. Select **Additional URLs** at the lower right.
 ![installation-additional-urls]({{"/assets/images/installation-additional-urls-win.png" | absolute_url}})

3. In the `settings.json` file, add a line at the bottom of the **USER SETTINGS** pane and save.
 ```json
 "arduino.additionalUrls": "https://raw.githubusercontent.com/VSChina/azureiotdevkit_tools/master/package_azureboard_index.json"
 ```
 ![installation-settings-json]({{"/assets/images/installation-settings-json-win.png" | absolute_url}})

4. In Board Manager, search for **az3166** and install the [latest version]({{"/versions" | absolute_url }}).
 ![installation-az3166]({{"/assets/images/installation-az3166-win.png" | absolute_url}})

### Step 7. Install ST-Link drivers

[ST-Link/V2](http://www.st.com/en/development-tools/st-link-v2.html){:target="_blank"} driver is required to communicate with the DevKit. 

1. Download the driver from [STMicro product page](http://www.st.com/en/embedded-software/stsw-link009.html){:target="_blank"}.

2. Extract the .zip file and double click `stlink_winusb_install.bat` to install:
 ![installation-st-link]({{"/assets/images/installation-st-link-win.png" | absolute_url}})


You now have all the necessary tools and packages installed for Windows.

## macOS (preview)

### Step 1. Install Azure CLI 2.0

Follow the [official guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli#macos){:target="_blank"} to install Azure CLI 2.0:

1. Install Azure CLI 2.0 by using one `curl` command:
  ```bash
  curl -L https://aka.ms/InstallAzureCli | bash
  ```

2. Restart your command shell for changes to take effect:
  ```bash
  exec -l $SHELL
  ```

### Step 2. Install Arduino IDE

The Visual Studio Code Arduino extension relies on the Arduino IDE. Download and install the [Arduino IDE for macOS](https://www.arduino.cc/en/Main/Software){:target="_blank"}.

### Step 3. Install Visual Studio Code

Download and install [Visual Studio Code for macOS](https://code.visualstudio.com/){:target="_blank"}. This is the primary development tool for building DevKit IoT applications.

### Step 4. Download the latest package

1. Install Node.js. You can use popular macOS package manager [Homebrew](https://brew.sh/){:target="_blank"} or [pre-built installer](https://nodejs.org/en/download/){:target="_blank"} to install it.

2. Download the .zip file that contains required task scripts for DevKit development in VS Code.

  [<i class='fa fa-download'></i> Download](https://aka.ms/devkit/prod/installpackage/mac/latest){: .click-download-tracker .btn .btn--success .btn--large}

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

### Step 5. Install the VS Code extension for Arduino

You can install Azure Marketplace extensions directly in Visual Studio Code. Select the extensions icon in the left pane, search for **Arduino**, and then select **Install**:

![installation-extensions]({{"/assets/images/installation-extensions-mac.png" | absolute_url}})

### Step 6. Install the DevKit board package

Add the DevKit board by using Board Manager in Visual Studio Code.

1. Use `Cmd+Shift+P` to open the command palette, type **Arduino**, and then find and select **Arduino: Board Manager**.

2. Select **Additional URLs** at the lower right.
 ![installation-additional-urls]({{"/assets/images/installation-additional-urls-mac.png" | absolute_url}})

3. In the `settings.json` file, add a line at the bottom of the **USER SETTINGS** pane and save.
 ```json
 "arduino.additionalUrls": "https://raw.githubusercontent.com/VSChina/azureiotdevkit_tools/master/package_azureboard_index.json"
 ```
 ![installation-settings-json]({{"/assets/images/installation-settings-json-mac.png" | absolute_url}})

4. In Board Manager, search for **az3166** and install the [latest version]({{"/versions" | absolute_url }}).
 ![installation-az3166]({{"/assets/images/installation-az3166-mac.png" | absolute_url}})

You now have all the necessary tools and packages installed for macOS.

## Next Steps

You are all set! It's time to build your first IoT application by following instructions in [Projects Catalog]({{"/docs/projects/" | absolute_url }}).
