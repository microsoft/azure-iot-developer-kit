---
title: "MQTT HelloWorld"
permalink: /docs/projects/mqtt-helloworld/
excerpt: "Connect DevKit to a public free MQTT broker, send messages to the server and print it out if it is successful"
header:
  image: /assets/images/projects-mqtt-helloworld.jpg
  teaser: /assets/images/projects-mqtt-helloworld-th.jpg
---

In this project, you will learn how to use the MQTT Client library to send message to a MQTT broker.
The MQTT client library we used is part of the [Eclipse Paho](http://www.eclipse.org/paho/) project, which provides APIs for using MQTT over multiple transports.

{% include toc icon="columns" %}

## What you need

* Finish the [Getting Started Guide]({{"/docs/getting-started/" | absolute_url }})

## Step 1. Launch VS Code

1. Disconnect DevKit from your computer if it is connected.
1. Launch VS Code.
1. Connect DevKit to your computer.
    VS Code automatically detects your DevKit and opens the following pages:
    * Preview ‘README.md: The DevKit introduction page.
    * Arduino Examples: Hands-on samples to get started with DevKit.

    ![mqtt-vscode-connect]({{"/assets/images/mqtt-vscode-connect.jpg" | absolute_url}})

1. Setup serial monitor of Arduino Extension 
    * In Arduino, you can click the power plug icon in the status bar to open Serial Monitor.
    * On the status bar of VS Code, click **COM**, and then click the port that DevKit connects to.
    * On the status bar, click the number that represents the baud rate, and then click **115200**.

    ![mqtt-vscode-serial-monitor]({{"/assets/images/mqtt-vscode-serial-monitor.jpg" | absolute_url}})

    ![mqtt-serial-set-com-port]({{"/assets/images/mqtt-serial-set-com-port.jpg" | absolute_url}})

    ![mqtt-serial-set-baud-rate]({{"/assets/images/mqtt-serial-set-baud-rate.jpg" | absolute_url}})

## Step 2. Open the MQTTClient Sample

On the **Arduino Examples** page, expand `Examples for MXCHIP AZ3166 > MQTT` and then click `MQTTClient`.
The MQTTClient example opens in a new VS Code window.

![mqtt-examples-folder]({{"/assets/images/mqtt-examples-folder.jpg" | absolute_url}})

If the Arduino Examples page doesn't shows up, open it by the following steps:
1. Press `Ctrl+Shift+P` to open the command palette.
1. In the command palette, type 'Arduino', and then click `Arduino:Examples`.

## Step 3: Configure Wi-Fi settings

1. In the MQTT Client sample window, open the `MQTTClient.ino` file.
1. Enter the Wi-Fi SSID and password in the code.
1. Save the changes.

![mqtt-set-wifi]({{"/assets/images/mqtt-set-wifi.jpg" | absolute_url}})

## Step 4. Upload MQTTClient example to DevKit

Use **Quick Open** (`Ctrl+P`) to run 'task device-upload'. Once the upload is completed, DevKit restarts and runs the sample.

**Note**: The upload takes a while to complete for the first time.
{: .notice--info}

## Step 5. Verify the result

The Serial Monitor displays all the messages sent from the sample. When the sample runs, it connects DevKit to Wi-Fi. When the connection is successful, the sample sends a message to the MQTT broker. After that, the sample repeatedly sends two "iot.eclipse.org" messages using QoS 0 and QoS 1, respectively.

![mqtt-serial-output]({{"/assets/images/mqtt-serial-output.jpg" | absolute_url}})


## See Also

* [Connect DevKits to Azure IoT Hub ]({{"/docs/getting-started/" | absolute_url }})
* [Shake Shake to get twitter message]({{"/docs/projects/shake-shake/" | absolute_url }})
