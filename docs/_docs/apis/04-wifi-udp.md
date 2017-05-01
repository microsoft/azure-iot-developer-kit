---
title: "AZ3166 WiFi UDP"
permalink: /docs/apis/wifi-udp/
excerpt: "The WiFi UDP for AZ3166"
last_modified_at: 2017-04-30T10:16:34-04:00
---

The `WiFiUDP` class is for Arduino Wifi shield.

## Assembly

AZ3166WiFiUdp.h

## Summary

| Types |
| :---- |
| [IPAddress](#ipaddress) |

| Constructors |
| :----------- |
| [WiFiUDP](#wifiudp) - `WiFiUDP()` |

| Methods |
| :------ |
| [begin](#begin) - `uint8_t begin(uint16_t port)` |
| [available](#available) - `int available()` |
| [stop](#stop) - `void stop()` |
| [beginPacket](#beginpacket) - `int beginPacket(const char *host, uint16_t port)` |
| [beginPacket](#beginpacket-1) - `int beginPacket(IPAddress ip, uint16_t port)` |
| [endPacket](#endpacket) - `int endPacket()` |
| [write](#write) - `size_t write(uint8_t byte)` |
| [write](#write-1) - `size_t write(const uint8_t *buffer, size_t size)` |
| [parsePacket](#parsepacket) - `int parsePacket()` |
| [read](#read) - `int read()` |
| [read](#read-1) - `int read(unsigned char* buffer, size_t len)` |
| [peek](#peek) - `int peek()` |
| [flush](#flush) - `void flush()` |
| [remoteIP](#remoteip) - `IPAddress remoteIP()` |
| [remotePort](#remoteport) - `uint16_t  remotePort()` |

## Types

### IPAddress

> Base class that provides IPAddress
>
> Source code: <https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/cores/arduino/IPAddress.h>

## Constructors

### WiFiUDP

```cpp
WiFiUDP()
```

> #### Parameters
>
> None.

## Methods

### begin

```cpp
uint8_t begin(uint16_t port)
```

> Start WiFi UDP socket with specific port.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint16_t | port | The port to listen on. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint8_t | 1 for success, 0 for fail. |

### available

```cpp
int available() 
```

> Return number of bytes available in the current packet.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | Always 1. |

### stop

```cpp
void stop()
```

> Release any resources being used by this WiFi UDP instance.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> `void`

### beginPacket

```cpp
int beginPacket(const char *host, uint16_t port)
```

> Starts a connection to write UDP data to the remote connection.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char * | host | The host name of the remote host. |
> | uint16_t | port | The port of the remote connection. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 1 for success, 0 for fail. |

### beginPacket

```cpp
int beginPacket(IPAddress ip, uint16_t port)
```

> Starts a connection to write UDP data to the remote connection.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | IPAddress | host | The IP of the remote host. |
> | uint16_t | port | The port of the remote connection. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 1 for success, 0 for fail. |

### endPacket

```cpp
int endPacket()
```

> Finishes off the packet and send it.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | Always 1. |

### write

```cpp
size_t write(uint8_t byte)
```

> Writes UDP 1 byte data to the remote connection.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | byte | Byte to write. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | size_t | Size of byte written. |

### write

```cpp
size_t write(const uint8_t *buffer, size_t size)
```

> Writes UDP size bytes of data to the remote connection.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const uint8_t * | buffer | Pointer to data to write. |
> | size_t | size | Size of data to write. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | size_t | Size of byte written. |

### parsePacket

```cpp
int parsePacket()
```

> Return number of bytes available in the current packet.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | Always 1. |

### read

```cpp
int read()
```

> Reads UDP next byte of data.
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
int read(unsigned char *buffer, size_t len)
```

> Reads UDP data from the specified buffer.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char * | buffer | Buffer to read. |
> | size_t | len | Length of buffer to read. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | The size of byte read, or -1 if none is available. |

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
> | int | Always 1. |

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

### remoteIP

```cpp
IPAddress remoteIP()
```

> Gets the IP address of the remote connection.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | IPAddress | The IP address of the remote connection. |

### remotePort

```cpp
uint16_t remotePort()
```

> Gets the port of the remote connection.
>
> #### Parameters
>
> None
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint16_t | The port of the remote connection. |

## Source code

<https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/libraries/WiFi/src/AZ3166WiFiUdp.h>