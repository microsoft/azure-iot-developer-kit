---
title: "System Function"
permalink: /docs/apis/system-function/
excerpt: "Library for system function on IoT DevKit"
last_modified_at: 2018-05-22T08:08:30-04:00
---

The `SystemFunc` class provides methods to reboot and restart after specific interval for power saving.


## Assembly

Arduino.h

## Summary

| Methods |
| :------ |
| [SystemReboot](#SystemReboot) - `void SystemReboot(void)` |
| [SystemStandby](#SystemStandby) - `void SystemStandby(int timeout)` |

## Methods

### SystemReboot

```cpp
void SystemReboot(void);
```

> Reboot the system.
> 
> #### Parameters
> 
> None.
> 
> #### Return value
> 
> `void`

### SystemStandby

```cpp
void SystemStandby(int timeout);
```

> Enter sleep mode and restart after reset interval.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int | timeout | timeout interval in second |
> 
> #### Return value
> 
> `void`

## Sample code

```cpp
#include "Arduino.h"

int btnAState;
int btnBState;

void setup() {
  pinMode(USER_BUTTON_A, INPUT);
  pinMode(USER_BUTTON_B, INPUT);

  btnAState = digitalRead(USER_BUTTON_A);
  btnBState = digitalRead(USER_BUTTON_B);

  Screen.init();
  Screen.print(0, "System Func: ");
  Screen.print(1, "Press A to reboot", true);
  Screen.print(3, "Press B to sleep", true);
}

void loop() {
  while (1)
  {
    // press button A to reboot
    if (btnAState == HIGH && digitalRead(USER_BUTTON_A) == LOW)
    {
      Screen.clean();
      Screen.print("Reboot....", true);
      SystemReboot();
    }

    // press button B to sleep 5 seconds, and then restart
    if (btnBState == HIGH && digitalRead(USER_BUTTON_B) == LOW)
    {
      Screen.clean();
      Screen.print(1, "Sleep 5 seconds and then restart", true);
      SystemStandby(5);
    }
  }

  delay(100);
}

```