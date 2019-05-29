System.register(['./chunk.js'], function () {
	'use strict';
	var shared;
	return {
		setters: [function (module) {
			shared = module.a;
		}],
		execute: function () {

			postMessage(`from worker: ${shared}`);

		}
	};
});
