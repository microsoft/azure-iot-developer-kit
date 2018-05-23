---
title: "Sleep Mode"
permalink: /docs/apis/SleepMode/
excerpt: "Library for sleep mode on IoT DevKit"
last_modified_at: 2018-05-22T08:08:30-04:00
---

Sleep mode is used to reboot and restart after specific interval for power saving.


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

void setup() {
}

void loop() {
  Screen.print("sleep 5 seconds");
  SystemStandby(5);
}

```