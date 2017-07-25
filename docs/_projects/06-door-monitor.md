---
title: "Door Monitor"
permalink: /docs/projects/door-monitor
excerpt: "Use the magnetic sensor to detect the change of magnetic field, and send notification with a simple Azure Function when the change of magnetic field is too large"
header:
  overlay_image: /assets/images/projects-door-monitor.jpg
  overlay_full: true
  teaser: /assets/images/projects-door-monitor-th.jpg
layouts_gallery:
  - url: /assets/images/door-monitor-test-door-closed.jpg
    image_path: /assets/images/door-monitor-test-door-closed.jpg
    alt: "Door Closed"
  - url: /assets/images/door-monitor-test-door-opened.jpg
    image_path: /assets/images/door-monitor-test-door-opened.jpg
    alt: "Door Opened"
last_modified_at: 2017-07-17
---

In this project, you will learn how to use the magnetic sensor to detect magnetic field, triggering the SendGrid service to send notification to your email when the change of magnetic field is too large. A useful situation is that you can attach it to your door with a magnet. Then it could detect the state of your door and notify you when you away.

{% include toc icon="columns" %}

## What you need

* Finish the [Getting Started Guide]({{"/docs/get-started/" | absolute_url }})

## Step 1. Deploy SendGrid serveice in Azure

**Notice:** if you have deployed a SendGrid service, please go to [step 2](#step-2-deploy-iot-hub-in-azure).
{: .notice}

### A. SendGrid Deployment

Click **Deploy to Azure** below. 

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FVSChina%2Fdevkit-door-monitor%2Fmaster%2FSendGridDeploy%2Fazuredeploy.json){:.click-action-tracker .click-tracker-name--DeployToAzure target="_blank"}

Then, you will see the following page (or you should first sign in to the Azure), completing the signup form:

  * **Resource group**: Create a resource group to host the SendGrid service or use an existing one. See [Using resource groups to manage your Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-portal){:target="_blank"}.

  * **Name**: It is the name for your SendGrid service. You should choose a unique name differing from other services you have.

  * **Password**: The service needs password, but it doesn't matter anything.

  It is better to choose **Pin to dashboard**, since this makes you easy to found it at dashboard.
  {: .notice}

![SendGrid Deploy]({{"/assets/images/door-monitor-sendgrid-deploy.png" | absolute_url }})

### B. SendGrid API Key creation

After the deployments succeed, click it and then click the **Manage** button. You will jump to your sendgrid page, and need to verify your email address.

![SendGrid Manage]({{"/assets/images/door-monitor-sendgrid-manage.png" | absolute_url }})

In the sendgrid page, click **Settings** > **API Keys** > **Create API Key**. Input the **API Key Name** and click **Create & View**.

![SendGrid Create API First]({{"/assets/images/door-monitor-sendgrid-create-api-first.png" | absolute_url }})

![SendGrid Create API Second]({{"/assets/images/door-monitor-sendgrid-create-api-second.png" | absolute_url }})

Your API will be displayed only one time. Please store it safely, and it will be used in the next step.

## Step 2. Deploy IoT Hub in Azure

Click **Deploy to Azure** below. 

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FVSChina%2Fdevkit-door-monitor%2Fmaster%2Fazuredeploy.json){:.click-action-tracker .click-tracker-name--DeployToAzure target="_blank"}

Then, you will see the following page (or you should first sign in to the Azure), completing the signup form:

  * **Resource group**: Create a resource group to host the SendGrid service or use an existing one. See [Using resource groups to manage your Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-portal){:target="_blank"}.

  * **Iot Hub Name**: It is the name for your IoT hub. You should choose a unique name differing from other services you have.

  * **Iot Hub Sku**: F1 (limited one per subscription) is free. You can see more pricing information in [pricing and scale tier](https://azure.microsoft.com/pricing/details/iot-hub/){:target="_blank"}.

  * **From Email**: This should be the same as you used in the SendGrid service.

  It is better to choose **Pin to dashboard**, since this makes you easy to found it at dashboard.
  {: .notice}

![IoTHub Deploy]({{"/assets/images/door-monitor-iot-hub-deploy.png" | absolute_url }})

## Step 3. Build and Upload anduino sketch

### A. Launch VS Code

Make sure your DevKit is not connected. Launch VS Code first and connect the DevKit to your computer. VS Code will automatically find it and pops up introduction page:

![VSCode]({{"/assets/images/door-monitor-vscode.png" | absolute_url }})

**Notice:** Occasionally, when you launch VS Code, you will be prompted with error that cannot find Arduino IDE or related board package. To solve it, close VS Code, launch Arduino IDE once and VS Code should locate Arduino IDE path correctly.
{: .notice--warning}

### B. Open Arduino Examples folder

Switch to **'Arduino Examples'** tab, navigate to `Examples for MXCHIP AZ3166 > AzureIoT` and click on `DoorMonitor`.

![Arduino Examples]({{"/assets/images/door-monitor-arduino-examples.jpg" | absolute_url }})

If you closed the **Arduino Examples** pane, to reload it, use `Ctrl+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Examples**.

### C. Provision Azure services

In the solution window, run your task through **Quick Open** (`Ctrl+P`) by typing 'task cloud-provision':

In the VS Code terminal, an interactive command line will guide you through provisioning the required Azure services:

![Cloud Prevision]({{"/assets/images/door-monitor-cloud-prevision.jpg" | absolute_url }})

### D. Build and upload Arduino sketch

Use **Quick Open** (`Ctrl+P`) to run 'task device-upload'. The terminal will prompt you to enter configuration mode. To do so, hold down button A, then push and release the reset button. The screen will display 'Configuration'. This is to set the connection string that retrieves from 'task cloud-provision' step.

Then it will start verifying and uploading the Arduino sketch:

![Device Upload]({{"/assets/images/door-monitor-device-upload.jpg" | absolute_url }})

The DevKit will reboot and start running the code.

**Notice:** If you are running on a clean machine with everything installed, during the verifying of the code phrase, you might get and error of **Unknown board AZ3166**. To work around this problem, open Arduino IDE and go to **Tool > Board manager**. Arduino will reload all json files for all package definitions. After it is done, you can launch VS Code again and try the build process, the problem should go away.
{: .notice--warning}

## Test the project

The program would first initialize with a stable magnetic field. After initialization, it would show `Door closed` in the screen. When the magnetic field change from the initial one, the state would become `Door opened`. In the process of `closed -> opened` or `opened -> closed`, you will receive a email of this information (It would be a delay for about 5 min).

{% include gallery id="layouts_gallery" caption="e.g.: use a magnet in the y axis, the magnetic field change and it is recognized as door opened." %}

**Notice:** When receiving with two continuous emails, some of the email client would display wrongly. Please careful select an email client when you use.
{: .notice}

## Problems and feedback

You can find [FAQs]({{"/docs/faq/" | absolute_url }}) if you encounter problems or reach out to us from the channels below.