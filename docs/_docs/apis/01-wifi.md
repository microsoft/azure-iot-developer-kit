---
title: "AZ3166 WiFi"
permalink: /docs/apis/wifi/
excerpt: "The WiFi class for AZ3166"
last_modified_at: 2017-04-30T10:16:34-04:00
---

The `WiFiClass` class is for Arduino Wifi shield.

## Assembly

AZ3166WiFi.h

## Summary

| Types |
| :---- |
| [IPAddress](#ipaddress) |

| Constructors |
| :----------- |
| [WiFiClass](#wificlass) - `WiFiClass()` |

| Methods |
| :------ |
| [firmwareVersion](#firmwareversion) - `const char *firmwareVersion()` |
| [begin](#begin) - `int begin(void)` |
| [begin](#begin-1) - `int begin(char *ssid)` |
| [begin](#begin-2) - `int begin(char *ssid, const char *passphrase)` |
| [disconnect](#disconnect) - `int disconnect()` |
| [beginAP](#beginap) - `int beginAP(char *ssid, const char *passphrase)` |
| [disconnectAP](#disconnectap) - `int disconnectAP()` |
| [macAddress](#macaddress) - `uint8_t *macAddress(uint8_t *mac)` |
| [localIP](#localip) - `IPAddress localIP()` |
| [subnetMask](#subnetmask) - `IPAddress subnetMask()` |
| [gatewayIP](#gatewayip) - `IPAddress gatewayIP()` |
| [SSID](#ssid) - `const char *SSID()` |
| [SSID](#ssid-1) - `const char *SSID(uint8_t networkItem)` |
| [BSSID](#bssid) - `uint8_t *BSSID(uint8_t *bssid)` |
| [RSSI](#rssi) - `int32_t RSSI()` |
| [RSSI](#rssi-1) - `int32_t RSSI(uint8_t networkItem)` |
| [encryptionType](#encryptiontype) - `uint8_t encryptionType()` |
| [encryptionType](#encryptiontype-1) - `uint8_t encryptionType(uint8_t networkItem)` |
| [scanNetworks](#scannetworks) - `int8_t scanNetworks()` |
| [status](#status) - `uint8_t status()` |

## Types

### IPAddress

> Base class that provides IPAddress
>
> Source code: <https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/cores/arduino/IPAddress.h>

## Constructors

### WiFiClass

```cpp
WiFiClass()
```

> #### Parameters
>
> None.

## Methods

### firmwareVersion

```cpp
const char *firmwareVersion()
```

> Get WiFi firmware version.
> 
> #### Parameters
> 
> None.
> 
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | char * | Firmware version string. |

### begin

```cpp
int begin(void)
```

> Connect to Wifi.
>
> #### Parameters
> 
> None.
> 
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 3 (`WL_CONNECTED`) for success, 4 (`WL_CONNECT_FAILED`) for fail. |

### begin

```cpp
int begin(char *ssid)
```

> Connect to Wifi with specific SSID.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | ssid | The specific WiFi SSID. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 3 (`WL_CONNECTED`) for success, 4 (`WL_CONNECT_FAILED`) for fail. |

### begin

```cpp
int begin(char* ssid, const char *passphrase)
```

> Connect to Wifi with specific SSID and passphrase.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | ssid | The specific WiFi SSID. |
> | char * | passphrase | The specific WiFi passphrase. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 3 (`WL_CONNECTED`) for success, 4 (`WL_CONNECT_FAILED`) for fail. |

### disconnect

```cpp
int disconnect()
```

> Disconnect from WiFi.
>
> #### Parameters
>
> None.
> 
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | Always 1 (`WL_SUCCESS`). |

### beginAP

```cpp
int beginAP(char *ssid, const char *passphrase)
```

> Create an AP with specific SSID and passphrase.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | ssid | The specific AP SSID. |
> | char * | passphrase | The specific AP passphrase. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 3 (`WL_CONNECTED`) for success, 4 (`WL_CONNECT_FAILED`) for fail. |

### disconnectAP

```cpp
int disconnectAP()
```

> Disconnect from AP.
>
> #### Parameters
>
> None.
> 
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | Always 1 (`WL_SUCCESS`). |

### macAddress

```cpp
uint8_t *macAddress(uint8_t *mac)
```

> Get WiFi MAC Address
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t * | mac | The pointer to WiFi MAC address. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint8_t * | The pointer to WiFi MAC address. |

### localIP

```cpp
IPAddress localIP()
```

> Get WiFi interface local IP address.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | IPAddress | WiFi interface local IP address. |

### subnetMask

```cpp
IPAddress subnetMask()
```

> Get WiFi subnet mark.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | IPAddress | WiFi interface subnet mark. |

### gatewayIP

```cpp
IPAddress gatewayIP()
```

> Get network gateway IP address.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | IPAddress | WiFi gateway IP address. |

### SSID

```cpp
uint8_t *SSID()
```

> Get current network SSID.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint8_t * | Pointer to current connected WiFi SSID. |

### SSID

```cpp
const char *SSID(uint8_t networkItem)
```

> Get specific network SSID.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint8_t * | Pointer to current network SSID. |

### BSSID

```cpp
uint8_t *BSSID(uint8_t* bssid)
```

> Get current connected WiFi BSSID.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint8_t * | Pointer to current network BSSID. |

### RSSI

```cpp
int32_t RSSI()
```

> Get current connected WiFi RSSI.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int32_t | Current connected WiFi RSSI. |

### RSSI

```cpp
int32_t RSSI(uint8_t networkItem)
```

> Get specific network RSSI.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | networkItem | Specific network index in the AP list. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int32_t | Current connected WiFi RSSI. |

### encryptionType

```cpp
uint8_t encryptionType()
```

> Get the encryption type of the current network.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint8_t | Always 4 (`ENC_TYPE_CCMP`). |

### encryptionType

```cpp
uint8_t encryptionType(uint8_t networkItem)
```

> Get the encryption type of the specific network.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | networkItem | Specific network index in the AP list. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint8_t | Specific network encryption type. Possible values: 5 (`ENC_TYPE_WEP`), 2 (`ENC_TYPE_TKIP`), 4 (`ENC_TYPE_CCMP`), 8 (`ENC_TYPE_AUTO`) and 7 (`ENC_TYPE_NONE`). |

### scanNetworks

```cpp
int8_t scanNetworks()
```

> Scan networks.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint8_t | Total number of found networks. |

### status

```cpp
uint8_t status()
```

> Get current network status.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint8_t | Current network status. |

### Source code

<https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/libraries/WiFi/src/AZ3166WiFi.h>