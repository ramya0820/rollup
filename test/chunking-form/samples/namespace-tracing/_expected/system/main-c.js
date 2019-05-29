System.register(['./generated-chunk.js', './generated-chunk3.js'], function () {
	'use strict';
	var broken, bar;
	return {
		setters: [function (module) {
			broken = module.a;
		}, function (module) {
			bar = module.a;
		}],
		execute: function () {

			bar();
			broken();

		}
	};
});
