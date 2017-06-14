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
| [macAddress](#macaddress) - `unsigned char *macAddress(unsigned char *mac)` |
| [localIP](#localip) - `IPAddress localIP()` |
| [subnetMask](#subnetmask) - `IPAddress subnetMask()` |
| [gatewayIP](#gatewayip) - `IPAddress gatewayIP()` |
| [SSID](#ssid) - `const char *SSID()` |
| [SSID](#ssid-1) - `const char *SSID(unsigned char networkItem)` |
| [BSSID](#bssid) - `unsigned char *BSSID(unsigned char *bssid)` |
| [RSSI](#rssi) - `int RSSI()` |
| [RSSI](#rssi-1) - `int RSSI(unsigned char networkItem)` |
| [encryptionType](#encryptiontype) - `int encryptionType()` |
| [encryptionType](#encryptiontype-1) - `int encryptionType(unsigned char networkItem)` |
| [scanNetworks](#scannetworks) - `int scanNetworks()` |
| [status](#status) - `unsigned char status()` |

## Types

### IPAddress

> Base class that provides IPAddress

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
unsigned char *macAddress(unsigned char *mac)
```

> Get WiFi MAC Address
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char * | mac | The pointer to WiFi MAC address. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | unsigned char * | The pointer to WiFi MAC address. |

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
const char *SSID()
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
> | const char * | Pointer to current network SSID. |

### SSID

```cpp
const char *SSID(unsigned char networkItem)
```

> Get specific network SSID.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char | networkItem | Specific network index in the AP list. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | const char * | Pointer to current network SSID. |

### BSSID

```cpp
unsigned char *BSSID(unsigned char *bssid)
```

> Get current connected WiFi BSSID.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char * | bssid | Pointer to current network BSSID. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | unsigned char * | Pointer to current network BSSID. |

### RSSI

```cpp
int RSSI()
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
> | int | Current connected WiFi RSSI. |

### RSSI

```cpp
int RSSI(unsigned char networkItem)
```

> Get specific network RSSI.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char | networkItem | Specific network index in the AP list. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | Current connected WiFi RSSI. |

### encryptionType

```cpp
int encryptionType()
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
> | int | Always 4 (`ENC_TYPE_CCMP`). |

### encryptionType

```cpp
int encryptionType(unsigned char networkItem)
```

> Get the encryption type of the specific network.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int | networkItem | Specific network index in the AP list. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | unsigned char | Specific network encryption type. Possible values: 5 (`ENC_TYPE_WEP`), 2 (`ENC_TYPE_TKIP`), 4 (`ENC_TYPE_CCMP`), 8 (`ENC_TYPE_AUTO`) and 7 (`ENC_TYPE_NONE`). |

### scanNetworks

```cpp
int scanNetworks()
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
> | int | Total number of found networks. |

### status

```cpp
unsigned char status()
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
> | unsigned char | Current network status. |

## Sample code

```cpp
#include <AZ3166WiFi.h>

char ssid[] = "{SSID of your access point}";    // your network SSID (name)
char password[] = "{password}";                 // your network password
int status = WL_IDLE_STATUS;    // the Wifi radio's status

void setup() {
    // Initialize serial and wait for port to open
    Serial.begin(115200);
    
    // Check for the presence of the shield:
    if (WiFi.status() == WL_NO_SHIELD) {
        Serial.println("WiFi shield not present");
        // Don't continue:
        while (true);
    }
    
    const char* fv = WiFi.firmwareVersion();
    Serial.printf("Wi-Fi firmware: %s\r\n", fv);
    
    // attempt to connect to Wifi network:
    while (status != WL_CONNECTED) {
        Serial.print("Attempting to connect to WPA SSID: ");
        Serial.println(ssid);
        // Connect to WPA/WPA2 network:
        status = WiFi.begin(ssid, password);
        // Wait 10 seconds for connection:
        delay(10000);
    }
    
    Serial.print("You're connected to the network");
    printCurrentNet();
    printWifiData();
}

void loop() {
    // check the network connection once every 10 seconds:
    delay(10000);
    printCurrentNet();
}

void printWifiData() {
    // print your WiFi shield's IP address:
    IPAddress ip = WiFi.localIP();
    Serial.print("IP Address: ");
    Serial.println(ip);
    Serial.println(ip);
    
    // print your MAC address:
    byte mac[6];
    WiFi.macAddress(mac);
    Serial.printf("MAC address: %02x:%02x:%02x:%02x:%02x:%02x\r\n", mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);
}

void printCurrentNet() {
    // print the SSID of the network you're attached to:
    Serial.print("SSID: ");
    Serial.println(WiFi.SSID());
    
    // print the MAC address of the router you're attached to:
    byte bssid[6];
    WiFi.BSSID(bssid);
    Serial.print("BSSID: ");
    Serial.print(bssid[5], HEX);
    Serial.print(":");
    Serial.print(bssid[4], HEX);
    Serial.print(":");
    Serial.print(bssid[3], HEX);
    Serial.print(":");
    Serial.print(bssid[2], HEX);
    Serial.print(":");
    Serial.print(bssid[1], HEX);
    Serial.print(":");
    Serial.println(bssid[0], HEX);
    
    // print the received signal strength:
    long rssi = WiFi.RSSI();
    Serial.print("signal strength (RSSI):");
    Serial.println(rssi);
    
    // print the encryption type:
    byte encryption = WiFi.encryptionType();
    Serial.print("Encryption Type:");
    Serial.println(encryption, HEX);
    Serial.println();
}
```