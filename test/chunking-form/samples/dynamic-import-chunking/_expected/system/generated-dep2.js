System.register(['./generated-chunk.js'], function (exports) {
  'use strict';
  var multiplier;
  return {
    setters: [function (module) {
      multiplier = module.a;
    }],
    execute: function () {

      exports('mult', mult);

      function mult (num) {
        return num + multiplier;
      }

    }
  };
});
