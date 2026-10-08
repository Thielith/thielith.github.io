
let numLogos = 0;
const numBgRows = 40;

function initialize(){
	closeSidebar();
	test();
	
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



function toggleSidebar(){
	if(sidebar.classList.contains("closed")){
		openSidebar();
	}
	else{
		closeSidebar();
	}
}
function openSidebar(){
	sidebar.classList.remove("closed");
	sidebar_background.classList.remove("closed");
	sidebar_button_icon.classList.add("toggled");
	sidebar_button_icon.src = "./images/close.svg";

	for(const child of document.getElementById("sidebar").children){
		child.tabIndex = "0";
	}
}
function closeSidebar(){
	sidebar.classList.add("closed");
	sidebar_background.classList.add("closed");
	sidebar_button_icon.classList.remove("toggled");
	sidebar_button_icon.src = "./images/menu.svg";

	for(const child of document.getElementById("sidebar").children){
		child.tabIndex = "-1";
	}
}


// https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API
async function test() {
	// const state = { page_id: 1, user_id: 5 };
	// const url = "/test";
	
	// console.log("test start");
	// history.pushState(state, "", url);
	// console.log("pushed history state");

	fetch(`/test/test.json`)
		.then((response) => {return response.json()})
		.then((data) => {
			console.log("values:", data.value);
		});
}
