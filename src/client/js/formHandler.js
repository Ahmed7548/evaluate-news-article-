import { urlChecker } from "./urlChecker";
import { fetchData } from "./fetchData"
import { displayData } from "./displayData"
import {displayError} from "./displayError"

function handleSubmit(event) {
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
	
	fetchData({ url },displayData,displayError)
}

export { handleSubmit };


