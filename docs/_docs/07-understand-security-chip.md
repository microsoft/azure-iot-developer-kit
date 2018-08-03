---
title: "Understand security chip"
permalink: /docs/understand-security-chip/
excerpt: "Learn concepts and usages of STSAFE, the security chip on the DevKit"
last_modified_at: 2018-01-08
---

{% include toc icon="columns" %}

## Overview

IoT security is the area of endeavor concerned with safeguarding connected devices and networks in the Internet of things (IoT). The MXChip IoT DevKit comes with [STSAFE-A100](http://www.st.com/en/secure-mcus/stsafe-a100.html) secure chip from STMicroelectronics to fulfill the secure needs on the device end. With STSAFE, credentials such as WiFi password, connection strings for the cloud services and other confidential data are able to be securely stored in it. This article explains secure levels provided on IoT DevKit using STSAFE.

## Secure solution

### STSAFE-A100

The STSAFE-A100 consists of a full turnkey solution with a secure operating system running on the latest generation of secure microcontrollers.

![STSAFE on DevKit]({{"/assets/images/how-to/stsafe/stsafe-on-devkit.png" | absolute_url }})

On the chip, it employs data partitions to be used to store critical data such as Wi-Fi SSID, Wi-Fi password and IoT hub connection string safely. Credential data can be isolated in those partitions. To read and write those partitions, a developer uses `dataZoneIndex` for operating on specific partition. See [API Reference](http://microsoft.github.io/azure-iot-developer-kit/docs/apis/eeprom-interface/) to learn about using it on Arduino.

### Enable the secure channel

By default, the security chip is not enabled. It means the data you store on EEPROM is in plain text. There are two ways to enable it:

1. Use `enable_secure 1` command in [Configurition Mode]({{"/docs/use-configuration-mode/" | absolute_url }}).
2. Call `enableHostSecurityChannel()` function in Arduino. see [API reference]({{"/docs/apis/eeprom-interface/" | absolute_url }}).

After enabled, the DevKit will negotiate a key with secure chip. The key will be stored at both DevKit and secure chip side. All data as well as the read / write operations on I2C will then be encrypted.

**Notice:** **Enable the security chip with caution.** Using drag and drop to upgrade firmware will make data saved in EEPROM will no longer be readable immediately after enabling the security channel. This is a design with the security chip to ensure data can not be breached.
{: .notice--warning}

The status between enabling and disabling the security channel.

![STSAFE status]({{"/assets/images/how-to/stsafe/stsafe-status.png" | absolute_url }})

The difference of the data commuinication between DevKit and the security chip (EEPROM).

![STSAFE communication with DevKit]({{"/assets/images/how-to/stsafe/communication.png" | absolute_url }})

## Problems and feedback

If you encounter problems, you can find [FAQs]({{"/docs/faq/" | absolute_url }}) if you encounter problems or reach out to us from our [Gitter channel](https://gitter.im/Microsoft/azure-iot-developer-kit){:target="_blank"}.

{% include feedback.html tutorial="understand-security-chip" %}

