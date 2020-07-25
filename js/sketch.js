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
