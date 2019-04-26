---
title: "Audio"
permalink: /docs/apis/audio-v2/
excerpt: "The Audio module for AZ3166"
last_modified_at: 2017-11-22T10:16:34-04:00
---

Audio class version 2. There are two ways to use `AudioClass` recording and playing music : by callback or by WAV format data. In callback scenario, it records / plays audio data to / from a 512 bytes data inside audio class. Application can control the data on play callback called or read the data on record callback called. In WAV format data scenario, it records / plays audio data to / from WAV format data.

## Assembly

AudioClassV2.h

## Summary

| Types |
| :---- |
| [WaveHeader](#waveheader) |
| [AUDIO_STATE_TypeDef](#audio_state_typedef) |


| Common methods |
| :------ |
| [getInstance](#getinstance) - `static AudioClass& getInstance()` |
| [format](#format) - `void format(unsigned int sampleRate, unsigned short sampleBitLength)` |
| [stop](#stop) - `void stop()` |
| [getAudioState](#getaudiostate) - `int getAudioState()` |
| [setVolume](#setVolume) - ` bool setVolume(uint8_t volume)` |
| [readRegister](#readRegister) - `uint16_t readRegister(uint16_t registerAddress)` |
| [writeRegister](#writeRegister) - `void writeRegister(uint16_t registerAddress, uint16_t value)` |
| [enableLevelControl](#enableLevelControl) - `void enableLevelControl(uint8_t maxGain, uint8_t minGain)` |
| [disableLevelControl](#disableLevelControl) - `void disableLevelControl()` |
| [setPGAGain](#setPGAGain) - `void setPGAGain(uint8_t gain)` |

| Callback scenario methods |
| :------ |
| [startRecord](#startrecord) - `int startRecord(callbackFunc func = NULL)` |
| [startPlay](#startplay) - `int startPlay(callbackFunc func = NULL)` |
| [readFromRecordBuffer](#readfromrecordbuffer) - `int readFromRecordBuffer(char* buffer, int length)` |
| [writeToPlayBuffer](#writetoplaybuffer) - `int writeToPlayBuffer(char* buffer, int length)` |

| WAV format data scenario methods |
| :------ |
| [startRecord](#startrecord-1) - `int startRecord(char* audioBuffer, int size)` |
| [startPlay](#startplay-1) - `int startPlay(char* audioBuffer, int size)` |
| [getCurrentSize](#getcurrentsize) - `int getCurrentSize()` |
| [convertToMono](#converttomono) - `int convertToMono(char* audioBuffer, int size, int sampleBitLength)` |

## Types

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

### AUDIO\_STATE\_TypeDef

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

## Common methods

## getInstance

```cpp
static AudioClass& getInstance()
```

> Get the single instance of AudioClass.
> 
> #### Parameters
> 
> None.
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


### getAudioState

```cpp
int getAudioState();
```

> Get status of the audio driver. Please use this API to query whether the playing/recoding process is completed.
>
> #### Parameters
> 
> None.
>
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Value of AUDIO_STATE_TypeDef. |

### setVolume

```
 bool setVolume(uint8_t volume)
```

> Controls the current audio volume level.
>
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | volume | Volume level to be set in percentage from 0% to 100% (0 for Mute and 100 for Max volume level). |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | bool | returns true on success, or false on failure |

### readRegister

```
uint16_t readRegister(uint16_t registerAddress)
```

> Read the given nau88c10 register.
> 
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint16_t | registerAddress | Register address |
>
> #### Return value
>
> | Type | Description |
> | :--- | :---------- |
> | uint16_t | the integer value in the register |

### writeRegister

```
void writeRegister(uint16_t registerAddress, uint16_t value)
```

> Write the given nau88c10 register.
> 
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint16_t | registerAddress | Register address |
> | uint16_t | value | The value to write |
>
> #### Return value
>
> None

### enableLevelControl

```
void enableLevelControl(uint8_t maxGain, uint8_t minGain)
```

> Enable automatic level control with given min and max gain as per ALCMXGAIN and ALCMNGAIN (register 0x20).
> 
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | maxGain | A value between 0 and 7 |
> | uint8_t | minGain | A value between 0 and 7 |
>
> #### Return value
>
> None

### disableLevelControl

```
void disableLevelControl()
```

>  Disable automatic level control (register 0x20).
> 
> #### Parameters
> None
>
> #### Return value
>
> None

### setPGAGain

```
void setPGAGain(uint8_t gain)
```

> set the Programmable Gain Amplifier directly (this will disable automatic level control).
> 
> #### Parameters
>
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | uint8_t | gain | A value between 0 and 0x3F |
>
> #### Return value
>
> None

## Callback scenario methods
### startRecord

```cpp
int startRecord(callbackFunc func = NULL);
```

> Start recording audio data and call func after every 512 bytes buffer was recorded.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | callbackFunc | func | Record callback function. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Result code, 0 (AUDIO_OK) in case of success, error code otherwise. |


### startPlay

```cpp
int startPlay(callbackFunc func = NULL);
```

> Start playing audio data and call func after every 512 bytes buffer was played.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | callbackFunc | func | Play callback function. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Result code, 0 (AUDIO_OK) in case of success, error code otherwise. |


### readFromRecordBuffer

```cpp
int readFromRecordBuffer(char* buffer, int length);
```

> Read recorded data from buffer inside AudioClass to given buffer.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | buffer | Pointer to write recorded data to. |
> | int | size | Size of buffer. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Size of data copied. |


### writeToPlayBuffer

```cpp
int writeToPlayBuffer(char* buffer, int length);
```

> Write played data from given buffer to buffer inside AudioClass.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | buffer | Pointer to read played data from. |
> | int | size | Size of buffer. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Size of data copied. |


## WAV format data scenario methods

### startRecord

```cpp
int startRecord(char* audioBuffer, int size);
```

> Start recording audio data and save WAV format data to audioBuffer.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | audioBuffer | Pointer to write WAV format data. |
> | int | size | Size of audioBuffer. Maximus recorded WAV format data. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Result code, 0 (AUDIO_OK) in case of success, error code otherwise. |


### startPlay

```cpp
int startPlay(char* audioBuffer, int size);
```

> Start playing WAV format data in audioBuffer.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | audioBuffer | Pointer to the WAV format data buffer. |
> | int | size |  size of audioBuffer. |
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Result code, 0 (AUDIO_OK) if correct playing, else wrong playing. |


### getCurrentSize

```cpp
int getCurrentSize()
```

> Get current recorded or played WAV format data size in byte.
> 
> #### Parameters
> 
> None.
> 
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Current recorded or played WAV format data size. |


### convertToMono

```cpp
int convertToMono(char * audioBuffer, int size, int sampleBitLength);
```

> Convert the given stereo WAV format data to mono WAV format data.
> 
> #### Parameters
> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | char * | audioBuffer | Pointer to the WAV format data. |
> | int | size |  size of WAV format data. |
> | int | sampleBitLength |  Sample bit depth of the given audio data. |
>
> #### Return value
> 
> | Type | Description |
> | :--- | :---------- |
> | int | Size of mono WAV format data after convert. |


## Sample code
### Callback scenario
```cpp
#include "Arduino.h"
#include "OledDisplay.h"
#include "RingBuffer.h"
#include "AudioClassV2.h"

static AudioClass& Audio = AudioClass::getInstance();
static int AUDIO_SIZE = 32000 * 3 + 45;
static char emptyAudio[AUDIO_CHUNK_SIZE];

RingBuffer ringBuffer(AUDIO_SIZE);
char readBuffer[AUDIO_CHUNK_SIZE];
bool startPlay = false;
int lastButtonAState;
int buttonAState;
int lastButtonBState;
int buttonBState;

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

  memset(emptyAudio, 0x0, AUDIO_CHUNK_SIZE);
  printIdleMessage();
}

void loop(void)
{
  buttonAState = digitalRead(USER_BUTTON_A);
  buttonBState = digitalRead(USER_BUTTON_B);
    
  if (buttonAState == LOW && lastButtonAState == HIGH)
  {
    Screen.clean();
    Screen.print(0, "Start recording:");
    ringBuffer.clear();
    record();
    while(digitalRead(USER_BUTTON_A) == LOW && ringBuffer.available() > 0)
    {
      delay(10);
    }
    if (Audio.getAudioState() == AUDIO_STATE_RECORDING)
    {
      Audio.stop();
    }
    startPlay = true;
    printIdleMessage();
  }

  if (buttonBState == LOW && lastButtonBState == HIGH)
  {
    if (startPlay == true)
    {
      Screen.clean();
      Screen.print(0, "start playing");
      play();
      while(ringBuffer.use() >= AUDIO_CHUNK_SIZE)
      {
        delay(10);
      }
      Audio.stop();
      startPlay = false;
      printIdleMessage();
    }
    else
    {
      Screen.clean();
      Screen.print(0, "Nothing to play");
      Screen.print(1, "Hold A to Record", true);
    }
  }
  lastButtonAState = buttonAState;
  lastButtonBState = buttonBState;
}

void printIdleMessage()
{
  Screen.clean();
  Screen.print(0, "AZ3166 AudioV2:  ");
  Screen.print(1, "Hold A to Record", true);
  Screen.print(2, "Press B to play", true);
}

void record()
{
  Serial.println("start recording");
  ringBuffer.clear();
  Audio.format(8000, 16);
  Audio.startRecord(recordCallback);
}

void play()
{
  Serial.println("start playing");
  Audio.format(8000, 16);
  Audio.setVolume(80);
  Audio.startPlay(playCallback);
}

void playCallback(void)
{
  if (ringBuffer.use() < AUDIO_CHUNK_SIZE)
  {
    Audio.writeToPlayBuffer(emptyAudio, AUDIO_CHUNK_SIZE);
    return;
  }
  int length = ringBuffer.get((uint8_t*)readBuffer, AUDIO_CHUNK_SIZE);
  Audio.writeToPlayBuffer(readBuffer, length);
}

void recordCallback(void)
{
  int length = Audio.readFromRecordBuffer(readBuffer, AUDIO_CHUNK_SIZE);
  ringBuffer.put((uint8_t*)readBuffer, length);
}
```

### WAV format data scenario
```cpp
#include "Arduino.h"
#include "OledDisplay.h"
#include "AudioClassV2.h"

AudioClass& Audio = AudioClass::getInstance();
const int AUDIO_SIZE = 32000 * 3 + 45;

int lastButtonAState;
int buttonAState;
int lastButtonBState;
int buttonBState;
char *audioBuffer;
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
  audioBuffer = (char *)malloc(AUDIO_SIZE + 1);
  memset(audioBuffer, 0x0, AUDIO_SIZE);
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

  delay(10);
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
  Audio.setVolume(80);

  Serial.println("start recording");
  Screen.clean();
  Screen.print(0, "Start recording");

  // Start to record audio data
  Audio.startRecord(audioBuffer, AUDIO_SIZE);

  // Check whether the audio record is completed.
  while (digitalRead(USER_BUTTON_A) == LOW && Audio.getAudioState() == AUDIO_STATE_RECORDING)
  {
    delay(10);
  }
  Audio.stop();
  
  Screen.clean();
  Screen.print(0, "Finish recording");
  totalSize = Audio.getCurrentSize();
  Serial.print("Recorded size: ");
  Serial.println(totalSize);

  printIdleMessage();
}

void play()
{
  Screen.clean();
  Screen.print(0, "Start playing");
  Audio.startPlay(audioBuffer, totalSize);
  
  while (Audio.getAudioState() == AUDIO_STATE_PLAYING)
  {
    delay(10);
  }
  
  Screen.print(0, "Stop playing");
  printIdleMessage();
}
```