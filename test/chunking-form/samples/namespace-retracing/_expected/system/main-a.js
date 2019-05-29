System.register(['./generated-chunk.js'], function () {
	'use strict';
	var Other, Broken;
	return {
		setters: [function (module) {
			Other = module.a;
			Broken = module.b;
		}],
		execute: function () {

			Other.doSomething();
			Broken.doSomething();

		}
	};
});
