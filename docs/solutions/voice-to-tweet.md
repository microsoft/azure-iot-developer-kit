# Send a tweet by voice

In this mini solution, you will make the DevKit able to send a tweet by voice. By using Microsoft Cognitive Service, when you speak to the DevKit via its microphone, it will translate the voice into a text message and use your authroized Twitter account to send a tweet for you.

## Requirements

* Finish the [Getting Started Guide](/azure-iot-developer-kit/getting-started.html) to prepare your development environment and hardware.
* An active Azure account.

## Step.1 Open mini solution folder

In VS Code, use `Ctrl+Shift+P` to invoke command palette and type **Arduino** then find and select **Arduino: Examples** to open example pane:

**[TODO: Screenshot]**

Click to open **Mini Solutions** node and you will find **Voice to tweet**, click again to open the solution in a new VS Code window:

**[TODO: Screenshot]**

## Step.2 Provision Azure services

In the solution window, run your task through **Quick Open** (`Ctrl+P`) by typing 'task', `Space` and command name. In this case, 'task provision':

**[TODO: Screenshot]**

In terminal window, an interactive command line will guide you provision all Azure services that are required for this mini solution:

**[TODO: Screenshot]**

You can also check [step by step tutorial for provision](/azure-iot-developer-kit/solutions/common/provision-step-by-step.html) to see more details.

## Step.3 Authorize your Twitter account

To post a tweet, you need to authrorize your Twitter account. 

## Step.4 Build and deploy your solution

Build and deploy Arduino code as well as [Azure Function](https://azure.microsoft.com/en-us/services/functions/){:target="_blank"} to wire all things up together.

Use **Quick Open** (`Ctrl+P`) to run 'task deploy'. It will start deploying Azure Function code:

**[TODO: Screenshot]**

Use again **Quick Open** (`Ctrl+P`) to run 'task build':

It will build Arduino code and deploy to the device. DevKit will reboot and start running the solution immediately after that:

**[TODO: Screenshot]**

## Test the solution

1. Click and hold left button then speak a sentence to the mic-phone  
2. Release the left button to send the voice data to Azure  
3. *(optional)* Confirm the data has been sent to Azure successfully on the OLED screen
4. Open your Twitter timeline should see the new tweet

**[TODO: Screenshot]**

## How it works