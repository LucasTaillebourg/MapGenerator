import {MapGeneratorPoint} from "./MapGeneratorPoint"
import {MapGeneratorRVB} from "./MapGeneratorRVB"

export class MapGeneratorPolygone {

    private _points: MapGeneratorPoint[];

    constructor(points:MapGeneratorPoint[]) {
        this._points = points;
    }

    public setColor(color :MapGeneratorRVB): void{
        this._points.forEach(point => {
            point.color = color;
        });
    }

    public addPoint(point: MapGeneratorPoint){
        this._points.push(point);
    }
}