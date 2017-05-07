---
title: "Shake, Shake"
permalink: /docs/projects/shake-shake/
excerpt: "Use the motion sensor to detect shaking, and use a simple Azure Functions app to find a random tweet with a #hashtag.
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

In this project, you will learn how to use the motion sensor to trigger an event using Azure Functions. The app will retrieve a random tweet with a #hashtag you have configured in your Arduino sketch. The tweet will display on the DevKit screen, and every time you shake the DevKit board, you will get a new tweet.

## What you need

* Finish the [Getting Started Guide]({{"/docs/getting-started/" | absolute_url }})

## Step 1. Open Arduino Examples folder

In VS Code, use `Ctrl+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Examples** to open example pane. Navigate to `Examples for MXChip AZ3166 > AzureIoTHub` and click on `AzureIoTHubExample`.

## Step 2. Provision Azure services

In the solution window, run your task through **Quick Open** (`Ctrl+P`) by typing 'task provision':

In the VS Code terminal, an interactive command line will guide you through provisioning the required Azure services:

![mini-solution-provision-sub]({{"/assets/images/mini-solution-provision-sub.png" | absolute_url }})

## Step 3. Modify the #hashtag

Open `AzureIotHubExample.ino` and look for the line of code:

```cpp
static const char* iot_event = "{\"topic\":\"iot\"}";
```

Replace the string `iot` in the curly brace with your preferred hashtag.

## Step 4. Deploy your solution

Build and deploy Arduino code as well as an Azure Functions app.

1. Use **Quick Open** (`Ctrl+P`) to run 'task deploy'. It will start deploying the Azure Functions code. Normally it takes 2 to 5 minutes to finish.
2. Use **Quick Open** (`Ctrl+P`) to run 'task build'. The terminal will prompt you to enter configuration mode again. This is to set the connection string. It will build the Arduino code and upload it to the device. The DevKit will reboot and start running the code:

## Step 5. Test the solution

After app initialization, click button A and mildly shake the board to retrieve a random tweet with your hashtag (e.g. #build2017). A tweet will display on your screen in a few seconds:

{% include gallery id="layouts_gallery" caption="Shake, shake for a random tweet with #hashtag you set in the code." %}

- Press button A again, then shake for a new tweet.
- Press button B to scroll through the rest of the tweet.

**Note:** Sometimes you will see 'On processing...' status on screen without getting the results. You can try to click `Reset` button to restart the app.
{: .notice--info}

## How it works

![mini-solution-voice-to-tweet-diagram]({{"/assets/images/mini-solution-diagram-shake-shake.png" | absolute_url }})

The Arduino sketch sends an event to Azure IoT Hub which triggers the Azure Functions app. Azure Functions contains the logic to connect to Twitter's API and retrieve a tweet. It wraps the tweet text into a C2D (Cloud-to-device) message and sends it back to the device.