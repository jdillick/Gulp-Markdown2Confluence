# gulp-markdown2confluence

> Markdown to Confluence with [markdown2confluence](https://github.com/chunpu/markdown2confluence)

*Issues with the output should be reported on the markdown2confluence [issue tracker](https://github.com/chunpu/markdown2confluence/issues).*


## Install

```
$ npm install --save-dev gulp-markdown2confluence
```


## Usage

``` js
var gulp = require('gulp');
var markdown = require('gulp-markdown2confluence');

gulp.task('default', function () {
	return gulp.src('index.md')
		.pipe(markdown())
		.pipe(gulp.dest('confluence'));
});
```

## License

MIT
