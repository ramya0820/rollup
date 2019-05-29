System.register(['./generated-chunk.js'], function () {
	'use strict';
	var value;
	return {
		setters: [function (module) {
			value = module.a;
		}],
		execute: function () {

			console.log('main', value);

		}
	};
});
