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
    global.Table = mod.exports;
  }
})(this, function (_react, _enzyme, _enzymeAdapterReact, _chai, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _enzymeAdapterReact = _interopRequireDefault(_enzymeAdapterReact);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact["default"]()
  });
  describe('Table', function () {
    it('should render children properly', function () {
      var table = (0, _enzyme.mount)(
      /*#__PURE__*/
      _react["default"].createElement(_index.Table, null,
      /*#__PURE__*/
      _react["default"].createElement(_index.Row, null,
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 1"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 2"))));
      (0, _chai.expect)(table.find(_index.Row)).to.have.length(1);
      (0, _chai.expect)(table.find(_index.Cell)).to.have.length(2);
    });
  });
});