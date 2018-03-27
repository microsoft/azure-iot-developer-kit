---
title: "Disable data collection"
permalink: /docs/disable-data-collection/
excerpt: "Instructions for disable data collection."
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2018-03-27
---

Microsoft would collect data about how users use Azure IoT DevKit and some problems they encounter. Microsoft uses this information to improve our DevKit experience. Participation is voluntary and when you choose to participate your device automatically sends information to Microsoft about how you use Azure IoT DevKit.


## How to disable data collection at the beginning

Before your installation, you can set environment variable in terminal and then run installation script. Data collection during installation and after installation will be disabled.

{% include switch.html content = page.variable %}

### Windows

Windows: Instead of run `install.exe` as an administrator directly, you need to:

Launch **Command Prompt** as an administrator, locate the folder into which you extracted the .zip file, and run:
  ```bash
  setx TRACEOFF "true"
  install.cmd
  ```

### macOS

Launch Terminal app, locate the folder into which you extracted the .zip file, and run:
  ```bash
  export TRACEOFF=true
  ./install.sh
  ```


## How to disable data collection after installation

If you have already installed our package and enabled data collection. You can still disable data collection.

{% include switch.html content = page.variable %}

### Windows

1. Open SDK floder (`C:\Users\{your name}\azure-board-cli\AppData\Local\Arduino15\packages\AZ3166\hardware\stm32f4\{version}`).

2. If there is a file named `platform.local.txt`.
   Replace `-DENABLETRACE=1` with `-DENABLETRACE=0`. Notice that there are two and you need to replace both.

   If there is no file named `platform.local.txt`. Create a new one and paste following content:
```
compiler.c.extra_flags=-DCORRELATIONID="70c81fd765c4b124d16c848013e774bcc0f63c483bc5247f73deaf694d567224"  -DENABLETRACE=0
compiler.cpp.extra_flags=-DCORRELATIONID="70c81fd765c4b124d16c848013e774bcc0f63c483bc5247f73deaf694d567224"  -DENABLETRACE=0
```

### macOS

1. Open SDK floder (`~/Library/Arduino15/packages/AZ3166/hardware/stm32f4/{version}`).

2. If there is a file named `platform.local.txt`.
   Replace "-DENABLETRACE=1" with "-DENABLETRACE=0". Notice that there are two and you need to replace both.

   If there is no file named `platform.local.txt`. Create a new one and paste following content:
```
compiler.c.extra_flags=-DCORRELATIONID="70c81fd765c4b124d16c848013e774bcc0f63c483bc5247f73deaf694d567224"  -DENABLETRACE=0
compiler.cpp.extra_flags=-DCORRELATIONID="70c81fd765c4b124d16c848013e774bcc0f63c483bc5247f73deaf694d567224"  -DENABLETRACE=0
```


## Notice
File `platform.local.txt` can be created by installation or manually. But it will be removed after you update SDK version with Arduino. So you may need to manually create it each time after update.