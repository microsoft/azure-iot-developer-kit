---
title: "Disable data collection"
permalink: /docs/disable-data-collection/
excerpt: "Instructions for disable data collection."
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2018-08-4
---



Microsoft collects data to operate effectively and provide you the best experiences. 
Participation is voluntary and when you choose to participate, your device automatically sends data to Microsoft about how you use the IoT DevKit.

If you choose to participate, you can stop at any time by following below steps.

{% include switch.html content = page.variable %}

## Windows

After installed our package, follow bellowing steps to disable data collection:

1. Open SDK folder (`C:\Users\{your name}\azure-board-cli\AppData\Local\Arduino15\packages\AZ3166\hardware\stm32f4\{version}`).

2. If there is a file named `platform.local.txt`.
   Replace `-DENABLETRACE=1` with `-DENABLETRACE=0`. Notice that there are two and you need to replace both.

   If there is no file named `platform.local.txt`. Create a new one and paste following content:
```
compiler.c.extra_flags=-DCORRELATIONID="0000000000000000000000000000000000000000000000000000000000000000"  -DENABLETRACE=0
compiler.cpp.extra_flags=-DCORRELATIONID="0000000000000000000000000000000000000000000000000000000000000000"  -DENABLETRACE=0
```

## macOS

After installed our package, follow bellowing steps to disable data collection:

1. Open SDK folder (`~/Library/Arduino15/packages/AZ3166/hardware/stm32f4/{version}`).

2. If there is a file named `platform.local.txt`.
   Replace `-DENABLETRACE=1` with `-DENABLETRACE=0`. Notice that there are two and you need to replace both.

   If there is no file named `platform.local.txt`. Create a new one and paste following content:
```
compiler.c.extra_flags=-DCORRELATIONID="0000000000000000000000000000000000000000000000000000000000000000"  -DENABLETRACE=0
compiler.cpp.extra_flags=-DCORRELATIONID="0000000000000000000000000000000000000000000000000000000000000000"  -DENABLETRACE=0
```


## Notice
File `platform.local.txt` can be created by installation or manually. But it will be removed after you update SDK version with Arduino. So you may need to manually create it each time after update.