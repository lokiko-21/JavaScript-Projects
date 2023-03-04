function loaded() {

    let canvas = document.getElementById("drawing");
    let ctx = canvas.getContext("2d")

    //GRADIENT
    var grd = ctx.createLinearGradient(0, 0, 1600, 800);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 1600, 800);


    //LINES GOING ACCROSS CANVAS
    ctx.moveTo(0, 0);
    ctx.lineTo(1600, 800);
    ctx.moveTo(0, 800);
    ctx.lineTo(1600, 0);
    ctx.moveTo(800, 0);
    ctx.lineTo(800, 800);
    ctx.moveTo(0, 400);
    ctx.lineTo(1600, 400);
    ctx.stroke();

}