Video=""
Status=""
Objects=""
function setup() {
   Canvas= createCanvas(500,500)
   Canvas.position(450,200)
    
}

function preload() {
    Video=createVideo("video.mp4")
    Video.hide()



    
}

function draw() {
    image(Video,1,1,500,500)
    if (Status!="") {
    objectDetector.detect(Video,gotResult)
   for (i=0;i<object.length;i++){}
       
   }
        
    }    
    }
} 
function  Video_start() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Detecting Objects"

}

function modelLoaded() {
    console.log("Model  is  loaded")
    Status=true
    Video.loop()
    Video.speed(1)
    Video.volume(0)
    
}


function gotResult(error,result) {
if (error) {
    console.log(error)
    
}
else {
console.log(result)
object=result
}
}