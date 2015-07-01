"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = (function () {
  function Person(name, logo) {
    _classCallCheck(this, Person);

    this.name = name;
    this.logo = logo;
  }

  _createClass(Person, [{
    key: "name",
    value: function name() {
      return this.name;
    }
  }, {
    key: "logo",
    value: function logo() {
      return this.logo;
    }
  }]);

  return Person;
})();

module.exports = Person;