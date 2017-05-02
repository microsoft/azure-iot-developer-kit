---
title: "AZ3166 WiFi Server"
permalink: /docs/apis/wifi-server/
excerpt: "The WiFi server for AZ3166"
last_modified_at: 2017-04-30T10:16:34-04:00
---

The `WiFiServer` class is for Arduino Wifi shield.

## Assembly

AZ3166WiFiServer.h

## Summary

| Types |
| :---- |
| [WiFiClient](#wificlient) |

| Constructors |
| :----------- |
| [WiFiServer](#wifiserver) - `WiFiServer(uint16_t port)` |

| Methods |
| :------ |
| [begin](#begin) - void begin() |
| [available](#available) - WiFiClient available(byte *status) |
| [accept](#accept) - int accept(WiFiClient *client) |
| [write](#write) - size_t write(uint8_t b) |
| [write](#write-1) - size_t write(const uint8_t *buffer, size_t size) |
| [close](#close) - void close() |

## Types

### WiFiClient

> Arduino Wifi client class.
>
> Source code: <https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/libraries/WiFi/src/AZ3166WiFiClient.h>

## Constructors

### WiFiServer

```cpp
WiFiServer(uint16_t port)
```

> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint16_t | port | The port to listen on. |

## Methods

### begin

```cpp
void begin()
```

> Start the server.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> `void`

### available

```cpp
WiFiClient available(byte *status)
```

> Gets a client that is connected to the server and has data available for reading.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | byte * | status | Not used. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | WiFiClient | A Client object or -1 if no clients available. |

### accept

```cpp
int accept(WiFiClient *client)
```

> Gets a client that is connected to the server and has data available for reading.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | WiFiClient * | client | Pointer to the connected client. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | Result code, 0 in case of success, an error code otherwise. |

### write

```cpp
size_t write(uint8_t b)
```

> Write 1 byte data to all the clients connected to a server.
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
size_t write(const uint8_t *buffer, size_t size)
```

> Write size bytes of data to all the clients connected to a server.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const uint8_t * | buffer | Data to write. |
> | size_t | size | Size of data to write. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | size_t | Size of data written. |

### close

```cpp
void close()
```

> Close the server.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> `void`

## Source code

<https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/libraries/WiFi/src/AZ3166WiFiServer.h>
