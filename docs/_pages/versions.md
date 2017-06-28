---
permalink: /versions/
title: "Versions and Release Notes"
excerpt: "Versions and release notes"
last_modified_at: 2017-06-28
---

## Version 1.0.0

After a month work to stabilizing the code, fixing bugs and adding more samples, we are happy to release the v1.0.0 for our IoT DevKit. And soon we will open source the stacks including firmware, toolchain and all sample projects code. Please check release summary for details about this update.

### Release Summary

* Updatged underlying mbed OS to 5.4.
 
* Installation Scripts
  * Adapted to the changes for Azure subscription fetching in Azure CLI from Azure team.
  * Installed pip with `get-pip.py` script.
  * Optimized error handling when running commands.
 
* Stabilization
  * Bug fix: Memory leak on socket layer of Wi-Fi driver.
  * Bug fix: Added retry logic to improve the stability of Azure IoT Device SDK.
 
* Shake-Shake
  * Use testing Twitter bearer token as default, developer can replace it with her own by following the tutorial.
  * Added delay and retry logic when not receiving any message due to function delay.
 
* Arduino Library
  * Refined library APIs to follow Arduino Standard like function naming conventions. 
  * Added OLED draw method to control every pixel in display screen.
  * Added support for file system based on mbed file system implementation.
  * Added support for IRDA.
 
* Project Catalog
  * Added 'Connect to Azure IoT Hub' example and documentation that align with other [Azure IoT Hub get started tutorials](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-get-started){:target="_blank"}.
  * Added 'Remote Monitoring' example and documentation that make DevKit connect to [Azure IoT Suite](https://www.azureiotsuite.com){:target="_blank"}.
  * Added 'MQTT Client' example and documentation that send MQTT messages to public free MQTT broker.

## Version 0.8.1

Some bug fixes before DevKit debut on [//Build](https://build.microsoft.com/){:target="_blank"} and [Maker Faire Bay Area](http://makerfaire.com/){:target="_blank"}.

## Version 0.8.0

This is our first public release of the Microsoft Azure IoT Developer Kit.

### Release Summary

Everything is brand new!