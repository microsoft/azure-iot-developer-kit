---
title: "Queue"
permalink: /docs/apis/Queue/
excerpt: "Library for Queue on AZ3166"
last_modified_at: 2018-01-05T05:16:34-04:00
---

The Queue class, provides by the underlining mbed OS, is used for queue pointers to data from producer threads to consumer threads..
For more information about Queue, please visit [MbedOS](https://os.mbed.com/docs/v5.6/mbed-os-api-doxy/classrtos_1_1_queue.html){:target="_blank"}

## Assembly

Arduino.h

## Summary


| Constructors |
| :----------- |
| [Queue](#Queue) - `template<typename T, uint32_t queue_sz> class rtos::Queue< T, queue_sz >` |

| Methods |
| :------ |
| [put](#put) - `osEvent put(T *data, uint32_t millisec=0, uint8_t prio=0) ` |
| [get](#get) - `osEvent get(uint32_t millisec=osWaitForever)` |

## Constructors

### Queue

```cpp
template<typename T, uint32_t queue_sz> rtos::Queue< T, queue_sz >::Queue  (  ) 
```

> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | typename | T | Data type of the object in the queue. |
> | uint32_t | pool_sz | Size of the queue. |

## Methods

### put

```cpp
template<typename T, uint32_t queue_sz> osStatus rtos::Queue<T, queue_sz>::put( T* data, uint32_t millisec = 0, uint8_t prio = 0)  
```

> Put message in a Queue. 
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | data | T | message pointer. |
> | uint32_t | millisec | timeout value or 0 in case of no time-out. (default: 0) |
> | uint32_t | prio | priority value or 0 in case of default. (default: 0)  |
>
> #### Return value
> 
> address of the allocated memory block or NULL in case of no memory available. 

### free 

```cpp
template<typename T, uint32_t pool_sz> osStatus rtos::MemoryPool< T, pool_sz >::free(T* block) 
```

> Free a memory block. 
> 
> #### Parameters

> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | typename | block | address of the allocated memory block to be freed. |
> 
> #### Return value
> 
> `osOK` on successful deallocation, `osErrorParameter` if given memory block id is NULL or invalid, or `osErrorResource` if given memory block is in an invalid memory pool state.

## Sample code

```cpp

typedef struct {
    float    voltage;   /* AD result of measured voltage */
    float    current;   /* AD result of measured current */
    int counter;        /* A counter value               */
} message_t;

MemoryPool<message_t, 16> mpool;
Queue<message_t, 16> queue;
Thread thread;

void send_thread (void) {
    int i = 0;
    while (true) {
        i++; // fake data update
        message_t *message = mpool.alloc();
        message->voltage = (i * 0.1) * 33; 
        message->current = (i * 0.1) * 11;
        message->counter = i;
        queue.put(message);
        delay(1000);
    }
}

void setup() {
	Serial.begin(115200);
	thread.start(callback(send_thread));
}

void loop() {
    osEvent evt = queue.get();
    if (evt.status == osEventMessage) {
        message_t *message = (message_t*)evt.value.p;          
        Serial.printf("\nVoltage: %.2f V\n\r"   , message->voltage);
        Serial.printf("Current: %.2f A\n\r"     , message->current);
        Serial.printf("Number of cycles: %d\n\r", message->counter);            
        mpool.free(message);
    }
}

```


