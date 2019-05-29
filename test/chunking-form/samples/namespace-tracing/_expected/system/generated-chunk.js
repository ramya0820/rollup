System.register([], function (exports) {
  'use strict';
  return {
    execute: function () {

      exports('a', broken);

      function broken() {
        console.log('broken');
      }

    }
  };
});
