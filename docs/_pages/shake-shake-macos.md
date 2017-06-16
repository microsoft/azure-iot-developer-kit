---
title: "Shake, shake"
permalink: /docs/projects/shake-shake-macos/
---

**Note:** This manual steps for running **'Shake, shake'** project on macOS is subject to be changed.
{: .notice--warning}

{% include toc icon="columns" %}

### Step 1. Create Azure IoT Hub

1. Sign in to [Azure portal](https://portal.azure.com/).

2. Click **New > Internet of Things > IoT Hub** or search for 'IoT Hub' and click **Create**:
 ![shake-shake-mac-create-iothub]({{"/assets/images/shake-shake-mac-create-iothub.png" | absolute_url }})

3. In the **IoT hub** pane, enter the following information for your IoT hub:
 ![shake-shake-mac-hub-details]({{"/assets/images/shake-shake-mac-hub-details.png" | absolute_url }})
 > * **Name**: It is the name for your IoT hub. If the name you enter is valid, a green check mark appears.
 > * **Pricing and scale tier**: Select the free F1 tier. This option is sufficient for this demo. See [pricing and scale tier](https://azure.microsoft.com/pricing/details/iot-hub/){:target="_blank"}.
 > * **Resource group**: Create a resource group to host the IoT hub or use an existing one. See Using [resource groups to manage your Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-portal){:target="_blank"}.
 > * **Location**: Select the closest location to you where the IoT hub is created.
 > * **Pin the dashboard**: Check this option for easy access to your IoT hub from the dashboard.

4. Click **Create**. It could take a few minutes for your IoT hub to be created. You can see progress in the **Notifications** pane:
 ![shake-shake-mac-notification]({{"/assets/images/shake-shake-mac-notification.png" | absolute_url }})

5. After your IoT hub is created, click it from the Resource groups. Make a note of the IoT Hub name:
 ![shake-shake-mac-iothub-name]({{"/assets/images/shake-shake-mac-iothub-name.png" | absolute_url }})

6. Click on the IoT Hub name, in the **Shared access policies** pane, click the **iothubowner** policy, and then make a note of the **Connection string** value for your IoT hub:
 ![shake-shake-mac-iothub-connection-string]({{"/assets/images/shake-shake-mac-iothub-connection-string.png" | absolute_url }})

### Step 2. Register a device in the IoT hub for the your device

1. In the [Azure portal](https://portal.azure.com/){:target="_blank"}, open your IoT hub.

2. Click **Device Explorer**.

3. In the Device Explorer pane, click **Add** to add a device with name "**AZ3166**" to your IoT hub:
 ![shake-shake-mac-create-device]({{"/assets/images/shake-shake-mac-create-device.png" | absolute_url }})
 > * **Device ID**: The ID of the new device.
 > * **Authentication type**: Select Symmetric Key.
 > * **Auto generate keys**: Check this field.
 > * **Connect device to IoT Hub**: Click Enable.

4. Click **Save**.

5. After the device is created, open the device in the **Device Explorer** pane.

6. Make a note of the primary key of the connection string.
 ![shake-shake-mac-connection-string]({{"/assets/images/shake-shake-mac-connection-string.png" | absolute_url }})

### Step 3. Configure device connection string to DevKit

1. With your DevKit connected to computer, open the terminal.

2. List relevant serial port:
 ```bash
 ls -l /dev/cu.*
 ```
 You get following outputs like:
 ```bash
 crw-rw-rw-  1 root  wheel   20,   1 May 17 18:36 /dev/cu.Bluetooth-Incoming-Port
 crw-rw-rw-  1 root  wheel   20,  33 May 18 18:11 /dev/cu.usbmodem1423
 ```
 The later one ended with `usbmodem1423` is the actual serial port of the DevKit.

3. Open serial monitor:
 ```bash
 screen /dev/cu.usbmodem1423 115200
 ```

4. Get into configuration mode:
 Hold down button A, then push and release the reset button.

5. In the prompt of the serial port with `#`, configure your connection string you get from previous step:
 ```bash
 set_az_iothub [your connection string]
 ```
 You will see the information once configuration is successful:
 ```bash
 INFO: Set Azure Iot hub connection string successfully.
 ```
 Now exit the serial monitor by first type `Ctrl+A` and then `Ctrl+\` and type 'y'.

### Step 4. Deploy Azure Functions

#### A. Create Azure Functions

1. Click **New > Everything** and search for **Function App**:
 ![shake-shake-mac-create-function-app]({{"/assets/images/shake-shake-mac-create-function-app.png" | absolute_url }})

2. Specify the Name and Resource Group of the function:
 ![shake-shake-mac-function-app-name]({{"/assets/images/shake-shake-mac-function-app-name.png" | absolute_url }})

3. Go to the Function App you just created and create a new custom function:
 ![shake-shake-mac-custom-function]({{"/assets/images/shake-shake-mac-custom-function.png" | absolute_url }})

4. Choose **EventHubTrigger-Javascript** from the template list and type the IoT Hub name you noted in **Event Hub name** field:
 ![shake-shake-mac-eventhub-trigger]({{"/assets/images/shake-shake-mac-eventhub-trigger.png" | absolute_url }})

5. Click **New** to create Event Hub connection:
 ![shake-shake-mac-new-eventhub-connection]({{"/assets/images/shake-shake-mac-new-eventhub-connection.png" | absolute_url }})

6. Select **IoT Hub** tab, confirm it selects the right IoT Hub and click **Select**:
 ![shake-shake-mac-function-connection-string]({{"/assets/images/shake-shake-mac-function-connection-string.png" | absolute_url }})

7. Click **Create** to finish creating a new function.

#### B. Upload the Azure Functions files of the project

1. Click **[my function name] > View Files > Upload**:
 ![shake-shake-mac-function-upload]({{"/assets/images/shake-shake-mac-function-upload.png" | absolute_url }})

2. Press `Cmd+Shift+G`, and then click **Go**.

3. Continue to navigate to the following folder:
 ```bash
 ~/Library/Arduino15/packages/AZ3166/hardware/stm32f4/0.8.1/libraries/AzureIotHub/examples/ShakeShake/azureFunction
 ```
4. Upload `index.js` and `package.json`.

5. Click `index.js` again to refresh the code:
 ![shake-shake-mac-function-refresh]({{"/assets/images/shake-shake-mac-function-refresh.png" | absolute_url }})

6. Select **Platform features** and click **Console** to launch the console:
 ![shake-shake-mac-open-console]({{"/assets/images/shake-shake-mac-open-console.png" | absolute_url }})

7. In the console, run the following commands:
 ```bash
 cd [your function name]
 npm install
 ```
 ![shake-shake-mac-npm-install]({{"/assets/images/shake-shake-mac-npm-install.png" | absolute_url }})

#### C. Configure and run Azure Functions

1. Select **Platform features** and click **Application settings**:
 ![shake-shake-mac-app-settings]({{"/assets/images/shake-shake-mac-app-settings.png" | absolute_url }})

2. Add a new Key / Value pair in **App settings** section and click **Save**:
 - Key: **iotHubConnectionString**
 - Value: **[your IoT Hub connection string]**
 ![shake-shake-mac-eventhub-connection-string]({{"/assets/images/shake-shake-mac-eventhub-connection-string.png" | absolute_url }})

3. Go to your Azure Function code and click **Run**:
 ![shake-shake-mac-function-run]({{"/assets/images/shake-shake-mac-function-run.png" | absolute_url }})

### Step 5. Build and upload Arduino sketch

#### A. Open Arduino Examples folder in VS Code:

Launch VS Code first and connect the DevKit to your computer. VS Code will automatically find it and pops up introduction page. Switch to **'Arduino Examples'** tab, navigate to `Examples for MXChip AZ3166 > AzureIoTHub` and click on `ShakeShake`.

![shake-shake-example]({{"/assets/images/shake-shake-example.png" | absolute_url }})

#### B. Modify the #hashtag

Open `ShakeShake.ino` and look for the line of code:

```cpp
static const char* iot_event = "{\"topic\":\"iot\"}";
```

Replace the string `iot` in the curly brace with your preferred hashtag.

#### C. Build and upload Arduino sketch

Use `Cmd+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Upload**. Then it will start compiling and uploading the Arduino sketch. After it is done, the DevKit will reboot and start running the code.

## Test the project

Check how to [test the result]({{"/docs/projects/shake-shake/#test-the-project" | absolute_url }}).