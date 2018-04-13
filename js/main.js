function draw() {
    var myPoints = [];
    var canvas = document.getElementById('tutorial');
    var ctx = canvas.getContext('2d');

    var pointNumber = 500;
    var rectSize = 500;

    for(var i =0; i<pointNumber;i++){
        var rand1 = Math.random();
        var rand2 = Math.random();
        var point = {x:rand1, y:rand2};

        myPoints.push(point)
    }

    ctx.beginPath();
    myPoints.forEach(function (point) {
        ctx.strokeRect(point.x * rectSize,point.y * rectSize,1,1);
        ctx.fillRect(point.x * rectSize,point.y * rectSize,1,1);
    });
    ctx.stroke();
    
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
    }
}
