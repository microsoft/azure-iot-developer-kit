---
title: "LSM6DSL Sensor"
permalink: /docs/apis/lsm6dsl/
excerpt: "Library for LSM6DSL, 3D digital accelerometer and gyroscope sensor on AZ3166"
last_modified_at: 2017-06-28T00:01:52-04:00
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
| [enableAccelerator](#enableaccelerator) - `int enableAccelerator(void)` |
| [enableGyroscope](#enablegyroscope) - `int enableGyroscope(void)` |
| [disableAccelerator](#disableaccelerator) - `int disableAccelerator(void)` |
| [disableGyroscope](#disablegyroscope) - `int disableGyroscope(void)` |
| [readId](#readid) - `int readId(unsigned char *id)` |
| [getXAxes](#getxaxes) - `int getXAxes(int *pData)` |
| [getGAxes](#getgaxes) - `int getGAxes(int *pData)` |
| [getXSensitivity](#getxsensitivity) - `int getXSensitivity(float *pfData)` |
| [getGSensitivity](#getgsensitivity) - `int getGSensitivity(float *pfData)` |
| [getXAxesRaw](#getxaxesraw) - `int getXAxesRaw(int16_t *pData)` |
| [getGAxesRaw](#getgaxesraw) - `int getGAxesRaw(int16_t *pData)` |
| [getXOdr](#getxodr) - `int getXOdr(float* odr)` |
| [getGOdr](#getgodr) - `int getGOdr(float* odr)` |
| [setXOdr](#setxodr) - `int setXOdr(float odr)` |
| [setXOdrWhenEnabled](#setxodrwhenenabled) - `int setXOdrWhenEnabled(float odr)` |
| [setXOdrWhenDisabled](#setxodrwhendisabled) - `int setXOdrWhenDisabled(float odr)` |
| [setGOdr](#setgodr) - `int setGOdr(float odr)` |
| [setGOdrWhenEnabled](#setgodrwhenenabled) - `int setGOdrWhenEnabled(float odr)` |
| [setGOdrWhenDisabled](#setgodrwhendisabled) - `int setGOdrWhenDisabled(float odr)` |
| [getXFullScale](#getxfullscale) - `int getXFullScale(float* fullScale)` |
| [getGFullScale](#getgfullscale) - `int getGFullScale(float* fullScale)` |
| [setXFullScale](#setxfullscale) - `int setXFullScale(float fullScale)` |
| [setGFullScale](#setgfullscale) - `int setGFullScale(float fullScale)` |
| [enableFreeFallDetection](#enablefreefalldetection) - `int enableFreeFallDetection(LSM6DSL_Interrupt_Pin_t pin)` |
| [disableFreeFallDetection](#disablefreefalldetection) - `int disableFreeFallDetection(void)` |
| [setFreeFallThreshold](#setfreefallthreshold) - `int setFreeFallThreshold(uint8_t thr)` |
| [enablePedometer](#enablepedometer) - `int enablePedometer(void)` |
| [disablePedometer](#disablepedometer) - `int disablePedometer(void)` |
| [getStepCounter](#getstepcounter) - `int getStepCounter(int *step_count)` |
| [resetStepCounter](#resetstepcounter) - `int resetStepCounter(void)` |
| [setPedometerThreshold](#setpedometerthreshold) - `int setPedometerThreshold(unsigned char thr)` |
| [enableTiltDetection](#enabletiltdetection) - `int enableTiltDetection(LSM6DSL_Interrupt_Pin_t pin)` |
| [disableTiltDetection](#disabletiltdetection) - `int disableTiltDetection(void)` |
| [enableWakeUpDetection](#enablewakeupdetection) - `int enableWakeUpDetection(LSM6DSL_Interrupt_Pin_t pin)` |
| [disableWakeUpDetection](#disablewakeupdetection) - `int disableWakeUpDetection(void)` |
| [setWakeUpThreshold](#setwakeupthreshold) - `int setWakeUpThreshold(unsigned char thr)` |
| [enableSingleTapDetection](#enablesingletapdetection) - `int enableSingleTapDetection(LSM6DSL_Interrupt_Pin_t pin)` |
| [disableSingleTapDetection](#disablesingletapdetection) - `int disableSingleTapDetection(void)` |
| [enableDoubleTapDetection](#enabledoubletapdetection) - `int enableDoubleTapDetection(LSM6DSL_Interrupt_Pin_t pin)` |
| [disableDoubleTapDetection](#disabledoubletapdetection) - `int disableDoubleTapDetection(void)` |
| [setTapThreshold](#settapthreshold) - `int setTapThreshold(unsigned char thr)` |
| [setTapShockTime](#settapshocktime) - `int setTapShockTime(uint8_t time)` |
| [setTapQuietTime](#settapquiettime) - `int setTapQuietTime(uint8_t time)` |
| [setTapDurationTime](#settapdurationtime) - `int setTapDurationTime(uint8_t time)` |
| [enable6dOrientation](#enable6dorientation) - `int enable6dOrientation(LSM6DSL_Interrupt_Pin_t pin)` |
| [disable6dOrientation](#disable6dorientation) - `int disable6dOrientation(void)` |
| [get6dOrientationXL](#get6dorientationxl) - `int get6dOrientationXL(uint8_t *xl)` |
| [get6dOrientationXH](#get6dorientationxh) - `int get6dOrientationXH(uint8_t *xh)` |
| [get6dOrientationYL](#get6dorientationyl) - `int get6dOrientationYL(uint8_t *yl)` |
| [get6dOrientationYH](#get6dorientationyh) - `int get6dOrientationYH(uint8_t *yh)` |
| [get6dOrientationZL](#get6dorientationzl) - `int get6dOrientationZL(uint8_t *zl)` |
| [get6dOrientationZH](#get6dorientationzh) - `int get6dOrientationZH(uint8_t *zh)` |
| [getEventStatus](#geteventstatus) - `int getEventStatus(LSM6DSL_Event_Status_t *status)` |
| [readReg](#readreg) - `int readReg(uint8_t reg, uint8_t *data)` |
| [writeReg](#writereg) - `int writeReg(uint8_t reg, uint8_t data)` |

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

### enableAccelerator

```cpp
int enableAccelerator(void)
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

### enableGyroscope

```cpp
int enableGyroscope(void)
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

### disableAccelerator

```cpp
int disableAccelerator(void)
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

### disableGyroscope

```cpp
int disableGyroscope(void)
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

### readId

```cpp
int readId(unsigned char *id)
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

### getXAxes

```cpp
int getXAxes(int *pData)
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

### getGAxes

```cpp
int getGAxes(int *pData)
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

### getXSensitivity

```cpp
int getXSensitivity(float *pfData)
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

### getGSensitivity

```cpp
int getGSensitivity(float *pfData)
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

### getXAxesRaw

```cpp
int getXAxesRaw(int16_t *pData)
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

### getGAxesRaw

```cpp
int getGAxesRaw(int16_t *pData)
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

### getXOdr

```cpp
int getXOdr(float *odr)
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

### getGOdr

```cpp
int getGOdr(float *odr)
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

### setXOdr

```cpp
int setXOdr(float odr)
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

### setXOdrWhenEnabled

```cpp
int setXOdrWhenEnabled(float odr)
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

### setXOdrWhenDisabled

```cpp
int setXOdrWhenDisabled(float odr)
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

### setGOdr

```cpp
int setGOdr(float odr)
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

### setGOdrWhenEnabled

```cpp
int setGOdrWhenEnabled(float odr)
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

### setGOdrWhenDisabled

```cpp
int setGOdrWhenDisabled(float odr)
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

### getXFullScale

```cpp
int getXFullScale(float *fullScale)
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

### getGFullScale

```cpp
int getGFullScale(float *fullScale)
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

### setXFullScale

```cpp
int setXFullScale(float fullScale)
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

### setGFullScale

```cpp
int setGFullScale(float fullScale)
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

### enableFreeFallDetection

```cpp
int enableFreeFallDetection(LSM6DSL_Interrupt_Pin_t pin)
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

### disableFreeFallDetection

```cpp
int disableFreeFallDetection(void)
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

### setFreeFallThreshold

```cpp
int setFreeFallThreshold(int thr)
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

### enablePedometer

```cpp
int enablePedometer(void)
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

### disablePedometer

```cpp
int disablePedometer(void)
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

### getStepCounter

```cpp
int getStepCounter(int *step_count)
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

### resetStepCounter

```cpp
int resetStepCounter(void)
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

### setPedometerThreshold

```cpp
int setPedometerThreshold(unsigned char thr)
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

### enableTiltDetection

```cpp
int enableTiltDetection(LSM6DSL_Interrupt_Pin_t pin)
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

### disableTiltDetection

```cpp
int disableTiltDetection(void)
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

### enableWakeUpDetection

```cpp
int enableWakeUpDetection(LSM6DSL_Interrupt_Pin_t pin)
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

### disableWakeUpDetection

```cpp
int disableWakeUpDetection(void)
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

### setWakeUpThreshold

```cpp
int setWakeUpThreshold(unsigned char thr)
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

### enableSingleTapDetection

```cpp
int enableSingleTapDetection(LSM6DSL_Interrupt_Pin_t pin)
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

### disableSingleTapDetection

```cpp
int disableSingleTapDetection(void)
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

### enableDoubleTapDetection

```cpp
int enableDoubleTapDetection(LSM6DSL_Interrupt_Pin_t pin)
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

### disableDoubleTapDetection

```cpp
int disableDoubleTapDetection(void)
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

### setTapThreshold

```cpp
int setTapThreshold(unsigned char thr)
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

### setTapShockTime

```cpp
int setTapShockTime(uint8_t time)
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

### setTapQuietTime

```cpp
int setTapQuietTime(uint8_t time)
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

### setTapDurationTime

```cpp
int setTapDurationTime(uint8_t time)
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

### enable6dOrientation

```cpp
int enable6dOrientation(LSM6DSL_Interrupt_Pin_t pin)
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

### disable6dOrientation

```cpp
int disable6dOrientation(void)
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

### get6dOrientationXL

```cpp
int get6dOrientationXL(uint8_t *xl)
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

### get6dOrientationXH

```cpp
int get6dOrientationXH(uint8_t *xh)
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

### get6dOrientationYL

```cpp
int get6dOrientationYL(uint8_t *yl)
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

### get6dOrientationYH

```cpp
int get6dOrientationYH(uint8_t *yh)
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

### get6dOrientationZL

```cpp
int get6dOrientationZL(uint8_t *zl)
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

### get6dOrientationZH

```cpp
int get6dOrientationZH(uint8_t *zh)
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

### getEventStatus

```cpp
int getEventStatus(LSM6DSL_Event_Status_t *status)
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

### readReg

```cpp
int readReg(uint8_t reg, uint8_t *data)
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

### writeReg

```cpp
int writeReg(uint8_t reg, uint8_t data)
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
    // enableAccelerator
    sensor->enableAccelerator();
    // getXAxes
    sensor->getXAxes(axes);
    Serial.printf("Axes: x: %d, y: %d, z: %d\n", axes[0], axes[1], axes[2]);
    // getXSensitivity
    sensor->getXSensitivity(&data);
    Serial.print("Sensitivity: ");
    Serial.println(data);
    // getXAxesRaw
    sensor->getXAxesRaw(raws);
    Serial.printf("Raw: x: %d, y: %d, z: %d\n", raws[0], raws[1], raws[2]);
}
void gyroscope_test(){
    Serial.println("***Gyroscope***");
    // enableGyroscope
    sensor->enableGyroscope();
    // getGAxes
    sensor->getGAxes(axes);
    Serial.printf("Axes: x: %d, y: %d, z: %d\n", axes[0], axes[1], axes[2]);
    // getGSensitivity
    sensor->getGSensitivity(&data);
    Serial.print("Sensitivity: ");
    Serial.println(data);
    // getGAxesRaw
    sensor->getGAxesRaw(raws);
    Serial.printf("Raw: x: %d, y: %d, z: %d\n", raws[0], raws[1], raws[2]);
}
```