import { urlChecker } from "./urlChecker";
import { fetchData } from "./fetchData"
import { displayData } from "./displayData"
import {displayError} from "./displayError"

function handleSubmit(event) {
	const section= document.getElementById("display-result")
	event.preventDefault();
	const urlInput=document.getElementById("URL")
	
	// user inputed url
	let formText = urlInput.value.trim();
	// reseting the input value
	urlInput.value=""
	
	const url = urlChecker(formText)
	if (!url) {
		return
	}
	section.innerHTML = `
	<div class="result">
	<p class= "animation"></p>
	<p class= "animation"></p>
	<p class= "animation"></p>
	<p class= "animation"></p>
	<p class= "animation"></p>
	</div>`
	fetchData({ url },displayData,displayError)
}

export { handleSubmit };


