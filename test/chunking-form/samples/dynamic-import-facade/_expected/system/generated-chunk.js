System.register([], function (exports) {
	'use strict';
	return {
		execute: function () {

			console.log('dep');

			const dep = exports('b', 'dep');

			console.log('dynamic', dep);
			const dynamic = exports('a', 'dynamic');

		}
	};
});
