System.register(['./generated-chunk.js'], function (exports) {
	'use strict';
	var d;
	return {
		setters: [function (module) {
			d = module.a;
		}],
		execute: function () {

			var main1 = exports('default', d.map(d => d + 1));

		}
	};
});
