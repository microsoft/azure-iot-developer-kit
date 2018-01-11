---
title: "Semaphore"
permalink: /docs/apis/Semaphore/
excerpt: "Library for Semaphore on AZ3166"
last_modified_at: 2018-01-09T05:16:34-04:00
---

The Semaphore class, provides by the underlining mbed OS, is used to manage thread access to a pool of shared resources of a certain type.
For more information about Semaphore, please visit [MbedOS](https://os.mbed.com/docs/v5.6/reference/semaphore.html){:target="_blank"}.

## Assembly

Arduino.h

## Summary


| Constructors |
| :----------- |
| [Semaphore](#Semaphore) - `Semaphore(int32_t count=0)` |

| Methods |
| :------ |
| [wait](#wait) - `int32_t  wait (uint32_t millisec=osWaitForever)` |
| [release](#release) - `osStatus release(void)` |

## Constructors

### Semaphore

```cpp
rtos::Semaphore::Semaphore(int32_t count = 0)   
```
> #### Parameters

> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int32_t | count | number of available resources; maximum index value is (count-1). | 
> 


## Methods

### release

```cpp
osStatus rtos::Semaphore::release(void) 
```

> Release a Semaphore resource that was obtain with Semaphore::wait. 
>
> #### Return value
> 
> Status code that indicates the execution status of the function: `osOK` the token has been correctly released. `osErrorResource` the maximum token count has been reached. `osErrorParameter` internal error.  

### wait

```cpp
int32_t rtos::Semaphore::wait( uint32_t millisec = osWaitForever)
```

> Wait until a Semaphore resource becomes available. 
>
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint32 | millisec  | timeout value or 0 in case of no time-out. | 
>  
> 
> #### Return value
> 
>  Number of available tokens, before taking one; or -1 in case of incorrect parameters. 


## Sample code

```cpp

Semaphore two_slots(2);
Thread t1;
Thread t2;

void test_thread(void const *name) {
    while (true) {
        two_slots.wait();
        Serial.printf("%s\n\r", (const char*)name);
        delay(1000);
        two_slots.release();
    }
}


void setup() {
  // put your setup code here, to run once:
    t1.start(callback(test_thread, (void *)"Thread 1"));
    t2.start(callback(test_thread, (void *)"Thread 2"));
}

void loop() {
    two_slots.wait();
    Serial.printf("%s\n\r", "Main thread");
    delay(1000);
    two_slots.release();
}

```



