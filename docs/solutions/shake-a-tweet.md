# Shake, shake, what’s up for #Build2017

In this mini solution, you will learn how to use accelerometer & gyroscope sensor to tigger an event using Azure Function: retrieve a random tweet with #hashtag you have designated. The tweet will then display on DevKit's screen. Every time you shake your DevKit board, you will get a new tweet.

## Requirements

* Finish the [Getting Started Guide](/azure-iot-developer-kit/getting-started.html) to prepare your development environment and hardware.
* An active Azure account.

## Step.1 Open mini solution folder

In VS Code, use `Ctrl+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Examples** to open example pane:

**[TODO: Screenshot]**

Click to open **Mini Solutions** node and you will find **Shake for a tweet**, click again to open the solution in a new VS Code window:

**[TODO: Screenshot]**

## Step.2 Provision Azure services

In the solution window, run your task through **Quick Open** (`Ctrl+P`) by typing 'task', `Space` and command name. In this case, 'task provision':

**[TODO: Screenshot]**

In terminal window, an interactive command line will guide you provision all Azure services that are required for this mini solution:

**[TODO: Screenshot]**

You can also check [step by step tutorial for provision](/azure-iot-developer-kit/solutions/common/provision-step-by-step.html) to see more details.

## Step.3 Modify the code to retrieve tweet with #hashtag

Open `AzureIotHubExample.ino` and look for the line of code:

```cpp
sprintf(msgText, "{\"topic\":\"%s\"}", "#iot");
```

Replace `#iot` with your preferred hashtag want to retrieve a tweet from. How about `#build2017`:) ?

## Step.4 Build and deploy your solution

Build and deploy Arduino code as well as [Azure Function](https://azure.microsoft.com/en-us/services/functions/){:target="_blank"} to wire all things up together.

Use **Quick Open** (`Ctrl+P`) to run 'task deploy':

**[TODO: Screenshot]**

It will start deploying Azure Function code:

**[TODO: Screenshot]**

Use again **Quick Open** (`Ctrl+P`) to run 'task build':

It will build Arduino code and deploy to the device. DevKit will reboot and start running the solution immediately after that:

**[TODO: Screenshot]**

## Test the solution

Mildly shake the board to retrieve a random tweet with hash tag 'build2017' and display it on the OLED screen:

**[TODO: Screenshot]**

## How it works