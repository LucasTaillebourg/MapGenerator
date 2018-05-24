const mapGenerator = {};

window.mapGenerator = mapGenerator;

    class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    }

    class Vertice {
    constructor(head,tail) {
        this.head = head;
        this.tail = tail;
    }

    hasToLeft(point)
    {
        if(head.x == tail.x)
            return (this.head.y-this.tail.y)*(point.x-this.head.x) > 0;
        else
        {
            //return(this.head.x-this.tail.x)*(this.tail.y + 
            return((this.tail.y + (point.x - this.tail.x)*((this.head.y - this.tail.y)/(this.head.x - this.tail.x)) - point.y)*(this.head.x - this.tail.x));
        }
    }
    }

    class PolygoneConvexe {
    constructor(sommets) {
        this.sommets = sommets;
        this.currentSummit = 0;
    }
 
    currentSummit() {
        return sommets[this.currentSummit];
    }

    nextSummit() {
        if(this.currentSummit + 1 == sommets.length)
            this.currentSummit = 0;
        else 
            this.currentSummit++;
    }

    currentVertice()
    {
        return new Vertice(this.sommets[this.currentSummit], this.sommets[this.currentSummit + 1]);
    }

    contains(point)
    {
        return true;
    }
    }

(function(){
    function draw() {
        let myPoints = [];
        let voronoiBorders = [];
        const canvas = document.getElementById('tutorial');
        const ctx = canvas.getContext('2d');
        const pointNumber = 50;
        const rectSize = 500;
        
        //Seed de generation
        Math.seedrandom('coucou');

        ctx.beginPath();

        myPoints = generatePointsAndColor(rectSize,pointNumber);
        
        generateInfluenceZone(ctx, rectSize, myPoints)
        

        myPoints.forEach(function(pointComplet){
            createPoint(pointComplet.point, ctx)
        })
        
    
    }

    function createPoint(point, ctx){
        ctx.strokeRect(point.x,point.y ,1,1);
        ctx.fillRect(point.x ,point.y ,1,1);
    }

    function generatePointsAndColor(rectSize,pointNumber){
        let myPoints = [];

        for(let i =0; i<pointNumber;i++){
            const x = Math.random() * rectSize;
            const y = Math.random() * rectSize;
            const pointtemp = {x:((x + "").split('.')[0]), y:((y+"").split('.')[0])};

            const Rtemp = ((Math.random() * 255)+"").split('.')[0]
            const Vtemp = ((Math.random() * 255)+"").split('.')[0]
            const Btemp = ((Math.random() * 255)+"").split('.')[0]
            const RVBtemp ={R:Rtemp,V:Vtemp,B:Btemp};
            pointComplet = {point:pointtemp, rvb:RVBtemp}
            myPoints.push(pointComplet)
        }

        return myPoints
    }

    function generateInfluenceZone(ctx, rectSize, myPoints){
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

    function generateVoronoiBorders(myPoints, rectSize){
        return 1;
    }


    mapGenerator.draw = draw;
})();

