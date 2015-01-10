var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 400,
    height = 400,
    first = [0, 0, width, height],
    gen = 0;
canvas.width = width;
canvas.height = height;

function tile(a) {
    ctx.beginPath();
    ctx.rect(a[0], a[1], a[2], a[3]);
    ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
    ctx.fill();
}

function split(a) { //Math.random() * (550 - 450) + 450; //45-55%
    function cut(a) {
        //var c1 = a.map(function (x) {
        //   return x;
        //});
        var c1 = a.slice(0, 4);
        var c2 = [];
        if (c1[2] > c1[3]) {
            var newX = Math.round(Math.random() * (a[2] * 0.1) + a[2] * 0.45);
            c1[2] = newX;
            c2 = [a[0] + 5 + newX, a[1], a[2] - newX - 5, a[3]];
        } else {
            var newY = Math.round(Math.random() * (a[3] * 0.1) + a[3] * 0.45);
            c1[3] = newY;
            c2 = [a[0], a[1] + 5 + newY, a[2], a[3] - newY - 5];
        }
        return (((c1[2] && c1[3]) > 40) && ((c2[2] && c2[3]) > 40)) ? [c1, c2] : a;
    }
    var a2 = a.map(function (x) {
        return cut(x);
    });
    gen++;
    return (gen < 1 ? split(a2.reduce(function (a, b) {
        return a.concat(b);
    })) : gen = 0 && a2); //gen = 0;
} //end of split()

function update() {
    ctx.clearRect(0, 0, width, height);
    //alert(split(first));
    //grid
    for (var i = 0; i < width; i += 40) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255, 0.2)";
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.moveTo(0, i); //ehh?
        ctx.lineTo(width, i);
        ctx.stroke();
        ctx.closePath();
    }
    tile([0,0,Math.random() * 400,100]);
    //requestAnimationFrame(update);
}
update();
