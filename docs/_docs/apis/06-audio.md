---
title: "Audio"
permalink: /docs/apis/audio/
excerpt: "The Audio module for AZ3166"
last_modified_at: 2017-04-30T10:16:34-04:00
---

Audio class.

## Assembly

AudioClass.h

## Summary

| Types |
| :---- |
| [WaveHeader](#waveheader) |

| Constructors |
| :----------- |
| [AudioClass](#audioclass) - `AudioClass()` |

| Methods |
| :------ |
| [format](#format) - `void format(uint32_t sampleRate, uint8_t sampleBitLength)` |
| [start](#start) - `void start(uint16_t * transmitBuf, uint16_t * readBuf, uint32_t size)` |
| [startRecord](#startrecord) - `void startRecord(char * audioFile, int fileSize, uint8_t durationInSeconds)` |
| [stop](#stop) - `void stop()` |
| [recordComplete](#recordcomplete) - `bool recordComplete()` |
| [genericWAVHeader](#genericwavheader) - `WaveHeader *genericWAVHeader(int pcmDataSize)` |
| [getWav](#getwav) - `char *getWav(int *file_size)` |
| [getRecordedDuration](#getrecordedduration) - `double getRecordedDuration()` |
| [getCurrentSize](#getcurrentsize) - `int getCurrentSize()` |

## Types

### WaveHeader

> Wave header structure.
> 
> Source code: <https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/cores/arduino/drivers/I2S_Audio/AudioClass.h>

## Constructors

### AudioClass

```cpp
AudioClass()
```

> #### Parameters
> 
> None.

## Methods

### format

```cpp
void format(uint32_t sampleRate, uint8_t sampleBitLength)
```

> Configure the audio data format.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint32_t | sampleRate | Sample rate. |
> | uint8_t | sampleBitLength | Sample bit length. |
> 
> #### Return value
> 
> `void`

### start

```cpp
void start(uint16_t *transmitBuf, uint16_t *readBuf, uint32_t size)
```

> Start recording audio data.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint16_t * | transmitBuf | Pointer to the buffer. |
> | uint16_t * | readBuf | Pointer to the read buffer. |
> | uint32_t | size | Number of audio data bytes. |
> 
> #### Return value
> 
> `void`

### startRecord

```cpp
void startRecord(char *audioFile, int fileSize, uint8_t durationInSeconds)
```

> Start recording audio data usine underlying codec
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | audioFile | Pointer to record file. |
> | int | fileSize | Record file size. |
> | uint8_t | durationInSeconds | Record duration in seconds. |
> 
> #### Return value
> 
> `void`

### stop

```cpp
void stop()
```

> Stop audio data transmition.
> 
> #### Parameters
> 
> None.
> 
> #### Return value
> 
> `void`

### recordComplete

```cpp
bool recordComplete()
```

> Query the record status to check if the DMA transmition is completed.
> 
> #### Parameters
> 
> None.
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | bool | If the DMA transmition is completed. |

### genericWAVHeader

```cpp
WaveHeader *genericWAVHeader(int pcmDataSize)
```

> Compose the WAVE header according to the raw data size.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int | pcmDataSize | Pulse-code modulation data size. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | WaveHeader * | Pointer to the wave header. |

### getWav

```cpp
char *getWav(int *file_size)
```

> Get wave file.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | int * | file_size | Pointer to file size. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | char * | Pointer to the wave file. |

### getRecordedDuration

```cpp
double getRecordedDuration()
```

> Get recorded duration in seconds.
> 
> #### Parameters
> 
> None.
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | double | Recorded duration in seconds. |

### getCurrentSize

```cpp
int getCurrentSize()
```

> Get current record size in byte.
> 
> #### Parameters
> 
> None.
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Current record size in byte. |

## Source code
<https://github.com/Microsoft/AzureIoTDeveloperKit/blob/master/AZ3166/AZ3166-1.0.0/cores/arduino/drivers/I2S_Audio/AudioClass.h>