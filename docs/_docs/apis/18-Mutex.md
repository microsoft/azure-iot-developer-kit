---
title: "Mutex"
permalink: /docs/apis/Mutex/
excerpt: "Library for Mutex on AZ3166"
last_modified_at: 2018-01-09T05:16:34-04:00
---

The Mutex class, provides by the underlining mbed OS, is used to synchronize the execution of threads and  protect the access to a shared resource.
For more information about Mutex, please visit [MbedOS](https://os.mbed.com/docs/v5.6/reference/mutex.html){:target="_blank"}

## Assembly

Arduino.h

## Summary


| Constructors |
| :----------- |
| [Mutex](#Mutex) - `rtos::Mutex::Mutex() ` |

| Methods |
| :------ |
| [lock](#lock) - `osStatus lock (uint32_t millisec=osWaitForever)` |
| [trylock](#trylock) - `bool  trylock()` |
| [unlock](#unlock) - `osStatus  unlock ()` |

## Constructors

### Mutex

```cpp
rtos::Mutex::Mutex()  
```


## Methods

### lock

```cpp
osStatus rtos::Mutex::lock(uint32_t millisec = osWaitForever)
```

> Wait until a Mutex becomes available. 
>
> #### Parameters

> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint32_t | millisec | timeout value or 0 in case of no time-out. | 
> 
> #### Return value
> 
> Status code that indicates the execution status of the function: `osOK` the mutex has been obtained. `osErrorTimeout` the mutex could not be obtained in the given time. `osErrorParameter` internal error. `osErrorResource` the mutex could not be obtained when no timeout was specified. `osErrorISR` this function cannot be called from the interrupt service routine.  

### trylock

```cpp
bool rtos::Mutex::trylock(  ) 
```

> Try to lock the mutex, and return immediately.
> 
> 
> #### Return value
> 
>  true if the mutex was acquired, false otherwise.

### unlock 

```cpp
osStatus rtos::Mutex::unlock(void) 
```

> Unlock the mutex that has previously been locked by the same thread. 
>
> #### Return value
> 
> Status code that indicates the execution status of the function: `osOK` the mutex has been released. osErrorParameter internal error. `osErrorResource` the mutex was not locked or the current thread wasn't the owner. `osErrorISR` this function cannot be called from the interrupt service routine. 

## Sample code

```cpp

Mutex _mutex;
Thread t1;
Thread t2;

void notify(const char* name, int state) {
    _mutex.lock();
    Serial.printf("%s: %d\n\r", name, state);
    _mutex.unlock();
}

void test_thread(void const *args) {
    while (true) {
        notify((const char*)args, 0); 
        delay(1000);
        notify((const char*)args, 1); 
        delay(1000);
    }
}

void setup() {
    t1.start(callback(test_thread, (void *)"Thread 1"));
    t2.start(callback(test_thread, (void *)"Thread 2"));
}

void loop() {
    // Main thread
    notify((const char*)"Main Thread", 0); 
    delay(1000);
    notify((const char*)"Main Thread", 1); 
    delay(1000);
}

```


