System.register(['./generated-chunk.js'], function (exports) {
  'use strict';
  return {
    setters: [function () {}],
    execute: function () {

      exports('a', foo);

      function foo() {
        console.log('foo');
      }

    }
  };
});
