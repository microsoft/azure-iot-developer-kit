---
title: "Upgrade DevKit firmware"
permalink: /docs/firmware-upgrading/
excerpt: "Instructions for upgrading device firmware."
last_modified_at: 2017-10-11
---

{% include toc icon="columns" %}

## Upgrade Firmware

Follow bellowing steps to upgrade your DevKit firmware to [latest version]({{"/versions" | absolute_url }}).

### Step 1. Connect DevKit to your computer via USB

Once the DevKit is connected, in Windows you see a new USB mass storage device in Windows Explorer called `AZ3166`. 

### Step 2. Upgrade firmware

1. Download the latest firmware.
 
	[<i class='fa fa-download'></i> Download](https://aka.ms/devkit/prod/firmware/latest){: .click-download-tracker .btn .btn--success .btn--large}

  
2. Drag & drop the `.bin` file you downloaded to `AZ3166` device.

3. Wait until the file is copied, then the DevKit will reboot to the latest firmware.

After done, you will see the firmware version on the screen of the kit if it has connected with Internet.

![Display of current and latest firmware versions]({{"/assets/images/getting-started/firmware.jpg" | absolute_url }})


Related topics:

- [Get Started]({{"/docs/get-started/" | absolute_url }}).
