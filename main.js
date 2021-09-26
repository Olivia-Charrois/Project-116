left_earsX=0;
left_earsY=0;

function preload() {
 left_ears = loadImage("https://i.postimg.cc/Gp98Y8j7/imageedit-4-8010310566.png");
}

function setup() {
 canvas = createCanvas(300, 300);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300,300);
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
 if(results.length > 0)
 {
  console.log(results);
  left_earsX = results[0].pose.rightEar.x-30;
  left_earsY = results[0].pose.rightEar.y-30;
  console.log("left_ears x = " + left_earsX);
  console.log("left_ears y = " + left_earsY);
 }
}

function draw() {
 image(video, 0, 0, 300, 300);
 image(left_ears, left_earsX, left_earsY, 50, 50);
}

function take_snapshot() {
 save('Cat_Ears_Filter.png');
}