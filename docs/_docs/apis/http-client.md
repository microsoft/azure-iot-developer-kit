---
title: "HTTP Client"
permalink: /docs/apis/http-client/
excerpt: "Library for HTTP Client on AZ3166"
last_modified_at: 2018-05-24T05:16:34-04:00
---

`HTTPClient` class is a simple library that implements the logic for interacting with HTTP servers.

## Assembly
http_client.h

## Summary

| Types |
| :---- |
| [Http_Response](#Http_Response)|

| Constructors |
| :----------- |
| [HTTPClient](#HTTPClient) - `HTTPClient(http_method method, const char* url, Callback<void(const char *at, size_t length)> body_callback = 0)` |
| [HTTPClient](#HTTPClient) - `HTTPClient(const char* ssl_ca_pem, http_method method, const char* url, Callback<void(const char *at, size_t length)> body_callback = 0)` |

| Destructors |
| :----------- |
| [~HTTPClient](#~HTTPClient) - `virtual ~HTTPClient(void)` |

| Methods |
| :------ |
| [send](#send) - `const Http_Response* send(const void* body = NULL, int body_size = 0)` |
| [set_header](#set_header) - `void set_header(const char* key, const char* value)` |
| [get_error](#get_error) - `nsapi_error_t get_error()` |

## Types

### Http_Response

``` cpp
typedef struct
{
    int status_code;
    int body_length;
    const char* status_message;
    const char* body;
    const KEYVALUE* headers;
} Http_Response;
```

> Struct that provide the information of data receive response.

## Constructor

### HTTPClient

``` cpp
HTTPClient(http_method method, const char* url, Callback<void(const char *at, size_t length)> body_callback = 0)
```

> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | http_method | method | Http method to use |
> | const char* | url | The url the request is send to |
> | Callback | body_callback | The callback function on which to retrieve chunks of the response body |

### HTTPClient

``` cpp
HTTPClient(const char* ssl_ca_pem, http_method method, const char* url, Callback<void(const char *at, size_t length)> body_callback = 0)
```

> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char* | ssl_ca_pem | The message of the trusted CAs |
> | http_method | method | Http method to use |
> | const char* | url | The url the request is send to |
> | Callback | body_callback | The callback function on which to retrieve chunks of the response body |

## Destructors

### ~HTTPClient

``` cpp
virtual ~HTTPClient(void)
```

> Destructor of `HTTPClient` class

## Methods

### send

``` cpp
 const Http_Response* send(const void* body = NULL, int body_size = 0)
```

> Execute the HTTP request
>
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char * | body | Pointer to the request body |
> | int | body_size | Size of request body |
>
> #### Return value
> 
> Returns an HttpResponse pointer on success, or NULL on failure

### set_header

``` cpp
 void set_header(const char* key, const char* value)
```

> Send a header for the HTTP request
>
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char* | key | the header key |
> | const char* | value | the header value |
>
> #### Return value
> 
> `void`

### get_error

``` cpp
 nsapi_error_t get_error()
```

> Get the error code, when send() fails, this error is set
>
> #### Parameters
>
> None
>
> #### Return value
> 
> Returns the error code

## Sample code

```cpp
#include "AZ3166WiFi.h"
#include "http_client.h"

static bool hasWifi;

const char SSL_CA_PEM[] = "-----BEGIN CERTIFICATE-----\n"
                          "MIIEkjCCA3qgAwIBAgIQCgFBQgAAAVOFc2oLheynCDANBgkqhkiG9w0BAQsFADA/\n"
                          "MSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT\n"
                          "DkRTVCBSb290IENBIFgzMB4XDTE2MDMxNzE2NDA0NloXDTIxMDMxNzE2NDA0Nlow\n"
                          "SjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUxldCdzIEVuY3J5cHQxIzAhBgNVBAMT\n"
                          "GkxldCdzIEVuY3J5cHQgQXV0aG9yaXR5IFgzMIIBIjANBgkqhkiG9w0BAQEFAAOC\n"
                          "AQ8AMIIBCgKCAQEAnNMM8FrlLke3cl03g7NoYzDq1zUmGSXhvb418XCSL7e4S0EF\n"
                          "q6meNQhY7LEqxGiHC6PjdeTm86dicbp5gWAf15Gan/PQeGdxyGkOlZHP/uaZ6WA8\n"
                          "SMx+yk13EiSdRxta67nsHjcAHJyse6cF6s5K671B5TaYucv9bTyWaN8jKkKQDIZ0\n"
                          "Z8h/pZq4UmEUEz9l6YKHy9v6Dlb2honzhT+Xhq+w3Brvaw2VFn3EK6BlspkENnWA\n"
                          "a6xK8xuQSXgvopZPKiAlKQTGdMDQMc2PMTiVFrqoM7hD8bEfwzB/onkxEz0tNvjj\n"
                          "/PIzark5McWvxI0NHWQWM6r6hCm21AvA2H3DkwIDAQABo4IBfTCCAXkwEgYDVR0T\n"
                          "AQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwfwYIKwYBBQUHAQEEczBxMDIG\n"
                          "CCsGAQUFBzABhiZodHRwOi8vaXNyZy50cnVzdGlkLm9jc3AuaWRlbnRydXN0LmNv\n"
                          "bTA7BggrBgEFBQcwAoYvaHR0cDovL2FwcHMuaWRlbnRydXN0LmNvbS9yb290cy9k\n"
                          "c3Ryb290Y2F4My5wN2MwHwYDVR0jBBgwFoAUxKexpHsscfrb4UuQdf/EFWCFiRAw\n"
                          "VAYDVR0gBE0wSzAIBgZngQwBAgEwPwYLKwYBBAGC3xMBAQEwMDAuBggrBgEFBQcC\n"
                          "ARYiaHR0cDovL2Nwcy5yb290LXgxLmxldHNlbmNyeXB0Lm9yZzA8BgNVHR8ENTAz\n"
                          "MDGgL6AthitodHRwOi8vY3JsLmlkZW50cnVzdC5jb20vRFNUUk9PVENBWDNDUkwu\n"
                          "Y3JsMB0GA1UdDgQWBBSoSmpjBH3duubRObemRWXv86jsoTANBgkqhkiG9w0BAQsF\n"
                          "AAOCAQEA3TPXEfNjWDjdGBX7CVW+dla5cEilaUcne8IkCJLxWh9KEik3JHRRHGJo\n"
                          "uM2VcGfl96S8TihRzZvoroed6ti6WqEBmtzw3Wodatg+VyOeph4EYpr/1wXKtx8/\n"
                          "wApIvJSwtmVi4MFU5aMqrSDE6ea73Mj2tcMyo5jMd6jmeWUHK8so/joWUoHOUgwu\n"
                          "X4Po1QYz+3dszkDqMp4fklxBwXRsW10KXzPMTZ+sOPAveyxindmjkW8lGy+QsRlG\n"
                          "PfZ+G6Z6h7mjem0Y+iWlkYcV4PIWL1iwBi8saCbGS5jN2p8M+X+Q7UNKEkROb3N6\n"
                          "KOqkqm57TH2H3eDJAkSnh6/DNFu0Qg==\n"
                          "-----END CERTIFICATE-----\n";

void InitWiFi()
{
  if (WiFi.begin() == WL_CONNECTED)
  {
    IPAddress ip = WiFi.localIP();
    Screen.print(1, ip.get_address());
    hasWifi = true;
  }
  else
  {
    Screen.print(1, "No Wi-Fi           ");
  }
}

void http_test()
{
  Screen.clean();
  Screen.print(0, "HTTP Client");

  HTTPClient *httpClient = new HTTPClient(SSL_CA_PEM, HTTP_GET, "https://httpbin.org/status/418");
  const Http_Response* result = httpClient->send();

  if (result == NULL)
  {
    Screen.print(1, "Failed");

    Serial.print("Error Code: ");
    Serial.println(httpClient->get_error());
  }
  else
  {
    Screen.print(1, "Succeed");

    Serial.println("Body");
    Serial.println(result->body);
  }

  delete httpClient;
}

void setup() {
  hasWifi = false;

  InitWiFi();

  if(hasWifi)
  {
    http_test();
  }
}

void loop() {  
}
```