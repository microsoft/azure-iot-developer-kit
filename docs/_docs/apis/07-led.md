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
| [setColor](#setcolor) - `void setColor(uint8_t red, uint8_t green, uint8_t blue)` |
| [turnOff](#turnoff) - `void turnOff()` |

## Types

### PinName

> Provides the mapping of mbed DIP and LPC Pin Names.
> 
> Source code: <https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/system/targets/TARGET_MXCHIP/TARGET_AZ3166/PinNames.h>

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
void setColor(uint8_t red, uint8_t green, uint8_t blue)
```

> Set LED color with an RGB color value, each parameter is an integer between 0 and 255.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | red | Defines red color intensity, the value is an integer between 0 and 255. |
> | uint8_t | green | Defines green color intensity, the value is an integer between 0 and 255. |
> | uint8_t | blue | Defines blue color intensity, the value is an integer between 0 and 255. |
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

## Source code

<https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/libraries/Sensors/src/RGB_LED.h>