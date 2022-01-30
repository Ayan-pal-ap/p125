leftHandx=0;
leftHandy=0;
rightHandx=0;
rightHandy=0;
difference=0;

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(750,260);
    video=createCapture(VIDEO);
 poseNet= ml5.poseNet(video,modalLoaded);
 poseNet.on('pose',gotposes);
}
function modalLoaded(){
    console.log("p is working");
}
function gotposes(result){
if(result.length>0){
    console.log(result);
    leftHandx=result[0].pose.leftWrist.x;
    rightHandx=result[0].pose.rightWrist.x;
    difference=floor(leftHandx-rightHandx);
}
}
function draw(){
    background("#f21621");
    textSize(difference);
    fill("#6d32a8");
    text("Ayan",50,400);
}
