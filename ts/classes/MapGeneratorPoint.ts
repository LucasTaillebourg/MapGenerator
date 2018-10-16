import {MapGeneratorRVB} from "./MapGeneratorRVB"

export class MapGeneratorPoint {
    private _x :number;
    private _y :number;
    private _color : MapGeneratorRVB;


    constructor(x: number,y : number, color: MapGeneratorRVB) {
        this._x = x;
        this._y = y;
        this._color = color;
    }

    set color(color: MapGeneratorRVB){
        this._color = color;
    }
}