var teclas = 
{
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};

//document.addEventListener("keydown",dibujarTeclado);
document.addEventListener("mousedown",dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
dibujarLinea("red",x-1,y-1,x+1,y+1,papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath(); 
}

/*function dibujarTeclado(eventox)
{
    var colorcito = "brown";
    var movimiento = 5;
    switch(eventox.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
            y = y-movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
            y = y+movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
            x = x-movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
            x = x+movimiento;
            break;            
    }
}*/

function dibujarMouse(evento)
{
    var colorcito = "brown";
    dibujarLinea(colorcito,x,y,evento.x,evento.y,papel);
    //console.log(evento);
}