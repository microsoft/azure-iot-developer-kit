---
title: "OTA Update"
permalink: /docs/apis/ota-update/
excerpt: "Library for OTA update on IoT DevKit"
last_modified_at: 2018-07-05T05:16:34-04:00
---

`OTAUpdateClient` class is a simple library that provides functions to upgrade firmware.

## Assembly
OTAUpdateClient.h

## Summary

| Methods |
| :------ |
| [getInstance](#getInstance) - `static OTAUpdateClient& getInstance()` |
| [updateFromUrl](#updateFromUrl) - `int updateFromUrl(const char *url, const char* ssl_ca_pem = NULL)` |
| [checkFirmwareCRC16](#checkFirmwareCRC16) - `int checkFirmwareCRC16(uint16_t fwPackageCheckValue, int fwSize)` |

## Methods

### getInstance

```cpp
static OTAUpdateClient& getInstance()
```

> Create a instance of OTAUpdateClient.
>
> #### Parameters
> 
> None
> 
> #### Return value
> 
> Get the single client instance of OTAUpdateClient.

### updateFromUrl

```cpp
int updateFromUrl(const char *url, const char* ssl_ca_pem = NULL)
```

> Download new firmware from given url.
>
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | url | The url to download firmware from |
> | char * | ssl_ca_pem | Certificate of given url |
> 
> #### Return value
> 
> Return 0 on success, otherwise return -1.

### checkFirmwareCRC16

```cpp
int checkFirmwareCRC16(uint16_t fwPackageCheckValue, int fwSize)
```

> Check firmware's CRC16 
>
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint16_t | fwPackageCheckValue | The check sum of firmware |
> | int | fwSize | The size of firmware |
> 
> #### Return value
> 
> Return 0 on success, otherwise return -1.

## Sample code
Before running this sample code, please update the bootloader first.

```cpp
#include "AZ3166WiFi.h"
#include "OTAUpdateClient.h"

static bool isConnected = false;
char* Firmware_Url = "https://azureboard2.azureedge.net/prod/devkit-firmware-latest.ota.bin";

void InitWiFi()
{
  Screen.print("WiFi \r\n \r\nConnecting...\r\n             \r\n");

  if(WiFi.begin() == WL_CONNECTED)
  {
    isConnected = true;
  }
}

void setup() {
  isConnected = false;
  InitWiFi();
  if (isConnected == false)
  {
    return;
  }

  OTAUpdateClient& ota = OTAUpdateClient::getInstance();
  int result = ota.updateFromUrl(Firmware_Url);
  if (result == 0) {
    Screen.print("Update success\nReset to start\nnew firmware\n");
  }
  else {
    Screen.print("Update failed\n");
  }
}


void loop() {

}

```