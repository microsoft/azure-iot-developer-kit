---
title: "OTA Programing"
permalink: /docs/apis/ota/
excerpt: "The OTA programing module for AZ3166"
last_modified_at: 2018-8-3T10:16:34-04:00
---

The OTA (Over-the-Air) programing API provide the capability of update the firmware from Azure cloud for IoT DevKit.

## Assembly

OTAFirmwareUpdate.h

## Summary

| Methods |
| :------ |
| [OTADownloadFirmware](#otadownloadfirmware) - `int OTADownloadFirmware(const char *url, uint16_t *crc16Checksum, const char* ssl_ca_pem)` |
| [OTAApplyNewFirmware](#otaapplynewfirmware) - `int OTAApplyNewFirmware(int fwSize, uint16_t crc16Checksum)` |


## Methods

### OTADownloadFirmware

```cpp
int OTADownloadFirmware(const char *url, uint16_t *crc16Checksum, const char* ssl_ca_pem);
```

> Download new firmware from the given URL.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char* | [in] url | The URL to download firmware from. |
> | uint16_t* | [out] crc16Checksum | Return the CRC-16 (XMODEM) checksum of the downloaded firmware |
> | const char* | [in] ssl_ca_pem | Cert of the site of the given URL to ensure the connection is under a secure manner, default is NULL which means use cert of Microsoft Azure for TLS communication. |
>
> #### Return value
>
> Return the size of the new firmware on success, otherwise return -1 if encounter network issue, return -2 if encounter external flash accessing issue.

### OTAApplyNewFirmware]

```cpp
int OTAApplyNewFirmware(int fwSize, uint16_t crc16Checksum);
```

> Apply the new firmware, after reboot the device will update to the new version.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int | [in] fwSize | Size of the firmware. |
> | uint16_t | [in] crc16Checksum | The CRC-16 (xmodem) checksum value of the firmware |
>
> #### Return value
>
> Return 0 on success, otherwise return -1.

## Sample Code

``` cpp
  // This can be customized according to the board type.
  uint16_t checksum = 0;
  int fwSize = OTADownloadFirmware(packageURI, &checksum);
  if (fwSize == 0 || fwSize == -1)
  {
    // Report error status, DownloadFailed
    return;
  }
  else if (fwSize == -2)
  {
    // Report error status, DeviceError
    return;
  }
  else if (fwSize != fwInfo->fwSize)
  {
    // Report error status, FileSizeNotMatch
    return;
  }
  
  // Applying
  if (OTAApplyNewFirmware(fwSize, checksum) != 0)
  {
    // Report error status, ApplyFirmwareFailed
      return;
  }
  
```