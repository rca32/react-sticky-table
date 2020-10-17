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
    global.index = mod.exports;
  }
})(this, function (_react, _enzyme, _enzymeAdapterReact, _chai, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _enzymeAdapterReact = _interopRequireDefault(_enzymeAdapterReact);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  (0, _enzyme.configure)({
    adapter: new _enzymeAdapterReact["default"]()
  });
  describe('StickyTable', function () {
    it('should render the correct number of children', function () {
      var table = (0, _enzyme.mount)(
      /*#__PURE__*/
      _react["default"].createElement(_index.StickyTable, {
        leftStickyColumnCount: 1
      },
      /*#__PURE__*/
      _react["default"].createElement(_index.Row, null,
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 1"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 2")),
      /*#__PURE__*/
      _react["default"].createElement(_index.Row, null,
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "column 1 cell"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "column 2 cell"))));
      (0, _chai.expect)(table.find(_index.Cell)).to.have.length(4);
    });
    it('shouldn\'t render columns when opting out', function () {
      var table = (0, _enzyme.mount)(
      /*#__PURE__*/
      _react["default"].createElement(_index.StickyTable, {
        leftStickyColumnCount: 0
      },
      /*#__PURE__*/
      _react["default"].createElement(_index.Row, null,
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 1"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 2")),
      /*#__PURE__*/
      _react["default"].createElement(_index.Row, null,
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "column 1 cell"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "column 2 cell"))));
      (0, _chai.expect)(table.find(_index.Cell)).to.have.length(4);
    });
    it('should render the correct number of leftStickyColumnCount', function () {
      var table = (0, _enzyme.mount)(
      /*#__PURE__*/
      _react["default"].createElement(_index.StickyTable, {
        leftStickyColumnCount: 3
      },
      /*#__PURE__*/
      _react["default"].createElement(_index.Row, null,
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 1"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 2"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 3"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 4")),
      /*#__PURE__*/
      _react["default"].createElement(_index.Row, null,
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "column 1 cell"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "column 2 cell"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "column 3 cell"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "column 4 cell"))));
      (0, _chai.expect)(table.find(_index.Cell)).to.have.length(8);
    });
    it('shouldn\'t render headers when opting out', function () {
      var table = (0, _enzyme.mount)(
      /*#__PURE__*/
      _react["default"].createElement(_index.StickyTable, {
        leftStickyColumnCount: 1,
        stickyHeaderCount: 0
      },
      /*#__PURE__*/
      _react["default"].createElement(_index.Row, null,
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 1"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 2")),
      /*#__PURE__*/
      _react["default"].createElement(_index.Row, null,
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "column 1 cell"),
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "column 2 cell"))));
      (0, _chai.expect)(table.find(_index.Cell)).to.have.length(4);
    });
    it('should support sibling components and arrays', function () {
      var table = (0, _enzyme.mount)(
      /*#__PURE__*/
      _react["default"].createElement(_index.StickyTable, {
        leftStickyColumnCount: 1
      },
      /*#__PURE__*/
      _react["default"].createElement(_index.Row, null,
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, null, "header 1"), [
      /*#__PURE__*/
      _react["default"].createElement(_index.Cell, {
        key: 1
      }, "header 2")])));
      (0, _chai.expect)(table.find(_index.Cell)).to.have.length(2);
    });
  });
});