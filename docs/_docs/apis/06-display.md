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
| [print](#print) - `int print(const char s, bool wrap)` |
| [print](#print-1) - `int print(unsigned int line, const char s, bool wrap)` |
| [draw](#draw) - `void draw(unsigned char x0, unsigned char y0, unsigned char x1, unsigned char y1, unsigned char BMP)` |

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
int print(const char s, bool wrap)
```

> Print text in the first line on OLED display.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char  | s | Text to display. |
> | bool | wrap | Line wrap. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | End of text line number, start from 0. |

### print

```cpp
int print(unsigned int line, const char s, bool wrap)
```

> Print text in the specific line on OLED display.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned int | line | Specific line number. |
> | const char   | s | Text to display. |
> | bool | wrap | Line wrap. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | End of text line number, start from 0. |

### draw

```cpp
void draw(unsigned char x0, unsigned char y0, unsigned char x1, unsigned char y1, unsigned char BMP)
```

> Show BMP image in OLED specified place.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char | x0 | Position the X axis of the top left corner of the area image to display, valid value range is [0, 127]. |
> | unsigned char | y0 | Position the Y axis of the top left corner of the area image to display, valid value range is [0, 7]. |
> | unsigned char | x1 | Position the X axis of the bottom right corner of the area image to display, valid value range is [1, 128]. |
> | unsigned char | y1 | Position the Y axis of the bottom right corner of the area image to display, valid value range is [1, 8]. |
> | unsigned char  | BMP | BMP image pixel byte array. Every array element is an 8-bit binary data that draws 8-connected pixels in the same column. |
>
> #### Return value
> 
> `void`

## Sample code

```cpp
#include <OledDisplay.h>
void setup(){
    Screen.init();
}
void loop(){
    // print a string to the screen with wrapped = false
    Screen.print("This is OLEDDisplay Testing", false);
    delay(1000);
    // print a string to the screen with wrapped = true
    Screen.print("long string; \nlong string;\nlong string;\nlong string;", true);
    delay(1000);
    for(int i =0; i<=3; i++)
    {
        char buf[100];
        sprintf(buf, "This is row %d", i);
        Screen.print(i, buf);
    }
    delay(1000);
    // Clean up the screen
    Screen.clean();
    delay(1000);
}
```