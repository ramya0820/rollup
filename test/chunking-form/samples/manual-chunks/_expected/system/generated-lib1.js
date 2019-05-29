System.register([], function (exports) {
  'use strict';
  return {
    execute: function () {

      exports('a', fn);

      function fn () {
        console.log('lib1 fn');
      }

    }
  };
});
