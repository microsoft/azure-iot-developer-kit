# ----------------------------------------------------------------------------
#  Copyright (C) Microsoft. All rights reserved.
#  Licensed under the MIT license.
# ----------------------------------------------------------------------------

import os
import binascii
import struct
import shutil
import inspect
import sys

def binary_hook(binf, outf):
    with open(binf,'rb') as f:
        appbin = f.read()
    with open('boot.bin', 'rb') as f:
        bootbin = f.read()
    with open(outf ,'wb') as f:
        f.write(bootbin + ('\xFF' * (0xc000 - len(bootbin))) + appbin)

if __name__ == '__main__':
    binary_hook(sys.argv[1], sys.argv[2])