---
permalink: /versions/
title: "Versions and Release Notes"
excerpt: "Versions and release notes"
last_modified_at: 2018-01-09
---

{% include toc icon="columns" %}

## Version 1.4.1 (Augest 6, 2018)

### Release Summary

* SDK

  * Add [OTA Programming API]({{"docs/apis/ota" | absolute_url }}).

  * UARTClass class support extra serial port (PB_6 & PB_7).

    ![UART1]({{"/assets/images/release/141_uart.png" | absolute_url }})

  * [Audio class]({{"docs/apis/audio-v2" | absolute_url }}) support automatic level control on microphone.

* Mini Solution

  * Add IoT DevKit firmware OTA update mini solution.

    **Notice:**  Please make sure you have upgrade the firmware before running the OTA mini solution.
    {: .notice--warning}

* Special thanks to [capfish](https://github.com/capfish) , [Adamantinu](https://github.com/Adamantinu) and [Chris Lovett](https://github.com/lovettchris), thank you for your contributions and feedbacks.


## Version 1.4.0 (July 19, 2018)

### Release Summary

* Firmware
  * Enable firmware update capability in bootloader.
    Now the bootloader can upgrade the firmware from the on-board SPI flash, this is part of the OTA programming (firmware update) feature.
    By integrating with the Azure Automatic Device Configuration service, the OTA firmware update function will be enabled in next release.

* SDK
  * Reduce the size of file system which builds upon the 2MB on-board SPI flash.
    
    **Notice:** Because it need more on-board SPI flash space to store the new firmware for firmware updating, we reduced the space of [file system]({{"docs/apis/file-system" | absolute_url }}). So if you have files on IoT DevKit, please make sure they have been well backed up before upgrade to this new SDK.
    {: .notice--warning}
    
  * Add [setVolume API]({{"docs/apis/audio-v2" | absolute_url }}) to support change the audio volume.

* Mini Solution
  * Update the DevKit Translator to use the new [Audio APIs]({{"docs/apis/audio-v2" | absolute_url }}).

* Development Tools
  * Deprecate existing one-click installation package.
    Our new VS Code extension: [IoT Workbench]( https://aka.ms/iot-workbench) can provide better development experience for IoT DevKit, you can install it from the VS Code marketplace directly and follow this [tutorial]( https://aka.ms/iot-workbench/getstarted) to start using IoT DevKit. 
    
    So starting with 1.4.0 we only provide the Arduino board package (SDK only) and no longer to have the one-click installation package.

### Downloads

- [Firmware 1.4.0](https://azureboard2.azureedge.net/prod/devkit-firmware-1.4.0.60.bin).


## Version 1.3.7 (Jun 8, 2018)

### Release Summary

* SDK
  * Add [System Function](https://microsoft.github.io/azure-iot-developer-kit/docs/apis/system-function/) for power saving.
  * Display the IP address for default firmware.
  * Fix memory usage API issue.
  * Fix bugs.

* Development Tools
  * Improve error message when serial port occupied

* Special thanks to [Oguz Bastemur](https://github.com/obastemur), thank you for your contributions and feedbacks.

### Downloads

- [Installation Package 1.3.7 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_win_1.3.7.56.zip).
- [Installation Package 1.3.7 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_install_mac_1.3.7.56.zip).
- [Firmware 1.3.7](https://azureboard2.azureedge.net/prod/devkit-firmware-1.3.7.56.bin).


## Version 1.3.5 (April 28, 2018)

### Release Summary

* SDK
  * Add [Watchdog Timer API](https://microsoft.github.io/azure-iot-developer-kit/docs/apis/watchdog-timer/).
  * Add [External Interrupts API](https://microsoft.github.io/azure-iot-developer-kit/docs/apis/external-interrupts/).
  * Fix MQTT client reconnect issue.
  * Filter out DevKit hotspot in the WiFi configuration page.
  * Fix bugs.

* Mini Solution
  * New mini-solution: [Connect to IoT Edge device gateway as Modbus TCP device](https://github.com/DevKitExamples/DevKitModbus#connect-to-iot-edge-device-gateway-as-modbus-tcp-device).

* Development Tools
  * Fix bug such that it works for users who only have resource group-level access
  * Fix azure-cli bug by updating azure-cli to latest version.
  * Allow users to disable data collection.

* Special thanks to [Kirk Munro](https://github.com/KirkMunro) , [fmuntean](https://github.com/fmuntean) , [Thomas Mutzl](https://github.com/mutzl), thank you for your contributions and feedbacks.

### Downloads

- [Installation Package 1.3.5 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_win_1.3.5.53.zip).
- [Installation Package 1.3.5 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_install_mac_1.3.5.53.zip).
- [Firmware 1.3.5](https://azureboard2.azureedge.net/prod/devkit-firmware-1.3.5.53.bin).


## Version 1.3.4 (March 28, 2018)

### Release Summary

* Minor fixes for the mini solution of Remote Monitoring V2.

### Downloads

- [Installation Package 1.3.4 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_win_1.3.4.50.zip).
- [Installation Package 1.3.4 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_install_mac_1.3.4.50.zip).
- [Firmware 1.3.4](https://azureboard2.azureedge.net/prod/devkit-firmware-1.3.4.50.bin).


## Version 1.3.3 (March 20, 2018)

### Release Summary

* SDK
  * Add [WebSocket API](https://microsoft.github.io/azure-iot-developer-kit/docs/apis/websocket-client/) (not include SSL).
  * Add [memory status API](https://microsoft.github.io/azure-iot-developer-kit/docs/apis/memory-status/).
  * Bug fix
  * Compile error of file missing in Linux and macOS environment.
  * Some bugs found in security check and review.
  
* Mini Solution
  * Add new mini solution to support Remote Monitoring v2
  * Document will come soon
  * Update mini solution of DPS to provide the device enrollment tool for macOS 

* Special thanks to [Alexandre Dumont](https://github.com/adumont) , [Juan Manuel Servera Bondroit](https://github.com/jmservera) , [Chris Lovett](https://github.com/lovettchris) , [Prafull Kotecha](https://github.com/prafullkotecha) , thank you for your contributions and feedbacks.

### Downloads

- [Installation Package 1.3.3 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_win_1.3.3.45.zip).
- [Installation Package 1.3.3 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_install_mac_1.3.3.45.zip).
- [Firmware 1.3.3](https://azureboard2.azureedge.net/prod/devkit-firmware-1.3.3.45.bin).


## Version 1.3.2 (February 7, 2018)

### Release Summary

* SDK
  * Expose setOption API in DevKitMQTTClient.
  * Fix some bugs related to memory management.

* Development Tools
  * Hide meaningless warning messages when build the Arduino code in VS Code.

### Downloads

- [Installation Package 1.3.2 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_win_1.3.2.44.zip).
- [Installation Package 1.3.2 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_install_mac_1.3.2.44.zip).
- [Firmware 1.3.2](https://azureboard2.azureedge.net/prod/devkit-firmware-1.3.2.44.bin).


## Version 1.3.1 (January 23, 2018)

During the past 2 weeks, we got chance to revisit our code and did some minor changes to improve the stability and dev experience.

### Release Summary

* SDK
  * Fix memory leak issue in IoT Hub MQTT client when there was a long drop on Wi-Fi.

* Development Tools
  * Improve the stability for DevKit Windows/Mac installation.
  * Support customized IoT Hub Device ID in configuring device connection string.

### Downloads

- [Installation Package 1.3.1 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_win_1.3.1.42.zip).
- [Installation Package 1.3.1 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_install_mac_1.3.1.42.zip).
- [Firmware 1.3.1](https://azureboard2.azureedge.net/prod/devkit-firmware-1.3.1.42.bin).


## Version 1.3.0 (January 9, 2018)

Happy new year 2018! Let us talk about the fundamentals of IoT this time: the security. IoT DevKit is now amongst the first MCU devices that support [Microsoft IoT Hub Device Provisioning Service](https://docs.microsoft.com/en-us/azure/iot-dps/about-iot-dps), which is a helper service for IoT Hub that enables zero-touch, just-in-time provisioning to the right IoT hub without requiring human intervention, enabling customers to provision millions of devices in a secure and scalable manner.

### Release Summary

* Firmware
  * Upgrade the DevKit firmware to enable DPS feature.
  * New tool `set_dps_uds` is added in the configuration mode, which help to save the **Unique Device Secret (UDS)** into the STSAFE chip, for more detail please check [this topic]({{"/docs/projects/dps/#save-unique-device-secret-on-stsafe-security-chip" | absolute_url }}).

* SDK
  * Open source [DevKit SDK](https://github.com/Microsoft/devkit-sdk), you are welcome to contribute :)
  * Upgrade the Azure IoT C SDK to [1.1.28]( https://github.com/Azure/azure-iot-sdk-c/releases/tag/2017-11-17).
  * Archive the Azure IoT C SDK in the Arduino board package, greatly reduce the compile time.
  * Enable the secure channel, protecting confidentiality and integrity of data with STSAFE chip on IoT DevKit.
  * Add reset function `SystemReboot`.

* Mini Solution
  * New mini-solution: [Device registration with Device Provisioning Service]({{"/docs/projects/dps/" | absolute_url }}).

### Downloads

- [Installation Package 1.3.0 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_win_1.3.0.40.zip).
- [Installation Package 1.3.0 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_install_mac_1.3.0.40.zip).
- [Firmware 1.3.0](https://azureboard2.azureedge.net/prod/devkit-firmware-1.3.0.40.bin).


## Version 1.2.2 (December 20, 2017)

We are focusing on the script refinement in this release.

### Release Summary

* Development Tools
  * Improve MacOS installation script to handle error friendly.
  * Refactor Windows installation script to improve code quality.
  * Refine VS Code task for mini-solutions to improve code quality.

### Downloads

- [Installation Package 1.2.2 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_win_1.2.2.35.zip).
- [Installation Package 1.2.2 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_install_mac_1.2.2.35.zip).
- [Firmware 1.2.0](https://azureboard2.azureedge.net/prod/devkit-firmware-1.2.0.28.bin).

## Version 1.2.1 (November 22, 2017)

The new Audio library gives the ability to continuous recording voice through the microphone.

### Release Summary

* SDK
  * A new version of the Audio driver library (AudioClassV2) has been added. This new version supports call-backs, allowing you to greatly simplify Arduino sketches which need to monitor and react to the current audio state as, for example, when it changes from AUDIO_STATE_RECORDING to AUDIO_STATE_PLAYING.  An example Arduino sketch making use of this new feature may be found in the Audio2 folder under "Examples for MXCHIP AZ3166". Note: The previous AudioClass library has been retained for backward compatibility with legacy sketches. (Sample sketches utilizing the AudioClass.h library may be found in the Audio folder under "Examples for MXCHIP AZ3166".)  Provide V2 version of Audio driver library to support callback in record and play.
  * A name conflict (INADDR_NONE) in source code was generating the error "Expected ')' before numeric constant". This error (documented in Issue 169) has been corrected.

* New Mini Solution
  * A cool mini-solution was added. You can check it out [here](https://microsoft.github.io/azure-iot-developer-kit/docs/projects/air-traffic-control-simulator/).
* Development Tools
  * A Resource Group Location selection option was added when creating  a new resource group in `task cloud provision`.
  * A privacy statement has been added during installation to allow users to choose to enable or disable data collection. 
  * Error handling during development tool installation has been improved.
  * Installation of Visual Studio Code has been updated to better support both X86 and X64 environments.
  * The Azure CLI installation has been updated to version 2.0.20

### Downloads

- [Installation Package 1.2.1 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_win_1.2.1.33.zip).
- [Installation Package 1.2.1 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_install_mac_1.2.1.33.zip).
- [Firmware 1.2.0](https://azureboard2.azureedge.net/prod/devkit-firmware-1.2.0.28.bin).

## Version 1.2.0 (October 24, 2017)

No more manual steps to prepare your DevKit development environment on macOS! The time saving one-click installation now support macOS as well. And yes, we love bash.

### Release Summary

* SDK
  * Upgrade IoT Hub device SDK to [1.1.23](https://github.com/Azure/azure-iot-sdk-c/releases/tag/2017-09-08){:target="_blank"}.
  * Made IoT Hub MQTT Client as a wrapper that can be shared by all mini solutions.
  * Enable float modifier for `print/printf` function.
  * Remove `json-c` library and use [parson JSON library](https://github.com/kgabis/parson){:target="_blank"} instead.
  * Bug fix: Enable HttpClient response callback when handling large response body.

* Project Catalog
  * New mini solution: DeviceStates. Use Azure IoT Hub device twins to monitor DevKit state and control the user LED.
  * Fix gyroscope values and added acceleration sensor in SensorStatus sample.
  * Use MQTT Client wrapper for GetStarted, RemoteMonitoring and ShakeShake mini solutions.
  * Improve telemetry logics in mini solutions on macOS.

* Development Tools
  * Enable one-click install experience on macOS :wink:. 
  * Upgrade all project tasks to version 2.0.
  * Use `CMD` as the default shell on Windows.
  * Set default device upload method to use OpenOCD instead of ST-Link.
  * Bug fix: VS Code task failure due to double quotation marks.

### Downloads

- [Installation Package 1.2.0 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_win_1.2.0.29.zip).
- [Installation Package 1.2.0 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_install_mac_1.2.0.28.zip).
- [Firmware 1.2.0](https://azureboard2.azureedge.net/prod/devkit-firmware-1.2.0.28.bin).

**Notice:** If you are upgrading from version 1.0.2 or even earlier, please [upgrade your firmware]({{"/docs/firmware-upgrading" | absolute_url}}) first.
{: .notice--warning}


## Version 1.1.1 (September 27, 2017)

### Release Summary

* Minor fixes of internal Azure IoT Hub Device APIs.

### Downloads

- [Installation Package 1.1.1 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_1.1.1.15.zip).
- [Installation Package 1.1.1 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_tasks_mac_1.1.1.15.zip).
- [Firmware 1.1.1](https://azureboard2.azureedge.net/prod/devkit-firmware-1.1.1.15.bin).

**Notice:** If you are upgrading from version 1.0.2 or even earlier, please [upgrade your firmware]({{"/docs/firmware-upgrading" | absolute_url}}) first.
{: .notice--warning}


## Version 1.1.0 (September 4, 2017)

DevKit now officially has full support for [ST-SAFE](http://www.st.com/en/secure-mcus/stsafe-a100.html){:target="_blank"}, the security chip that provides secure authentication and data management for IoT solutions. Since it's enabled on bootloader level, a [firmware upgrade]({{"/docs/firmware-upgrading" | absolute_url}}) is mandatory to make the DevKit work properly.

### Release Summary

* Firmware
  * Upgrade the DevKit firmware to enable STSAFE.

* SDK
  * Bug fix: Under bad network environment, the Device SDK in mbed OS occasionally crashes.
  * Add more NTP servers for better globalization support.

* Arduino Library
  * Tune OLED library display performance.

* Project Catalog
  * Massively improve Azure Functions deployment(`task cloud-deploy`) performance.
  * Improve 'Shake, Shake' example flow further by adding more logging data on the display.

* Development Tools
  * Visual Studio Code extension for Arduino now use tree view to display Arduino examples.

### Downloads

- [Installation Package 1.1.0 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_1.1.0.zip).
- [Installation Package 1.1.0 for macOS](https://azureboard2.azureedge.net/prod/mac/devkit_tasks_mac_1.1.0.zip).
- [Firmware 1.1.0](https://azureboard2.azureedge.net/prod/devkit-firmware-1.1.0.bin).

**Notice:** If you are upgrading from version 1.0.2 or even earlier, please [upgrade your firmware]({{"/docs/firmware-upgrading" | absolute_url}}) first.
{: .notice--warning}

## Version 1.0.2 (August 10, 2017)

Summer does not mean slow down. We further enriched our project catalog and tuned their performances. And from our user feedback, we added the logic to detect the latest firmware so that you will no longer miss our new stuff.

### Release Summary

* Firmware
  * Enable detection of latest firmware version and display on the screen.

* SDK
  * Add support for audio playback API.

* Project Catalog
  * Add 'DevKit Translator' example for DevKit to understand more languages :robot:.
  * Add 'Door Monitor' example uses third party email service to send notifications.
  * Replace manual steps with VS Code tasks for 'Connect to Azure IoT Hub' example.
  * Improve Azure Functions stability and performance used by examples.
  * Improve the telemetry API, and add more telemetry for 'Shake Shake' to track the running status.

* Development Tools
  * Adapt VS Code task for all sample projects to remove tedious manual steps.
  * Bug fix: Occasionally installation will fail to set Arduino custom board URL.

### Downloads

- [Installation Package 1.0.2 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_1.0.2.zip).
- [Firmware 1.0.2](https://azureboard2.azureedge.net/prod/devkit-firmware-1.0.2.bin).


## Version 1.0.1 (July 13, 2017)

The optimization continues. We are now supporting VS Code tasks on macOS as well, so you can easily provision and deploy our 'Shake, Shake' sample project on macOS now. To further smooth the development tools and package installation, we are using the official [MSI](https://aka.ms/InstallAzureCliWindows){:target="_blank"} for the Windows Azure CLI 2.0 installation, so Python installation is no longer needed. For all other underlying improvements, checkout our release notes for details.

### Release Summary

* Installation Package 
  * Remove the dependency of Python installation by using Windows Azure CLI 2.0 MSI (v 2.0.9).
  * Upgrade to the latest version of VS Code (v 1.13.1) and Arduino Extension (v 0.2.4).
  * Switch to Azure CDN to accelerate the package downloading speed.

* Firmware 
  * Stabilize Wi-Fi connection and minor optimizations to Azure IoT Device C SDK

* Project Catalog 
  * Preview cloud provision, deploy and device upload tasks for “Shake, Shake” mini solution in VS Code on macOS.
  * Switched to [ARM (Azure Resource Manager) template](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-create-first-template){:target="_blank"} for provisioning Azure services.
  * Put Azure Function creation logic into cloud provision step to further isolate the tasks.
  * Add telemetries to distinguish each mini solution from BI perspective.

### Downloads

- [Installation Package 1.0.1 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_1.0.1.zip).
- [Firmware 1.0.1](https://azureboard2.azureedge.net/prod/devkit-firmware-1.0.1.bin).


## Version 1.0.0 (June 26, 2017)

After a month work of stabilizing the code, fixing bugs and adding more samples, we are happy to release the v1.0.0 for our IoT DevKit. And soon we will open source the stacks including firmware, toolchain and all sample projects code. Please check release summary for details about this update.

### Release Summary

* Update underlying mbed OS to 5.4

* Show version number for the default app

* Installation Package
  * Install pip with `get-pip.py` script.
  * Optimize error handling when running commands.
  * Adapt to update of Azure subscription return format using Azure CLI.

* Stabilization
  * Bug fix: Memory leak on socket layer of Wi-Fi driver.
  * Bug fix: Add retry logic to improve the stability of Azure IoT Device SDK.

* Arduino Library
  * Refine library APIs to follow Arduino Standard like function naming conventions. 
  * Add [OLED draw method]({{"/docs/apis/display/" | absolute_url}}) to control every pixel in display screen.
  * Add support for file system based on mbed file system implementation.
  * Add support for [IrDA]({{"/docs/apis/irda/" | absolute_url}}).

* Project Catalog
  * Add 'Connect to Azure IoT Hub' example and documentation that align with other [Azure IoT Hub get started tutorials](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-get-started){:target="_blank"}.
  * Add 'Remote Monitoring' example and documentation that make DevKit connect to [Azure IoT Suite](https://www.azureiotsuite.com){:target="_blank"}.
  * Add 'MQTT Client' example and documentation that send MQTT messages to public free MQTT broker.
  * Shake, Shake: Use testing Twitter bearer token as default, developer can replace it with her own by following the tutorial.
  * Shake, Shake: Add delay and retry logic when not receiving any message due to function delay.

### Downloads

- [Installation Package 1.0.0 for Windows](https://azureboard2.azureedge.net/prod/windows/devkit_install_1.0.0.zip).
- [Firmware 1.0.0](https://azureboard2.azureedge.net/prod/devkit-firmware-1.0.0.bin).


## Version 0.8.1 (May 21, 2017)

Some bug fixes before DevKit debut on [//Build](https://build.microsoft.com/){:target="_blank"} and [Maker Faire Bay Area](http://makerfaire.com/){:target="_blank"}.

## Version 0.8.0 (May 5, 2017)

This is our first public release of the Microsoft Azure IoT Developer Kit.

### Release Summary

Everything is brand new!
