
// credit: https://brokul.dev/detecting-the-default-browser-font-size-in-javascript
function getDefaultFontSize(){
	// create temp div
    const element = document.createElement('div');
    element.style.width = '1rem';
    element.style.display = 'none';
    document.body.append(element);

	// read div's font size, which will be the user's font size
    const widthMatch = window
        .getComputedStyle(element)
        .getPropertyValue('width')
        .match(/\d+/);

	// remove temp div
    element.remove();

	// make sure font size exists
    if (!widthMatch || widthMatch.length < 1) {
        return null;
    }

	// return result
    const result = Number(widthMatch[0]);
    return !isNaN(result) ? result : null;
};


function onLoad(){
	const root = document.querySelector(":root");

	const videoWidth = getDefaultFontSize() * 25;
	root.style.setProperty("--sliceVideoWidth", videoWidth + "px")
}

// function test(){
// 	var computedFontSize = screen.fontSize;
//
// 	document.getElementById("test").innerHTML = getDefaultFontSize();
//
// }

var logoIndex = 0;
const logos = document.getElementsByClassName("logo");

function swapLogo(isRight){

	// increment logoIndex
	var nextLogoIndex = isRight? logoIndex+1 : logoIndex-1;
	// keep logoIndex in bounds
	nextLogoIndex = (nextLogoIndex < 0)? logos.length-1 :
				(nextLogoIndex > logos.length-1)? 0 :
				nextLogoIndex;

	// set appropriate statuses
	var currentLogo = document.querySelector('[data-index="' + logoIndex + '"]'),
		  nextLogo = document.querySelector('[data-index="' + nextLogoIndex + '"]');

	currentLogo.dataset.status = isRight? "going-to-left" : "going-to-right";
	nextLogo.dataset.status = isRight? "coming-from-right" : "coming-from-left";

	// wait for a small amount of time for nextLogo to update its position
	setTimeout(() => {
		nextLogo.dataset.status = "selected";
		logoIndex = nextLogoIndex;
	}, 100);

}
