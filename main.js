function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    background('#969A97');

    document.getElementById("font").innerHTML="Font size will be = " +difference+"px";
    fill('#F90093');
    stroke('#F90093');
    textSize(difference);
    text('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',25,200);
}

function modelLoaded(){
    console.log('Posenet is initialized !');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        
       
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);

        console.log("leftWristX = "+leftWristX+"rightWristX"+rightWristX+"difference = "+ difference);
    }
}


difference=0;
rightWristX=0;
leftWristX=0;