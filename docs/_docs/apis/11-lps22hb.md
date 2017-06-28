---
title: "LPS22HB Sensor"
permalink: /docs/apis/lps22hb/
excerpt: "Library for LPS22HB pressure sensor on AZ3166"
last_modified_at: 2017-06-28T00:01:52-04:00
---

The [ST LPS22HB](http://www.st.com/en/mems-and-sensors/lps22hb.html){:target="_blank"} is an ultra compact absolute piezoresistive pressure sensor.

Implementation file for the LPS22HB driver class.

## Assembly

LPS22HBSensor.h

## Summary

| Types |
| :---- |
| [DevI2C](#devi2c) |
| [PRESSURE_InitTypeDef](#pressure_inittypedef) |

| Constructors |
| :----------- |
| [LPS22HBSensor](#LPS22HBSensor) - `LPS22HBSensor(DevI2C &i2c)` |
| [LPS22HBSensor](#LPS22HBSensor-1) - `LPS22HBSensor(DevI2C &i2c)` |

| Methods |
| :------ |
| [init](#init) - `int init(void *init)` |
| [deInit](#deInit) - `int deInit()` |
| [readId](#readId) - `int readId(uint8_t *p_id)` |
| [reset](#reset) - `int reset(void)` |
| [getPressure](#getPressure) - `int getPressure(float *pfData)` |
| [getTemperature](#getTemperature) - `int getTemperature(float *pfData)` |

## Types

### DevI2C

> Provides functions for multi-register I2C communication.

### PRESSURE_InitTypeDef

> PRESSURE init structure definition.

## Constructors

### LPS22HBSensor

```cpp
LPS22HBSensor(DevI2C &i2c)
```

> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | DevI2C & | i2c | The object of an helper class which handles the I2C peripheral. |

### LPS22HBSensor

```cpp
LPS22HBSensor(DevI2C &i2c, unsigned char address)
```

> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | DevI2C & | i2c | The object of an helper class which handles the I2C peripheral. |
> | unsigned char | address | The address of the component's instance. |

## Methods

### init

```cpp
int init(void *init)
```

> Initializing the component.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | void * | init | The pointer to device specific initalization structure. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 0 (`PRESSURE_OK`) in case of success, an error code otherwise. |

### deInit

```cpp
int deInit()
```

> Deinitialize lps22hb sensor device.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 0 (`PRESSURE_OK`) in case of success, an error code otherwise. |

### readId

```cpp
int readId(uint8_t *p_id)
```

> Read ID address of LPS22HB.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t *p | p_id | The pointer where the ID of the device is stored. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 0 (`PRESSURE_OK`) in case of success, an error code otherwise. |

### reset

```cpp
int reset(void)
```

> Reboot memory content of LPS22HB.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 0 (`PRESSURE_OK`) in case of success, an error code otherwise. |

### getPressure

```cpp
int getPressure(float *pfData)
```

> Read LPS22HB output register, and calculate the pressure in mbar.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float * | pfData | The pressure value in mbar. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 0 (`PRESSURE_OK`) in case of success, an error code otherwise. |

### getTemperature

```cpp
int getTemperature(float *pfData)
```

> Read LPS22HB output register, and calculate the temperature.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float * | pfData | The temperature value. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 0 (`PRESSURE_OK`) in case of success, an error code otherwise. |
