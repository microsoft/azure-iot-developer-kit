---
title: "OLED Display"
permalink: /docs/apis/display/
excerpt: "Library for OLED display on AZ3166"
last_modified_at: 2017-04-30T10:16:34-04:00
---

Library for OLED display.

## Assembly

OledDisplay.h

## Summary

| Constructors |
| :----------- |
| [OLEDDisplay](#oleddisplay) - `OLEDDisplay()` |

| Methods |
| :------ |
| [init](#init) - `void init()` |
| [clean](#clean) - `void clean()` |
| [print](#print) - `uint8_t print(const char *s, bool wrap)` |
| [print](#print-1) - `uint8_t print(uint8_t line, const char *s, bool wrap)` |

## Constructors

### OLEDDisplay

```cpp
OLEDDisplay()
```

> #### Parameters
> 
> None.

## Methods

### init

```cpp
void init()
```

> Set OLED display Initialization.
> 
> #### Parameters
> 
> None.
> 
> #### Return value
> 
> `void`

### clean

```cpp
void clean()
```

> Clean OLED display.
> 
> #### Parameters
> 
> None.
> 
> #### Return value
> 
> `void`

### print

```cpp
uint8_t print(const char *s, bool wrap)
```

> Print text in the first line on OLED display.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char * | s | Text to display. |
> | bool | wrap | Line wrap. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | uint8_t | End of text line number, start from 0. |

### print

```cpp
uint8_t print(uint8_t line, const char *s, bool wrap)
```

> Print text in the specific line on OLED display.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | line | Specific line number. |
> | const char * | s | Text to display. |
> | bool | wrap | Line wrap. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | uint8_t | End of text line number, start from 0. |

## Source code

<https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/cores/arduino/OledDisplay.h>