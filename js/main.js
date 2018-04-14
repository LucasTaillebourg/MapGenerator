function draw() {
    var myPoints = [];
    var myLines = [];
    var canvas = document.getElementById('tutorial');
    var ctx = canvas.getContext('2d');

    var pointNumber = 2;
    var rectSize = 500;

    //Création des points
    for(var i =0; i<pointNumber;i++){
        var rand1 = Math.random() * rectSize;
        var rand2 = Math.random() * rectSize;
        var point = {x:((rand1 + "").split('.')[0]), y:((rand2+"").split('.')[0])};

        myPoints.push(point)
    }

    //affichage des points
    ctx.beginPath();
    myPoints.forEach(function (point) {
        ctx.strokeRect(point.x,point.y ,1,1);
        ctx.fillRect(point.x ,point.y ,1,1);
    });
    
    //Calcul des frontières (voronoi)
    //i, ligne imaginaire qui parcours le rectangle de gauche à droite.
    
   for(var i = 0; i<rectSize;i++){
        myPoints.forEach(function(point){
            if(point.x == i){
                //A chaque fois que le balayage touche un point on calcule un truc (qui est pas voronoi pur le moment)
                var pointGaucheHaut = {x:0, y:0}
                var pointGaucheBas = {x:0, y:500}
                ctx.moveTo(point.x,point.y);
                ctx.lineTo(pointGaucheHaut.x ,pointGaucheHaut.y);
                ctx.moveTo(point.x,point.y);
                ctx.lineTo(pointGaucheBas.x ,pointGaucheBas.y);

                myLines.push(p1=point,p2=pointGaucheHaut)
                myLines.push(p1=point,p2=pointGaucheBas)

            }
        })
    }

    // y = (Ya -Yb / xa-xb) x + b
    // y2 = (Ya2 -Yb2 / xa2-xb2) x + b2
    //inter (Ya -Yb / xa-xb) x + b = (Ya2 -Yb2 / xa2-xb2) x + b2


    ctx.stroke();
}

function getFirstLineCross(myLines,point){
    return myLines.forEach(function (line){

        var pointGaucheHaut = {x:0, y:0}
        var pointGaucheBas = {x:0, y:500}

        l1 = {p1:point, pointGaucheHaut}
        l1 = {p1:point, pointGaucheBas}

        
        return "coucou";
    })
}