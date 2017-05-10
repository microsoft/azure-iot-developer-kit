---
title: "LIS2MDL Sensor"
permalink: /docs/apis/lis2mdl/
excerpt: "Library for LIS2MDL, magnetometer sensor on AZ3166"
last_modified_at: 2017-04-30T10:16:34-04:00
---

The ST LIS2MDL is a sensor for magnetometer.

Implementation file for the LIS2MDL driver class.

## Assembly

lis2mdl_class.h

## Summary

| Types |
| :---- |
| [DevI2C](#devi2c) |
| [MAGNETO_StatusTypeDef](#magneto_statustypedef) |

| Constructors |
| :----------- |
| [LIS2MDL](#lis2mdl) - `LIS2MDL(DevI2C &i2c)` |

| Methods |
| :------ |
| [init](#init) - `int init()` |
| [read_id](#read_id) - `int read_id(uint8_t *m_id)` |
| [get_m_axes_raw](#get_m_axes_raw) - `int get_m_axes_raw(int16_t *pData)` |
| [get_m_axes](#get_m_axes) - `int get_m_axes(int32_t *pData)` |

## Types

### DevI2C

> Provides functions for multi-register I2C communication.

### MAGNETO_StatusTypeDef

> MAGNETO status enumerator definition

## Constructors

### LIS2MDL

```cpp
LIS2MDL(DevI2C &i2c)
```

> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | DevI2C & | i2c | The object of an helper class which handles the I2C peripheral. |

## Methods

### init

```cpp
int init()
```

> Set LIS2MDL Initialization.
>
> #### Parameters
>
> None.
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 0 (`MAGNETO_OK`) in case of success, an error code otherwise. |

### read_id

```cpp
int read_id(uint8_t *m_id)
```

> Read ID of LIS2MDL Magnetic sensor.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t * | m_id | The pointer where the ID of the device is stored. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 0 (`MAGNETO_OK`) in case of success, an error code otherwise. |

### get_m_axes_raw

```cpp
int get_m_axes_raw(int16_t *pData)
```

> Read raw data from LIS2MDL Magnetic sensor output register.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int16_t * | pData | The pointer where the magnetometer raw data are stored. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 0 (`MAGNETO_OK`) in case of success, an error code otherwise. |

### get_m_axes

```cpp
int get_m_axes(int32_t *pData)
```

> Read data from LIS2MDL Magnetic sensor and calculate Magnetic in mgauss.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int32_t * | pData | The pointer where the magnetometer data are stored. |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | int | 0 (`MAGNETO_OK`) in case of success, an error code otherwise. |

## Sample code

```cpp
#include "lis2mdl_class.h"
DevI2C *i2c;
LIS2MDL *lis2mdl;
int32_t axes[3];
int16_t raw[3];
uint8_t id;
void setup(){
    i2c = new DevI2C(D14, D15);
    lis2mdl = new LIS2MDL(*i2c);
    // init
    lis2mdl->init(NULL);
}
void loop(){
    // read id
    lis2mdl->readId(&id);
    Serial.printf("Id: %d\n", id);
    // get_m_axes
    lis2mdl->get_m_axes(axes);
    Serial.printf("Axes: x - %d, y - %d, z - %d\n", axes[0], axes[1], axes[2]);
    // get_m_axes_raw
    lis2mdl->get_m_axes_raw(raw);
    Serial.printf("Raw: x - %d, y - %d, z - %d\n", raw[0], raw[1], raw[2]);
    delay(1000);
}
```