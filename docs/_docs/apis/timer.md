---
title: "Timer"
permalink: /docs/apis/timer/
excerpt: "Library for Timer on AZ3166"
last_modified_at: 2018-01-09T05:16:34-04:00
---

The Timer class, provides by the underlining mbed OS, is used to start, stop and read a timer for measuring small times (between microseconds and seconds).
For more information about Timer, please visit [MbedOS](https://os.mbed.com/docs/v5.6/reference/timer.html){:target="_blank"}

## Assembly

Arduino.h

## Summary


| Constructors |
| :----------- |
| [Timer](#Timer) - `Timer () ` |

| Methods |
| :------ |
| [start](#start) - `void start()` |
| [stop](#stop) - `void stop()` |
| [reset](#reset) - `void reset()` |
| [read](#read) - `float read()` |
| [read_ms](#read_ms) - `int read_ms()` |
| [read_us](#read_us) - `int read_us()` |

## Constructors

### Timer

```cpp
Timer() 
```


## Methods

### start

```cpp
void start()
```

> Start the timer 
>

### stop

```cpp
void stop()
```

> Stop the timer 
>

### reset

```cpp
void reset()
```

> Reset the timer to 0. 
>


### read

```cpp
float read()
```

> Get the time passed in seconds.
> 
> 
> #### Return value
> 
>  Time passed in seconds.

### read_ms

```cpp
int read_ms()
```

> Get the time passed in milli-seconds.
> 
> 
> #### Return value
> 
>  Time passed in milli seconds.

### read_us

```cpp
int read_us()
```

> Get the time passed in micro-seconds.
> 
> 
> #### Return value
> 
>  Time passed in milli seconds.


## Sample code

```cpp

Timer t;

void setup() {
    pinMode(LED_USER, OUTPUT);
}

void loop() {
    t.start();
    digitalWrite(LED_USER, HIGH);       
    delay(100); 
    digitalWrite(LED_USER, LOW); 
    delay(100); 
    t.stop();
    Serial.printf("The time taken was %f seconds\r\n", t.read());
    Serial.printf("The time taken was %d milli seconds\r\n", t.read_ms());
    Serial.printf("The time taken was %d micro seconds\r\n", t.read_us());
    t.reset();
    delay(1000);
}

```


