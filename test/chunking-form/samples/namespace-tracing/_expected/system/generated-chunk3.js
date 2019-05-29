System.register(['./generated-chunk.js'], function (exports) {
  'use strict';
  return {
    setters: [function () {}],
    execute: function () {

      exports('a', bar);

      function bar() {
        console.log('bar');
      }

    }
  };
});
