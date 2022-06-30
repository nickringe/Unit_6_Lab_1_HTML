function upDate(previewPic){
    document.getElementById('image').style.backgroundImage="url("+previewPic.src+")";
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo(){

    document.getElementById('image').innerHTML = "Hover over an image to display here";
    document.getElementById('image').style.backgroundImage = "main.png";
}