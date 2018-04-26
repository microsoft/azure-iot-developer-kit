---
title: "External Interrupts"
permalink: /docs/apis/external-interrupts/
excerpt: "Library for external interrupts on IoT DevKit"
last_modified_at: 2018-04-26T08:08:30-04:00
---

Interrupts are useful for making things happen automatically in microcontroller programs, and can help solve timing problems. Good tasks for using an interrupt may include reading a rotary encoder, or monitoring user input.

## Assembly

Arduino.h

## Summary


| Methods |
| :------ |
| [attachInterrupt](#attachinterrupt) - `int attachInterrupt(PinName pin, Callback<void()> ISR, int mode)` |
| [detachInterrupt](#detachinterrupt) - `int detachInterrupt(PinName pin)` |

## Methods

### attachInterrupt

```cpp
int attachInterrupt(PinName pin, Callback<void()> ISR, int mode);
```

> Attach interrupt callback to digital pin.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | PinName | pin | Valid PinNames are: PA_4, PA_5, PA_10, PB_0, PB_2, PB_3, PB_6, PB_7, PB_8, PB_9, PB_13, PB_14, PB_15. |
> | Callback<void()> | ISR | The callback function. |
> | int | mode | Triggered event type, support CHANGE, RISING, FALLING now. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Result code, 0 in case of success, error code otherwise.  |


### detachInterrupt

```cpp
int detachInterrupt(PinName pin);
```
> Detach interrupt callback from digital pin.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | PinName | pin | Valid PinNames are: PA_4, PA_5, PA_10, PB_0, PB_2, PB_3, PB_6, PB_7, PB_8, PB_9, PB_13, PB_14, PB_15. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Result code, 0 in case of success, error code otherwise.  |

## Sample code

```cpp
volatile byte led = LOW;
volatile byte interruptOn = HIGH;

void setup() {
  // Use USER_BUTTON_B to control USER_BUTTON_A
  attachInterrupt(USER_BUTTON_B, interruptSwitch, FALLING);
  // Use USER_BUTTON_A to control LED_USER
  if (interruptOn)
  {
    attachInterrupt(USER_BUTTON_A, blink, CHANGE);
  }
}

void loop() {
  digitalWrite(LED_USER, led);
}

void blink()
{
  led = !led;
}

void interruptSwitch()
{
  interruptOn = !interruptOn;
  if (interruptOn)
  {
    attachInterrupt(USER_BUTTON_A, blink, CHANGE);
  }
  else
  {
    detachInterrupt(USER_BUTTON_A);
  }
}
```