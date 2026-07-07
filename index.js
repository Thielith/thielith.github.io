
let numLogos = 0;
const numBgRows = 40;

function initialize(){
	numLogos = logos.childElementCount;
	for(let i=0; i<numBgRows; i++){
		bgRows.appendChild(createBgRow(i));
	}
}

function createBgRow(logoIndexOffset = 0){
	const row = document.createElement("div");
	row.classList.add("bg-row");
	const content1 = createBgRowContent(logoIndexOffset);
	const content2 = createBgRowContent(logoIndexOffset);
	// const content3 = createBgRowContent(logoIndexOffset);
	// const content4 = createBgRowContent(logoIndexOffset);
	// const content5 = createBgRowContent(logoIndexOffset);
	row.appendChild(content1);
	row.appendChild(content2);
	// row.appendChild(content3);
	// row.appendChild(content4);
	// row.appendChild(content5);

	if(logoIndexOffset % 2 == 1){
		content1.style.animationName = "scroll-right";
		content2.style.animationName = "scroll-right";
		// content3.style.animationName = "scroll-right";
		// content4.style.animationName = "scroll-right";
		// content5.style.animationName = "scroll-right";
	}
	return row;
}

function createBgRowContent(logoIndexOffset = 0){
	const content = document.createElement("div");
	content.classList.add("bg-row-content");

	for(let i=0; i<numLogos*3; i++){
		const clone = logos.children[(i + logoIndexOffset) % numLogos].cloneNode(false);
		content.appendChild(clone);
	}

	return content;
}
