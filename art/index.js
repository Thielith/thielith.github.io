fetch('./images/files.json')
        .then((response) => response.json())
        .then((json) => saveJSON(json));

var data;
var cached = false;
var showFanart = true;
var imageType = "";

function saveJSON(json){
    data = json;
    loadImages("any");
}

function loadImages(type){
    imageType = type;
    // <div class="entry">
    //     <img src="./images/vector/gup_suit.png">
    // </div>
    for(let i=0; i<data.images.length; i++){
        const currentImg = data.images[i];

        if(
            ((type == currentImg.imageType || type == "any") ||
            (type == "animation" && currentImg.fileName.slice(-3) == "gif"))
        ){
            if(!showFanart && !currentImg.originalDesign) continue;
            const div = document.createElement("div");
            const img = document.createElement("img");

            div.classList.add("entry")
            div.onclick = function() { displayImageDetails(i); }
            div.dataset.original_design = currentImg.originalDesign;

            // cache actual images
            if(!cached){
                const tempImg = document.createElement("img");
                tempImg.src = "./images/" + currentImg.imageType + "/" + currentImg.fileName;
                tempImg.classList.add("cache");
                document.getElementById("cache").appendChild(tempImg);
            }

            img.src = "./images/" + currentImg.imageType + "/preview/" + currentImg.fileName;

            if(!currentImg.noPixelate){
                img.classList.add("pixel");
            }

            div.appendChild(img);

            document.getElementById("gallery").appendChild(div);
        }
    }
    cached = true;

    var displayName = "Medium: ";
    if(type == "any") displayName += "Any";
    else if(type == "pixel") displayName += "Pixel Art";
    else if(type == "vector") displayName += "Vector";
    else if(type == "model") displayName += "3D Model";
    else if(type == "animation") displayName += "Animation";

    document.getElementById("category-button").innerHTML = displayName;

    makeEntriesVisisble();
}

async function makeEntriesVisisble(){
    const entries = document.querySelectorAll(".entry");
    for(let i=0; i<entries.length; i++){
        entries[i].animate(animation.slideFromBottom, animation["300ms"]);
        await new Promise(r => setTimeout(r, 100));
    }

    return;
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

    document.getElementById("image").src = "./images/" + image.imageType + "/" + image.fileName;
    document.getElementById("title").innerHTML = image.title;
    document.getElementById("date").innerHTML = "Date: " + parseDate(image.date);
    document.getElementById("tool").innerHTML = "Tool: " + link[image.tool];
    document.getElementById("time").innerHTML = "Time: " + image.time;
    document.getElementById("description").innerHTML = image.description;

    document.getElementById("art-details-popup").animate(animation.fadeIn, animation["300ms"]);
    document.getElementById("image-container").animate(animation.slideFromLeft, animation["300ms"]);
    document.getElementById("text-container").animate(animation.slideFromRight, animation["300ms"]);
}
function hidePopup(){
    document.getElementById("art-details-popup").animate(animation.fadeIn, animation["300ms_backwards"]);
    document.getElementById("image-container").animate(animation.slideFromLeft, animation["300ms_backwards"]);
    document.getElementById("text-container").animate(animation.slideFromRight, animation["300ms_backwards"]);
}

function disableEntries(checkboxElement){
    if(checkboxElement.dataset.type == "fanart"){
        showFanart = !checkboxElement.checked;
        setGalleryImages(imageType);
        console.log(showFanart);
    }
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
