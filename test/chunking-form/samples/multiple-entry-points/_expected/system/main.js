System.register(['./chunks/chunk.js'], function () {
	'use strict';
	var sharedValue;
	return {
		setters: [function (module) {
			sharedValue = module.a;
		}],
		execute: function () {

			assert.equal(sharedValue, 'shared');

		}
	};
});
