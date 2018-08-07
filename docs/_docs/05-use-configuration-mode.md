---
title: "Use configuration mode"
permalink: /docs/use-configuration-mode/
excerpt: "Get into IoT DevKit Configuration Mode to configure your device."
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2018-01-08
---

{% include toc icon="columns" %}

IoT DevKit has the configuration model that you can configure settings like WiFi, IoT Hub connection string and security feature for it.

## Before you begin

* Connect IoT DevKit to the computer.
* Download SSH and Telnet client like [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) for Windows.

{% include switch.html content = page.variable %}

## Windows

### Enter Configuration Mode

1. Open VS Code and identify the COM port on the status bar.
    ![COM Port]({{"/assets/images/how-to/configuration-mode/com-port.png" | absolute_url }})

2. Download and open Putty, type the right COM port and **115200** for **Speed**.
    ![Putty]({{"/assets/images/how-to/configuration-mode/putty.png" | absolute_url }})

3. Click **Open**. A serial monitor window will open.

4. On the device, hold down button A, then push and release the reset button. Observe the screen displays your device MAC address and **'Configuration'**.
    ![Configuration Mode]({{"/assets/images/how-to/configuration-mode/configuration-mode.jpg" | absolute_url }})

5. Serial monitor window displays command list available.
    ![Available Commands]({{"/assets/images/how-to/configuration-mode/available-commands-win.png" | absolute_url }})

## macOS

### Enter Configuration Mode

1. Launch Spotlight by pressing **Cmd + Space**.

2. Type `terminal` and select **Terminal** app.

3. List IoT DevKit device.
	```bash
	ls /dev/cu.usbmodem*
	```

4. In the list of connected devices, the device name is like **/dev/cu.usbmodem1433**

5. Connect to the IoT DevKit using the Terminal screen utility.
	```bash
	screen /dev/cu.usbmodemXXXX 115200 –L
	```

6. On the device, hold down button A, then push and release the reset button. Observe the screen displays your device MAC address and **'Configuration'**.
    ![Configuration Mode]({{"/assets/images/how-to/configuration-mode/configuration-mode.jpg" | absolute_url }})

7. Serial monitor window displays command list available.
    ![Available Commands]({{"/assets/images/how-to/configuration-mode/available-commands-mac.png" | absolute_url }})

**Note:** Make sure you exit screen utility and terminate it by using the **Ctrl + A** followed by the **Ctrl + \\**. Otherwise, you may not able to enter the screen utility again.
{: .notice}

## Commands

Commands for the IoT DevKit Configuration Mode.

### help

```bash
help
```

Display the commands list

### version

```bash
version
```

Display **DevKit SDK**, **Mico**, **mbed-os**, **mbed TLS lib** and **WiFi lib** version details.

### exit

```bash
exit
```

Exit Configuration Mode and reboot into normal mode.

### scan

```bash
scan
```

Scan and list all available WiFi SSID.

### set_wifissid

```bash
set_wifissid [SSID]
```

Connect specific WiFi SSID.

### set_wifipwd

```bash
set_wifipwd [password]
```

Set password for WiFi SSID you connected with command **set_wifissid**.

### set_az_iothub

```bash
set_az_iothub [device connection string]
```

Set device connection string for Azur IoT Hub. View [Understand Different Connection Strings in Azure IoT Hub](https://blogs.msdn.microsoft.com/iotdev/2017/05/09/understand-different-connection-strings-in-azure-iot-hub/) to learn more.

### set_dps_uds

```bash
set_dps_uds [unique device secret]
```

Set Unique Device Secret that is used as device unique key to be used for calcuation by [Device Identifier Composition Engine (DICE)](https://trustedcomputinggroup.org/work-groups/dice-architectures/) and be used to register on [IoT Hub Device Provisioning Service](https://docs.microsoft.com/en-us/azure/iot-dps/about-iot-dps).

### enable_secure

```bash
enable_secure
```

Enable secure channel on STSAFE secure chip.

Here are what will happen when enabling the security feature:

* A symmetric key initiated by the chip will be set and stored on the secure chip.
* All existing data stored in EEPROM (e.g. WiFi password) will be automatically encrypted.
* Once enabled, all data reading and writing on the device will be encrypted from that moment.

See [Understand security chip]({{"/docs/understand-security-chip/" | absolute_url }}) for more details.

## Problems and feedback

If you encounter problems, you can find [FAQs]({{"/docs/faq/" | absolute_url }}) if you encounter problems or reach out to us from our [Gitter channel](https://gitter.im/Microsoft/azure-iot-developer-kit){:target="_blank"}.

{% include feedback.html tutorial="use-configuraton-mode" %}