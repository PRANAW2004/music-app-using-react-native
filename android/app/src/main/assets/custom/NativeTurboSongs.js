"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var SortSongOrder = /*#__PURE__*/function (SortSongOrder) {
  SortSongOrder["ASC"] = "ASC";
  SortSongOrder["DESC"] = "DESC";
  return SortSongOrder;
}(SortSongOrder || {});
var SortSongFields = /*#__PURE__*/function (SortSongFields) {
  SortSongFields["TITLE"] = "TITLE";
  SortSongFields["DURATION"] = "DURATION";
  SortSongFields["ARTIST"] = "ARTIST";
  SortSongFields["GENRE"] = "GENRE";
  SortSongFields["ALBUM"] = "ALBUM";
  SortSongFields["DATE_ADDED"] = "DATE_ADDED";
  return SortSongFields;
}(SortSongFields || {});
var _default = exports.default = _reactNative.TurboModuleRegistry.getEnforcing('TurboSongs');
//# sourceMappingURL=NativeTurboSongs.js.map