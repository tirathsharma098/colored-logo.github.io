//javascript code for my first logo 

//Here global variables to change the color of rectangle comes
/*
setInterval(rN, 500);
var elem = document.getElementById("test");
var i = 0;         */

//Here Global variables move the rectangle comes.
/*
var leftv = 0;
var elem = document.getElementById("test");
var id = setInterval(rightmove, 10);
*/
//here global variables to change the color of all disc comes.
setInterval(disc1,500);
var elemdisc1 = document.getElementById("disc1");

setInterval(disc2,500);
var elemdisc2 = document.getElementById("disc2");

setInterval(disc3,500);
var elemdisc3 = document.getElementById("disc3");

setInterval(disc4,500);
var elemdisc4 = document.getElementById("disc4");

setInterval(disc5,500);
var elemdisc5 = document.getElementById("disc5");

//Here function declaration to change the color of rectangle comes.
/*
function rN(){
var rNumber;
var a = Math.random()*10;
var b = Math.random()*10;
var c = 0;

a = Math.floor(a);
b = Math.floor(b);

while(a>3){
a = Math.random()*10;
a = Math.floor(a);
}

rNumber = a+""+b+""+c;
rNumber = Number(rNumber);

if(rNumber>360){
while(b>6){
b = Math.random()*10;
b = Math.floor(a);
}
rNumber = a+""+b+""+c;
rNumber = Number(rNumber);
}
elem.style.backgroundColor = "hsl("+ rNumber + ", 100% , 50%)";
}
*/
//Here animation to move an rectangle is started
//Fucnction Execution is started
/*
function rightmove(){
if(leftv==500)
{
var di = setInterval(leftmove,10)
function leftmove(){
if(leftv==0){
clearInterval(di);
clearInterval(id);
id = setInterval(rightmove, 10);
}
else{
leftv--;
elem.style.left = leftv+"px";
}
}

}
else{
leftv++;
elem.style.left = leftv+"px";
}
}
*/
//Here function to change color of first disc comes.

function disc1(){
var rNumber;
var a = Math.random()*10;
var b = Math.random()*10;
var c = 0;

a = Math.floor(a);
b = Math.floor(b);

while(a>3){
a = Math.random()*10;
a = Math.floor(a);
}

rNumber = a+""+b+""+c;
rNumber = Number(rNumber);

if(rNumber>360){
while(b>6){
b = Math.random()*10;
b = Math.floor(a);
}
rNumber = a+""+b+""+c;
rNumber = Number(rNumber);
}
elemdisc1.style.backgroundColor = "hsl("+ rNumber + ", 100% , 50%)";
}

//Here function to change color of second disc comes.

function disc2(){
var rNumber;
var a = Math.random()*10;
var b = Math.random()*10;
var c = 0;

a = Math.floor(a);
b = Math.floor(b);

while(a>3){
a = Math.random()*10;
a = Math.floor(a);
}

rNumber = a+""+b+""+c;
rNumber = Number(rNumber);

if(rNumber>360){
while(b>6){
b = Math.random()*10;
b = Math.floor(a);
}
rNumber = a+""+b+""+c;
rNumber = Number(rNumber);
}
elemdisc2.style.backgroundColor = "hsl("+ rNumber + ", 100% , 50%)";
}

//Here function to change color of third disc comes.

function disc3(){
var rNumber;
var a = Math.random()*10;
var b = Math.random()*10;
var c = 0;

a = Math.floor(a);
b = Math.floor(b);

while(a>3){
a = Math.random()*10;
a = Math.floor(a);
}

rNumber = a+""+b+""+c;
rNumber = Number(rNumber);

if(rNumber>360){
while(b>6){
b = Math.random()*10;
b = Math.floor(a);
}
rNumber = a+""+b+""+c;
rNumber = Number(rNumber);
}
elemdisc3.style.backgroundColor = "hsl("+ rNumber + ", 100% , 50%)";
}

//Here function to change color of fourth disc comes.

function disc4(){
var rNumber;
var a = Math.random()*10;
var b = Math.random()*10;
var c = 0;

a = Math.floor(a);
b = Math.floor(b);

while(a>3){
a = Math.random()*10;
a = Math.floor(a);
}

rNumber = a+""+b+""+c;
rNumber = Number(rNumber);

if(rNumber>360){
while(b>6){
b = Math.random()*10;
b = Math.floor(a);
}
rNumber = a+""+b+""+c;
rNumber = Number(rNumber);
}
elemdisc4.style.backgroundColor = "hsl("+ rNumber + ", 100% , 50%)";
}

//Here function to change color of fifth disc comes.

function disc5(){
var rNumber;
var a = Math.random()*10;
var b = Math.random()*10;
var c = 0;

a = Math.floor(a);
b = Math.floor(b);

while(a>3){
a = Math.random()*10;
a = Math.floor(a);
}

rNumber = a+""+b+""+c;
rNumber = Number(rNumber);

if(rNumber>360){
while(b>6){
b = Math.random()*10;
b = Math.floor(a);
}
rNumber = a+""+b+""+c;
rNumber = Number(rNumber);
}
elemdisc5.style.backgroundColor = "hsl("+ rNumber + ", 100% , 50%)";
}