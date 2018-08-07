---
title: "[Obsoleted] Customize device ID"
permalink: /docs/legacy/customize-device-id/
excerpt: "Customize device ID in IoT Hub"
last_modified_at: 2018-08-04
---

## Customize device ID

The default device ID in IoT Hub for IoT DevKit is **AZ3166**, you can change it if you need it in your own scenario.

To customize the device ID, open `.bin/config.json` in the mini-solution project, and add `device` field. For example:

```json
{
  "sketch": "../GetStarted.ino",
  "config": "deviceConnectionString",
  "provision_iot_hub": true,
  "provision_azure_function": false,
  "tasks": {
    "provision": ["subscription", "iothub", "armtemplatedeployment", "device"],
    "deploy": []
  },
  "device": "CUSTOMIZED_DEVICE_ID"
}
```

Then can go through the steps in tutorial again to register your IoT DevKit with this new device ID.
