---
title: "Audio-retired"
permalink: /docs/apis/retired/audio-v1/ 
excerpt: "The retired Audio module for AZ3166"
last_modified_at: 2017-11-22T10:16:34-04:00
---

Audio class.

## Assembly

AudioClass.h

## Summary

| Types |
| :---- |
| [WaveHeader](#waveheader) |


| Methods |
| :------ |
| [getInstance](#getInstance) - `static AudioClass& getInstance()` |
| [format](#format) - `void format(unsigned int sampleRate, unsigned short sampleBitLength)` |
| [startRecord](#startrecord) - `int startRecord(char * audioFile, int fileSize, int durationInSeconds)` |
| [startPlay](#startPlay) - `int startPlay(char * audioFile, int size)` |
| [stop](#stop) - `void stop()` |
| [convertToMono](#convertToMono) - `int convertToMono(char * audioFile, int size, int sampleBitLength)` |
| [getWav](#getwav) - `char *getWav(int *file_size)` |
| [getAudioState](#getAudioState) - `int getAudioState();` |
| [getRecordedDuration](#getrecordedduration) - `double getRecordedDuration()` |
| [getCurrentSize](#getcurrentsize) - `int getCurrentSize()` |

## Types

### AUDIO_STATE_TypeDef

> Enum for audio status

```cpp
typedef enum 
{
  AUDIO_STATE_IDLE = 0,
  AUDIO_STATE_INIT,
  AUDIO_STATE_RECORDING,
  AUDIO_STATE_PLAYING,
  AUDIO_STATE_RECORDING_FINISH,
  AUDIO_STATE_PLAYING_FINISH
} AUDIO_STATE_TypeDef;
```

### WaveHeader

> Wave header structure.

```cpp
typedef struct
{
    char RIFF_marker[4];
    uint32_t file_size;
    char filetype_header[4];
    char format_marker[4];
    uint32_t data_header_length;
    uint16_t format_type;
    uint16_t number_of_channels;
    uint32_t sample_rate;
    uint32_t bytes_per_second;
    uint16_t bytes_per_frame;
    uint16_t bits_per_sample;
    char data_chunk_id[4];
    uint32_t data_chunk_size;
} WaveHeader;
```

## Methods

## getInstance

```cpp
char *getInstance()
```

> Get the single instance of AudioClass
> 

> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | AudioClass& | Reference to the single instance. |


### format

```cpp
void format(unsigned int sampleRate, unsigned short sampleBitLength)
```

> Configure the audio data format.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | unsigned int | sampleRate | Sample rate. |
> | unsigned short | sampleBitLength | Sample bit length. |
> 
> #### Return value
> 
> `void`

### startRecord

```cpp
int startRecord(char * audioFile, int fileSize, int durationInSeconds);
```

> Start recording audio data usine underlying codec
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | audioFile | Pointer to record file. |
> | int | fileSize | Record file size. |
> | int | durationInSeconds | Record duration in seconds. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Result code, 0 (AUDIO_OK) in case of success, error code otherwise. |


### startPlay

```cpp
int startPlay(char * audioFile, int size);
```

> Start playing audio data usine underlying codec
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | audioFile | Pointer to the audio data buffer. |
> | int | fileSize |  fileSize Size of audio file. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Result code, 0 (AUDIO_OK) if correct playing, else wrong playing. |


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

### convertToMono

```cpp
int convertToMono(char * audioFile, int size, int sampleBitLength);
```

> Convert the given stereo audio data to mono audio
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | audioFile | Pointer to the audio data buffer. |
> | int | fileSize |  fileSize Size of audio file. |
> | int | sampleBitLength |  Sample bit depth of the given audio data. |

> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Result code, 0 in case of success, an error code otherwise. |


### getAudioState

```cpp
int getAudioState();
```

> Get status of the audio driver. Please use this API to query whether the playing/recoding process is completed.
> 

> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | value of AUDIO_STATE_TypeDef |


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
#include "Arduino.h"
#include "OledDisplay.h"
#include "AudioClass.h"

AudioClass& Audio = AudioClass::getInstance();
const int AUDIO_SIZE = 32000 * 3 + 45;

int lastButtonAState;
int buttonAState;
int lastButtonBState;
int buttonBState;
char *waveFile;
int totalSize;
int monoSize;

void setup(void)
{
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(115200);

  Serial.println("Helloworld in Azure IoT DevKits!");

  // initialize the button pin as a input
  pinMode(USER_BUTTON_A, INPUT);
  lastButtonAState = digitalRead(USER_BUTTON_A);
  pinMode(USER_BUTTON_B, INPUT);
  lastButtonBState = digitalRead(USER_BUTTON_B);

  // Setup your local audio buffer
  waveFile = (char *)malloc(AUDIO_SIZE + 1);
  memset(waveFile, 0x0, AUDIO_SIZE);
}

void loop(void)
{
  printIdleMessage();

  while (1)
  {
    buttonAState = digitalRead(USER_BUTTON_A);
    buttonBState = digitalRead(USER_BUTTON_B);
    
    if (buttonAState == LOW && lastButtonAState == HIGH)
    {
      record();
    }

    if (buttonBState == LOW && lastButtonBState == HIGH)
    {
      play();
    }
    
    lastButtonAState = buttonAState;
    lastButtonBState = buttonBState;
  }

  delay(100);
}

void printIdleMessage()
{
  Screen.clean();
  Screen.print(0, "AZ3166 Audio:  ");
  Screen.print(1, "Press A to record", true);
  Screen.print(2, "Press B to play", true);
}

void record()
{
  // Re-config the audio data format
  Audio.format(8000, 16);

  Serial.println("start recording");
  Screen.clean();
  Screen.print(0, "Start recording");

  // Start to record audio data
  Audio.startRecord(waveFile, AUDIO_SIZE, 3);

  // Check whether the audio record is completed.
  while (Audio.getAudioState() == AUDIO_STATE_RECORDING)
  {
    delay(100);
  }
  
  Screen.clean();
  Screen.print(0, "Finish recording");
  Audio.getWav(&totalSize);
  Serial.print("Recorded size: ");
  Serial.println(totalSize);

  printIdleMessage();
}

void play()
{
  Screen.clean();
  Screen.print(0, "Start playing");
  Audio.startPlay(waveFile, totalSize);
  
  while (Audio.getAudioState() == AUDIO_STATE_PLAYING)
  {
    delay(100);
  }
  
  Screen.print(0, "Stop playing");
  printIdleMessage();
}

```