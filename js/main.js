function draw() {
    var myPoints = [];
    var myLines = [];
    var canvas = document.getElementById('tutorial');
    var ctx = canvas.getContext('2d');

    var pointNumber = 500;
    var rectSize = 500;

    ctx.beginPath();

    //Création des points
    for(var i =0; i<pointNumber;i++){
        var x = Math.random() * rectSize;
        var y = Math.random() * rectSize;
        var pointtemp = {x:((x + "").split('.')[0]), y:((y+"").split('.')[0])};

        var Rtemp = ((Math.random() * 255)+"").split('.')[0]
        var Vtemp = ((Math.random() * 255)+"").split('.')[0]
        var Btemp = ((Math.random() * 255)+"").split('.')[0]
        var RVBtemp ={R:Rtemp,V:Vtemp,B:Btemp};
        pointComplet = {point:pointtemp, rvb:RVBtemp}
        myPoints.push(pointComplet)

        //create point
        ctx.strokeRect(pointtemp.x,pointtemp.y ,1,1);
        ctx.fillRect(pointtemp.x ,pointtemp.y ,1,1);
    }


    for(var i = 0; i<rectSize;i++){
        for(var j = 0; j<rectSize;j++){
            var plusprochePoint;
            var distance=10000000;
            myPoints.forEach(function(pointComplet){
                var dist = Math.abs(Math.sqrt(Math.pow(i-pointComplet.point.x,2)+Math.pow(j-pointComplet.point.y,2)))
                if(dist<=distance){
                    distance=dist;
                    plusprochePoint = pointComplet;
                }
            })
            ctx.strokeRect(i,j ,0,0);
            ctx.fillStyle = 'rgb('+plusprochePoint.rvb.R+', '+plusprochePoint.rvb.V+', '+plusprochePoint.rvb.B+')';
            //ctx.fillStyle = 'rgb(255,255,255)';

            ctx.fillRect(i ,j ,1,1);
        }
    }
    ctx.stroke();
}
