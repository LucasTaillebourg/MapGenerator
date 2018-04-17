const mapGenerator = {};

window.mapGenerator = mapGenerator;

(function(){
    function draw() {
        let myPoints = [];
        const canvas = document.getElementById('tutorial');
        const ctx = canvas.getContext('2d');
        const pointNumber = 500;
        const rectSize = 500;
        
        //Seed de generation
        Math.seedrandom('coucou');

        ctx.beginPath();

        myPoints = generatePointsAndColor(rectSize,pointNumber);
        
        generateInfluenceZone(ctx, rectSize, myPoints)
        

        myPoints.forEach(function(pointComplet){
            createPoint(pointComplet.point, ctx)
        })
        
        ctx.stroke();
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
    mapGenerator.draw = draw;
})();

