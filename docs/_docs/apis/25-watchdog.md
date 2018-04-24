---
title: "Watchdog Timer"
permalink: /docs/apis/watchdog-timer/
excerpt: "Library for watchdog timer on IoT DevKit"
last_modified_at: 2018-04-23T08:08:30-04:00
---

The watchdog timer is a very useful feature for projects that are intended to run for extended periods of time or contain unstable loops of code. The watchdog is essentially a small timer that will force a full system restart if the timer is not updated within a preset time.  For more information and APIs about memory status, please visit [MbedOS](https://os.mbed.com/cookbook/WatchDog-Timer){:target="_blank"}.


## Assembly

Arduino.h

## Summary

| Constructors |
| :----------- |
| [Watchdog](#Watchdog) - `Watchdog()` |

| Methods |
| :------ |
| [configure](#configure) - `bool configure(float timeoutInMs)` |
| [resetTimer](#resetTimer) - `void resetTimer()` |
| [resetTriggered](#resetTriggered) - `bool resetTriggered();` |

## Constructor

### Watchdog

> Constructor of `Watchdog` class

``` cpp
Watchdog()
```

## Methods

### configure

> Configure Watchdog timer with reset interval.

```cpp
bool configure(float timeoutInMs)
```
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float | timeoutInMs | timeout interval in milliseconds, as a float |

> #### Return value
> 
> Returns true if the Watchdog is configured successfully, false for invalid input.

### resetTimer

> Reset Watchdog timer to prevent it from a system reset.

```cpp
void resetTimer()
```

> #### Parameters
> 
> None

> #### Return value
> 
> None

### resetTriggered

> Get the flag to indicate if the Watchdog trigger a system reset.

```cpp
bool resetTriggered()
```

> #### Parameters
> 
> None

> #### Return value
> 
> Returns true if the Watchdog reset is triggered, else return false.

## Sample code

```cpp
#include "Arduino.h"

Watchdog watchdog;

void setup() {
  // setup a 10 second timeout on watchdog timer hardware
  bool ret = watchdog.configure(10000);
  if (!ret)
  {
    Serial.println("Configure watchdog failed.");
  }
}

void loop() {
  // Main program loop - reset watchdog timer to prevent a system reset
  watchdog.resetTimer();
  
  // Do other work
  Serial.println("loop");
  delay(1000);
}

```