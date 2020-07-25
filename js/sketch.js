let video;
let style_tranfer;
let outputCanvas = document.getElementById("outputCanvas")
let inter = document.getElementById('inter')
let title = document.getElementById("titleString")
let artists = ["munch", "picasso", "vangogh"]
let styles = []
let currentArtist = 0

function switchTitle()
{
    if(currentArtist == 2){
        currentArtist = 0 
    }
    else{
        currentArtist+=1 
    }
    title.innerHTML = "what did " + artists[currentArtist] + " see?"
}

function setup()
{
    var canvas = createCanvas(512,512);
    canvas.parent('origin');
    video = createCapture(VIDEO);
    video.hide()
    munch = ml5.styleTransfer('models/munch', modelLoaded);
    picasso = ml5.styleTransfer('models/picasso', modelLoaded);
    vangogh = ml5.styleTransfer('models/vangogh', modelLoaded);
    styles.push(munch)
    styles.push(picasso)
    styles.push(vangogh)

    // When the model is loaded
    function modelLoaded() {
        console.log('Model Loaded!');
    }
}

function draw()
{   
    background(0); 
    image(video, 128, 0, 256, 256);
}

var base64image = "";


function placeImage(base64image){
    var img = document.getElementById("inter");
    img.src = base64image;
    console.log("image placed!!")
}


function capturePlace(){
    var c = get(128, 0, 256, 256);
    c.loadPixels();
    base64image = c.canvas.toDataURL();
    placeImage(base64image);
}

function main(){
    styles[currentArtist].transfer(document.getElementById('inter'), function(error, result) {
        console.log(result.src)    
        document.getElementById('outputCanvas').src = result.src;
      });
      alert("Transformed!")
}
