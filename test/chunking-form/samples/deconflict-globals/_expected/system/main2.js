System.register(['./generated-chunk.js'], function () {
	'use strict';
	var x$1;
	return {
		setters: [function (module) {
			x$1 = module.a;
		}],
		execute: function () {

			console.log(x, x$1);

		}
	};
});
