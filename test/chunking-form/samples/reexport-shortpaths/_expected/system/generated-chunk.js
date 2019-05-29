System.register([], function (exports) {
	'use strict';
	return {
		execute: function () {

			exports('a', foo);

			function foo() {}

		}
	};
});
