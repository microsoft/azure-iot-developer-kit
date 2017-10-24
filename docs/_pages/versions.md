---
permalink: /versions/
title: "Versions and Release Notes"
excerpt: "Versions and release notes"
last_modified_at: 2017-10-23
---

{% include toc icon="columns" %}

## Version 1.2.0 (October 24)

No more manual steps to prepare your DevKit development environment on macOS! The time saving one-click installation now support macOS as well. And yes, we love bash.

### Release Summary

* Firmware
  * Upgraded IoT Hub device SDK to [1.1.23](https://github.com/Azure/azure-iot-sdk-c/releases/tag/2017-09-08){:target="_blank"}.
  * Made IoT Hub MQTT Client as a wrapper that can be shared by all mini solutions.
  * Enabled float modifier for `print/printf` function.
  * Removed `json-c` library and use [parson JSON library](https://github.com/kgabis/parson){:target="_blank"} instead.
  * Bug fix: Enabled HttpClient response callback when handling large response body.
 
* Project Catalog
  * New mini solution: DeviceStates. Use Azure IoT Hub device twins to monitor DevKit state and control the user LED.
  * Fixed gyroscope values and added acceleration sensor in SensorStatus sample.
  * Used MQTT Client wrapper for GetStarted, RemoteMonitoring and ShakeShake mini solutions.
  * Improved telemetry logics in mini solutions on macOS.
 
* Development Tools
  * Enabled one-click install experience on macOS :wink:. 
  * Upgraded all project tasks to version 2.0.
  * Used `CMD` as the default shell on Windows.
  * Set default device upload method to use OpenOCD instead of ST-Link.
  * Bug fix: VS Code task failure due to double quotation marks.

### Downloads

- [Installation Package 1.2.0 for Windows](https://aka.ms/devkit/prod/installpackage/latest).
- [Installation Package 1.2.0 for macOS](https://aka.ms/devkit/prod/installpackage/mac/latest).
- [Firmware 1.2.0](https://aka.ms/devkit/prod/firmware/latest).


## Version 1.1.1 (September 27)

### Release Summary

* Minor fixes of internal Azure IoT Hub Device APIs.

### Downloads

- [Installation Package 1.1.1 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_1.1.1.15.zip).
- [Installation Package 1.1.1 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_tasks_mac_1.1.1.15.zip).
- [Firmware 1.1.1](https://azureboard2.azureedge.net/prod/devkit-firmware-1.1.1.15.bin).


## Version 1.1.0 (September 4)

**Notice:** This release involves breaking changes, please [upgrade the DevKit firmware]({{"/docs/upgrading/#upgrade-firmware" | absolute_url}}) first.
{: .notice--warning}

DevKit now officially has full support for [ST-SAFE](http://www.st.com/en/secure-mcus/stsafe-a100.html){:target="_blank"}, the security chip that provides secure authentication and data management for IoT solutions. Since it's enabled on bootloader level, a [firmware upgrade]({{"/docs/upgrading/#upgrade-firmware" | absolute_url}}) is mandatory to make the DevKit work properly.

### Release Summary

* Firmware
  * Upgraded the DevKit firmware to enable STSAFE.
  * Bug fix: Under bad network environment, the Device SDK in mbed OS occasionally crashes.
  * Added more NTP servers for better globalization support.

* Arduino Library
  * Tuned OLED library display performance.

* Project Catalog
  * Massively improved Azure Functions deployment(`task cloud-deploy`) performance.
  * Improved 'Shake, Shake' example flow further by adding more logging data on the display.

* Development Tools
  * Visual Studio Code extension for Arduino now used tree view to display Arduino examples.

### Downloads

- [Installation Package 1.1.0 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_1.1.0.zip).
- [Installation Package 1.1.0 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_tasks_mac_1.1.0.zip).
- [Firmware 1.1.0](https://azureboard2.azureedge.net/prod/devkit-firmware-1.1.0.bin).


## Version 1.0.2 (August 10)

Summer does not mean slow down. We further enriched our project catalog and tuned their performances. And from our user feedback, we added the logic to detect the latest firmware so that you will no longer miss our new stuff.

### Release Summary

* Firmware
  * Enabled detection of latest firmware version and display on the screen.

* Arduino Library
  * Added support for audio playback API.

* Project Catalog
  * Added 'DevKit Translator' example for DevKit to understand more languages :robot:.
  * Added 'Door Monitor' example uses third party email service to send notifications.
  * Replaced manual steps with VS Code tasks for 'Connect to Azure IoT Hub' example.
  * Improve Azure Functions stability and performance used by examples.
  * Improve the telemetry API, and add more telemetry for 'Shake Shake' to track the running status.

* Development Tools
  * Adapted VS Code task for all sample projects to remove tedious manual steps.
  * Bug fix: Occasionally installation will fail to set Arduino custom board URL.

### Downloads

- [Installation Package 1.0.2 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_1.0.2.zip).
- [Firmware 1.0.2](https://azureboard2.azureedge.net/prod/devkit-firmware-1.0.2.bin).


## Version 1.0.1 (July 13)

The optimization continues. We are now supporting VS Code tasks on macOS as well, so you can easily provision and deploy our “Shake, Shake” sample project on macOS now. To further smooth the development tools and package installation, we are using the official [MSI](https://aka.ms/InstallAzureCliWindows){:target="_blank"} for the Windows Azure CLI 2.0 installation, so Python installation is no longer needed. For all other underlying improvements, checkout our release notes for details.
 
### Release Summary
 
* Installation Package 
  * Removed the dependency of Python installation by using Windows Azure CLI 2.0 MSI (v 2.0.9).
  * Upgraded to the latest version of VS Code (v 1.13.1) and Arduino Extension (v 0.2.4).
  * Switched to Azure CDN to accelerate the package downloading speed.
 
* Firmware 
  * Stabilized Wi-Fi connection and minor optimizations to Azure IoT Device C SDK
 
* Project Catalog 
  * Previewed cloud provision, deploy and device upload tasks for “Shake, Shake” mini solution in VS Code on macOS.
  * Switched to [ARM (Azure Resource Manager) template](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-create-first-template){:target="_blank"} for provisioning Azure services.
  * Put Azure Function creation logic into cloud provision step to further isolate the tasks.
  * Added telemetries to distinguish each mini solution from BI perspective.

### Downloads

- [Installation Package 1.0.1 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_1.0.1.zip).
- [Firmware 1.0.1](https://azureboard2.azureedge.net/prod/devkit-firmware-1.0.1.bin).


## Version 1.0.0 (June 26)

After a month work of stabilizing the code, fixing bugs and adding more samples, we are happy to release the v1.0.0 for our IoT DevKit. And soon we will open source the stacks including firmware, toolchain and all sample projects code. Please check release summary for details about this update.

### Release Summary

* Updated underlying mbed OS to 5.4

* Show version number for the default app
 
* Installation Package
  * Installed pip with `get-pip.py` script.
  * Optimized error handling when running commands.
  * Adapted to updates of Azure subscription return format using Azure CLI.
 
* Stabilization
  * Bug fix: Memory leak on socket layer of Wi-Fi driver.
  * Bug fix: Added retry logic to improve the stability of Azure IoT Device SDK.
 
* Arduino Library
  * Refined library APIs to follow Arduino Standard like function naming conventions. 
  * Added [OLED draw method]({{"/docs/apis/display/" | absolute_url}}) to control every pixel in display screen.
  * Added support for file system based on mbed file system implementation.
  * Added support for [IrDA]({{"/docs/apis/irda/" | absolute_url}}).
 
* Project Catalog
  * Added 'Connect to Azure IoT Hub' example and documentation that align with other [Azure IoT Hub get started tutorials](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-get-started){:target="_blank"}.
  * Added 'Remote Monitoring' example and documentation that make DevKit connect to [Azure IoT Suite](https://www.azureiotsuite.com){:target="_blank"}.
  * Added 'MQTT Client' example and documentation that send MQTT messages to public free MQTT broker.
  * Shake, Shake: Use testing Twitter bearer token as default, developer can replace it with her own by following the tutorial.
  * Shake, Shake: Added delay and retry logic when not receiving any message due to function delay.

### Downloads

- [Installation Package 1.0.0 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_1.0.0.zip).
- [Firmware 1.0.0](https://azureboard2.azureedge.net/prod/devkit-firmware-1.0.0.bin).


## Version 0.8.1 (May 21)

Some bug fixes before DevKit debut on [//Build](https://build.microsoft.com/){:target="_blank"} and [Maker Faire Bay Area](http://makerfaire.com/){:target="_blank"}.

## Version 0.8.0 (May 5)

This is our first public release of the Microsoft Azure IoT Developer Kit.

### Release Summary

Everything is brand new!
