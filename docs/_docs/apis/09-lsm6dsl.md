---
title: "LSM6DSL Sensor"
permalink: /docs/apis/lsm6dsl/
excerpt: "Library for LSM6DSL, 3D digital accelerometer and gyroscope sensor on AZ3166"
last_modified_at: 2017-04-30T10:16:34-04:00
---

The [ST LSM6DSL](http://www.st.com/en/mems-and-sensors/lsm6dsl.html){:target="_blank"} is a 3D digital accelerometer and gyroscope enabling always-on low-power features for an optimal motion experience.

Abstract Class of an LSM6DSL Inertial Measurement Unit (IMU) 6 axes sensor.

## Assembly

LSM6DSLSensor.h

## Summary

| Types |
| :---- |
| [DevI2C](#devi2c) |
| [PinName](#pinname) |
| [LSM6DSL_Interrupt_Pin_t](#lsm6dsl_interrupt_pin_t) |
| [LSM6DSL_Event_Status_t](#lsm6dsl_event_status_t) |

| Constructors |
| :----------- |
| [LSM6DSLSensor](#lsm6dslsensor) - `LSM6DSLSensor(DevI2C &i2c, PinName int1_pin, PinName int2_pin)` |
| [LSM6DSLSensor](#lsm6dslsensor-1) - `LSM6DSLSensor(DevI2C &i2c, PinName int1_pin, PinName int2_pin, uint8_t address)` |

| Methods |
| :------ |
| [init](#init) - `int init(void *init)` |
| [enable_x](#enable_x) - `int enable_x(void)` |
| [enable_g](#enable_g) - `int enable_g(void)` |
| [disable_x](#disable_x) - `int disable_x(void)` |
| [disable_g](#disable_g) - `int disable_g(void)` |
| [read_id](#read_id) - `int read_id(unsigned char *id)` |
| [get_x_axes](#get_x_axes) - `int get_x_axes(int *pData)` |
| [get_g_axes](#get_g_axes) - `int get_g_axes(int *pData)` |
| [get_x_sensitivity](#get_x_sensitivity) - `int get_x_sensitivity(float *pfData)` |
| [get_g_sensitivity](#get_g_sensitivity) - `int get_g_sensitivity(float *pfData)` |
| [get_x_axes_raw](#get_x_axes_raw) - `int get_x_axes_raw(int16_t *pData)` |
| [get_g_axes_raw](#get_g_axes_raw) - `int get_g_axes_raw(int16_t *pData)` |
| [get_x_odr](#get_x_odr) - `int get_x_odr(float* odr)` |
| [get_g_odr](#get_g_odr) - `int get_g_odr(float* odr)` |
| [set_x_odr](#set_x_odr) - `int set_x_odr(float odr)` |
| [set_x_odr_when_enabled](#set_x_odr_when_enabled) - `int set_x_odr_when_enabled(float odr)` |
| [set_x_odr_when_disabled](#set_x_odr_when_disabled) - `int set_x_odr_when_disabled(float odr)` |
| [set_g_odr](#set_g_odr) - `int set_g_odr(float odr)` |
| [set_g_odr_when_enabled](#set_g_odr_when_enabled) - `int set_g_odr_when_enabled(float odr)` |
| [set_g_odr_when_disabled](#set_g_odr_when_disabled) - `int set_g_odr_when_disabled(float odr)` |
| [get_x_fs](#get_x_fs) - `int get_x_fs(float* fullScale)` |
| [get_g_fs](#get_g_fs) - `int get_g_fs(float* fullScale)` |
| [set_x_fs](#set_x_fs) - `int set_x_fs(float fullScale)` |
| [set_g_fs](#set_g_fs) - `int set_g_fs(float fullScale)` |
| [enable_free_fall_detection](#enable_free_fall_detection) - `int enable_free_fall_detection(LSM6DSL_Interrupt_Pin_t pin)` |
| [disable_free_fall_detection](#disable_free_fall_detection) - `int disable_free_fall_detection(void)` |
| [set_free_fall_threshold](#set_free_fall_threshold) - `int set_free_fall_threshold(uint8_t thr)` |
| [enable_pedometer](#enable_pedometer) - `int enable_pedometer(void)` |
| [disable_pedometer](#disable_pedometer) - `int disable_pedometer(void)` |
| [get_step_counter](#get_step_counter) - `int get_step_counter(int *step_count)` |
| [reset_step_counter](#reset_step_counter) - `int reset_step_counter(void)` |
| [set_pedometer_threshold](#set_pedometer_threshold) - `int set_pedometer_threshold(unsigned char thr)` |
| [enable_tilt_detection](#enable_tilt_detection) - `int enable_tilt_detection(LSM6DSL_Interrupt_Pin_t pin)` |
| [disable_tilt_detection](#disable_tilt_detection) - `int disable_tilt_detection(void)` |
| [enable_wake_up_detection](#enable_wake_up_detection) - `int enable_wake_up_detection(LSM6DSL_Interrupt_Pin_t pin)` |
| [disable_wake_up_detection](#disable_wake_up_detection) - `int disable_wake_up_detection(void)` |
| [set_wake_up_threshold](#set_wake_up_threshold) - `int set_wake_up_threshold(unsigned char thr)` |
| [enable_single_tap_detection](#enable_single_tap_detection) - `int enable_single_tap_detection(LSM6DSL_Interrupt_Pin_t pin)` |
| [disable_single_tap_detection](#disable_single_tap_detection) - `int disable_single_tap_detection(void)` |
| [enable_double_tap_detection](#enable_double_tap_detection) - `int enable_double_tap_detection(LSM6DSL_Interrupt_Pin_t pin)` |
| [disable_double_tap_detection](#disable_double_tap_detection) - `int disable_double_tap_detection(void)` |
| [set_tap_threshold](#set_tap_threshold) - `int set_tap_threshold(unsigned char thr)` |
| [set_tap_shock_time](#set_tap_shock_time) - `int set_tap_shock_time(uint8_t time)` |
| [set_tap_quiet_time](#set_tap_quiet_time) - `int set_tap_quiet_time(uint8_t time)` |
| [set_tap_duration_time](#set_tap_duration_time) - `int set_tap_duration_time(uint8_t time)` |
| [enable_6d_orientation](#enable_6d_orientation) - `int enable_6d_orientation(LSM6DSL_Interrupt_Pin_t pin)` |
| [disable_6d_orientation](#disable_6d_orientation) - `int disable_6d_orientation(void)` |
| [get_6d_orientation_xl](#get_6d_orientation_xl) - `int get_6d_orientation_xl(uint8_t *xl)` |
| [get_6d_orientation_xh](#get_6d_orientation_xh) - `int get_6d_orientation_xh(uint8_t *xh)` |
| [get_6d_orientation_yl](#get_6d_orientation_yl) - `int get_6d_orientation_yl(uint8_t *yl)` |
| [get_6d_orientation_yh](#get_6d_orientation_yh) - `int get_6d_orientation_yh(uint8_t *yh)` |
| [get_6d_orientation_zl](#get_6d_orientation_zl) - `int get_6d_orientation_zl(uint8_t *zl)` |
| [get_6d_orientation_zh](#get_6d_orientation_zh) - `int get_6d_orientation_zh(uint8_t *zh)` |
| [get_event_status](#get_event_status) - `int get_event_status(LSM6DSL_Event_Status_t *status)` |
| [read_reg](#read_reg) - `int read_reg(uint8_t reg, uint8_t *data)` |
| [write_reg](#write_reg) - `int write_reg(uint8_t reg, uint8_t data)` |

## Types

### DevI2C

> Provides functions for multi-register I2C communication.

### PinName

> Provides the mapping of mbed DIP and LPC Pin Names.

### LSM6DSL_Interrupt_Pin_t

> LSM6DSL interrupt pin type

### LSM6DSL_Event_Status_t

> LSM6DSL event status type

## Constructors

### LSM6DSLSensor

```cpp
LSM6DSLSensor(DevI2C &i2c, PinName int1_pin, PinName int2_pin)
```

> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | DevI2C & | i2c | The object of an helper class which handles the I2C peripheral. |
> | PinName | int1_pin | LSM6DSL interrupt pin name. |
> | PinName | int2_pin | LSM6DSL interrupt pin name. |

### LSM6DSLSensor

```cpp
LSM6DSLSensor(DevI2C &i2c, PinName int1_pin, PinName int2_pin, uint8_t address)
```

> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | DevI2C & | i2c | The object of an helper class which handles the I2C peripheral. |
> | PinName | int1_pin | LSM6DSL interrupt pin name. |
> | PinName | int2_pin | LSM6DSL interrupt pin name. |
> | uint8_t | address | The address of the component's instance. |

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
> | void * | init | Pointer to device specific initalization structure. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### enable_x

```cpp
int enable_x(void)
```

> Enable LSM6DSL Accelerator.
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

### enable_g

```cpp
int enable_g(void)
```

> Enable LSM6DSL Gyroscope.
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

### disable_x

```cpp
int disable_x(void)
```

> Disable LSM6DSL Accelerator.
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

### disable_g

```cpp
int disable_g(void)
```

> Disable LSM6DSL Gyroscope.
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

### read_id

```cpp
int read_id(unsigned char *id)
```

> Read ID of LSM6DSL Accelerometer and Gyroscope.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char * | id | The pointer where the ID of the device is stored. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_x_axes

```cpp
int get_x_axes(int *pData)
```

> Read data from LSM6DSL Accelerometer.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int32_t * | pData | The pointer where the accelerometer data are stored. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_g_axes

```cpp
int get_g_axes(int *pData)
```

> Read data from LSM6DSL Gyroscope.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int * | pData | The pointer where the gyroscope data are stored |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_x_sensitivity

```cpp
int get_x_sensitivity(float *pfData)
```

> Read Accelerometer Sensitivity.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float * | pfData | The pointer where the accelerometer sensitivity is stored |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_g_sensitivity

```cpp
int get_g_sensitivity(float *pfData)
```

> Read Gyroscope Sensitivity.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float * | pfData | The pointer where the gyroscope sensitivity is stored. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_x_axes_raw

```cpp
int get_x_axes_raw(int16_t *pData)
```

> Read raw data from LSM6DSL Accelerometer.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int * | pData | The pointer where the accelerometer raw data are stored |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_g_axes_raw

```cpp
int get_g_axes_raw(int16_t *pData)
```

> Read raw data from LSM6DSL Gyroscope.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int16_t * | pData | The pointer where the gyroscope raw data are stored. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_x_odr

```cpp
int get_x_odr(float *odr)
```

> Read LSM6DSL Accelerometer output data rate.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float * | odr | The pointer to the output data rate. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_g_odr

```cpp
int get_g_odr(float *odr)
```

> Read LSM6DSL Gyroscope output data rate.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float * | odr | The pointer to the output data rate. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_x_odr

```cpp
int set_x_odr(float odr)
```

> Set LSM6DSL Accelerometer output data rate.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float | odr | The output data rate to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_x_odr_when_enabled

```cpp
int set_x_odr_when_enabled(float odr)
```

> Set LSM6DSL Accelerometer output data rate when enabled.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float | odr | The output data rate to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_x_odr_when_disabled

```cpp
int set_x_odr_when_disabled(float odr)
```

> Set LSM6DSL Accelerometer output data rate when disabled.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float | odr | The output data rate to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_g_odr

```cpp
int set_g_odr(float odr)
```

> Set LSM6DSL Gyroscope output data rate.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float | odr | The output data rate to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_g_odr_when_enabled

```cpp
int set_g_odr_when_enabled(float odr)
```

> Set LSM6DSL Gyroscope output data rate when enabled.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float | odr | The output data rate to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_g_odr_when_disabled

```cpp
int set_g_odr_when_disabled(float odr)
```

> Set LSM6DSL Gyroscope output data rate when disabled.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float | odr | The output data rate to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_x_fs

```cpp
int get_x_fs(float *fullScale)
```

> Read LSM6DSL Accelerometer full scale.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float * | fullScale | The pointer to the full scale. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_g_fs

```cpp
int get_g_fs(float *fullScale)
```

> Read LSM6DSL Gyroscope full scale.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float * | fullScale | The pointer to the full scale. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_x_fs

```cpp
int set_x_fs(float fullScale)
```

> Set LSM6DSL Accelerometer full scale
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float | fullScale | The full scale to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_g_fs

```cpp
int set_g_fs(float fullScale)
```

> Set LSM6DSL Gyroscope full scale.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | float | fullScale | The full scale to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### enable_free_fall_detection

```cpp
int enable_free_fall_detection(LSM6DSL_Interrupt_Pin_t pin)
```

> Enable free fall detection. This function sets the LSM6DSL accelerometer ODR to 416Hz and the LSM6DSL accelerometer full scale to 2g.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | LSM6DSL_Interrupt_Pin_t | pin | The interrupt pin to be used. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### disable_free_fall_detection

```cpp
int disable_free_fall_detection(void)
```

> Disable free fall detection.
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

### set_free_fall_threshold

```cpp
int set_free_fall_threshold(int thr)
```

> Set the free fall detection threshold for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int | thr | The threshold to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### enable_pedometer

```cpp
int enable_pedometer(void)
```

> Enable the pedometer feature for LSM6DSL accelerometer sensor. This function sets the LSM6DSL accelerometer ODR to 26Hz and the LSM6DSL accelerometer full scale to 2g.
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

### disable_pedometer

```cpp
int disable_pedometer(void)
```

> Disable the pedometer feature for LSM6DSL accelerometer sensor.
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

### get_step_counter

```cpp
int get_step_counter(int *step_count)
```

> Get the step counter for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int * | step_count | The pointer to the step counter. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### reset_step_counter

```cpp
int reset_step_counter(void)
```

> Reset of the step counter for LSM6DSL accelerometer sensor.
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

### set_pedometer_threshold

```cpp
int set_pedometer_threshold(unsigned char thr)
```

> Set the pedometer threshold for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char | thr | The threshold to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### enable_tilt_detection

```cpp
int enable_tilt_detection(LSM6DSL_Interrupt_Pin_t pin)
```

> Enable the tilt detection for LSM6DSL accelerometer sensor. This function sets the LSM6DSL accelerometer ODR to 26Hz and the LSM6DSL accelerometer full scale to 2g.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | LSM6DSL_Interrupt_Pin_t | pin | The interrupt pin to be used. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### disable_tilt_detection

```cpp
int disable_tilt_detection(void)
```

> Disable the tilt detection for LSM6DSL accelerometer sensor.
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

### enable_wake_up_detection

```cpp
int enable_wake_up_detection(LSM6DSL_Interrupt_Pin_t pin)
```

> Enable the wake up detection for LSM6DSL accelerometer sensor. This function sets the LSM6DSL accelerometer ODR to 416Hz and the LSM6DSL accelerometer full scale to 2g.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | LSM6DSL_Interrupt_Pin_t | pin | The interrupt pin to be used. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### disable_wake_up_detection

```cpp
int disable_wake_up_detection(void)
```

> Disable the wake up detection for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> None.
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_wake_up_threshold

```cpp
int set_wake_up_threshold(unsigned char thr)
```

> Set the wake up threshold for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char | thr | The threshold to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### enable_single_tap_detection

```cpp
int enable_single_tap_detection(LSM6DSL_Interrupt_Pin_t pin)
```

> Enable the single tap detection for LSM6DSL accelerometer sensor. This function sets the LSM6DSL accelerometer ODR to 416Hz and the LSM6DSL accelerometer full scale to 2g.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | LSM6DSL_Interrupt_Pin_t | pin | The interrupt pin to be used. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### disable_single_tap_detection

```cpp
int disable_single_tap_detection(void)
```

> Disable the single tap detection for LSM6DSL accelerometer sensor.
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

### enable_double_tap_detection

```cpp
int enable_double_tap_detection(LSM6DSL_Interrupt_Pin_t pin)
```

> Enable the double tap detection for LSM6DSL accelerometer sensor. This function sets the LSM6DSL accelerometer ODR to 416Hz and the LSM6DSL accelerometer full scale to 2g.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | LSM6DSL_Interrupt_Pin_t | pin | The interrupt pin to be used. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### disable_double_tap_detection

```cpp
int disable_double_tap_detection(void)
```

> Disable the double tap detection for LSM6DSL accelerometer sensor.
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

### set_tap_threshold

```cpp
int set_tap_threshold(unsigned char thr)
```

> Set the tap threshold for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned char | thr | The threshold to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_tap_shock_time

```cpp
int set_tap_shock_time(uint8_t time)
```

> Set the tap shock time window for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | time | The shock time window to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_tap_quiet_time

```cpp
int set_tap_quiet_time(uint8_t time)
```

> Set the tap quiet time window for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | time | The quiet time window to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### set_tap_duration_time

```cpp
int set_tap_duration_time(uint8_t time)
```

> Set the tap duration of the time window for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | time | The duration of the time window to be set. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### enable_6d_orientation

```cpp
int enable_6d_orientation(LSM6DSL_Interrupt_Pin_t pin)
```

> Enable the 6D orientation detection for LSM6DSL accelerometer sensor. This function sets the LSM6DSL accelerometer ODR to 416Hz and the LSM6DSL accelerometer full scale to 2g.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | LSM6DSL_Interrupt_Pin_t | pin | The interrupt pin to be used. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### disable_6d_orientation

```cpp
int disable_6d_orientation(void)
```

> Disable the 6D orientation detection for LSM6DSL accelerometer sensor.
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

### get_6d_orientation_xl

```cpp
int get_6d_orientation_xl(uint8_t *xl)
```

> Get the 6D orientation XL axis for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t * | xl | The pointer to the 6D orientation XL axis. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_6d_orientation_xh

```cpp
int get_6d_orientation_xh(uint8_t *xh)
```

> Get the 6D orientation XH axis for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t * | xh | The pointer to the 6D orientation XH axis. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_6d_orientation_yl

```cpp
int get_6d_orientation_yl(uint8_t *yl)
```

> Get the 6D orientation YL axis for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t * | yl | The pointer to the 6D orientation YL axis |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_6d_orientation_yh

```cpp
int get_6d_orientation_yh(uint8_t *yh)
```

> Get the 6D orientation YH axis for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t * | yh | The pointer to the 6D orientation YH axis. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_6d_orientation_zl

```cpp
int get_6d_orientation_zl(uint8_t *zl)
```

> Get the 6D orientation ZL axis for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t * | zl | The pointer to the 6D orientation ZL axis. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_6d_orientation_zh

```cpp
int get_6d_orientation_zh(uint8_t *zh)
```

> Get the 6D orientation ZH axis for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t * | zh | The pointer to the 6D orientation ZH axis. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### get_event_status

```cpp
int get_event_status(LSM6DSL_Event_Status_t *status)
```

> Get the status of all hardware events for LSM6DSL accelerometer sensor.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | LSM6DSL_Event_Status_t * | status | The pointer to the status of all hardware events. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### read_reg

```cpp
int read_reg(uint8_t reg, uint8_t *data)
```

> 
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | reg | Register address. |
> | uint8_t * | data | Register data. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

### write_reg

```cpp
int write_reg(uint8_t reg, uint8_t data)
```

> Write the data to register.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | reg | Register address. |
> | uint8_t * | data | Register data. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | 0 in case of success, an error code otherwise. |

## Sample code

```cpp
#include "LSM6DSLSensor.h"
DevI2C *i2c;
LSM6DSLSensor *sensor;
int32_t axes[3];
int16_t raws[3];
float data;
void setup(){
    i2c = new DevI2C(D14, D15);
    sensor = new LSM6DSLSensor(*i2c, D4, D5);
    // init
    sensor->init(NULL);
}
void loop(){
    // Accelerometer test
    accelerometer_test();
    // Gyroscope test
    gyroscope_test();
    delay(1000);
}
void accelerometer_test(){
    Serial.println("***Accelerator***");
    // enable_x
    sensor->enable_x();
    // get_x_axes
    sensor->get_x_axes(axes);
    Serial.printf("Axes: x: %d, y: %d, z: %d\n", axes[0], axes[1], axes[2]);
    // get_x_sensitivity
    sensor->get_x_sensitivity(&data);
    Serial.print("Sensitivity: ");
    Serial.println(data);
    // get_x_axes_raw
    sensor->get_x_axes_raw(raws);
    Serial.printf("Raw: x: %d, y: %d, z: %d\n", raws[0], raws[1], raws[2]);
}
void gyroscope_test(){
    Serial.println("***Gyroscope***");
    // enable_g
    sensor->enable_g();
    // get_g_axes
    sensor->get_g_axes(axes);
    Serial.printf("Axes: x: %d, y: %d, z: %d\n", axes[0], axes[1], axes[2]);
    // get_g_sensitivity
    sensor->get_g_sensitivity(&data);
    Serial.print("Sensitivity: ");
    Serial.println(data);
    // get_g_axes_raw
    sensor->get_g_axes_raw(raws);
    Serial.printf("Raw: x: %d, y: %d, z: %d\n", raws[0], raws[1], raws[2]);
}
```