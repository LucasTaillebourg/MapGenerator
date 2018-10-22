"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ctrl + shift + b 
var MapGenerator = /** @class */ (function () {
    function MapGenerator(canvas) {
        var _this = this;
        this._pointNumber = 50;
        this._rectSize = 500;
        this._canvas = canvas;
        this._context = this._canvas.getContext('2d');
        window.requestAnimationFrame(function () { return _this._draw(); });
    }
    MapGenerator.prototype._draw = function () {
        // window.requestAnimationFrame(() => this.draw());
        var myPoints = [];
        //let voronoiBorders = [];
        //Seed de generation
        Math.random();
        this._context.beginPath();
        myPoints = this._generatePointsAndColor(this._rectSize, this._pointNumber);
        this._generateInfluenceZone(this._context, this._rectSize, myPoints);
        myPoints.forEach(function (pointComplet) {
            // TODO
            //this._createPoint(pointComplet.point, this._context)
        });
    };
    MapGenerator.prototype._generatePointsAndColor = function (rectSize, pointNumber) {
        var myPoints = [];
        //TODO refactor new class TS
        for (var i = 0; i < pointNumber; i++) {
            var x = Math.random() * rectSize;
            var y = Math.random() * rectSize;
            var pointtemp = { x: ((x + "").split('.')[0]), y: ((y + "").split('.')[0]) };
            var Rtemp = ((Math.random() * 255) + "").split('.')[0];
            var Vtemp = ((Math.random() * 255) + "").split('.')[0];
            var Btemp = ((Math.random() * 255) + "").split('.')[0];
            var RVBtemp = { R: Rtemp, V: Vtemp, B: Btemp };
            var pointComplet = { point: pointtemp, rvb: RVBtemp };
            myPoints.push(pointComplet);
        }
        return myPoints;
    };
    MapGenerator.prototype._generateInfluenceZone = function (ctx, rectSize, myPoints) {
        var _loop_1 = function (i) {
            var _loop_2 = function (j) {
                var plusprochePoint;
                var distance = 10000000;
                myPoints.forEach(function (pointComplet) {
                    var dist = Math.abs(Math.sqrt(Math.pow(i - pointComplet.point.x, 2) + Math.pow(j - pointComplet.point.y, 2)));
                    if (dist <= distance) {
                        distance = dist;
                        plusprochePoint = pointComplet;
                    }
                });
                ctx.strokeRect(i, j, 0, 0);
                ctx.fillStyle = 'rgb(' + plusprochePoint.rvb.R + ', ' + plusprochePoint.rvb.V + ', ' + plusprochePoint.rvb.B + ')';
                ctx.fillRect(i, j, 1, 1);
            };
            for (var j = 0; j < rectSize; j++) {
                _loop_2(j);
            }
        };
        //TODO refactor new class TS
        for (var i = 0; i < rectSize; i++) {
            _loop_1(i);
        }
    };
    MapGenerator.prototype._createPoint = function (point, ctx) {
        ctx.strokeRect(point.x, point.y, 1, 1);
        ctx.fillRect(point.x, point.y, 1, 1);
    };
    return MapGenerator;
}());
exports.MapGenerator = MapGenerator;
// Below is the way to call animation
var canvas = document.getElementById('map');
var mapGenerator = new MapGenerator(canvas);
//# sourceMappingURL=main.js.map