---
title: "Thread"
permalink: /docs/apis/Thread/
excerpt: "Library for Thread on AZ3166"
last_modified_at: 2018-01-08T05:16:34-04:00
---

The Thread class, provides by the underlining mbed OS, is used for defining, creating and controlling parallel tasks.
For more information and APIs about Thread, please visit [MbedOS](https://os.mbed.com/docs/v5.6/mbed-os-api-doxy/classrtos_1_1_thread.html){:target="_blank"}.

## Assembly

Arduino.h

## Summary

| Enums |
| :---- |
| [osStatus](#osStatus) |
| [osPriority](#osPriority) |

| Constructors |
| :----------- |
| [Thread](#Thread) - `Thread(osPriority priority=osPriorityNormal, uint32_t stack_size=OS_STACK_SIZE, unsigned char *stack_mem=NULL, const char *name=NULL)` |

| Methods |
| :------ |
| [start](#start) - `osStatus  start(mbed::Callback< void()> task) ` |
| [join](#join) - `osStatus  join() ` |
| [terminate](#terminate) - `osStatus terminate()  ` |
| [set_priority](#set_priority) - `osStatus set_priority(osPriority priority) ` |
| [get_Priority](#get_priority) - `osPriority get_priority()  ` |
| [signalset](#signalset) - `int32_t signal_set(int32_t signals)` |
| [get_state](#get_state) - `State get_state()` |
| [stack_size](#stack_size) - `uint32_t stack_size () ` |
| [free_stack](#free_stack) - `uint32_t free_stack () ` |
| [used_stack](#used_stack) - `uint32_t used_stack ()` |
| [max_stack](#max_stack) - `uint32_t max_stack() ` |
| [get_name](#get_name) - `const char * get_name()` |


| Static Methods |
| :------ |
| [signal_clr](#signal_clr) - `static int32_t signal_clr (int32_t signals) ` |
| [signal_wait](#signal_wait) - `static osEvent  signal_wait(int32_t signals, uint32_t millisec=osWaitForever) ` |
| [wait](#wait) - `static osStatus wait(uint32_t millisec) ` |
| [yield](#yield) - `static osStatus yield() ` |
| [gettid](#gettid) - `static osThreadId gettid() ` |
| [attach_idle_hook](#attach_idle_hook) - `static void attach_idle_hook(void(*fptr)(void)) ` |
| [attach_terminate_hook](#attach_terminate_hook) - `static void attach_terminate_hook(void(*fptr)(osThreadId id))` |

## Enums

### osStatus

```cpp
typedef enum  {
  osOK                    =     0,       ///< function completed; no error or event occurred.
  osEventSignal           =  0x08,       ///< function completed; signal event occurred.
  osEventMessage          =  0x10,       ///< function completed; message event occurred.
  osEventMail             =  0x20,       ///< function completed; mail event occurred.
  osEventTimeout          =  0x40,       ///< function completed; timeout occurred.
  osErrorParameter        =  0x80,       ///< parameter error: a mandatory parameter was missing or specified an incorrect object.
  osErrorResource         =  0x81,       ///< resource not available: a specified resource was not available.
  osErrorTimeoutResource  =  0xC1,       ///< resource not available within given time: a specified resource was not available within the timeout period.
  osErrorISR              =  0x82,       ///< not allowed in ISR context: the function cannot be called from interrupt service routines.
  osErrorISRRecursive     =  0x83,       ///< function called multiple times from ISR with same object.
  osErrorPriority         =  0x84,       ///< system cannot determine priority or thread has illegal priority.
  osErrorNoMemory         =  0x85,       ///< system is out of memory: it was impossible to allocate or reserve memory for the operation.
  osErrorValue            =  0x86,       ///< value of a parameter is out of range.
  osErrorOS               =  0xFF,       ///< unspecified RTOS error: run-time error but no other error message fits.
  os_status_reserved      =  0x7FFFFFFF  ///< prevent from enum down-size compiler optimization.
} osStatus; 
```

### osPriority
```cpp
typedef enum  {
  osPriorityIdle          = -3,          ///< priority: idle (lowest)
  osPriorityLow           = -2,          ///< priority: low
  osPriorityBelowNormal   = -1,          ///< priority: below normal
  osPriorityNormal        =  0,          ///< priority: normal (default)
  osPriorityAboveNormal   = +1,          ///< priority: above normal
  osPriorityHigh          = +2,          ///< priority: high
  osPriorityRealtime      = +3,          ///< priority: realtime (highest)
  osPriorityError         =  0x84        ///< system cannot determine priority or thread has illegal priority
} osPriority; 
```

## Constructors

### Thread

```cpp
rtos::Thread::Thread  ( osPriority  priority = osPriorityNormal,  
  uint32_t  stack_size = OS_STACK_SIZE,  
  unsigned char *  stack_mem = NULL,  
  const char *  name = NULL  
 ) 
```

> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | osPriority | priority | initial priority of the thread function. |
> | uint32_t | stack_size | stack size (in bytes) requirements for the thread function. |
> | unsigned char * | stack_mem | pointer to the stack area to be used by this thread. |
> | const char * | name | name to be used for this thread. |

## Methods

### start

```cpp
osStatus rtos::Thread::start( mbed::Callback<void()> task )   
```

> Starts a thread executing the specified function. 
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | mbed::Callback | task | function to be executed by this thread.  |
>
> #### Return value
> 
> Status code that indicates the execution status of the function. 

```cpp
Thread thread(priority, stack_size, stack_mem);
osStatus status = thread.start(callback(task, argument)); 
if (status != osOK) 
{ 
	Serial.println("oh no!");
}
```
 

### join 

```cpp
osStatus rtos::Thread::join() 
```

> Wait for thread to terminate . 
> 

> #### Return value
> 
> Status code that indicates the execution status of the function. 


### terminate 

```cpp
osStatus rtos::Thread::terminate() 
```

> Terminate execution of a thread and remove it from Active Threads 
> 

> #### Return value
> 
> Status code that indicates the execution status of the function. 


### set_priority 

```cpp
osStatus rtos::Thread::set_priority(osPriority priority) 
```

> Set priority of an active thread 
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | osPriority  | priority | new priority value for the thread function. |
>
> #### Return value
> 
> Status code that indicates the execution status of the function. 


### get_priority 

```cpp
osPriority rtos::Thread::get_priority()
```

> Get priority of an active thread 
> 

> #### Return value
> 
> Current priority value of the thread function.

 
### signal_set 

```cpp
int32_t rtos::Thread::signal_set(int32_t signals) 
```

> Set the specified Thread Flags for the thread. 
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int32_t | signals | specifies the signal flags of the thread that should be set. |
>
> #### Return value
> 
> Signal flags after setting or osFlagsError in case of incorrect parameters.


### get_state  

```cpp
Thread::State rtos::Thread::get_state() 
```

> State of this Thread 
> 

> #### Return value
> 
> The State of this Thread.


### stack_size  

```cpp
uint32_t rtos::Thread::stack_size()
```

> Get the total stack memory size for this Thread. 
> 

> #### Return value
> 
> The total stack memory size in bytes.


### free_stack  

```cpp
uint32_t rtos::Thread::free_stack()
```

> Get the currently unused stack memory for this Thread  
> 

> #### Return value
> 
> The currently unused stack memory in bytes.


### used_stack  

```cpp
uint32_t rtos::Thread::used_stack()
```

> Get the currently used stack memory for this Thread.  
> 

> #### Return value
> 
> The currently used stack memory in bytes.


### max_stack  

```cpp
uint32_t rtos::Thread::max_stack()
```

> Get the maximum stack memory usage to date for this Thread.
> 

> #### Return value
> 
> The maximum stack memory usage to date in bytes.


### get_name  

```cpp
const char * rtos::Thread::get_name()
```

> Get thread name.
> 

> #### Return value
> 
> Thread name or NULL if the name was not set.


## Static Methods

### signal_clr 

```cpp
int32_t rtos::Thread::signal_clr(int32_t signals) 
```

> Clear the specified Thread Flags of the currently running thread. 
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int32_t | signals | specifies the signal flags of the thread that should be cleared. |
>
> #### Return value
> 
> Signal flags before clearing or osFlagsError in case of incorrect parameters.


### signal_wait 

```cpp
osEvent rtos::Thread::signal_wait( int32_t signals,  
  uint32_t  millisec = osWaitForever  
 )  
```

> Wait for one or more Thread Flags to become signaled for the current RUNNING thread. 
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int32_t | signals | wait until all specified signal flags are set or 0 for any single signal flag. |
> | uint32_t  | millisec | timeout value or 0 in case of no time-out. |
>
> #### Return value
> 
> Event flag information or error code.


### wait 

```cpp
osStatus rtos::Thread::wait(uint32_t millisec) 
```

> Wait for a specified time period in millisec: 

> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint32_t  | millisec | time delay value. |
>
> #### Return value
> 
> Status code that indicates the execution status of the function. 


### yield 

```cpp
osStatus rtos::Thread::yield()
```

>Pass control to next thread that is in state READY. 

> #### Return value
> 
> Status code that indicates the execution status of the function. 


### gettid 

```cpp
osThreadId rtos::Thread::gettid()
```

>Get the thread id of the current running thread. 

> #### Return value
> 
> Thread ID for reference by other functions or NULL in case of error.


### attach_idle_hook  

```cpp
void rtos::Thread::attach_idle_hook(void(*)(void) fptr) 
```

> Attach a function to be called by the RTOS idle task.

> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | void(*)(void) | fptr | pointer to the function to be called  |
>


### attach_terminate_hook  

```cpp
void rtos::Thread::attach_terminate_hook(void(*)(void) fptr) 
```

> Attach a function to be called when a task is killed 

> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | void(*)(void) | fptr | pointer to the function to be called  |
>



## Sample code

The code below uses two separate threads to blink two LEDs.
```cpp
Thread thread;
void led2_thread() {
    while (true) {
      digitalWrite(LED_USER, HIGH);       
      delay(500); 
      digitalWrite(LED_USER, LOW); 
      delay(500); 
    }
}

void setup() {

  pinMode(LED_USER, OUTPUT);
  pinMode(LED_WIFI, OUTPUT);
  thread.start(led2_thread);
}

void loop() {
  digitalWrite(LED_WIFI, HIGH);    
  delay(600);                 
  digitalWrite(LED_WIFI, LOW);  
  delay(600); 
}
```

The Callback API provides a convenient way to pass arguments to spawned threads.
```cpp

#include "RGB_LED.h"

#define RGB_LED_BRIGHTNESS 32
Thread thread;
volatile bool running = true;
static RGB_LED rgbLed;

// Blink function toggles the led in a long running loop
void blink(RGB_LED *rgbLed) {
    while (running) {
        rgbLed->setColor(RGB_LED_BRIGHTNESS, 0, 0);
        delay(500);
        rgbLed->turnOff();
        delay(500);
    }
}


void setup()
{
  thread.start(callback(blink, &rgbLed));
  delay(5000);
  running = false;
  thread.join();
}

void loop()
{

}


```


