
function initialize(){
	updateColorLabelMode();
}

function updateColorLabelMode(){
	hideAllColorLabels();
	const labelsToShow = document.getElementsByTagName(colorLabelSelector.value);

	for(let i=0; i<labelsToShow.length; i++){
		labelsToShow[i].className = "";
	}
}

function hideAllColorLabels(){
	const hexLabels = document.getElementsByTagName("hex");
	const hsvLabels = document.getElementsByTagName("hsv");
	const rgbLabels = document.getElementsByTagName("rgb");

	for(let i=0; i<hexLabels.length; i++){
		hexLabels[i].className = "hidden";
	}
	for(let i=0; i<hsvLabels.length; i++){
		hsvLabels[i].className = "hidden";
	}
	for(let i=0; i<rgbLabels.length; i++){
		rgbLabels[i].className = "hidden";
	}
}
