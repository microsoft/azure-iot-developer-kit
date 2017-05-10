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

## Sample code

```cpp
#include "AudioClass.h"
AudioClass Audio;
const int AUDIO_SIZE = 32000*2 + 45;
int lastButtonState;
int buttonState;
char * waveFile;
void setup(void) {
    pinMode(LED_BUILTIN, OUTPUT);
    Serial.begin(115200);
    Serial.println("Helloworld in AzureDevKits!");
    // initialize the button pin as a input
    pinMode(USER_BUTTON_A, INPUT);
    lastButtonState = digitalRead(USER_BUTTON_A);
    // Setup your local audio buffer
    waveFile = (char *)malloc(AUDIO_SIZE + 1);
    memset(waveFile, 0x0, AUDIO_SIZE);
}
void loop(void) {
    Serial.println("Press user button A to start recording.");
    while (1) {
        buttonState = digitalRead(USER_BUTTON_A);
        if(buttonState == LOW && lastButtonState == HIGH)
        {
            record();
        }
        lastButtonState = buttonState;
    }
    delay(1000);
}
void record() {
    // Re-config the audio data format
    Audio.format(8000, 16);
    Serial.println("start recording.");
    Screen.print(0, "Start recording   ");
    // Start to record audio data
    Audio.startRecord(waveFile, AUDIO_SIZE, 2);
    while (1) {
        // Check whether the audio record is completed.
        if (Audio.recordComplete() == true) {
            Screen.print(0, "Finish recording   ");
            int totalSize;
            Audio.getWav(&totalSize);
            Serial.print("Total size: ");
            Serial.println(totalSize);
            int monoSize = Audio.convertToMono(waveFile, totalSize, 16);
            Serial.print("Mono size:" );
            Serial.println(monoSize);
            delay(100);
            break;
        }
    }
}
```