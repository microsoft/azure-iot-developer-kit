---
title: "Upgrade DevKit"
permalink: /docs/upgrading/
excerpt: "Instructions for upgrading board package and firmware."
last_modified_at: 2017-07-05
---

{% include toc icon="columns" %}

## Upgrade firmware

Follow these steps to upgrade your DevKit firmware to [latest version]({{"/versions" | absolute_url }}).

### Step 1. Connect DevKit to your computer via USB

Once the DevKit is connected, in Windows you will see a new USB mass storage device in Windows Explorer called `AZ3166`. 

### Step 2. Upgrade firmware

1. Download the latest firmware: 
 [devkit-firmware-1.0.2.bin](https://azureboard.azureedge.net/firmware/devkit-firmware-1.0.2.bin)

2. Drag & drop the `.bin` file you downloaded to `AZ3166` device.

3. Wait until the file is copied, then the DevKit will reboot to the latest firmware.

After done, you will see the firmware version on the screen of the kit.

## Upgrade board package

Follow these steps to upgrade DevKit Arduino board package to the [latest version]({{"/versions" | absolute_url }}).

### Step 1. Before starting

Make sure you have gone through getting started tutorial to [prepare your development environment]({{"/docs/get-started/#step-4-prepare-development-environment" | absolute_url}}).

### Step 2. Update VS Code extension for Arduino

1. Launch VS Code.

2. Make sure you have updated VS Code extension Arduino to the latest version.

### Step 3. Upgrade board package

1. Use `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to invoke command palette and type **Arduino** then find and select **Arduino: Board Manager**.

2. Click **Refresh Package Indexes** to update board packages information.

3. Search for 'az3166', select the latest version and click **Update**:
  ![upgrading-board-package]({{"/assets/images/upgrading-board-package.png" | absolute_url}})