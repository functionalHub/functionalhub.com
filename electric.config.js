'use strict';

const clay = require('clay');
const gulp = require('gulp');
const path = require('path');

require('gulp-storage')(gulp);

gulp.storage.create('functionalhub', 'functionalhub.json');

var clayJSPath = path.join(clay.srcDir, 'js');

const clayPath = gulp.storage.get('clayPath');
let clayIncludePaths = clay.includePaths;

if (clayPath) {
	clayIncludePaths = path.join(path.join(process.cwd(), clayPath, 'src/scss'));

	console.log('Warning! using ' + clayIncludePaths + ' to compile sass.\nDelete functionalhub.json to reset.');
}

module.exports = {
	codeMirrorLanguages: ['xml', 'htmlmixed', 'soy'],
	metalComponents: ['electric-quartz-components'],
	sassOptions: {
		includePaths: ['node_modules', clayIncludePaths]
	},
	vendorSrc: [
		{
			src: [
				path.join(clayJSPath, 'bootstrap.js')
			]
		}
	]
};
