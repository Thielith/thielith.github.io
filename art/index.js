function startPage(){
    loadImages("any");
}

function loadImages(type){
    // <div class="entry">
    //     <img src="./images/vector/gup_suit.png">
    // </div>
    for(let i=0; i<data.images.length; i++){
        const div = document.createElement("div");
        const img = document.createElement("img");

        div.classList.add("entry")
        div.onclick = function() { displayImageDetails(i); }
        const currentImg = data.images[i];

        if(
            (type == currentImg.imageType || type == "any") ||
            (type == "animation" && currentImg.fileName.slice(-3) == "gif")
        ){
            // cache actual images
            const tempImg = new Image();
            tempImg.src = "./images/" + currentImg.imageType + "/preview/" + currentImg.fileName;

            img.src = "./images/" + currentImg.imageType + "/preview/" + currentImg.fileName;
            div.appendChild(img);

            if(!currentImg.noPixelate){
                img.classList.add("img-pxl");
            }

            // const emptyDiv = document.createElement("div");
            // emptyDiv.classList.add("entry");
            // document.getElementById("gallery").appendChild(emptyDiv);
            document.getElementById("gallery").appendChild(div);
        }
    }

    var displayName = "Medium: ";
    if(type == "any") displayName += "Any";
    else if(type == "pixel") displayName += "Pixel Art";
    else if(type == "vector") displayName += "Vector";
    else if(type == "model") displayName += "3D Model";
    else if(type == "animation") displayName += "Animation";

    document.getElementById("menuButton").innerHTML = displayName;

    makeEntriesVisisble();
}

async function makeEntriesVisisble(){
    var entries = document.querySelectorAll(".entry");
    for(let i=0; i<entries.length; i++){
        entries[i].animate(animation.slideFromBottom, animation["300ms"]);
        await new Promise(r => setTimeout(r, 100));
    }
}

function clearGallery(){
    const gallery = document.getElementById("gallery");

    while (gallery.hasChildNodes()) {
        gallery.removeChild(gallery.firstChild);
    }
}

function setGalleryImages(type){
    clearGallery();
    loadImages(type);
}

function displayImageDetails(index){
    var image = data.images[index];

    document.getElementById("imageDetailsImage").src = "./images/" + image.imageType + "/" + image.fileName;
    document.getElementById("imageDetailsTitle").innerHTML = image.title;
    document.getElementById("imageDetailsDate").innerHTML = "Date: " + parseDate(image.date);
    document.getElementById("imageDetailsTool").innerHTML = "Tool: " + link[image.tool];
    document.getElementById("imageDetailsTime").innerHTML = "Time: " + image.time;
    document.getElementById("imageDetailsDescription").innerHTML = image.description;

    document.getElementById("overlay").animate(animation.fadeIn, animation["100ms"]);
    document.getElementById("overlayImage").animate(animation.slideFromLeft, animation["300ms"]);
    document.getElementById("overlayText").animate(animation.slideFromRight, animation["300ms"]);
}
function hideOverlay(){
    document.getElementById("overlay").animate(animation.fadeIn, animation["100ms_backwards"]);
    document.getElementById("overlayImage").animate(animation.slideFromLeft, animation["300ms_backwards"]);
    document.getElementById("overlayText").animate(animation.slideFromRight, animation["300ms_backwards"]);
}



function parseDate(dateInt){
    var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year = parseInt(dateInt / 10000);
    const month = parseInt((dateInt - year*10000) / 100);
    const day = dateInt - year*10000 - month*100;

    return monthList[month-1] + " " + day + ", " + year;
}

// function formatString(string){
//     result = string[0].toUpperCase();
//     var capitalize = false;
//
//     for(let i=1; i<string.length; i++){
//         var currChar = string[i];
//
//         if(!isNaN(currChar) || currChar == '_'){
//             capitalize = true;
//         }
//
//         if(currChar == '_'){
//             result += ' ';
//             continue;
//         }
//         else if(capitalize){
//             capitalize = false;
//             result += currChar.toUpperCase();
//             continue;
//         }
//
//         result += currChar;
//     }
//
//     return result;
// }
