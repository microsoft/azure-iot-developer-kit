---
title: "EEPROMInterface"
permalink: /docs/apis/EEPROMInterface/
excerpt: "Library for EEPROMInterface on AZ3166"
last_modified_at: 2018-01-04T05:16:34-04:00
---

EEPROMInterface class is used to store some critical messages like passwords, keys and some other configurations. Messages are stored at a secure chip on Devkit. And our EEPROM supports secure channel between our MCU and secure chip after function enableHostSecureChannel() called.

## Assembly

EEPROMInterface.h

## Summary


| Methods |
| :------ |
| [write](#write) - `int write(uint8_t* dataBuff, int buffSize, uint8_t dataZoneIndex)` |
| [read](#read) - `int read(uint8_t* dataBuff, int buffSize, uint16_t offset, uint8_t dataZoneIndex)` |
| [enableHostSecureChannel](#enablehostsecurechannel) - `int enableHostSecureChannel(int level = 1, uint8_t* key = NULL)` |


## Methods

### write

```cpp
int write(uint8_t* dataBuff, int buffSize, uint8_t dataZoneIndex);
```

> Write data to secure chip.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t* | dataBuff | The data to be written secure chip. |
> | int | buffSize | The size of written data. The valid range of different data zone is different. |
> | uint8_t | dataZoneIndex | The index of zone written data to. The valid input is {0, 2, 3, 5, 6, 7, 8, 10}. {3, 5, 10} are used for wifi and iot hub connection string. 6 is used for DPS mini solution. {0, 2} are reserved for later mini solutions. So we recommand user to use {7, 8}. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Return 0 on success, otherwise return -1. The failure might be caused by input dataSize bigger than data zone could write. |
>
>The max dataSize input for each data zone was defined in library like:
>`const static int DATA_SEGMENT_LENGTH[11] = {976, 0, 192, 120, 0, 584, 680, 784, 880, 0, 88};`
>For zone 7, the max dataSize is 784. For zone 8, the max dataSize is 880.


### read

```cpp
int read(uint8_t* dataBuff, int buffSize, uint16_t offset, uint8_t dataZoneIndex);
```

> Read data from secure chip.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t* | dataBuff | The buffer to store data read from secure chip. |
> | int | buffSize | The size of data need to be read. |
> | uint16_t | offset | The offset of data in data zone to start read data from. |
> | uint8_t | dataZoneIndex | The index of zone to read data from. Valid input is the same as that in write() function. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Return read buffer size on success, otherwise return -1. |

### enableHostSecureChannel

```cpp
int enableHostSecureChannel(int level = 1, uint8_t* key = NULL);
```

> Enable secure channel between AZ3166 and secure chip.
> On function called, a key will be set to secure chip, meanwhile the key will be stored in flash of AZ3166.
> * And this will automaticly encrypt all data in secure chip.
> * Notice that do not drag-drop firmware after secure channel enabled.
> * Drag-drop bin file may rewrite the flash with key and the data in zone can not be decrypted correctlly.
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int | level | Secure level of secure channel. 1 means hard code key, 2 means user defined key, 3 means random key. The key can never be changed after set. Be very careful here. And we strongly suggest developer use 1 here. For now, we only support level 1. |
> | uint8_t* | key | A 32 bytes array needed if choose level 2, user defined key. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Return 0 on success. Return 1 if the secure channel has already been enabled. Return -1 on fail. The failure might be caused by wrong parameter or key not available. |
