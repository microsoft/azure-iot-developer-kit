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
>
> Source code: <https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/cores/arduino/IPAddress.h>

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

## Source code

<https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/libraries/WiFi/src/AZ3166WiFiClient.h>