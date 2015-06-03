"use strict";

var gutil = require('gulp-util');
var through = require('through');
var Buffer = require('buffer').Buffer;

module.exports = function(fileOptionsArray) {
    function bufferContents(file) {
        this.emit('data', file);
    }

    function endStream() {
        fileOptionsArray.forEach(function(fileOptions) {
            this.emit('data', new gutil.File({
                cwd: fileOptions.cwd || "",
                base: fileOptions.base || "",
                path: fileOptions.path,
                contents: new Buffer(fileOptions.contents)
            }));
        }.bind(this));

        this.emit('end');
    }

    return through(bufferContents, endStream);
};

