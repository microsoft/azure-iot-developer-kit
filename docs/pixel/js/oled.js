// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.

var Screen = function(canvas) {
    this.context = canvas.getContext('2d');
    this.scale = canvas.width / 128;
}

Screen.prototype.draw = function(x, y, x0, y0, bmp) {
    var w = x0 - x;
    for (var i = 0; i < bmp.length; i++) {
        var _y, _x = i % w + x, _p = bmp[i];

        for (var j = 0; j < 8; j++) {
            _y = (y + Math.floor(i / w)) * 8 + j;
            if (_y >= y0 * 8) {
                return;
            }

            if (_y >= 16) {
                this.context.fillStyle = '#00ffff';
            } else {
                this.context.fillStyle = '#ffc000';
            }

            if (_p % 2) {
                this.context.fillRect(_x * this.scale, _y * this.scale, this.scale, this.scale);
            } else {
                this.context.clearRect(_x * this.scale, _y * this.scale, this.scale, this.scale);
            }
            _p >>= 1;
        }
    }
}

Screen.prototype.clear = function() {
    this.context.clearRect(0, 0, 128 * this.scale, 64 * this.scale);
}