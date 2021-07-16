nozeX=0;
nozeY=0;
eyerX=0;
eyerY=0;
eyelX=0;
eyelX=0;

var pose;

function preload() {
    noze=loadImage("https://i2.wp.com/pngmart.com/files/4/Nose-PNG-HD.png");
    eyer=loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/361278d3-5928-4415-9310-340e27198a63/d9vbgyt-d7ec07d7-c839-4500-bc11-b0db770bc5a8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2MTI3OGQzLTU5MjgtNDQxNS05MzEwLTM0MGUyNzE5OGE2M1wvZDl2Ymd5dC1kN2VjMDdkNy1jODM5LTQ1MDAtYmMxMS1iMGRiNzcwYmM1YTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wVTcaFU4aHZe4KIm0Ptn2bVrJyC6Gs8rLlPQvud0n-c");
}

function setup() {
    canvas=createCanvas(300,300);
    vedio=createCapture(VIDEO);
    vedio.size(400,300);
    vedio.hide();

    poseNet=ml5.poseNet(vedio, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
    if (poses.length>0) {
        nozeX=poses[0].pose.nose.x;
        nozeY=poses[0].pose.nose.y;
        eyerX=poses[0].pose.rightEye.x;
        eyerY=poses[0].pose.rightEye.y;
    }
}

function modalLoaded() {
    console.log("Modal is Loaded");
}

function take_snapshot() {
    save("Fitlered_Image.png");
}

function draw() {
    image(vedio,0,0,300,300);
    image(noze,nozeX-55,nozeY-15,20,25);
    image(eyer,eyerX-55,eyerY-15,70,30);
}