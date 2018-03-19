---
title: "WebSocket Client"
permalink: /docs/apis/websocket-client/
excerpt: "Library for WebSocket Client on AZ3166"
last_modified_at: 2018-03-15T05:16:34-04:00
---

`WebSocketClient` is a simple library that implements a WebSocket client running on an IoT DevKit. Currently, we only provide APIs of data transmission based on non-TLS connection. And we will support WebSocket communication based on SSL in future release.

## Assembly
WebSocketClient.h

## Summary

| Types |
| :---- |
| [WebSocketReceiveResult](#WebSocketReceiveResult)|

| Constructors |
| :----------- |
| [WebSocketClient](#WebSocketClient) - `WebSocketClient(char * url)` |

| Destructors |
| [~WebSocketClient](#~WebSocketClient)] - `~WebSocketClient()` |

| Methods |
| :------ |
| [connect](#connect) - `bool connect()` |
| [connected](#connected) - `bool connected()` |
| [send](#send) - `int send(char * str, long size)` |
| [receive](#receive) - `WebSocketReceiveResult* receive(char * msgBuffer, int size)` |
| [close](#close) - `bool close();` |

## Types

### WebSocketReceiveResult

> Struct that provide the information of data receive response.

``` cpp
typedef struct
{
    int length;
    bool isEndOfMessage;
    MessageType messageType;
    nsapi_error_t error;
} WebSocketReceiveResult;
```

## Enums

### WS_Message_Type

``` cpp
typedef enum
{
    WS_Message_Text = 0,        /* The message is clear text. */
    WS_Message_Binary           /* The message is in binary format. */
} WS_Message_Type;
```

## Constructor

### WebSocketClient

> Constructor of `WebSocketClient` class

``` cpp
WebSocketClient(char * url)
```

> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | stats | The Websocket url in the form "ws://ip_domain[:port]/path" (by default: port = 80) |

## Destructors

### ~WebSocketClient

> Destructor of `WebSocketClient` class

``` cpp
~WebSocketClient()
```

## Methods

### connect

> Connect to the WebSocket url

``` cpp
 bool connect()
```

> #### Parameters
> 
> None

> #### Return value
> 
> Returns true on success, or false on failure.

### connected

> Check if the WebSocket client is on connected state.

``` cpp
bool connected()
```

> #### Return value
> 
> Returns true if the WebSocket connection is alive, false for connection lost.

### send

> Send a data frame to WebSocket server

``` cpp
int send(const char * data, long size, WS_Message_Type messageType = WS_Message_Text, bool isFinal = true);
```
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char * | data | message payload of the data frame |
> | long | size | length of the message payload in bytes |
> | WS_Message_Type | messageType | data message type, can be *WS_Message_Text* or *WS_Message_Binary* |
> | bool | isFinal | Flag indicates whether this is a final data frame. By default it is true. For a message with a big payload you may need to send it with smaller pieces and mark the final piece with this flag. |

> #### Return value
> 
> the number of bytes sent, or negative number on error.

### receive

> Receive a WebSocker message and fill it into a given message buffer.

``` cpp
WebSocketReceiveResult* receive(char * msgBuffer, int size)
```

> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | msgBuffer | message buffer to fill in the received message |
> | int | size | size of the message buffer in bytes |

> #### Return value
> 
> Return a `WebSocketReceiveResult` pointer contains the information of the received message on success, or NULL on failure.

### close

> Close the WebSocket connection from client side.

``` cpp
bool close()
```
> #### Parameters
>
> None

> #### Return value
>
> Returns true on success, or false on failure.


## Sample code

```cpp
#include "AZ3166WiFi.h"
#include "WebSocketClient.h"

static bool hasWifi;
static bool isWsConnected;

static char webSocketServerUrl[] = "ws://echo.websocket.org/"; // or use ws://demos.kaazing.com/echo
static WebSocketClient *wsClient;
char wsBuffer[1024];
char wifiBuff[128];
int msgCount;

void initWiFi()
{
  Screen.print("WiFi \r\n \r\nConnecting...\r\n             \r\n");

  if (WiFi.begin() == WL_CONNECTED)
  {
    IPAddress ip = WiFi.localIP();
    snprintf(wifiBuff, 128, "WiFi Connected\r\n%s\r\n%s\r\n \r\n", WiFi.SSID(), ip.get_address());
    Screen.print(wifiBuff);

    hasWifi = true;
  }
  else
  {
    snprintf(wifiBuff, 128, "No WiFi\r\nEnter AP Mode\r\nto config\r\n                 \r\n");
    Screen.print(wifiBuff);
  }
}

bool connectWebSocket()
{
  Screen.clean();
  Screen.print(0, "Connect to WS...");

  if (wsClient == NULL)
  {
    wsClient = new WebSocketClient(webSocketServerUrl);
  }

  isWsConnected = wsClient->connect();
  if (isWsConnected)
  {
    Screen.print(1, "connect WS successfully.");
    Serial.println("WebSocket connect successfully.");
  }
  else
  {
    Screen.print(1, "Connect WS failed.");
    Serial.print("WebSocket connection failed, isWsConnected: ");
    Serial.println(isWsConnected);
  }

  return isWsConnected;
}

void setup()
{
  hasWifi = false;
  isWsConnected = false;
  msgCount = 0;

  initWiFi();
  if (hasWifi)
  {
    connectWebSocket();
  }

  pinMode(USER_BUTTON_A, INPUT);
}

void loop()
{
  if (hasWifi)
  {
    if (!isWsConnected)
    {
      Screen.clean();
      Screen.print(0, "DevKit WebSocket");
      Screen.print(1, "Press button A to connect WS.", true);

      while (digitalRead(USER_BUTTON_A) != LOW)
      {
        delay(10);
      }

      connectWebSocket();
    }

    if (isWsConnected)
    {
      int len = 0;
      char msgBuffer[256];

      for (int i = 0; i < 3; i++)
      {
        // Send message to WebSocket server
        sprintf(msgBuffer, "Hello WebSocket %d", msgCount);
        int res = wsClient->send(msgBuffer, strlen(msgBuffer));
        if (res > 0)
        {
          Screen.clean();
          Screen.print(0, "WS send:");
          Screen.print(1, msgBuffer, true);
          Serial.printf("Send message %d successfully.\r\n", msgCount);
          msgCount++;
        }

        // Receive message from WebSocket Server
        bool isEndOfMessage = false;
        WebSocketReceiveResult *recvResult = NULL;
        Screen.clean();
        Screen.print(0, "WS receive:");
        Screen.print(1, "receiving...");
        Serial.print("WS receive:");

        do
        {
          recvResult = wsClient->receive(wsBuffer, sizeof(wsBuffer));

          if (!recvResult && recvResult->length > 0)
          {
            len = recvResult->length;
            isEndOfMessage = recvResult->isEndOfMessage;

            Screen.print(1, wsBuffer, true);
            Serial.println(wsBuffer);

            memset(wsBuffer, 0, sizeof(wsBuffer));
            delay(100);
          }
        } while (!isEndOfMessage);
      }

      // Close WebSocket after sending/receiving messages
      if (wsClient->close())
      {
        isWsConnected = false;
        Screen.print(1, "Close WS successfully.", true);
        Serial.println("Close WS successfully.");
      }
      else
      {
        Screen.print(1, "Close WS failed.", true);
        Serial.println("Close WS failed.");
      }
    }
  }

  delay(1000);
}

```
