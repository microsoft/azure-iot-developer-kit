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
| [WiFiServer](#wifiserver) - `WiFiServer(unsigned short port)` |

| Methods |
| :------ |
| [begin](#begin) - void begin() |
| [available](#available) - WiFiClient available(byte *status) |
| [accept](#accept) - int accept(WiFiClient *client) |
| [write](#write) - size_t write(unsigned char b) |
| [write](#write-1) - size_t write(const unsigned char *buffer, size_t size) |
| [close](#close) - void close() |

## Types

### WiFiClient

> Arduino Wifi client class.

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
size_t write(unsigned char b)
```

> Write 1 byte data to all the clients connected to a server.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char | b | Data to write. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | size_t | Size of data written. |

### write

```cpp
size_t write(const unsigned char *buffer, size_t size)
```

> Write size bytes of data to all the clients connected to a server.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const unsigned char * | buffer | Data to write. |
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

## Sample code

```cpp
#include <AZ3166WiFi.h>
char ssid[] = "{SSID of your access point}";    // your network SSID (name)
char password[] = "{password}";                 // your network password
int keyIndex = 0;                               // your network key Index number (needed only for WEP)
int status = WL_IDLE_STATUS;
WiFiServer server(80);
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
    server.begin();
    // you're connected now, so print out the status:
    printWifiStatus();
}
void loop() {
    Serial.println("list for incoming clients");
    // listen for incoming clients
    WiFiClient client = server.available();
    Serial.println("availabled");
    if (client)
    {
        Serial.println("new client");
        // an http request ends with a blank line
        boolean currentLineIsBlank = true;
        while (client.connected())
        {
            if (client.available())
            {
                char c = client.read();
                Serial.write(c);
                // if you've gotten to the end of the line (received a newline
                // character) and the line is blank, the http request has ended,
                // so you can send a reply
                if (c == '\n' && currentLineIsBlank) {
                    client.println("HTTP/1.1 200 OK");
                    client.println("nontent-Type: text/html");
                    client.println("Connection: close");
                    client.println("Refresh: 5");
                    client.println("");
                    client.println("<!DOCTYPE HTML>");
                    client.println("<html>Hello</html>");
                    break;
                }
                if (c == '\n') {
                    // you're starting a new line
                    currentLineIsBlank = true;
                    } else if (c != '\r') {
                    // you've gotten a character on the current line
                    currentLineIsBlank = false;
                }
            }
        }
        // give the web browser time to receive the data
        delay(1);
        // close the connection:
        client.stop();
        Serial.println("client disonnected");
    }
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