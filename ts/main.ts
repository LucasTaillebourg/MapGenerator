import { MapGeneratorPoint } from "./classes"

//ctrl + shift + b 

export class MapGenerator {
    private _context: CanvasRenderingContext2D
    private _canvas: HTMLCanvasElement
    private readonly _pointNumber = 50
    private readonly _rectSize = 500

    constructor(canvas: HTMLCanvasElement) { 
        this._canvas = canvas
        this._context = this._canvas.getContext('2d')
        window.requestAnimationFrame(() => this._draw())
    }
  
    private _draw() : void{
      // window.requestAnimationFrame(() => this.draw());

        let myPoints: MapGeneratorPoint[] = []
        //let voronoiBorders = [];
        
        //Seed de generation
        Math.random()

        this._context.beginPath()

        myPoints = this._generatePointsAndColor(this._rectSize,this._pointNumber)
        
        this._generateInfluenceZone(this._context, this._rectSize, myPoints)

        myPoints.forEach(function(pointComplet){
            // TODO
            //this._createPoint(pointComplet.point, this._context)
        })
    
    }

    private _generatePointsAndColor(rectSize,pointNumber): MapGeneratorPoint[]{
        let myPoints = [];

        //TODO refactor new class TS
        for(let i =0; i<pointNumber;i++){
            const x = Math.random() * rectSize;
            const y = Math.random() * rectSize;
            const pointtemp = {x:((x + "").split('.')[0]), y:((y+"").split('.')[0])};

            const Rtemp = ((Math.random() * 255)+"").split('.')[0]
            const Vtemp = ((Math.random() * 255)+"").split('.')[0]
            const Btemp = ((Math.random() * 255)+"").split('.')[0]
            const RVBtemp ={R:Rtemp,V:Vtemp,B:Btemp};
            let pointComplet = {point:pointtemp, rvb:RVBtemp}
            myPoints.push(pointComplet)
        }

        return myPoints
    }

    private _generateInfluenceZone(ctx, rectSize, myPoints){
        //TODO refactor new class TS
        for(let i = 0; i<rectSize;i++){
            for(let j = 0; j<rectSize;j++){
                let plusprochePoint;
                let distance=10000000;
                myPoints.forEach(function(pointComplet){
                    let dist = Math.abs(Math.sqrt(Math.pow(i-pointComplet.point.x,2)+Math.pow(j-pointComplet.point.y,2)))
                    if(dist<=distance){
                        distance=dist;
                        plusprochePoint = pointComplet;
                    }
                })
                ctx.strokeRect(i,j ,0,0);
                ctx.fillStyle = 'rgb('+plusprochePoint.rvb.R+', '+plusprochePoint.rvb.V+', '+plusprochePoint.rvb.B+')';

                ctx.fillRect(i ,j ,1,1);
            }
        }
    }

    private _createPoint(point, ctx){
        ctx.strokeRect(point.x,point.y ,1,1);
        ctx.fillRect(point.x ,point.y ,1,1);
    }

}
  
// Below is the way to call animation
const canvas = <HTMLCanvasElement>document.getElementById('map');
const mapGenerator: MapGenerator = new MapGenerator(canvas);

