---
title: "IrDA Sensor"
permalink: /docs/apis/irda/
excerpt: "Library for IrDA, IrDA on AZ3166"
last_modified_at: 2017-06-28T00:01:52-04:00
---

Implementation file for the IrDA driver class.

## Assembly

IrDASensor.h

## Summary

| Constructors |
| :----------- |
| [IRDASensor](#IRDASensor) - `IRDASensor()` |

| Methods |
| :------ |
| [init](#init) - `int init()` |
| [IRDATransmit](#IRDATransmit) - `unsigned char IRDATransmit( unsigned char *pData, int size, int timeout)` |

## Constructors

### IRDASensor

```cpp
IRDASensor()
```

> #### Parameters
> None.

## Methods

### init

```cpp
int init()
```

> Initializing the component.
> 
> #### Parameters
> 
> None.
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### IRDATransmit

```cpp
unsigned char IRDATransmit( unsigned char *pData, int size, int timeout)
```

> Transmit data with IrDA.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char * | pData | Pointer of data to send. |
> | int | size | Size of data to send. |
> | int | timeout | Duration of the timeout. |