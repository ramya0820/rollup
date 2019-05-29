System.register([], function (exports) {
	'use strict';
	return {
		execute: function () {

			const foo = {};

			exports('a', foo);

			exports('b', foo);

		}
	};
});
