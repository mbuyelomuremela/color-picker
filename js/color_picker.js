
const display_color = document.getElementById("dsp-color");
const txt_color = document.getElementById("txt-color");

const btn_yellow = document.getElementById('btn-yellow');
const btn_red= document.getElementById('btn-red');
const btn_blue = document.getElementById('btn-blue');
const btn_purple = document.getElementById('btn-purple');
const btn_brown = document.getElementById('btn-brown');

btn_yellow.addEventListener("click",display_yellow,false);
btn_red.addEventListener("click",display_red,false);
btn_blue.addEventListener("click",display_blue,false);
btn_purple.addEventListener("click",display_purple,false);
btn_brown.addEventListener("click",display_brown,false);

function change_color(color)
{
    txt_color.textContent = color;
    display_color.style.backgroundColor = color
    display_color.style.height = '400px';
    display_color.style.paddingTop = "100px";
    display_color.style.marginTop = "7px"
}

function display_yellow()
{
    change_color("yellow");
}

function display_red()
{
    change_color("red");
}

function display_blue()
{
    change_color("blue");
}

function display_purple()
{
    change_color("purple");
}

function display_brown()
{
    change_color("brown");
}