---
title: "Manual Installation"
permalink: /docs/installation/
excerpt: "Instructions for manually install tools and packages."
last_modified_at: 2017-05-12T10:16:34-04:00
---

Follow these simple steps to manually install tools and packages for DevKit development. If you are on Windows, we suggest you use [our package]({{"/docs/get-started/#a-download-latest-package" | absolute_url}}) to install everything.

## macOS

### Step 1. Azure CLI 2.0

Follow the [official guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli){:target="_blank"} to install Azure CLI 2.0:

Install Azure CLI 2.0 with one `curl` command:
```bash
curl -L https://aka.ms/InstallAzureCli | bash
```

And restart your command shell for changes to take effect:
```bash
exec -l $SHELL
```

### Step 2. Arduino IDE

The Visual Studio Code Arduino extension relies on the Arduino IDE. Download and install the [Arduino IDE for macOS](https://www.arduino.cc/en/Main/Software){:target="_blank"}.

### Step 3. Visual Studio Code

Download and install [Visual Studio Code for macOS](https://code.visualstudio.com/){:target="_blank"}. This will be the primary development tool for building DevKit IoT applications. 

### Step 4. Arduino extension

Visual Studio Code allows you to install Marketplace extensions directly in the tool, simply click the extensions icon in the left menu pane and then search. You will need two extensions: 1) C++ extension for grammar support, it is required by the Arduino extension so you need to install it first; 2) Arduino extension which makes it easy to code, build, deploy and debug your Arduino sketches in Visual Studio Code. It comes with IntelliSense, automatic project scaffolding and debugging.

![installation-extensions]({{"/assets/images/installation-extensions.png" | absolute_url}})

### Step 5. DevKit board package

You will need to add the DevKit board using the Boards Manager in Visual Studio Code.

1. Use `Cmd+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Boards Manager**.

2. Click **'Additional URLs'** at the bottom right.
 ![installation-additional-urls]({{"/assets/images/installation-additional-urls.png" | absolute_url}})

3. In the `settings.json` file, add a line at the bottom of 'USER SETTINGS' pane.
 ```json
 "arduino.additionalUrls": "https://raw.githubusercontent.com/VSChina/azureiotdevkit_tools/master/package_azureboard_index.json"
 ```
 ![installation-settings-json]({{"/assets/images/installation-settings-json.png" | absolute_url}})

4. Now in the Boards Manager search for 'az3166' and install the latest version.
 ![installation-az3166]({{"/assets/images/installation-az3166.png" | absolute_url}})

You now have all the necessary tools and packages installed.

## Next Steps

You are all set! It's time to build your first IoT application by following instructions in [Projects Catalog]({{"/docs/projects/" | absolute_url }}).
