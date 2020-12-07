var images = [
    "yay.jpg",
    "OHMAGAD.jpeg",
    "image.jpg",
    "yes.jpeg",
    "YESSIR.jpeg"
]


var i = 0;
function nextslide() {
    console.log("calvin");

    if (i == 5) {
        i = 0;
    }
console.log(i);
    document.getElementById("album").src = images[i];
    i=i+1;

}