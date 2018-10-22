"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapGeneratorPolygone = /** @class */ (function () {
    function MapGeneratorPolygone(points) {
        this._points = points;
    }
    MapGeneratorPolygone.prototype.setColor = function (color) {
        this._points.forEach(function (point) {
            point.color = color;
        });
    };
    MapGeneratorPolygone.prototype.addPoint = function (point) {
        this._points.push(point);
    };
    return MapGeneratorPolygone;
}());
exports.MapGeneratorPolygone = MapGeneratorPolygone;
//# sourceMappingURL=MapGeneratorPolygone.js.map