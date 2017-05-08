---
title: "Configure WiFi in Task"
permalink: /docs/getting-started/
excerpt: "An alternative way to configure WiFi in VS Code task."
last_modified_at: 2016-04-30T10:01:43-04:00
---

## Step 4. Configure WiFi

In order to run the WiFi configuration task for the DevKit, you must have the project folder open in VS Code.

1. If you closed the **Arduino Examples** pane, to reload it, use `Ctrl+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Examples**. Navigate to `Examples for MXChip AZ3166 > AzureIoTHub` and click on `AzureIoTHubExample`.
 ![mini-solution-solution-catalog]({{"/assets/images/mini-solution-catalog.png" | absolute_url }})

2. Use **Quick Open** (`Ctrl+P`) to run 'task config_wifi'. It will open the terminal in VS Code and prompt you to connect to WiFi.

3. In the terminal window, you will be asked to enter configuration mode. Hold down button A, click the Reset button on the board, then release button A.

4. Then you will be prompted to enter SSID and password.

 **Tip:** If your SSID has no password, enter `""` as password.
 {: .notice--info}

4. The DevKit will reboot and connect to WiFi. To verify, you can see the WiFi LED light up with IP address on the screen:
 ![getting-started-wifi-ip]({{"/assets/images/getting-started-wifi-ip.jpg" | absolute_url }})


### B. Launch VS Code

This will be the primary editor for DevKit development. Be sure to open VS Code before connecting to the DevKit so that it can automatically detect the board.

