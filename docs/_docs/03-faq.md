---
title: "Frequently Asked Questions"
permalink: /docs/faq/
excerpt: "Instructions and suggestions for upgrading the theme."
last_modified_at: 2016-11-03T10:16:34-04:00
---

{% include toc icon="columns" %}

## During installation, the command window seems stuck and there is no progress updated for a while

This could probably due to you put the Windows command window into "Selection" mode. To verify it, check the command window title:

![getting-started-faq-select]({{"/assets/images/getting-started-faq-select.png" | absolute_url }})

If you see **select** on the title, this means you are in Selection mode. It will prevent the refresh of the output. And that is why you cannot see the latest progress.

To solve it, press any key within the command window area and you will see the **select** disappear on the title.

## During provision step, it fails when creating new Azure IoT Hub

You may encounter the error message as the screen below:

![getting-started-faq-iothub]({{"/assets/images/getting-started-faq-iothub.png" | absolute_url }})

This is due to IoT Hub only allows [one free hub per Azure subscription](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal){:target="_blank"}. In this case, you may select the existing IoT Hub instead of trying to create a new one.

## I get errors when connecting to WiFi

This is probably due to you are connecting to a WiFi that needs extra certification other than WPA/WPA2 or open WiFi with captive portal for log in such as in Starbucks.

To solve it, try use a WiFi hotspot with normal WPA/WPA2 encryption methods.
