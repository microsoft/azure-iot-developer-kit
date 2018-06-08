---
title: "Memory Status"
permalink: /docs/apis/memory-status/
excerpt: "Library for tracing memory status on AZ3166"
last_modified_at: 2018-03-14T05:16:34-04:00
---

The runtime statistics APIs, provides by the underlining mbed OS, is used to print global heap locations, sizes, and utilization at runtime. It is very useful for tracking down total runtime memory usage. For more information and APIs about memory status, please visit [MbedOS](https://os.mbed.com/docs/v5.7/reference/memorystats.html){:target="_blank"}.

## Assembly

Arduino.h

## Summary

| Methods |
| :------ |
| [mbed_stats_heap_get](#mbed_stats_heap_get) - `void mbed_stats_heap_get(mbed_stats_heap_t *stats)` |

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

## Methods

### mbed_stats_heap_get

```cpp
void mbed_stats_heap_get(mbed_stats_heap_t *stats);
```

> Retrieve heap statistics, which provide exact information about the number of bytes dynamically allocated by a program. It does not take into account heap fragmentation or allocation overhead. This allows allocation size reports to remain consistent, regardless of order of allocation (fragmentation) or allocation algorithm (overhead).
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
## Sample Code

``` cpp
#include "Arduino.h"

mbed_stats_heap_t heap_info;

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

void setup() {
  // put your setup code here, to run once:
  Screen.print(1, "Running ...");
}

void loop() {
  // put your main code here, to run repeatedly:
  printHeapStatistics();
  
  delay(5000);
}
```