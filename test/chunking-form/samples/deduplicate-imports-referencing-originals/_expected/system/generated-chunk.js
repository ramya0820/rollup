System.register([], function (exports) {
	'use strict';
	return {
		execute: function () {

			const foo = exports('a', {});

			exports('b', foo);

		}
	};
});
