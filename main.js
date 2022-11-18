objectDetector="";
img="";
Objects=[];
status="";
function preload()
{
    ímg=loadImage("https://tse1.mm.bing.net/th?id=OIP.eTJC9lOTQs0Bj6r2x79SwQHaE7&pid=Api&P=0");
}
function setup()
{
    canvas=createCanvas(650,450);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="detectando objeto";
}
function modelLoaded()
{
    console.log("tu modelo se esta cargando")
}