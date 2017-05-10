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

## Sample code

```cpp

#include <AZ3166WiFi.h>
#include <AZ3166WiFiUdp.h>
int status = WL_IDLE_STATUS;
char ssid[] = "{SSID of your access point}";    // your network SSID (name)
char password[] = "{password}";                 // your network password
int keyIndex = 0;                               // your network key Index number (needed only for WEP)
unsigned int localPort = 2390;                  // local port to listen for UDP packets
char* timeServer = "0.pool.ntp.org";            // 0.pool.ntp.org NTP server
const int NTP_PACKET_SIZE = 48;                 // NTP time stamp is in the first 48 bytes of the message
byte packetBuffer[ NTP_PACKET_SIZE];            //buffer to hold incoming and outgoing packets
// A UDP instance to let us send and receive packets over UDP
WiFiUDP Udp;
void setup() {
    // Open serial communications and wait for port to open:
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
    Udp.begin(localPort);
}
void loop() {
    sendNTPpacket(timeServer); // send an NTP packet to a time server
    // wait to see if a reply is available
    delay(1000);
    if (Udp.read(packetBuffer, NTP_PACKET_SIZE)> 0) // read the packet into the buffer
    {
        // We've received a packet, read the data from it
        Serial.println("packet received");
        //the timestamp starts at byte 40 of the received packet and is four bytes,
        // or two words, long. First, esxtract the two words:
        unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
        unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
        // combine the four bytes (two words) into a long integer
        // this is NTP time (seconds since Jan 1 1900):
        unsigned long secsSince1900 = highWord << 16 | lowWord;
        Serial.print("Seconds since Jan 1 1900 = ");
        Serial.println(secsSince1900);
        // now convert NTP time into everyday time:
        Serial.print("Unix time = ");
        // Unix time starts on Jan 1 1970. In seconds, that's 2208988800:
        const unsigned long seventyYears = 2208988800UL;
        // subtract seventy years:
        unsigned long epoch = secsSince1900 - seventyYears;
        // print Unix time:
        Serial.println(epoch);
        // print the hour, minute and second:
        Serial.print("The UTC time is ");       // UTC is the time at Greenwich Meridian (GMT)
        Serial.print((epoch  % 86400L) / 3600); // print the hour (86400 equals secs per day)
        Serial.print(':');
        if (((epoch % 3600) / 60) < 10) {
            // In the first 10 minutes of each hour, we'll want a leading '0'
            Serial.print('0');
        }
        Serial.print((epoch  % 3600) / 60); // print the minute (3600 equals secs per minute)
        Serial.print(':');
        if ((epoch % 60) < 10) {
            // In the first 10 seconds of each minute, we'll want a leading '0'
            Serial.print('0');
        }
        Serial.println(epoch % 60); // print the second
    }
    else
    {
        Serial.println("Unable to receive package, retry later.");
    }
    // wait ten seconds before asking for the time again
    delay(10000);
}
// send an NTP request to the time server at the given address
unsigned long sendNTPpacket(char* address) {
    //Serial.println("1");
    // set all bytes in the buffer to 0
    memset(packetBuffer, 0, NTP_PACKET_SIZE);
    // Initialize values needed to form NTP request
    // (see URL above for details on the packets)
    //Serial.println("2");
    packetBuffer[0] = 0b11100011;   // LI, Version, Mode
    packetBuffer[1] = 0;     // Stratum, or type of clock
    packetBuffer[2] = 6;     // Polling Interval
    packetBuffer[3] = 0xEC;  // Peer Clock Precision
    // 8 bytes of zero for Root Delay & Root Dispersion
    packetBuffer[12]  = 49;
    packetBuffer[13]  = 0x4E;
    packetBuffer[14]  = 49;
    packetBuffer[15]  = 52;
    //Serial.println("3");
    // all NTP fields have been given values, now
    // you can send a packet requesting a timestamp:
    Udp.beginPacket(address, 123); //NTP requests are to port 123
    //Serial.println("4");
    Udp.write(packetBuffer, NTP_PACKET_SIZE);
    //Serial.println("5");
    Udp.endPacket();
    //Serial.println("6");
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