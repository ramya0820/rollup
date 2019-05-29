System.register([], function (exports) {
  'use strict';
  return {
    execute: function () {

      exports('a', log);

      var dep = exports('b', { x: 42 });

      function log (x) {
        if (dep) {
          console.log(x);
        }
      }

    }
  };
});
