In this project, you will learn how to send sensor data to Azure IoT Suite.

## What you need

* Finish the [Getting Started Guide]({{"/docs/getting-started/" | absolute_url }})

## Windows

### Step 1. Create Azure IoT Suite Solution

Go to https://www.azureiotsuite.com/, and click create a new solution:

![remote-monitoring-azure-iot-suite-solution-types]({{"/assets/images/remote-monitoring-azure-iot-suite-solution-types" | absolute_url }})

Select remote monitoring, then type solution name and select subscription and region:

![remote-monitoring-azure-iot-suite-new-solution]({{"/assets/images/remote-monitoring-azure-iot-suite-new-solution" | absolute_url }})

After a while, your solution will be deploy.

![remote-monitoring-azure-iot-suite-new-solution-created]({{"/assets/images/remote-monitoring-azure-iot-suite-new-solution-created" | absolute_url }})

Click launch button to open your solution console. You will see some simulated devices have already been added in the solution.

![remote-monitoring-azure-iot-suite-console]({{"/assets/images/remote-monitoring-azure-iot-suite-console" | absolute_url }})

Click add a device on bottom left of the page and add a custom device.

![remote-monitoring-azure-iot-suite-add-new-device]({{"/assets/images/remote-monitoring-azure-iot-suite-add-new-device" | absolute_url }})

In the custom device configuration page, check let me define my own Device ID, and type AZ3166, then click create button.

![remote-monitoring-azure-iot-suite-new-device-configuration]({{"/assets/images/remote-monitoring-azure-iot-suite-new-device-configuration" | absolute_url }})

### Step 2. Open project folder

#### A. Launch VS Code

Launch VS Code first and connect the DevKit to your computer. VS Code will automatically find it and pops up introduction page:

![mini-solution-vscode]({{"/assets/images/mini-solution-vscode.png" | absolute_url }})

#### B. Open Arduino Examples folder

Switch to **'Arduino Examples'** tab, navigate to `Examples for MXChip AZ3166 > SensorStatus` and click on `RemoteMonitoring`.

If you closed the **Arduino Examples** pane, to reload it, use `Ctrl+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Examples**.

### Step 3. Provision Azure services

In the solution window, run your task through **Quick Open** (`Ctrl+P`) by typing 'task cloud-provision':

In the VS Code terminal, an interactive command line will guide you through provisioning the required Azure services. Select IoT Hub created in Azure IoT Suite solution. The IoT Hub name should contain the solution name.

![remote-monitoring-provision]({{"/assets/images/remote-monitoring-provision.png" | absolute_url }})

### Step 4. Build and upload Arduino sketch

Use **Quick Open** (`Ctrl+P`) to run 'task device-upload'. The terminal will prompt you to enter configuration mode. To do so, hold down button A, then push and release the reset button. The screen will display 'Configuration'. This is to set the connection string that retrieves from 'task cloud-provision' step.

Then it will start verifying and uploading the Arduino sketch:

![remote-monitoring-build]({{"/assets/images/remote-monitoring-build.png" | absolute_url }})

The DevKit will reboot and start running the code.

## Test the project

After app initialization, DevKit will connect to WiFi and send sensor data to Azure IoT Suite automatically:

![remote-monitoring-connect-wifi]({{"/assets/images/remote-monitoring-connect-wifi.png" | absolute_url }})

![remote-monitoring-send-data]({{"/assets/images/remote-monitoring-send-data.png" | absolute_url }})

Go to Azure IoT Suite solution console, you will see DevKit sensor status:

![remote-monitoring-sensor-status]({{"/assets/images/remote-monitoring-sensor-status.png" | absolute_url }})