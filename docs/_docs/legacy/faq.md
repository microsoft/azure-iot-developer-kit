---
title: "[Obsoleted] Frequently asked questions"
permalink: /docs/legacy/faq/
excerpt: "Frequently asked questions"
last_modified_at: 2018-08-04
---

{% include toc icon="columns" %}



**Notice:** [Azure IoT Workbench](https://aka.ms/iot-workbench) is the new tool for developing on IoT DevKit, and we strongly recommend you use this tool for developing that can avoid below problems if still use the old tools installed by the all-in-one installation package.
{: .notice--warning}



## Installation

### Command window seems stuck and there is no progress update for a while.

This could be due to putting the Windows command window in "Selection" mode. To verify, check the command window title:

![Window select mode]({{"/assets/images/faq/window-select.png" | absolute_url }})

If you see **select** on the title, this means you are in Selection mode. It prevents refresh of the output, that is why you cannot see any progress.

To resolve, press any key within the command window area and you see **select** disappear in the title.

### Homebrew permission error on macOS.

When you run `install.sh` to install development environment on macOS. You may get a Homebrew permission error:

![Homebrew permission error]({{"/assets/images/faq/brew-permission-error.png" | absolute_url }})

To resolve, follow the instruction of Homebrew by running:

```bash
brew doctor
```

![Homebrew doctor]({{"/assets/images/faq/brew-doctor.png" | absolute_url }})

### Inconsistency between node versions of npm and Yarn.

When you run `install.sh` to install development environment on macOS, you may get a node incompatible error:

```
The engine "node" is incompatible with this module. Expected version ">= 8".
Found incompatible module
```

To resolve, please upgrade node to the latest version.



## Cloud Provisioning

### Creating new Azure IoT Hub fails.

You may encounter the error message as the screen below:

![Only one IoT Hub]({{"/assets/images/faq/iothub.png" | absolute_url }})

This is because Azure IoT Hub only allows [one free hub per Azure subscription](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal). In this case, you may select the existing IoT Hub instead of trying to create a new one.

## Development

### Get "Error: AZ3166: Unknown package" when using `task device-upload`.

This is a known issue caused by the platform index of the board AZ3166 is not refreshed.

To solve this problem, we need to refresh the platform index: 

1. Open Arduino IDE, find **Tools > Board: 'local board name' > Boards Manager...**.
    ![Open Arduino Board Manager]({{"/assets/images/faq/unknown-package.png" | absolute_url }})

2. Wait until all platforms index is refreshed and then close Arduino IDE.

3. Re-open VS Code to run `task device-upload` again.

### Get "serialport.node" error when using `task device-upload`

If the Node.js installed on your machine is not a LTS one, you might get below error when using the `task device-upload`:
![Node.js not LTS]({{"/assets/images/faq/node-lts.png" | absolute_url }})

To resolve, please uninstall the existing Node.js and then re-install [the package](https://microsoft.github.io/azure-iot-developer-kit/docs/get-started/#step-5-prepare-the-development-environment).

### Customize device ID

The default device ID in IoT Hub for IoT DevKit is AZ3166, you can change it if you need in your own scenario.

To customize device ID, open `.bin/config.json` in the mini-solution project, and add `device` field. For example:

```json
{
  "sketch": "../GetStarted.ino",
  "config": "deviceConnectionString",
  "provision_iot_hub": true,
  "provision_azure_function": false,
  "tasks": {
    "provision": ["subscription", "iothub", "armtemplatedeployment", "device"],
    "deploy": []
  },
  "device": "CUSTOMIZED_DEVICE_ID"
}
```

Notice: The device ID is hardcoded now in the project catalog samples. We will improve the development experience to resolve this issue. However, if you need to change the default **AZ3166** to other, here's the list of files you need to modify for each sample:

* DevKitTranslator - [azurefunction/devkit-translator/run.csx](https://github.com/Microsoft/devkit-sdk/blob/master/AZ3166/src/libraries/AzureIoT/examples/DevKitTranslator/azurefunction/devkit-translator/run.csx#L42)
* GetStarted - [config.h](https://github.com/Microsoft/devkit-sdk/blob/master/AZ3166/src/libraries/AzureIoT/examples/GetStarted/config.h#L9)
* RemoteMonitoring - [RemoteMonitoring.ino](https://github.com/Microsoft/devkit-sdk/blob/master/AZ3166/src/libraries/AzureIoT/examples/RemoteMonitoring/RemoteMonitoring.ino#L23)
* ShakeShake - [azureFunction/shakeshake-cs/run.csx](https://github.com/Microsoft/devkit-sdk/blob/master/AZ3166/src/libraries/AzureIoT/examples/ShakeShake/azureFunction/shakeshake-cs/run.csx#L91) & [azureFunction/shakeshake-node/index.js](https://github.com/Microsoft/devkit-sdk/blob/master/AZ3166/src/libraries/AzureIoT/examples/ShakeShake/azureFunction/shakeshake-node/index.js#L29)
* DevKitDPS - [config.h](https://github.com/DevKitExamples/DevKitDPS/blob/master/config.h#L9)
* DevKitState - [azureFunction/devkit-state/run.csx](https://github.com/DevKitExamples/DevKitState/blob/master/azureFunction/devkit-state/run.csx#L60) & [web/js/main.js](https://github.com/DevKitExamples/DevKitState/blob/master/web/js/main.js#L7)




{% include social-share.html %}

[![Back to Top]({{"/assets/images/faq-back-to-top.png" | absolute_url }})](#){: .faq-back-to-top}
