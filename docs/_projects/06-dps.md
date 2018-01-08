---
title: "Provision device with Device Provisioning Service "
permalink: /docs/projects/dps/
excerpt: "Use the IoT Hub Device Provisioning Service to automatically provision security enabled devices to IoT hub."
header:
  overlay_image: /assets/images/projects-shake-shake.jpg
  overlay_full: true
  teaser: /assets/images/projects-shake-shake-th.jpg
layouts_gallery:
  - url: /assets/images/mini-solution/shake-shake/result-1.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-1.jpg
    alt: "Arduino application initializing"
  - url: /assets/images/mini-solution/shake-shake/result-2.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-2.jpg
    alt: "Press A to shake"
  - url: /assets/images/mini-solution/shake-shake/result-3.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-3.jpg
    alt: "Ready to shake"
  - url: /assets/images/mini-solution/shake-shake/result-4.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-4.jpg
    alt: "Processing..."
  - url: /assets/images/mini-solution/shake-shake/result-5.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-5.jpg
    alt: "Press B to read"
  - url: /assets/images/mini-solution/shake-shake/result-6.jpg
    image_path: /assets/images/mini-solution/shake-shake/result-6.jpg
    alt: "Display a random tweet"
icons:
  - url: /assets/images/icon-iot-hub.svg
    target: https://azure.microsoft.com/en-us/services/iot-hub/
    title: IoT Hub
  - url: /assets/images/icon-azure-functions.svg
    target: https://azure.microsoft.com/en-us/services/functions/
    title: Azure Functions
difficulty: MEDIUM
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2017-07-05
---

Microsoft Azure provides a rich set of integrated public cloud services for all your IoT solution needs. The IoT Hub Device Provisioning Service is a helper service for IoT Hub that enables zero-touch, just-in-time provisioning to the right IoT hub without requiring human intervention, enabling customers to provision millions of devices in a secure and scalable manner.

This project shows how to configure DevKit in order to make it automatically register to IoT Hub using the Device Provisioning Service. In this tutorial, you will learn how to:

* Set up the Device Provisioning Service configuration on the device
* Save Unique Device Secret on STSAFE security chip
* Generate X.509 certificate
* Create a device enrollment entry in the Device Provisioning Service

{% include toc icon="columns" %}

## Before you begin

To complete the steps in this tutorial, you need the following:

* Prepare your DevKit with [Getting Started Guide]({{"/docs/get-started/" | absolute_url }}).
* Upgrade to latest firmware (>= 1.3.0) with [Firmware Upgrading]({{"/docs/firmware-upgrading/" | absolute_url }}) tutorial.
* Create and link IoT Hub with Device Provisioning Service instance with [Set up auto provisioning](https://docs.microsoft.com/en-us/azure/iot-dps/quick-setup-auto-provision).

## Set up the Device Provisioning Service configuration on the device

To enable the DevKit to connect to the Device Provisiong Service instance you just created:

1. In the Azure portal, select the **Overview** blade for your Device Provisioning Service and note down the **Global device endpoint** and **ID Scope** value.
  ![DPS Global Endpoint and ID Scope]({{"/assets/images/mini-solution/dps/dps-global-endpoint.png" | absolute_url }})

2. Make sure `git` is installed on your machine and is added to the environment variables accessible to the command window. See [Software Freedom Conservancy's Git client tools](https://git-scm.com/download/) to have the latest version installed.

3. Open a command prompt. Clone the GitHub repo for DPS sample code:

```bash
git clone https://github.com/DevKitExamples/DPSDemo.git
```

2. Launch VS Code and connect DevKit to computer, open the folder that contains the code you cloned.
  ![DPS Folder]({{"/assets/images/mini-solution/dps/dps-folder.png" | absolute_url }})

3. Open **DPSDemo.ino**, Find and replace `[Global Device Endpoint]` and `[ID Scope]` with the values you just note down.
  ![DPS Endpoint]({{"/assets/images/mini-solution/dps/endpoint.png" | absolute_url }})

4. Use **Quick Open** in VS Code (Windows: `Ctrl+P`, macOS: `Cmd+P`) and type **task device-upload** to build and upload the code to the DevKit.

5. Open serial monitor and note down DevKit firmware version.

## Save Unique Device Secret on STSAFE security chip

Device Provisioning Service can be configured on device based on its [Hardware Security Module (HSM)](https://azure.microsoft.com/en-us/blog/azure-iot-supports-new-security-hardware-to-strengthen-iot-security/). DevKit uses [Device Identity Composition Engine (DICE)](https://trustedcomputinggroup.org/wp-content/uploads/Foundational-Trust-for-IOT-and-Resource-Constrained-Devices.pdf) from the [Trusted Computing Group (TCG)](https://trustedcomputinggroup.org). A **Unique Device Secret (UDS)** saved in STSAFE security chip on the DevKit is used to generate the device unique [X.509](https://docs.microsoft.com/en-us/azure/iot-dps/tutorial-set-up-device#select-a-hardware-security-module) certificate. The certificate can be later used for the enrollment process in the Device Provisioning Service.

A typical **Unique Device Secret (UDS)** is 64 characters long. A sample UDS is as below:

```
19e25a259d0c2be03a02d416c05c48ccd0cc7d1743458aae1cb488b074993eae
```

Each of two characters are used as Hex value in the security calculation. So the above sample USD is resolved to: "`0x19`, `0xe2`, `0x5a`, `0x25`, `0x9d`, `0x0c`, `0x2b`, `0xe0`, `0x3a`, `0x02`, `0xd4`, `0x16`, `0xc0`, `0x5c`, `0x48`, `0xcc`, `0xd0`, `0xcc`, `0x7d`, `0x17`, `0x43`, `0x45`, `0x8a`, `0xae`, `0x1c`, `0xb4`, `0x88`, `0xb0`, `0x74`, `0x99`, `0x3e`, `0xae`".

To save Unique Device Secret on the DevKit:

1. Take the sample USD and change the characters to other values between `0` and `e` to use it as your own UDS.

2. With the DevKit connected to computer, hold down button A, then push and release the reset button to enter configuration mode. The screen should show the DevKit id and **'Configuration'**.

3. Open serial monitor. Type **set_dps_uds [your_own_uds_value]** and press the Enter key to save it.

## Generate X.509 certificate

{% include switch.html content = page.variable %}

### Windows

1. Open file explorer and go to **C:\Users\\[username]\AppData\Local\Arduino15\packages\AZ3166\hardware\stm32f4\\[version]\libraries\AzureIoT\examples\DPS\\.build\\**, find and copy **DPS.ino.bin** and **DPS.ino.map**.

2. Paste these two files into **C:\Users\\[username]\AppData\Local\Arduino15\packages\AZ3166\hardware\stm32f4\\[version]\tools\dice_device_enrollment\\**.

3. Run **dice_device_enrollment.exe**, you need to enter your **UDS**, **MAC address** for the DevKit and the **firmware version** to generate the X.509 certificate.

4. Observe the success of generation, a **.pem** certificate is saved in the same folder.

### macOS

TBD

## Create a device enrollment entry in the Device Provisioning Service

1. In the Azure portal, navigate to your provisioning service. Click **Manage enrollments**, and select the **Individual Enrollments** tab.

2. Click **Add**.

3. In **Mechanism**, choose **X.509**.

4. In **Certificate .pem or .cer file**, upload the **.pem** certificate you just have.

5. Click **Save**.

## Start the DevKit

1. Open serial monitor.

2. Press the **Reset** button on your DevKit.

You should see the DevKit start the registration with your Device Provisioning Service.

## Verify the DevKit is registered on IoT Hub

Once your device boots, the following actions should take place:

1. The device sends a registration request to your Device Provisioning Service.
2. The Device Provisioning Service sends back a registration challenge to which your device responds.
3. On successful registration, the Device Provisioning Service sends the IoT hub URI, device ID and the encrypted key back to the device.
4. The IoT Hub client application on the device then connects to your hub.
5. On successful connection to the hub, you should see the device appear in the IoT hub's Device Explorer.

## Problems and feedback

If you encounter problems, you can find [FAQs]({{"/docs/faq/" | absolute_url }}) if you encounter problems or reach out to us from the channels below.

{% include feedback.html tutorial="dps" %}

## Next Steps

Now that you have learned DPS.