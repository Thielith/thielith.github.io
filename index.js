
function initialize(){
	for(let i=0; i<31*2; i++){
		addBackgroundRowSet(i);
		i += 1;
	}
}

function addBackgroundRowSet(iteration){
	const left = addBackgroundRow(true);
	const right = addBackgroundRow(false);

	left.style.translate = -(0 + iteration*1.5) + "%";
	right.style.translate = -(20 + iteration*4) + "%";
}

function addBackgroundRow(goingLeft){
	const rowHolder = document.createElement("div");
	bgRows.appendChild(rowHolder);
	
	const row = document.createElement("div");
	row.className = "bg-row";
	rowHolder.appendChild(row);

	for(let j=0; j<5; j++){
		for(let i=0; i<logos.childElementCount; i++){
			const clone = logos.children[i].cloneNode(false);
			row.appendChild(clone);
		}
	}

	if(goingLeft){
		row.classList.add("scroll-left");
	}
	else{
		row.classList.add("scroll-right");
	}

	return rowHolder;
}