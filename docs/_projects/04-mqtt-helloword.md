---
title: "MQTT Client"
permalink: /docs/projects/mqtt-helloworld/
redirect_to:
  - https://github.com/Microsoft/vscode-iot-workbench/blob/master/docs/iot-devkit/devkit-mqtt-client.md
excerpt: "Use DevKit as a client to send messages to MQTT server."
PreviousVersionUrl: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-arduino-iot-devkit-az3166-mqtt-helloworld
header:
  overlay_image: /assets/images/projects-mqtt-helloworld.jpg
  overlay_full: true
  teaser: /assets/images/projects-mqtt-helloworld-th.jpg
difficulty: EASY
last_modified_at: 2017-06-28
---

In this project, you learn how to use the MQTT Client library to send messages to an MQTT broker.
The MQTT client library we used is part of the [Eclipse Paho](http://www.eclipse.org/paho/) project, which provides APIs for using MQTT over multiple means of transport.

{% include toc icon="columns" %}

## What you need

Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }}) to:

* Have your DevKit connected to Wi-Fi
* Prepare the development environment

## Step 1. Open the project folder

1. Disconnect the DevKit from your computer, if it is already connected.

2. Start VS Code.

3. Connect the DevKit to your computer.
    VS Code automatically detects your DevKit and opens the following pages:
    * The DevKit introduction page.
    * Arduino Examples: Hands-on samples to get you started with your DevKit.
      Links to these two pages appear on the EXPLORER panel on the left side of the Visual Studio Code window.
      ![mini-solution-vscode]({{"/assets/images/mini-solution/vscode_start.png" | absolute_url }})

## Step 2. Open the MQTTClient Arduino sample sketch

Expand left side **Aduino Examples** section, browse to **Examples for MXCHIP AZ3166 > MQTT**, and select **MQTTClient**. This will open a new VS Code window with a project folder in it.

![examples-folder]({{"/assets/images/mini-solution/mqtt-helloworld/examples.png" | absolute_url}})

If you happen to close the pane, you can reopen it. Use `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to open the command palette, type **Arduino**, and then find and select **Arduino: Examples**.

## Step 3. Build and upload the Arduino sketch to the DevKit

Type `Ctrl+P` (macOS: `Cmd+P`) to run `task device-upload`. Once the upload is completed, DevKit restarts and runs the sketch.

![device-upload]({{"/assets/images/mini-solution/mqtt-helloworld/device-upload.jpg" | absolute_url}})

**Notice:** Occasionally, you may get the "Error: AZ3166: Unknown package" message. This occurs when the board package index is not refreshed. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to resolve this issue.
{: .notice--warning}

## Test the project

In VS Code, follow these steps to open and set up the Serial Monitor:

1. Click the `COM[X]` word on the status bar to set the correct COM port with `STMicroelectronics`:
  ![set-com-port]({{"/assets/images/mini-solution/mqtt-helloworld/set-com-port.jpg" | absolute_url}})

2. Click the power plug icon on the status bar to open the Serial Monitor:
  ![serial-monitor]({{"/assets/images/mini-solution/mqtt-helloworld/serial-monitor.jpg" | absolute_url}})
  
3. On the status bar, click the number that represents the Baud Rate and set it to `115200`:
  ![set-baud-rate]({{"/assets/images/mini-solution/mqtt-helloworld/set-baud-rate.jpg" | absolute_url}})

The Serial Monitor displays all the messages sent by the sample sketch. When the sketch runs, it connects the DevKit to Wi-Fi. When the Wi-Fi connection is successful, the sketch sends a message to the MQTT broker. After that, the sketch repeatedly sends two "iot.eclipse.org" messages using QoS 0 and QoS 1, respectively.

![serial-output]({{"/assets/images/mini-solution/mqtt-helloworld/serial-output.jpg" | absolute_url}})

## Problems and feedback

If you encounter problems, you can refer to [FAQs]({{"/docs/faq/" | absolute_url }}) or reach out to us from the channels below.

{% include feedback.html tutorial="mqtt-helloworld" %}

## See Also

* [Connect IoT DevKit AZ3166 to Azure IoT Hub in the cloud]({{"/docs/getting-started/" | absolute_url }})
* [Shake, Shake for a Tweet]({{"/docs/projects/shake-shake/" | absolute_url }})
