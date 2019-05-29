System.register(['./generated-chunk.js'], function (exports) {
	'use strict';
	var d;
	return {
		setters: [function (module) {
			d = module.b;
		}],
		execute: function () {

			var main2 = exports('default', d.map(d => d + 2));

		}
	};
});
