---
title: "Shake, shake, what’s up for #hashtag"
permalink: /docs/mini-solutions/shake-shake/
excerpt: "Use accelerometer & gyroscope sensor to detect the shaking and a simple Azure Function app for getting a random tweet with #hashtag.
"
header:
  image: /assets/images/foo-bar-identity.jpg
  teaser: /assets/images/foo-bar-identity-th.jpg
layouts_gallery:
  - url: /assets/images/mini-solution-shake-shake-1.jpg
    image_path: /assets/images/mini-solution-shake-shake-1.jpg
    alt: "Arduino application initializing"
  - url: /assets/images/mini-solution-shake-shake-2.jpg
    image_path: /assets/images/mini-solution-shake-shake-2.jpg
    alt: "Ready to shake"
  - url: /assets/images/mini-solution-shake-shake-3.jpg
    image_path: /assets/images/mini-solution-shake-shake-3.jpg
    alt: "Display a random tweet"
last_modified_at: 2017-04-30T10:16:34-04:00
---

In this mini solution, you will learn how to use accelerometer and gyroscope sensor to tigger an event using Azure Function: retrieving a random tweet with `#hashtag` you have customized in your Arduino code. The tweet will display on DevKit screen. Every time you shake your DevKit board, you will get a new tweet.

## Requirements

* Finish the [Getting Started Guide]({{"/docs/getting-started/" | absolute_url }}) to prepare your development environment and hardware.
* An active Azure account.

## Step.1 Open mini solution folder

In VS Code, use `Ctrl+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Examples** to open example pane:

![mini-solution-arduino-examples]({{"/assets/images/mini-solution-arduino-examples.png" | absolute_url }})

Find `Examples for MXChip AZ3166 > AzureIoTHub > AzureIoTHubExample`, click to open the solution in a new VS Code window:

![mini-solution-solution-catalog]({{"/assets/images/mini-solution-catalog.png" | absolute_url }})

## Step.2 Provision Azure services

In the solution window, run your task through **Quick Open** (`Ctrl+P`) by typing 'task', `Space` and command name. In this case, 'task provision':

![mini-solution-task-provision]({{"/assets/images/mini-solution-task-provision.png" | absolute_url }})

In terminal window, an interactive command line will guide you provision all Azure services that are required for this mini solution:

![mini-solution-provision-sub]({{"/assets/images/mini-solution-provision-sub.png" | absolute_url }})

You can also check [step by step tutorial for provision](/azure-iot-developer-kit/solutions/common/provision-step-by-step.html) to see more details.

## Step.3 Modify the code to retrieve tweet with #hashtag

Open `AzureIotHubExample.ino` and look for the line of code:

```cpp
static const char* iot_event = "{\"topic\":\"iot\"}";
```

Replace `#iot` with your preferred hashtag want to retrieve a tweet from. How about `#build2017`:smile:?

## Step.4 Build and deploy your solution

Build and deploy Arduino code as well as [Azure Function](https://azure.microsoft.com/en-us/services/functions/){:target="_blank"} to wire all things up together.

Use **Quick Open** (`Ctrl+P`) to run 'task deploy'. It will start deploying Azure Function code. Normally it takes 2 to 5 minutes to finish the deployment:

![mini-solution-deploy]({{"/assets/images/mini-solution-deploy.png" | absolute_url }})

Use again **Quick Open** (`Ctrl+P`) to run 'task build':

It will build Arduino code and deploy to the device. DevKit will reboot and start running the solution immediately after that:

![mini-solution-build]({{"/assets/images/mini-solution-build.png" | absolute_url }})

## Test the solution

After initialization of the app, click `Button A` and mildly shake the board to retrieve a random tweet with hashtag `build2017`. In a few seconds, it will display on screen:

{% include gallery id="layouts_gallery" caption="Shake, shake for a random tweet with `#hashtag` you set in the code." %}

- Press `Button A` again to shake for a new tweet.
- Press `Button B` will scroll the screen to show you rest of the content for a tweet.

## How it works

![mini-solution-voice-to-tweet-diagram]({{"/assets/images/mini-solution-diagram-shake-shake.png" | absolute_url }})

This application sends an event to Azure IoT Hub and it triggers calling of Azure Function. The Azure Function contains logic to ask for and retrieve tweet. It wraps the tweet text into a C2D (Cloud-to-device) message and send back to device.
