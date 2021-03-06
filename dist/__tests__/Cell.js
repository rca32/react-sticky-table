(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "enzyme-adapter-react-16", "chai", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("enzyme-adapter-react-16"), require("chai"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.enzymeAdapterReact16, global.chai, global.index);
    global.Cell = mod.exports;
  }
})(this, function (_react, _enzyme, _enzymeAdapterReact, _chai, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _enzymeAdapterReact = _interopRequireDefault(_enzymeAdapterReact);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact["default"]()
  });
  describe('Cell', function () {
    it('should render children properly', function () {
      var cell = (0, _enzyme.mount)(
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null,
      /*#__PURE__*/
      _react["default"].createElement("span", null),
      /*#__PURE__*/
      _react["default"].createElement("span", null)));
      (0, _chai.expect)(cell.find(_index.Cell).find('span')).to.have.length(2);
    });
  });
});