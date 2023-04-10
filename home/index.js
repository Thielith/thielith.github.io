// Startup Stuff
function pageBoot(){
	//setPageContentMaxWidth();
	//startLogoRoulette();
}
window.onresize = changeContentOnPageSizeChange;
logoArrows = document.getElementsByClassName("logo-arrows");

var docRoot = document.querySelector(':root');
// function setPageContentMaxWidth(){
// 	var newPageWidth = screen.width * 0.85;
// 	docRoot.style.setProperty('--pageContentMaxWidth', newPageWidth.toString() + 'px');
// }
function changeContentOnPageSizeChange(){
	for( let i=0; i<logoArrows.length; i++)
	logoArrows[i].style.display = (screen.width < 1200)? "none" : "flex";
}


// Logo Stuff
var logoSwapDelayMS = 1500, logoIndex = 0;
const logos = [
	{text: false, img: "./images/thielith/0.png", pixel: true},
	{text: false, img: "./images/thielith/1.png", pixel: true},
	{text: false, img: "./images/thielith/2.png", pixel: false},
	{text: false, img: "./images/thielith/3.png", pixel: false},
	{text: false, img: "./images/thielith/4.png", pixel: true},
	{text: true, font: "Roboto Mono"},
	{text: true, font: "Pixels"}
];

function switchLogoTypeDisplay(img){
	//console.log("flip logo visibles")
	document.getElementById("logoTxt").style.display = img? "none" : "block";
	document.getElementById("logoImg").style.display = img? "block" : "none";
}

const logoAnimParameters = {
    "duration": 150,
    "fill": "forwards",
    "easing": "ease"
}
const logoAnimParametersReverse = {
    "duration": 150,
    "fill": "forwards",
    "easing": "ease",
    "direction": "reverse"
}
function swapLogo(forward){
	// increment logoIndex
	logoIndex = forward? logoIndex+1 : logoIndex-1;
	// keeps index in bounds
	logoIndex = (logoIndex < 0)? logos.length-1 :
				(logoIndex > logos.length-1)? 0 : logoIndex;

	nextLogo = logos[logoIndex];
	if(logos[logoIndex].text){
		//console.log("font swap");       also maybe make it so current logo fades away before fading new one in
		animateLogo("logoTxt", forward, true);
		switchLogoTypeDisplay(false);
		document.getElementById("logoTxt").style.fontFamily = nextLogo.font;
		animateLogo("logoTxt", forward, false);
	}
	else{
		//console.log("image swap");      also maybe make it so current logo fades away before fading new one in
		animateLogo("logoImg", forward, true);
		switchLogoTypeDisplay(true);
		document.getElementById("logoImg").src = nextLogo.img;
		document.getElementById("logoImg").className = (nextLogo.pixel) ? "img-pxl" : "";
		animateLogo("logoImg", forward, false);
	}
}
function animateLogo(elementName, isFromRight, isGoingAway){
	if(isGoingAway){ document.getElementById(elementName).animate(
		isFromRight? animation.slideFromLeft : animation.slideFromRight, logoAnimParametersReverse
	);}
	else{ document.getElementById(elementName).animate(
		isFromRight? animation.slideFromRight : animation.slideFromLeft, logoAnimParameters
	);}
}

function startLogoRoulette(){
	//console.log("begin logo roulette")
	setInterval(swapLogo, logoSwapDelayMS, true);
}
