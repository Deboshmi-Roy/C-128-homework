song= "";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video,0,0,600,500);
}
function play() {
   song.play(); 
   song.setVolume(1);
   song.rate(1);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized')
}
function gotPoses(results)
{
    if(results.length> 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftwrist.x;
        leftWristY = results[0].pose.leftwrist.y;
        console.log("leftWristX=" +"leftWristY ="+ leftWristY);
        
        
        rightWristX = results[0].pose.rightwrist.x;
        rightWristY = results[0].pose.rightwrist.y;
        console.log("rightWristX=" +"rightWristY ="+ rightWristY);
    }
}