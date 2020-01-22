---
title: "Upgrade the bootloader for IoT DevKit"
permalink: /docs/firmware-upgrading/
excerpt: "Instructions for upgrading device firmware."
last_modified_at: 2020-01-22
---

{% include toc icon="columns" %}

## Upgrade the bootloader for IoT DevKit

Follow bellowing steps to download the [latest version](https://github.com/microsoft/devkit-sdk/releases/) of default firmware for IoT DevKit, and upgrade the bootloader.
>"Programming" LED needed to be solid in order to show that the device had a good data connection. If this LED is blinking, replace cable.

### Step 1. Connect IoT DevKit to your computer via USB

Once the IoT DevKit is connected, in Windows you see a new USB mass storage device in Windows Explorer called `AZ3166`. 

### Step 2. Upgrade firmware

1. Download the latest version of default firmware for IoT DevKit which includes the bootloader.

	[<i class='fa fa-download'></i> Download](https://aka.ms/devkit/prod/firmware/latest){: .click-download-tracker .btn .btn--success .btn--large}


2. Drag & drop the `.bin` file you downloaded to `AZ3166` device.

3. Wait until the file is copied, then the IoT DevKit will reboot to the latest firmware.

After done, you will see the firmware version on the screen of the kit if it has connected with Internet.

![Display of current and latest firmware versions]({{"/assets/images/getting-started/firmware.jpg" | absolute_url }})


Related topics:

- [Get Started]({{"/docs/get-started/" | absolute_url }}).
