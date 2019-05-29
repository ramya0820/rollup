System.register(['./generated-chunk.js', './generated-chunk2.js'], function () {
	'use strict';
	var broken, foo;
	return {
		setters: [function (module) {
			broken = module.a;
		}, function (module) {
			foo = module.a;
		}],
		execute: function () {

			foo();
			broken();

		}
	};
});
