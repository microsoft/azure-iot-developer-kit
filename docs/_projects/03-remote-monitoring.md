---
title: "Remote Monitoring"
permalink: /docs/projects/remote-monitoring/
excerpt: "Send status of sensors on DevKit to Azure IoT Suite.
"
header:
  image: /assets/images/projects-remote-monitoring.jpg
  teaser: /assets/images/projects-remote-monitoring-th.jpg
last_modified_at: 2017-06-28T06:23:34-04:00
---

In this tutorial, you learn how to run a sample app on DevKit to send sensor data to your Azure IoT Suite.

{% include toc icon="columns" %}

## What you need

* Finish the [Getting Started Guide]({{"/docs/getting-started/" | absolute_url }})
* MSA or Azure subscription.

## Windows

### Step 1. Create an Azure IoT Suite

1. Go to [Azure IoT Suite site](https://www.azureiotsuite.com/) and click **Create a new solution**.

![remote-monitoring-azure-iot-suite-solution-types]({{"/assets/images/remote-monitoring-azure-iot-suite-solution-types.png" | absolute_url }})

2. Select **Remote monitoring**.

3. Enter a solution name, select a subscription and a region, and then click **Create solution**. The solution may take a while to be provisioned.

![remote-monitoring-azure-iot-suite-new-solution]({{"/assets/images/remote-monitoring-azure-iot-suite-new-solution.png" | absolute_url }})

4. After the provision is complited, click **Launch**. Some simulated devices are created for the solution during the provision process. Click **DEVICES** to check them out.

![remote-monitoring-azure-iot-suite-new-solution-created]({{"/assets/images/remote-monitoring-azure-iot-suite-new-solution-created.png" | absolute_url }})

![remote-monitoring-azure-iot-suite-console]({{"/assets/images/remote-monitoring-azure-iot-suite-console.png" | absolute_url }})

5. Click **ADD A DEVICE**.

6. Click **Add New** for **Custom Device**.

![remote-monitoring-azure-iot-suite-add-new-device]({{"/assets/images/remote-monitoring-azure-iot-suite-add-new-device.png" | absolute_url }})

7. Click **Let me define my own Device ID**, enter `AZ3166`, and then click **Create**.

![remote-monitoring-azure-iot-suite-new-device-configuration]({{"/assets/images/remote-monitoring-azure-iot-suite-new-device-configuration.png" | absolute_url }})

8. Make a note of **IoT Hub Hostname**, and click **Done**.

### Step 2. Open the RemoteMonitoring sample

1. Disconnect DevKit from your computer if it is connected.

2. Launch VS Code.

3. Connect DevKit to your computer. VS Code automatically detects your DevKit and opens the following pages:

  * Preview README.md: The DevKit introduction page.
  * Arduino Examples: Hands-on samples to get started with DevKit.

4. On the **Arduino Examples page**, expand `Examples for MXCHIP AZ3166 > SensorStatus`, and then click **RemoteMonitoring**. The RemoteMonitoring sample opens in a new VS Code window.

![mini-solution-vscode]({{"/assets/images/mini-solution-vscode.png" | absolute_url }})

If the **Arduino Examples** page doesn’t show up, open it by the following steps:

1. Press `Ctrl+Shift+P` to open the command palette.
2. In the command palette, type `Arduino`, and then click **Arduino: Examples**.

### Step 3. Provision required Azure services

1. In the RemoteMonitoring sample window, press `Ctrl+P`, type `task cloud`, and then click **cloud-provision**.
The cloud-provision task opens an interactive command line that guides you through provisioning the required Azure services.

2. In the interactive command line, select the IoT hub represented by the IoT Hub Hostname that you noted down.

3. Wait for the provision to complete.

![remote-monitoring-provision]({{"/assets/images/remote-monitoring-provision.png" | absolute_url }})

### Step 4. Upload the RemoteMonitoring sample to DevKit

1. In the RemoteMonitoring sample window, press `Ctrl+P`, type `task device`, and then click **device-upload**. The interactive command line prompts you to set DevKit to configuration mode.

2. On DevKit, press and hold button A, press the Reset button, and then release button A.
The screen should display `Configuration` if DevKit is running in configuration mode.

3. Wait for the upload to complete.
Once the upload is completed, DevKit restarts and runs the sample.

![remote-monitoring-build]({{"/assets/images/remote-monitoring-build.png" | absolute_url }})

## Verify the result

When the sample app runs, DevKit sends sensor data over Wi-Fi to your Azure IoT Suite. To see the result, follow these steps:

1. Go to your Azure IoT Suite, and click **DASHBOARD**.

2. Azure IoT Suite solution console, you will see DevKit sensor status.

![remote-monitoring-connect-wifi]({{"/assets/images/remote-monitoring-connect-wifi.jpg" | absolute_url }})

![remote-monitoring-send-data]({{"/assets/images/remote-monitoring-send-data.jpg" | absolute_url }})

![remote-monitoring-sensor-status]({{"/assets/images/remote-monitoring-sensor-status.png" | absolute_url }})
