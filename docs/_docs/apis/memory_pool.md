---
title: "MemoryPool"
permalink: /docs/apis/memory-pool/
excerpt: "Library for MemoryPool on AZ3166"
last_modified_at: 2018-01-05T05:16:34-04:00
---

The MemoryPool class, provides by the underlining mbed OS, is used for managing the fixed-size momory pools.
For more information about MemoryPool, please visit [MbedOS](https://os.mbed.com/docs/v5.6/mbed-os-api-doxy/classrtos_1_1_memory_pool.html){:target="_blank"}

## Assembly

Arduino.h

## Summary


| Constructors |
| :----------- |
| [MEMORY_POOL](#MemoryPool) - `template<typename T, uint32_t pool_sz> class rtos::MemoryPool< T, pool_sz >` |

| Methods |
| :------ |
| [alloc](#alloc) - `T* alloc (void) ` |
| [calloc](#calloc) - `T* calloc (void) ` |
| [free](#free) - `osStatus free (T *block) ` |

## Constructors

### MEMORY_POOL

```cpp
template<typename T, uint32_t pool_sz> rtos::MemoryPool<T, pool_sz>::MemoryPool() 
```

> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | typename | T | Data type of the object in memory pool. |
> | uint32_t | pool_sz | Size of the memory pool. |

## Methods

### alloc

```cpp
template<typename T, uint32_t pool_sz> T* rtos::MemoryPool< T, pool_sz >::alloc(void) 
```

> Allocate a memory block of type T from a memory pool. 
> 
> 
> #### Return value
> 
> address of the allocated memory block or NULL in case of no memory available. 

### calloc

```cpp
template<typename T, uint32_t pool_sz> T* rtos::MemoryPool< T, pool_sz >::calloc(void) 
```

> Allocate a memory block of type T from a memory pool and set memory block to zero. 
> 
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


