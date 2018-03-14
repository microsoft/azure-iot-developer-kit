---
title: "Memory Status"
permalink: /docs/apis/memory-status/
excerpt: "Library for tracing memory status on AZ3166"
last_modified_at: 2018-03-14T05:16:34-04:00
---

The runtime statistics APIs, provides by the underlining mbed OS, is used to print thread stack, ISR stack, and global heap locations, sizes, and utilization at runtime. It is very useful for tracking down total runtime memory usage and stack overflow. For more information and APIs about memory status, please visit [MbedOS](https://os.mbed.com/docs/v5.7/reference/memorystats.html){:target="_blank"}.

## Assembly

Arduino.h

## Summary

| Methods |
| :------ |
| [mbed_stats_heap_get](#mbed_stats_heap_get) - `void mbed_stats_heap_get(mbed_stats_heap_t *stats)` |
| [mbed_stats_stack_get](#mbed_stats_stack_get) - `void mbed_stats_stack_get(mbed_stats_stack_t *stats)` |

## Struct

[mbed_stats_heap_t](#mbed_stats_heap_t)
``` cpp
typedef struct {
    uint32_t current_size;      /**< Bytes allocated currently. */
    uint32_t max_size;          /**< Max bytes allocated at a given time. */
    uint32_t total_size;        /**< Cumulative sum of bytes ever allocated. */
    uint32_t reserved_size;     /**< Current number of bytes allocated for the heap. */
    uint32_t alloc_cnt;         /**< Current number of allocations. */
    uint32_t alloc_fail_cnt;    /**< Number of failed allocations. */
} mbed_stats_heap_t;
```

[mbed_stats_stack_t](#mbed_stats_stack_t)
``` cpp
typedef struct {
    uint32_t thread_id;         /**< Identifier for thread that owns the stack. */
    uint32_t max_size;          /**< Sum of the maximum number of bytes used in each stack. */
    uint32_t reserved_size;     /**< Current number of bytes allocated for all stacks. */
    uint32_t stack_cnt;         /**< Number of stacks currently allocated. */
} mbed_stats_stack_t;
```

## Methods

### mbed_stats_heap_get

```cpp
void mbed_stats_heap_get(mbed_stats_heap_t *stats);
```

> Print heap statistics, which provide exact information about the number of bytes dynamically allocated by a program. It does not take into account heap fragmentation or allocation overhead. This allows allocation size reports to remain consistent, regardless of order of allocation (fragmentation) or allocation algorithm (overhead).
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | mbed_stats_heap_t | stats | object contains heap information |

```cpp
mbed_stats_heap_t heap_info;
mbed_stats_heap_get( &heap_info );
printf("Current heap: %lu\r\n", heap_info.current_size);
printf("Max heap size: %lu\r\n", heap_info.max_size);
```


### mbed_stats_stack_get

```cpp
void mbed_stats_stack_get(mbed_stats_stack_t *stats);
```

> Retrieve stack statistics, which provide information on the allocated stack size of a thread and the worst case stack usage. Any thread on the system can be queried for stack information.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | mbed_stats_stack_t | stats | object contains stack information |

```cpp
mbed_stats_stack_t stack_info;
mbed_stats_stack_get ( &stack_info );
printf("Maximum number of bytes used on the stack: %d\r\n", stack_info[0].max_size);
printf("Current number of bytes allocated for the stack: %d\r\n", stack_info[0].reserved_size);
printf("Number of stacks stats accumulated in the structure: %d\r\n", stack_info[0].stack_cnt);
```

### mbed_stats_stack_get_each

```cpp
size_t mbed_stats_stack_get_each(mbed_stats_stack_t *stats, size_t count);
```

> Fill the passed array of stat structures with the stack stats for each available stack.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | mbed_stats_stack_t * | stats | A pointer to an array of mbed_stats_stack_t structures to fill |
> | size_t | count |  The number of mbed_stats_stack_t structures in the provided array |

> #### Return value
> 
> The number of mbed_stats_stack_t structures that have been filled, this is equal to the number of stacks on the system.

```cpp
mbed_stats_stack_t stack_info [3];
int threadCount = 3;
threadCount = mbed_stats_stack_get_each(stack_info, threadCount);

for (int i = 0; i < cnt; i++) {
    printf("Thread: 0x%X, Stack size: %u, Max stack: %u\r\n",
    stack_info[i].thread_id,
    stack_info[i].reserved_size,
    stack_info[i].max_size);
}
```

## Sample Code

``` cpp
#include "Arduino.h"

#define MAX_THREAD_INFO 3

mbed_stats_heap_t heap_info;
mbed_stats_stack_t stack_info[ MAX_THREAD_INFO ];

void printHeapStatistics() {
  // print heap statistics
  printf("Starting heap stats example\r\n");

  void *allocation = malloc(1000);
  printf("Freeing 1000 bytes\r\n");

  mbed_stats_heap_get(&heap_info);
  printf("Current heap: %lu\r\n", heap_info.current_size);
  printf("Max heap size: %lu\r\n", heap_info.max_size);

  free(allocation);

  mbed_stats_heap_get(&heap_info);
  printf("Current heap after: %lu\r\n", heap_info.current_size);
  printf("Max heap size after: %lu\r\n", heap_info.max_size);
}

void printStackStatistics() {
  // print stack statistics
  printf("\r\nStarting stack stats example\r\n");

  mbed_stats_stack_get( &stack_info[0] );
  printf("Cumulative Stack Info:\r\n");
  printf("Maximum number of bytes used on the stack: %d\r\n", stack_info[0].max_size);
  printf("Current number of bytes allocated for the stack: %d\r\n", stack_info[0].reserved_size);
  printf("Number of stacks stats accumulated in the structure: %d\r\n", stack_info[0].stack_cnt);

  int cnt = 3;
  cnt = mbed_stats_stack_get_each(stack_info, cnt);
  printf("\r\nThread count: %d\r\n", cnt);
 
  for (int i = 0; i < cnt; i++) {
      printf("Thread: 0x%X, Stack size: %u, Max stack: %u\r\n",
        stack_info[i].thread_id,
        stack_info[i].reserved_size,
        stack_info[i].max_size);
  }
}

void setup() {
  // put your setup code here, to run once:
  Screen.print(1, "Running ...");
}

void loop() {
  // put your main code here, to run repeatedly:
  printHeapStatistics();
  printStackStatistics();
  
  delay(5000);
}
```
