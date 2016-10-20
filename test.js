'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var md2confluence = require('./');

it('should compile Markdown code block to Conflence codeblock', function (cb) {
	var stream = md2confluence();

	stream.once('data', function (file) {
		assert.equal(file.contents.toString(), '{code:html/xml}\n<span>Hello World</span>\n{code}\n\n');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		path: 'fixture.md',
		contents: new Buffer('``` html/xml\n<span>Hello World</span>\n```')
	}));

	stream.end();
});

it('should compile Markdown # Conflence h1.', function (cb) {
	var stream = md2confluence();

	stream.once('data', function (file) {
		assert.equal(file.contents.toString(), 'h1. Title\n\n');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		path: 'fixture.md',
		contents: new Buffer('# Title')
	}));

	stream.end();
});
