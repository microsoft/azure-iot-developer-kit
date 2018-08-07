---
title: "FileSystem"
permalink: /docs/apis/file-system/
excerpt: "Library for FileSystem on AZ3166"
last_modified_at: 2018-01-09T05:16:34-04:00
---

The FATFileSystem class implemented on mbed OS APIs, provides the core API for file system operations on IoT DevKit. The SFlashBlockDevice class provides the underlying API for representing block-based storage that can be used to back a file system.
For more information about File System, please visit [MbedOS](https://docs.mbed.com/docs/mbed-os-api-reference/en/latest/APIs/storage/filesystem/){:target="_blank"}

## Assembly

FATFileSystem.h

SFlashBlockDevice.h

fatfs_exfuns.h

## Summary


| Constructors |
| :----------- |
| [FATFileSystem](#FATFileSystem) - `FATFileSystem (const char *name = NULL, BlockDevice *bd = NULL) ` |

| Methods |
| :------ |
| [format](#format) - `static int format(BlockDevice *bd, int allocation_unit = 0)` |
| [mount(BlockDevice *)](#mount(BlockDevice *)) - `virtual int mount(BlockDevice *bd)` |
| [mount(BlockDevice *, bool)](#mount(BlockDevice *, bool)) - `virtual int mount(BlockDevice *bd, bool force)` |
| [unmount](#unmount) - `virtual int unmount()` |
| [remove](#remove) - `virtual int remove(const char *path)` |
| [rename](#rename) - `virtual int rename(const char *path, const char *newpath)` |
| [stat](#stat) - `virtual int stat(const char *path, struct stat *st)` |
| [mkdir](#mkdir) - `virtual int mkdir(const char *path, mode_t mode)` |

| Extended Methods |
| :------ |
| [fatfs_get_info](#fatfs_get_info) - `filesystem_info fatfs_get_info()` |

## Constructors

### FATFileSystem

```cpp
FATFileSystem (const char *name = NULL, BlockDevice *bd = NULL)
```
> #### Parameters

> 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char * | name | Name to add filesystem to tree. | 
> | BlockDevice | bd | BlockDevice to mount, could be passed in to avoid mount() call | 
> 


## Methods

### format

```cpp
static int format(BlockDevice *bd, int allocation_unit = 0)
```
> Formats a logical drive, FDISK partitioning rule. The block device to format should be mounted when this function is called.

> #### Parameters

> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | BlockDevice | bd | Block device that will be formated. | 
> | int | allocation_unit | This is the number of bytes per cluster size.The valid value is N times the sector size. If zero is given, the default allocation unit size is selected by the underlying filesystem, which depends on the volume size. | 
>  
> 
> #### Return value
> 
>  0 on success, negative error code on failure. 

### mount(BlockDevice *)

```cpp
virtual int mount(BlockDevice *bd)
```
> Mounts a filesystem to a block device.
>

> #### Parameters

> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | BlockDevice | bd | Block device that will be formated. | 
> 
> #### Return value
> 
>  0 on success, negative error code on failure. 


### mount(BlockDevice *, bool)

```cpp
virtual int mount(BlockDevice *bd, bool force)
```
> Mounts a filesystem to a block device.

> #### Parameters
 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | BlockDevice | bd | Block device that will be formated. | 
> | bool | force | Flag to force the underlying filesystem to force mounting the filesystem. | 
> 
> #### Return value
> 
>  0 on success, negative error code on failure. 


### unmount

```cpp
virtual int unmount();
```
> Unmounts a filesystem from the underlying block device.

> #### Return value
> 
>  0 on success, negative error code on failure.

### remove

```cpp
virtual int remove(const char *path)
```
> Remove a file from the filesystem.

> #### Parameters
 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char* | path | The name of the file to remove. |  
> 
> #### Return value
> 
>  0 on success, negative error code on failure. 

### rename

```cpp
virtual int rename(const char *path, const char *newpath);
```
> Rename a file in the filesystem.

> #### Parameters
 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char* | path | The name of the file to rename. |  
> | const char* | newpath | The name of the file to rename to. | 
> 
> #### Return value
> 
>  0 on success, negative error code on failure. 

### stat

```cpp
virtual int stat(const char *path, struct stat *st);
```
> Store information about the file in a stat structure.


> #### Parameters
 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char* | path | The name of the file to find information about. |  
> | struct stat * | st | The stat buffer to write to. | 
> 
> #### Return value
> 
>  0 on success, negative error code on failure. 

### mkdir

```cpp
virtual int mkdir(const char *path, mode_t mode);
```
> Create a directory in the filesystem.


> #### Parameters
 
> | Type | Name | Description |
> | :--- | :--- | :---------- |
> | const char* | path | The name of the directory to create. |  
> | mode_t | mode |The permissions with which to create the directory. | 
> 
> #### Return value
> 
>  0 on success, negative error code on failure. 

## Extended Methods

### fatfs_get_info

```cpp
filesystem_info fatfs_get_info()
```
> Get the information for file system.

> #### Return value
> 
>  file system information.
>```
>typedef struct _filesystem_info_t {
>  int total_space;
>  int free_space;
>  char unit;
>} filesystem_info;
>```

## Sample code

```cpp
#include "mbed.h"
#include "FATFileSystem.h"
#include "SFlashBlockDevice.h"
#include "fatfs_exfuns.h"
#include <stdio.h>
#include <errno.h>

SFlashBlockDevice bd;
FATFileSystem fs("fs");

void processError(int ret_val) {
  if (ret_val) {
    Serial.print("Failure.");
    Serial.println(ret_val);
  } else {
    Serial.println("done.");
  }
}

void processError(void* ret_val) {
  if (ret_val == NULL) {
    Serial.println(" Failure.");
  } else {
    Serial.println(" done.");
  }
}


void setup() {
  int error = 0;
  Serial.println("Welcome to the filesystem example.");

  // Format file system
  Serial.print("Formatting a FAT, RAM-backed filesystem.");
  error = FATFileSystem::format(&bd);
  processError(error);

  // Mount the file system
  Serial.print("Mounting the filesystem on \"/fs\".");
  error = fs.mount(&bd);
  processError(error);

  // Open file to write
  Serial.print("Opening a new file, numbers.txt.");
  FILE* fd = fopen("/fs/numbers.txt", "w");
  processError(fd);

  Serial.print("Writing decimal numbers 1~20 to a file.");
  for (int i = 0; i < 20; i++){
    fprintf(fd, "%d\r\n", i + 1);
  }
  Serial.print("done.\r\n");

  // Close file
  Serial.print("Closing file.");
  fclose(fd);
  Serial.print(" done.\r\n");

  // Re-open file to read
  Serial.print("Re-opening file read-only.");
  fd = fopen("/fs/numbers.txt", "r");
  processError(fd);

  Serial.print("Dumping file to screen.\r\n");
  delay(100);
  char buff[16] = {0};
  while (!feof(fd)){
    int size = fread(&buff[0], 1, 15, fd);
    fwrite(&buff[0], 1, size, stdout);
  }
  Serial.println("EOF.");

  Serial.print("Closing file.");
  fclose(fd);
  Serial.println(" done.");

  Serial.print("Opening root directory.");
  DIR* dir = opendir("/fs/");
  processError(fd);

  struct dirent* de;
  Serial.print("Printing all filenames:\r\n");
  while((de = readdir(dir)) != NULL){
    Serial.println(&(de->d_name)[0]);
  }

  Serial.print("Closeing root directory. ");
  error = closedir(dir);
  processError(error);

  Serial.println("FileSystem Demo complete.");
  filesystem_info info = fatfs_get_info();
  char buf[128];
  sprintf(buf, "Total drive space: %d %cB; free space :%d %cB\r\n", info.total_space, info.unit, info.free_space, info.unit);
  Serial.println(buf);
}

void loop() {
  // put your main code here, to run repeatedly:
  delay(1000);
}

```


