function preload(){

}
function setup(){
    canvas = createCanvas(450 , 450);
    canvas. position(110 , 250);
    video = createCapture(VIDEO);
    video.hide();
    
    tint_color ="";
}

function draw(){
    image(video,0,0,450,450);
    tint(tint_color);
}
function take_snapshot(){
    save("filterd_photo.png");
}

function filter_tint(){
    tint_color = document.getElementById("color").value;
}