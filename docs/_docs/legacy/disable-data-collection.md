---
title: "[Obsoleted] Disable data collection"
permalink: /docs/legacy/disable-data-collection/
excerpt: "Instructions for disable data collection."
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2018-08-4
---



**Notice:** We strongly recommend you to use [Azure IoT Workbench](https://aka.ms/iot-workbench) for developing on IoT DevKit.
{: .notice--warning}



Microsoft collects data to operate effectively and provide you the best experiences. 
Participation is voluntary and when you choose to participate, your device automatically sends data to Microsoft about how you use the IoT DevKit.

If you choose to participate, you can stop at any time by following below steps.

{% include switch.html content = page.variable %}

## Windows

### How to install development environment with data collection disabled

Before your installation, you can set environment variable in terminal and then run installation script. Data collection during installation and after installation will be disabled.

Launch **Command Prompt** as an administrator, locate the folder into which you extracted the .zip file, and run:
  ```bash
  setx TRACEOFF "true"
  install.cmd
  ```

### How to disable data collection after installation

If you have already installed our package and enabled data collection. You can still disable data collection.

1. Open SDK floder (`C:\Users\{your name}\azure-board-cli\AppData\Local\Arduino15\packages\AZ3166\hardware\stm32f4\{version}`).

2. If there is a file named `platform.local.txt`.
   Replace `-DENABLETRACE=1` with `-DENABLETRACE=0`. Notice that there are two and you need to replace both.

   If there is no file named `platform.local.txt`. Create a new one and paste following content:
```
compiler.c.extra_flags=-DCORRELATIONID="0000000000000000000000000000000000000000000000000000000000000000"  -DENABLETRACE=0
compiler.cpp.extra_flags=-DCORRELATIONID="0000000000000000000000000000000000000000000000000000000000000000"  -DENABLETRACE=0
```

## macOS

### How to install development environment with data collection disabled

Before your installation, you can set environment variable in terminal and then run installation script. Data collection during installation and after installation will be disabled.

Launch Terminal app, locate the folder into which you extracted the .zip file, and run:
  ```bash
  export TRACEOFF=true
  ./install.sh
  ```

### How to disable data collection after installation

If you have already installed our package and enabled data collection. You can still disable data collection.

1. Open SDK floder (`~/Library/Arduino15/packages/AZ3166/hardware/stm32f4/{version}`).

2. If there is a file named `platform.local.txt`.
   Replace `-DENABLETRACE=1` with `-DENABLETRACE=0`. Notice that there are two and you need to replace both.

   If there is no file named `platform.local.txt`. Create a new one and paste following content:
```
compiler.c.extra_flags=-DCORRELATIONID="0000000000000000000000000000000000000000000000000000000000000000"  -DENABLETRACE=0
compiler.cpp.extra_flags=-DCORRELATIONID="0000000000000000000000000000000000000000000000000000000000000000"  -DENABLETRACE=0
```


## Notice
File `platform.local.txt` can be created by installation or manually. But it will be removed after you update SDK version with Arduino. So you may need to manually create it each time after update.