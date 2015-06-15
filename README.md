# gulp-add-file
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> add plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-add-file` as a development dependency:

```shell
npm install --save-dev gulp-add-file
```

Then, add it to your `gulpfile.js`:

```javascript
var addfile = require("gulp-add-file");

gulp.src("./src/**")
	.pipe(addfile({
        base: './src,
        path: './src/catalog.json'
        contents: JSON.stringify({build_date: new Date()},
    }))
	.pipe(gulp.dest("./dist"));
```

## API

### add(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-add-file
[npm-image]: https://badge.fury.io/js/gulp-add-file.png

[travis-url]: http://travis-ci.org/chrisdanford/gulp-add-file
[travis-image]: https://secure.travis-ci.org/chrisdanford/gulp-add-file.png?branch=master

[coveralls-url]: https://coveralls.io/r/chrisdanford/gulp-add-file
[coveralls-image]: https://coveralls.io/repos/chrisdanford/gulp-add-file/badge.png

[depstat-url]: https://david-dm.org/chrisdanford/gulp-add-file
[depstat-image]: https://david-dm.org/chrisdanford/gulp-add-file.png
