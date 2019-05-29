System.register(['./generated-chunk.js'], function () {
	'use strict';
	var foo, bar;
	return {
		setters: [function (module) {
			foo = module.a;
			bar = module.b;
		}],
		execute: function () {

			console.log(foo(), bar());

		}
	};
});
