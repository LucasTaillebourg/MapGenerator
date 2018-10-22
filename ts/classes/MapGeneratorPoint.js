"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapGeneratorPoint = /** @class */ (function () {
    function MapGeneratorPoint(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;
    }
    Object.defineProperty(MapGeneratorPoint.prototype, "color", {
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    return MapGeneratorPoint;
}());
exports.MapGeneratorPoint = MapGeneratorPoint;
//# sourceMappingURL=MapGeneratorPoint.js.map