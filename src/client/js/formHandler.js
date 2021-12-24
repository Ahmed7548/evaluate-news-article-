import { urlChecker } from "./urlChecker";
import { fetchData } from "./fetchData"
import { displayData } from "./displayData"
import {displayError} from "./displayError"

function handleSubmit(event) {
	event.preventDefault();
	const urlInput=document.getElementById("URL")
	// check what text was put into the form field
	let formText = urlInput.value.trim();

	urlInput.value=""
	
	const url = urlChecker(formText)
	if (!url) {
		return
	}
	console.log("::: Form Submitted :::");
	fetchData({ url },displayData,displayError)

}

export { handleSubmit };


