System.register([], function (exports) {
	'use strict';
	return {
		execute: function () {

			const x = exports('a', 1);
			console.log('too large for grouping');

		}
	};
});
