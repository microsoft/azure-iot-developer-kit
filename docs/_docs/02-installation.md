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

Follow these simple steps to manually install tools and packages for DevKit development. If you are on Windows, we suggest you use the [installation package]({{"/docs/get-started/#a-download-latest-package" | absolute_url}}) to install everything automatically.

{% include switch.html content = page.variable %}

## Windows

### Step 1. Install Azure CLI 2.0 MSI

Follow the [official guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli#windows){:target="_blank"} to install Azure CLI 2.0 with MSI:

Download and run MSI for the Windows command-line from: [https://aka.ms/InstallAzureCliWindows](https://aka.ms/InstallAzureCliWindows){:target="_blank"}

### Step 2. Install Arduino IDE

The Visual Studio Code Arduino extension relies on the Arduino IDE. Download and install the [Arduino IDE for Windows](https://www.arduino.cc/en/Main/Software){:target="_blank"}. Make sure you download the **Windows Installer** version.

### Step 3. Install Visual Studio Code

Download and install [Visual Studio Code for Windows](https://code.visualstudio.com/){:target="_blank"}. This will be the primary development tool for building DevKit IoT applications.

### Step 4. Download latest package

1. Download [Windows Installer](https://nodejs.org/en/download/){:target="_blank"} to install Node.js.

2. Download `.zip` file containing task scripts required for DevKit development in VS Code.

  [<i class='fa fa-download'></i> Download](https://azureboard.azureedge.net/installpackage/devkit_tasks_1.0.2.zip){: .click-download-tracker .btn .btn--success .btn--large}

  **MD5:** 62d9f33ce7bf8227c4643c784a6e86da
  {: .notice}

  Locate the `.zip` and extract it to your Windows user folder (`C:\Users\[your name]`). Then launch **Command Prompt** (`cmd`) and run the following commands to configure:

  ```
  cd C:\Users\[your name]\azure-board-cli

  npm install
  ```

### Step 5. Install VS Code extension for Arduino

Visual Studio Code allows you to install Marketplace extensions directly in the tool, simply click the extensions icon in the left menu pane and then search `Arduino` to install:

![installation-extensions]({{"/assets/images/installation-extensions-win.png" | absolute_url}})

### Step 6. Install DevKit board package

You will need to add the DevKit board using the Board Manager in Visual Studio Code.

1. Use `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to invoke command palette and type **Arduino** then find and select **Arduino: Board Manager**.

2. Click **'Additional URLs'** at the bottom right.
 ![installation-additional-urls]({{"/assets/images/installation-additional-urls-win.png" | absolute_url}})

3. In the `settings.json` file, add a line at the bottom of `USER SETTINGS` pane and save.
 ```json
 "arduino.additionalUrls": "https://raw.githubusercontent.com/VSChina/azureiotdevkit_tools/master/package_azureboard_index.json"
 ```
 ![installation-settings-json]({{"/assets/images/installation-settings-json-win.png" | absolute_url}})

4. Now in the Board Manager search for 'az3166' and install the [latest version]({{"/versions" | absolute_url }}).
 ![installation-az3166]({{"/assets/images/installation-az3166-win.png" | absolute_url}})

### Step 7. Install ST-Link drivers

[ST-Link/V2](http://www.st.com/en/development-tools/st-link-v2.html){:target="_blank"} driver is required to communicate with the DevKit. 

1. Download the driver from [STMicro](www.st.com/en/embedded-software/stsw-link009.html){:target="_blank"} or [here](https://azureboard.azureedge.net/installpackage/st-link-windows.zip).

2. Extract the `.zip` file and double click `stlink_winusb_install.bat` to install:
 ![installation-st-link]({{"/assets/images/installation-st-link-win.png" | absolute_url}})


You now have all the necessary tools and packages installed for Windows.

## macOS (Preview)

### Step 1. Install Azure CLI 2.0

Follow the [official guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli#macos){:target="_blank"} to install Azure CLI 2.0:

Install Azure CLI 2.0 with one `curl` command:
```bash
curl -L https://aka.ms/InstallAzureCli | bash
```

And restart your command shell for changes to take effect:
```bash
exec -l $SHELL
```

### Step 2. Install Arduino IDE

The Visual Studio Code Arduino extension relies on the Arduino IDE. Download and install the [Arduino IDE for macOS](https://www.arduino.cc/en/Main/Software){:target="_blank"}.

### Step 3. Install Visual Studio Code

Download and install [Visual Studio Code for macOS](https://code.visualstudio.com/){:target="_blank"}. This will be the primary development tool for building DevKit IoT applications.

### Step 4. Download latest package

1. Install Node.js. You can use popular macOS package manager [Homebrew](https://brew.sh/){:target="_blank"} or [pre-built installer](https://nodejs.org/en/download/){:target="_blank"} to install it.

2. Download `.zip` file containing task scripts required for DevKit development in VS Code.

  [<i class='fa fa-download'></i> Download](https://azureboard.azureedge.net/installpackage/devkit_tasks_1.0.2.zip){: .click-download-tracker .btn .btn--success .btn--large}

  **MD5:** 62d9f33ce7bf8227c4643c784a6e86da
  {: .notice}

  Locate the `.zip` and extract it. Then launch **Terminal** app and run the following commands to configure:

  ```bash
  mv [.zip extracted folder]/azure-board-cli ~/. | cd ~/azure-board-cli

  npm install
  ```

### Step 5. Install VS Code extension for Arduino

Visual Studio Code allows you to install Marketplace extensions directly in the tool, simply click the extensions icon in the left menu pane and then search `Arduino` to install:

![installation-extensions]({{"/assets/images/installation-extensions-mac.png" | absolute_url}})

### Step 6. Install DevKit board package

You will need to add the DevKit board using the Board Manager in Visual Studio Code.

1. Use `Cmd+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Board Manager**.

2. Click **'Additional URLs'** at the bottom right.
 ![installation-additional-urls]({{"/assets/images/installation-additional-urls-mac.png" | absolute_url}})

3. In the `settings.json` file, add a line at the bottom of `USER SETTINGS` pane and save.
 ```json
 "arduino.additionalUrls": "https://raw.githubusercontent.com/VSChina/azureiotdevkit_tools/master/package_azureboard_index.json"
 ```
 ![installation-settings-json]({{"/assets/images/installation-settings-json-mac.png" | absolute_url}})

4. Now in the Board Manager search for 'az3166' and install the [latest version]({{"/versions" | absolute_url }}).
 ![installation-az3166]({{"/assets/images/installation-az3166-mac.png" | absolute_url}})

You now have all the necessary tools and packages installed for macOS.

## Next Steps

You are all set! It's time to build your first IoT application by following instructions in [Projects Catalog]({{"/docs/projects/" | absolute_url }}).
