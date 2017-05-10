---
title: "AZ3166 WiFi Client"
permalink: /docs/apis/wifi-client/
excerpt: "The WiFi client for AZ3166"
last_modified_at: 2017-04-30T10:16:34-04:00
---

The `WiFiClient` class is for Arduino Wifi shield.

## Assembly

AZ3166WiFiClient.h

## Summary

| Types |
| :---- |
| [IPAddress](#ipaddress) |

| Constructors |
| :----------- |
| [WiFiClient](#wificlient) - `WiFiClient()` |

| Methods |
| :------ |
| [peek](#peek) - `int peek()` |
| [connect](#connect) - `int connect(const char *host, uint16_t port)` |
| [connect](#connect-1) - `int connect(IPAddress ip, uint16_t port)` |
| [available](#available) - `int available()` |
| [write](#write) - `size_t write(uint8_t b)` |
| [write](#write-1) - `size_t write(const uint8_t *buf, size_t size)` |
| [read](#read) - `int read()` |
| [read](#read-1) - `int read(uint8_t *buf, size_t size)` |
| [flush](#flush) - `void flush()` |
| [stop](#stop) - `void stop()` |
| [connected](#connected) - `uint8_t connected()` |

## Types

### IPAddress

> Base class that provides IPAddress

## Constructors

### WiFiClient

```cpp
WiFiClient()
```

> #### Parameters
>
> None.


## Methods

### peek

```cpp
int peek()
```

> Returns the next byte (character) of incoming serial data without removing it from the internal serial buffer.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | Always 0. |

### connect

```cpp
int connect(const char *host, uint16_t port)
```

> Connect to the server with specific host name and port.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | host | The host name of the server. |
> | uint16_t | port | The port that the client will connect to. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 1 for success, 0 for fail. |

### connect

```cpp
int connect(IPAddress ip, uint16_t port)
```

> Connect to the server with specific IP and port.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | IPAddress | ip | The IP of the server. |
> | uint16_t | port | The port that the client will connect to. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 1 for success, 0 for fail. |

### available

```cpp
int available()
```

> Returns the number of bytes available for reading.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | The number of bytes available. |

### write

```cpp
size_t write(uint8_t b)
```

> Write 1 byte data to the connected server.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | b | Data to write. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | size_t | Size of data written. |

### write

```cpp
size_t write(const uint8_t *buf, size_t size)
```

> Write size of bytes data to the connected server.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const uint8_t * | buf | Pointer to data to write. |
> | size_t | size | Size of data to write. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | size_t | Size of data written. |

### read

```cpp
int read()
```

> Read the next byte of data from the connected server.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | The next byte, or -1 if none is available. |

### read

```cpp
int read(uint8_t *buf, size_t size)
```

> Read the next size of bytes of data from the connected server.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t * | buf | Pointer to the received data. |
> | size_t | size | Size of data received to read. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | The size of byte read, or -1 if none is available. |

### flush

```cpp
void flush()
```

> [Not implemented] Discard any bytes that have been written to the client but not yet read.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> `void`

### stop

```cpp
void stop()
```

> Close the current connection.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> `void`

### connected

```cpp
uint8_t connected()
```

> Get current connection state.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint8_t | 0 for not connected, 1 for connected. |

## Sample code

```cpp
#include <AZ3166WiFi.h>
char ssid[] = "{SSID of your access point}";    // your network SSID (name)
char password[] = "{password}";                 // your network password
int keyIndex = 0;                               // your network key Index number (needed only for WEP)
int status = WL_IDLE_STATUS;
// if you don't want to use DNS (and reduce your sketch size)
// use the numeric IP instead of the name for the server:
// IPAddress server(74,125,232,128);  // numeric IP for Google (no DNS)
char server[] = "www.httpbin.org";    // name address for Google (using DNS)
// Initialize the Ethernet client library
// with the IP address and port of the server
// that you want to connect to (port 80 is default for HTTP):
WiFiClient client;
void setup() {
    //Initialize serial and wait for port to open:
    Serial.begin(115200);
    // check for the presence of the shield:
    if (WiFi.status() == WL_NO_SHIELD) {
        Serial.println("WiFi shield not present");
        // don't continue:
        while (true);
    }
    const char* fv = WiFi.firmwareVersion();
    Serial.printf("Wi-Fi firmware: %s\r\n", fv);
    // attempt to connect to Wifi network:
    while (status != WL_CONNECTED) {
        Serial.print("Attempting to connect to SSID: ");
        Serial.println(ssid);
        // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
        status = WiFi.begin(ssid, password);
        // wait 10 seconds for connection:
        delay(10000);
    }
    Serial.println("Connected to wifi");
    printWifiStatus();
    Serial.println("\nStarting connection to server...");
    // if you get a connection, report back via serial:
    if (client.connect(server, 80)) {
        Serial.println("connected to server");
        // Make a HTTP request:
        client.println("GET /ip HTTP/1.1");
        client.println("Host: www.httpbin.org");
        client.println("Connection: close\r\n");
        Serial.println("HTTP request sent.");
    }
}
void loop() {
    uint8_t buff[32];
    // if there are incoming bytes available
    // from the server, read them and print them:
    while (true)
    {
        int ret = client.read(buff, sizeof(buff));
        if (ret <= 0)
        break;
        for(int i = 0; i < ret; i++)
        {
            Serial.write((char)buff[i]);
        }
    }
    Serial.println();
    Serial.println("disconnecting from server.");
    client.stop();
    // do nothing forevermore:
    while (true);
}
void printWifiStatus() {
    // print the SSID of the network you're attached to:
    Serial.print("SSID: ");
    Serial.println(WiFi.SSID());
    // print your WiFi shield's IP address:
    IPAddress ip = WiFi.localIP();
    Serial.print("IP Address: ");
    Serial.println(ip);
    // print the received signal strength:
    long rssi = WiFi.RSSI();
    Serial.print("signal strength (RSSI):");
    Serial.print(rssi);
    Serial.println(" dBm");
}
```