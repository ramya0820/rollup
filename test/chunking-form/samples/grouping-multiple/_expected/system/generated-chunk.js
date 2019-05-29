System.register([], function (exports) {
	'use strict';
	return {
		execute: function () {

			const x = exports('a', 1);

			const y = exports('b', 2);

			const z = exports('c', 3);

		}
	};
});
