---
title: "Use Configuration Mode"
permalink: /docs/use-configuration-mode/
excerpt: "Get into DevKit Configuration Mode to configure your device."
last_modified_at: 2018-01-08
---

{% include toc icon="columns" %}

## Before you begin

* Connect DevKit to the computer.

## Enter Configuration Mode

1. Open VS Code and identify the COM port on the status bar.
    ![COM Port]({{"/assets/images/how-to/configuration-mode/com-port.png" | absolute_url }})

2. Download and open [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), type the right COM port and **115200** for **Speed**.
    ![Putty]({{"/assets/images/how-to/configuration-mode/putty.png" | absolute_url }})

3. Click **Open**. A serial monitor window will open.
    ![Serial Monitor]({{"/assets/images/how-to/configuration-mode/serial-monitor.png" | absolute_url }})

4. On the device, hold down button A, then push and release the reset button. Observe the screen displays your device MAC address and **'Configuration'**.
    ![Configuration Mode]({{"/assets/images/how-to/configuration-mode/configuration-mode.jpg" | absolute_url }})

5. Serial monitor window displays command list available.
    ![Available Commands]({{"/assets/images/how-to/configuration-mode/available-commands.png" | absolute_url }})

## Commands

Commands for the DevKit Configuration Mode.

### help

Display the commands list

### version

Display **DevKit SDK**, **Mico**, **mbed-os**, **mbed TLS lib** and **WiFi lib** version details.

### exit

Exit Configuration Mode and reboot into normal mode.

### scan

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

