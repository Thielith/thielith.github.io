import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
// https://github.com/markedjs/marked

// TODO:  generalize for any codeblock
function updatePreview() {
	const html = marked.parse(testing.innerHTML);
	testing.innerHTML = html;
	console.log("done!");
}

updatePreview();