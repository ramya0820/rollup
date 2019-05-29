System.register(['./generated-chunk.js'], function (exports) {
  'use strict';
  var fn, text;
  return {
    setters: [function (module) {
      fn = module.c;
      text = module.d;
    }],
    execute: function () {

      class Main2 {
        constructor () {
          fn();
          console.log(text);
        }
      } exports('default', Main2);

    }
  };
});
