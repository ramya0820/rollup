System.register(['./generated-chunk.js'], function (exports) {
	'use strict';
	var x, z;
	return {
		setters: [function (module) {
			x = module.a;
			z = module.c;
		}],
		execute: function () {

			var main2 = exports('default', x + z);

		}
	};
});
