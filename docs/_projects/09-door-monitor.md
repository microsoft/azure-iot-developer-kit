---
title: "Door Monitor"
permalink: /docs/projects/door-monitor/
redirect_to:
  - https://github.com/Microsoft/vscode-iot-workbench/blob/master/docs/iot-devkit/devkit_door_monitor.md
excerpt: "Use magnetic sensor to detect the change of magnetic field, and send notifications."
PreviousVersionText: "Previous version"
PreviousVersionUrl: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-arduino-iot-devkit-az3166-door-monitor
header:
  overlay_image: /assets/images/projects-door-monitor.jpg
  overlay_full: true
  teaser: /assets/images/projects-door-monitor-th.jpg
layouts_gallery:
  - url: /assets/images/mini-solution/door-monitor/test-door-closed.jpg
    image_path: /assets/images/mini-solution/door-monitor/test-door-closed.jpg
    alt: "Door Closed"
  - url: /assets/images/mini-solution/door-monitor/test-door-opened.jpg
    image_path: /assets/images/mini-solution/door-monitor/test-door-opened.jpg
    alt: "Door Opened"
icons:
  - url: /assets/images/icon-iot-hub.svg
    target: https://azure.microsoft.com/en-us/services/iot-hub/
    title: IoT Hub
  - url: /assets/images/icon-azure-functions.svg
    target: https://azure.microsoft.com/en-us/services/functions/
    title: Azure Functions
  - url: /assets/images/icon-sendgrid.svg
    target: https://sendgrid.com/partners/azure/
    title: SendGrid
difficulty: MEDIUM
variable:
  - platform: windows
    name: Windows
  - platform: macos
    name: macOS
last_modified_at: 2017-07-17
---

In this project, you learn how to use the magnetic sensor to detect magnetic field, triggering the SendGrid service to send notification to your email when the change of magnetic field is too large. A useful situation is that you can attach it to your door with a magnet. Then it could detect the state of your door and notify you when you away.

{% include toc icon="columns" %}

## What you need

Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }}) to:

* Have your DevKit connected to Wi-Fi
* Prepare the development environment

An active Azure subscription. If you do not have one, you can register via one of these methods:

* Activate a [free 30-day trial Microsoft Azure account](https://azure.microsoft.com/en-us/free/){:target="_blank"}.
* Claim your [Azure credit](https://azure.microsoft.com/en-us/pricing/member-offers/msdn-benefits-details/){:target="_blank"} if you are an MSDN or Visual Studio subscriber.

## Step 1. Deploy SendGrid service in Azure

[SendGrid](https://sendgrid.com/){:target="_blank"} is a cloud-based email delivery platform. We will use this service to send out email notifications.

**Note:** if you have deployed a SendGrid service, please go to [step 2](#step-2-deploy-iot-hub-in-azure).
{: .notice--info}

### A. SendGrid Deployment

To provision the service, we will use the **Deploy to Azure** button to provision Azure services. This button enables quick and easy deployment of your open source projects to Microsoft Azure.

Click the **Deploy to Azure**button, below. 

[![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FVSChina%2Fdevkit-door-monitor%2Fmaster%2FSendGridDeploy%2Fazuredeploy.json){:.click-action-tracker .click-tracker-name--DeployToAzure target="_blank"}

You will then see the following page (or you should first sign in to Azure), completing the sign-up form:

  * **Resource group**: Create a resource group to host the SendGrid service or use an existing one. See [Using resource groups to manage your Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-portal){:target="_blank"}.

  * **Name**: It is the name for your SendGrid service. You should choose a unique name differing from other services you may have.

  * **Password**: The service requires a password, but we will not be using it for anything in this project.

  * **Email**: The SendGrid service will send verification to this email address.

  **Tip:** Check the **Pin to dashboard** option to make this application easier to find in the future.
  {: .notice--success}

![SendGrid Deploy]({{"/assets/images/mini-solution/door-monitor/sendgrid-deploy.png" | absolute_url }})

### B. SendGrid API Key creation

After the deployment succeeds, click it and then click the **Manage** button. You will jump to your sendgrid page, and will need to verify your email address.

![SendGrid Manage]({{"/assets/images/mini-solution/door-monitor/sendgrid-manage.png" | absolute_url }})

On the sendgrid page, click **Settings** > **API Keys** > **Create API Key**. Input the **API Key Name** and click **Create & View**.

![SendGrid Create API First]({{"/assets/images/mini-solution/door-monitor/sendgrid-create-api-first.png" | absolute_url }})

![SendGrid Create API Second]({{"/assets/images/mini-solution/door-monitor/sendgrid-create-api-second.png" | absolute_url }})

Your API key will be displayed only one time. Please be sure to store it safely, as it will be used in the next step.

## Step 2. Deploy IoT Hub in Azure

We will now provision other Azure IoT related services and deploy Azure Functions for this project.

Click the **Deploy to Azure**button, below. 

[![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FVSChina%2Fdevkit-door-monitor%2Fmaster%2Fazuredeploy.json){:.click-action-tracker .click-tracker-name--DeployToAzure target="_blank"}

You will then see the following page (or you should first sign in to Azure), completing the sign-up form:

  * **Resource group**: Create a resource group to host the SendGrid service or use an existing one. See [Using resource groups to manage your Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-portal){:target="_blank"}.

  * **Iot Hub Name**: This is the name for your IoT hub. You should choose a unique name differing from other services you may have.

  * **Iot Hub Sku**: F1 (limited one per subscription) is free. You can see more pricing information at [pricing and scale tier](https://azure.microsoft.com/pricing/details/iot-hub/){:target="_blank"}.

  * **From Email**: This should be the same email address you used when setting up the SendGrid service.

  **Tip:** Check the **Pin to dashboard** option to make this application easier to find in the future.
  {: .notice--success}

![IoTHub Deploy]({{"/assets/images/mini-solution/door-monitor/iot-hub-deploy.png" | absolute_url }})

## Step 3. Build and upload the code

### A. Start VS Code

- Make sure your DevKit is **not** connected to your computer.
- Start VS Code
- Connect the DevKit to your computer.

VS Code will automatically detect your DevKit and open an introduction page:

![VSCode]({{"/assets/images/mini-solution/vscode_start.png" | absolute_url }})

**Notice:** Occasionally, when you launch VS Code, you may be prompted with error message stating that it cannot find Arduino IDE or related board package. If this should happen, close VS Code, launch the Arduino IDE again and VS Code should locate the Arduino IDE path correctly.
{: .notice--warning}

### B. Open Arduino Examples folder

Expand left side **ARDUINO EXAMPLES** section, browse to **Examples for MXCHIP AZ3166 > AzureIoT**, and select **DoorMonitor**. This will open a new VS Code window with a project folder in it.

![mini-solution-examples]({{"/assets/images/mini-solution/vscode_examples.png" | absolute_url }})

If you happen to close the pane, you can reopen it. Use `Ctrl+Shift+P` (macOS: `Cmd+Shift+P`) to open the command palette, type **Arduino**, and then find and select **Arduino: Examples**.

### C. Provision Azure services

In the solution window, run your task by typing `Ctrl+P` (macOS: `Cmd+P`) and entering `task cloud-provision` in the provided text box.:

In the VS Code terminal, an interactive command line will guide you through provisioning the required Azure services. You need to select all the same items from the prompted list that you previously provisioned in [Step 2]({{"/docs/projects/door-monitor#step-2-deploy-iot-hub-in-azure" | absolute_url }}).

![Cloud Provision]({{"/assets/images/mini-solution/door-monitor/cloud-prevision.png" | absolute_url }})

**Notice:** If the page hangs in the loading status when trying to sign in to Azure, please check this [FAQ steps]({{"/docs/faq/#page-hangs-when-log-in-azure" | absolute_url}}) to resolve this issue. 
{: .notice--warning}

### D. Build and upload the device code

{% include switch.html content = page.variable %}

#### Windows

1. Use `Ctrl+P` to run `task device-upload`.
2. The terminal prompts you to enter configuration mode. To do so, hold down button A, then push and release the reset button. The screen displays the DevKit ID and 'Configuration'.

This sets the connection string that is retrieved from the `task cloud-provision` step.

VS Code then starts verifying and uploading the Arduino sketch to the DevKit:

![device-upload]({{"/assets/images/mini-solution/door-monitor/device-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you may get an "Error: AZ3166: Unknown package" error messafge. This occurs when the board package index is not refreshed correctly. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to resolve this issue.
{: .notice--warning}

#### macOS

1. Put the DevKit into configuration mode:
  Hold down button A, then push and release the reset button. The screen displays 'Configuration'.
2. Use `Cmd+P` to run `task device-upload`.

This sets the connection string that is retrieved from the `task cloud-provision` step.

VS Code then starts verifying and uploading the Arduino sketch to the DevKit:

![device-upload]({{"/assets/images/mini-solution/door-monitor/device-upload.png" | absolute_url }})

The DevKit reboots and starts running the code.

**Notice:** Occasionally, you may get an "Error: AZ3166: Unknown package" error message. This occurs when the board package index is not refreshed correctly. Check this [FAQ steps]({{"/docs/faq/#development" | absolute_url}}) to resolve this issue.
{: .notice--warning}

## Test the project

The program first initializes when the DevKit is in the presence of a stable magnetic field. After initialization, `Door closed` is displayed on the screen. When the magnetic field changes from the initial condition, the state changes to `Door opened`. Whenever the state changes from `closed -> opened` or `opened -> closed`, you will receive a email containing this information. (These email messages may take around 5 minutes to be received.)

{% include gallery id="layouts_gallery" caption="e.g.: use a magnet in the y axis, the magnetic field change and it is recognized as door opened." %}

**Note:** When receiving with two continuous emails, some of the email client would display wrongly. Please careful select an email client when you use.
{: .notice--info}

## Problems and feedback

If you encounter problems, you can refer to [FAQs]({{"/docs/faq/" | absolute_url }}) or reach out to us from the channels below.

{% include feedback.html tutorial="door-monitor" %}
