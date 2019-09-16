---
title: "Serial communications"
permalink: /docs/serial-communications/
excerpt: "Communication with other devices over the built in serial ports."
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2019-09-10
---

{% include toc icon="columns" %}

## Overview

The MXChip IoT DevKit has two UART serial ports. One is connected to the USB port and allows you to send serial data over a USB cable, such as debugging information. The other is available from Pins 3 and 4 on the finger connector and allows you to connect the device to other modules that send data over serial.

## Sending data over the USB serial port

The USB serial port is available using the `Serial` global variable, and this uses the `UART_0` serial port. The API for this is identical to the standard Arduino `Serial` API, which you can read about in the [Arduino Serial communication docs](https://www.arduino.cc/reference/en/language/functions/communication/serial/).

```c
// Open the serial port at a speed of 115200 baud
Serial.begin(115200);

// Send a message over the serial connection
Serial.write("Hello");
```

You can monitor data sent over this serial connection using the VS Code Serial Monitor, available from the command palette by selecting *Arduino: Open Serial Monitor*. The board will send logging information over this port in addition to the data you send.

![The serial monitor showing logging messages and hello]({{"/assets/images/how-to/serial/serialmonitor.png" | absolute_url }})
