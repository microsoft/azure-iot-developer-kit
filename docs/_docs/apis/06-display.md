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

unsigned char BMP[] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,192,192,224,240,56,12,192,240,224,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,224,224,224,224,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,192,224,248,252,254,255,255,63,15,3,64,248,254,255,255,255,255,255,252,248,224,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,240,252,127,31,3,3,15,127,254,240,192,0,0,0,0,8,28,28,28,28,156,220,252,124,60,28,0,0,0,252,252,248,0,0,0,0,0,0,252,252,248,0,0,0,0,252,252,252,112,56,28,28,28,0,128,224,240,248,28,28,12,12,28,248,248,240,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,224,248,252,255,255,255,255,63,15,3,0,0,0,0,0,0,3,7,15,31,63,127,255,255,255,255,255,252,240,224,128,0,0,0,0,0,0,64,112,124,127,31,7,7,7,7,7,7,7,7,31,127,126,120,64,0,96,112,120,126,127,103,99,97,96,96,96,0,0,0,63,127,127,240,224,224,96,96,56,127,127,127,0,0,0,0,127,127,127,0,0,0,0,0,0,15,63,127,123,243,227,227,227,227,99,99,35,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,8,8,8,8,8,12,12,12,12,12,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

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
    // draw a bitmap to the screen
    Screen.draw(0, 0, 128, 8, BMP);
    delay(1000);
    // clean screen ready for next loop
    Screen.clean();
}
```


