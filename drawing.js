canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="red";
width="2"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("line_width").value;
    console.log(color);
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X= " +mouse_x,"Y= " +mouse_y);
    rectangle(mouse_x , mouse_y);
    circle(mouse_x , mouse_y);
    square(mouse_x , mouse_y);
    oval(mouse_x , mouse_y);
}

function circle(mouse_x , mouse_y)
{
    document.getElementById("circle").style.background="red";
    document.getElementById("oval").style.background="white";
    document.getElementById("triangle").style.background="white";
    document.getElementById("square").style.background="white";
    document.getElementById("rectangle").style.background="white";
    
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}

function oval(mouse_x , mouse_y)
{
    document.getElementById("circle").style.background="white";
    document.getElementById("oval").style.background="red";
    document.getElementById("triangle").style.background="white";
    document.getElementById("square").style.background="white";
    document.getElementById("rectangle").style.background="white";
    
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.oval(mouse_x,mouse_y,30,0,2*Math.PI);
ctx.stroke();
}

function square(mouse_x,mouse_y)
{
    document.getElementById("circle").style.background="white";
    document.getElementById("oval").style.background="white";
    document.getElementById("triangle").style.background="white";
    document.getElementById("square").style.background="red";
    document.getElementById("rectangle").style.background="white";
    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.square(mouse_x,mouse_y,50,50);
    ctx.stroke();
}

function rectangle(mouse_x,mouse_y)
{
    document.getElementById("circle").style.background="white";
    document.getElementById("oval").style.background="white";
    document.getElementById("triangle").style.background="white";
    document.getElementById("square").style.background="white";
    document.getElementById("rectangle").style.background="red";
    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.rect(mouse_x,mouse_y,70,50);
    ctx.stroke();
}

function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}