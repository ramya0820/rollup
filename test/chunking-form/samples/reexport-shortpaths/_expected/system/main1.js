System.register(['./generated-chunk.js'], function (exports) {
	'use strict';
	var foo;
	return {
		setters: [function (module) {
			foo = module.a;
		}],
		execute: function () {

			exports('default', foo);

		}
	};
});
