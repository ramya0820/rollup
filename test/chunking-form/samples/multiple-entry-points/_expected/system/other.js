System.register(['./chunks/chunk.js'], function (exports) {
	'use strict';
	return {
		setters: [function (module) {
			exports('sharedValue', module.a);
		}],
		execute: function () {



		}
	};
});
