# Sensor Status

Sensor Status application is installed in the board by default, it can run automatically when you plug usb in. You can also install the application by following [this guide](https://microsoft.github.io/azure-iot-developer-kit/docs/upgrading/), or open `Examples for MXCHIP AZ3166 > SensorStatus > SensorStatus` project after you connect the board to your computer, and run `device-upload` task ([how to run the task?](https://microsoft.github.io/azure-iot-developer-kit/docs/projects/shake-shake/)).

## What you learn

* How to initialize sensor.
* How to read sensor data.

## Include sensor libraries

* Humidity and temperature sensor

```cpp
#include "HTS221Sensor.h"
```

* Magnetic sensor

```cpp
#include "LIS2MDLSensor.h"
```

* Accelerometer and gyroscope sensor

```cpp
#include "LSM6DSLSensor.h"
```

* Pressure sensor

```cpp
#include "LPS22HBSensor.h"
```

* IrDA (Infrared Data Association)

```cpp
#include "IrDASensor.h"
```

## Initalize sensors

* I2C PIN setup

```cpp
DevI2C *ext_i2c;
ext_i2c = new DevI2C(D14, D15);
```

* Humidity and temperature sensor

```cpp
HTS221Sensor *ht_sensor;
ht_sensor = new HTS221Sensor(*ext_i2c);
ht_sensor->init(NULL);
```

* Magnetic sensor

```cpp
LIS2MDLSensor *magnetometer;
magnetometer = new LIS2MDLSensor(*ext_i2c);
magnetometer->init(NULL);
```

* Accelerometer and gyroscope sensor

```cpp
LSM6DSLSensor *acc_gyro;
acc_gyro = new LSM6DSLSensor(*ext_i2c, D4, D5);
acc_gyro->init(NULL);
acc_gyro->enableAccelerator();
acc_gyro->enableGyroscope();
```

* Pressure sensor

```cpp
LPS22HBSensor *pressureSensor;
pressureSensor = new LPS22HBSensor(*ext_i2c);
pressureSensor -> init(NULL);
```

* IrDA (Infrared Data Association)

```cpp
IRDASensor *IrdaSensor;
IrdaSensor = new IRDASensor();
IrdaSensor->init();
```

## Read sensor data

* Humidity and temperature sensor

```cpp
float temperature = 0;
float humidity = 0;
ht_sensor->reset();
ht_sensor->getTemperature(&temperature);
ht_sensor->getHumidity(&humidity);
```

* Magnetic sensor

```cpp
int axes[3];
magnetometer->getMAxes(axes);
```

* Accelerometer and gyroscope sensor

```cpp
int axes[3];
acc_gyro->getXAxes(axes);
```

* Pressure sensor

```cpp
float pressure = 0;
float temperature = 0;
pressureSensor -> getPressure(&pressure);
pressureSensor -> getTemperature(&temperature);
```

## Send data

* IrDA (Infrared Data Association)

```cpp
const char *data = "Hello";
int irda_status = IrdaSensor->IRDATransmit((unsigned char *)data, sizeof(data), 100);
```