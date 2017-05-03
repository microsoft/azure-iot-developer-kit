---
title: "Simple weather station"
permalink: /docs/mini-solutions/test-sensors/
excerpt: "The basic one. Get temperature and humidity data from sensor and display them on the screen."
header:
  image: /assets/images/foo-bar-identity.jpg
  teaser: /assets/images/foo-bar-identity-th.jpg
last_modified_at: 2016-11-03T10:16:34-04:00
---

In this mini solution, you will learn how to use accelerometer & gyroscope sensor to tigger an event using Azure Function: retrieve a random tweet with #hashtag you have designated. The tweet will then display on DevKit's screen. Every time you shake your DevKit board, you will get a new tweet.

## Requirements

* Finish the [Getting Started Guide](/azure-iot-developer-kit/getting-started.html) to prepare your development environment and hardware.
* An active Azure account.

## Step.1 Open mini solution folder

In VS Code, use `Ctrl+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Examples** to open example pane:

![][mini-solution-arduino-examples]

Find `Examples for MXChip AZ3166 > AzureIoTHub > AzureIoTHubExample`, click to open the solution in a new VS Code window:

![][mini-solution-solution-catalog]

## Step.2 Provision Azure services

In the solution window, run your task through **Quick Open** (`Ctrl+P`) by typing 'task', `Space` and command name. In this case, 'task provision':

![][mini-solution-task-provision]

In terminal window, an interactive command line will guide you provision all Azure services that are required for this mini solution:

![][mini-solution-provision-sub]

You can also check [step by step tutorial for provision](/azure-iot-developer-kit/solutions/common/provision-step-by-step.html) to see more details.

## Step.3 Modify the code to retrieve tweet with #hashtag

Open `AzureIotHubExample.ino` and look for the line of code:

```cpp
sprintf(msgText, "{\"topic\":\"%s\", \"DeviceID\":\"%s\"}", "iot", "myDevice1");
```

Replace `#iot` with your preferred hashtag want to retrieve a tweet from. How about `#build2017`:) ?

## Step.4 Build and deploy your solution

Build and deploy Arduino code as well as [Azure Function](https://azure.microsoft.com/en-us/services/functions/){:target="_blank"} to wire all things up together.

Use **Quick Open** (`Ctrl+P`) to run 'task deploy'. It will start deploying Azure Functions code. Normally it takes 2 to 5 minutes to finish the deployment:

![][mini-solution-deploy]

Use again **Quick Open** (`Ctrl+P`) to run 'task build':

It will build Arduino code and deploy to the device. DevKit will reboot and start running the solution immediately after that:

![][mini-solution-build]

## Test the solution

Mildly shake the board to retrieve a random tweet with hash tag 'build2017' and display it on the OLED screen:

![][mini-solution-shake-a-tweet]

## How it works

![][mini-solution-voice-to-tweet-diagram]

**[TODO]**

[mini-solution-arduino-examples]: ../images/mini-solution-arduino-examples.png "Arduino Examples"

[mini-solution-solution-catalog]: ../images/mini-solution-solution-catalog.png "Mini Solution Catalog"

[mini-solution-task-provision]: ../images/mini-solution-task-provision.png "Task Provision"

[mini-solution-provision-sub]: ../images/mini-solution-provision-sub.png "Provision Azure Subscription"

[mini-solution-deploy]: ../images/mini-solution-deploy.png "Task Deploy"

[mini-solution-build]: ../images/mini-solution-build.png "Task Build"

[mini-solution-voice-to-tweet-diagram]: ../images/mini-solution-voice-to-tweet-diagram.png "Architecture"

[mini-solution-shake-a-tweet]: ../images/mini-solution-shake-a-tweet.jpg "Shake a tweet"