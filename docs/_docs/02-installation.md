---
title: "Manual Installation"
permalink: /docs/installation/
excerpt: "Instructions for manually install tools and packages."
last_modified_at: 2017-05-12T10:16:34-04:00
---

Follow these simple steps to manually install tools and packages for DevKit development. If you are on Windows, it is suggested to use [our package]({{"/docs/getting-started/#a-download-latest-package" | absolute_url}}) to install everything you need.

## macOS

### Step 1. Azure CLI 2.0

Follow the [official guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli){:target="_blank"} to install Azure CLI 2.0:

Install Azure CLI 2.0 with one `curl` command:
```bash
curl -L https://aka.ms/InstallAzureCli | bash
```

And restart your command shell for some changes to take effect:
```bash
exec -l $SHELL
```

### Step 2. Arduino IDE

VS Code Arduino extension relies on it. Download [Arduino IDE for macOS](https://www.arduino.cc/en/Main/Software){:target="_blank"} and install it.

### Step 3. Visual Studio Code

Download [VS Code for macOS](https://code.visualstudio.com/){:target="_blank"} and install it. This will be the primary development tool for building DevKit IoT applications. 

### Step 4. Arduino extension

Arduino extension provides good development experience within VS Code. It comes with highlighted features like intellisense, automatic project scaffolding as well as debugging (comming soon).

As this extension uses C++ extension for grammar support, you need to install it first. So make sure you install it before Arduino extension:

![installation-extensions]({{"/assets/images/installation-extensions.png" | absolute_url}})

### Step 5. DevKit board package

As you may familiar with adding a new Arduino board, you need to add DevKit board to the Boards Manager.

1. Use `Cmd+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Boards Manager**.

2. Click **'Additional URLs'** right down the bottom.
 ![installation-additional-urls]({{"/assets/images/installation-additional-urls.png" | absolute_url}})

3. In the `settings.json` file opened, add a line to the bottom of 'USER SETTINGS' pane.
 ```json
 "arduino.additionalUrls": "https://raw.githubusercontent.com/VSChina/azureiotdevkit_tools/master/package_azureboard_index.json"
 ```
 ![installation-settings-json]({{"/assets/images/installation-settings-json.png" | absolute_url}})

4. Now search in the boards manager for 'az3166' and install the latest version.
 ![installation-az3166]({{"/assets/images/installation-az3166.png" | absolute_url}})

You should now have all necessary tools and packages installed.

## Next Steps

You are all set! It's time to build your first IoT application by following instructions in [Projects Catalog]({{"/docs/projects/" | absolute_url }}).