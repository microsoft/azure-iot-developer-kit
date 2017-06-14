---
title: "RGB LED"
permalink: /docs/apis/led/
excerpt: "Library for RGB LED on AZ3166"
last_modified_at: 2017-04-30T10:16:34-04:00
---

The `RGB_LED` class provides methods to set LED color and turn off LED.

## Assembly

RGB_LED.h

## Summary

| Types |
| :---- |
| [PinName](#pinname) |

| Constructors |
| :----------- |
| [RGB_LED](#rgb_led) - `RGB_LED(PinName red, PinName green, PinName blue)` |

| Methods |
| :------ |
| [setColor](#setcolor) - `void setColor(int red, int green, int blue)` |
| [turnOff](#turnoff) - `void turnOff()` |

## Types

### PinName

> Provides the mapping of mbed DIP and LPC Pin Names.

## Constructors

### RGB_LED

```cpp
RGB_LED(PinName red, PinName green, PinName blue)
```

> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | PinName | red | Red LED pin name. |
> | PinName | green | Green LED pin name. |
> | PinName | blue | Blue LED pin name. |

## Methods

### setColor

```cpp
void setColor(int red, int green, int blue)
```

> Set LED color with an RGB color value, each parameter is an integer between 0 and 255.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int | red | Defines red color intensity, the value is an integer between 0 and 255. |
> | int | green | Defines green color intensity, the value is an integer between 0 and 255. |
> | int | blue | Defines blue color intensity, the value is an integer between 0 and 255. |
> 
> #### Return value
> 
> `void`

### turnOff

```cpp
void turnOff()
```

> Turn off LED. Set red, green and blue intensity to 0.
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
#include "RGB_LED.h"
RGB_LED rgbLed;
uint8_t color[][3] = {
        {255, 0, 0},                // red
        {0, 255, 0},                // green
        {0, 0, 255},                // blue
        {0, 0, 0},
        {255, 255, 0},
        {0, 255, 255},
        {255, 0, 255},
        {255, 255, 255}
    };
    void setup(){
    }
    void loop(){
        for(int i = 0; i< 8; ++i)
        {
            Serial.printf("Red: %d, Green: %d, Blue: %d\n", color[i][0], color[i][1], color[i][2]);
            rgbLed.setColor(color[i][0], color[i][1], color[i][2]);
            delay(1000);
        }
        Serial.println("Turn off");
        rgbLed.turnOff();
        delay(1000);
    }
```

