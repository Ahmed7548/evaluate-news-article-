const urlChecker = (inputText) => {
	const submitButton = document.getElementById("submit-button");
	const errorMessage = document.getElementById("error");
	console.log(inputText);
	try {
		//constructing a url object 
		const url = new URL(inputText);
		// url object will throw an error if the text given is not valid
		console.log("working");
		errorMessage.innerText = "";
		submitButton.disabled = false;
		//rreturn a string of the valid url
		return url.toString();
	} catch (err) {
		submitButton.disabled = true;
		//display a warnning if not valid url
		errorMessage.innerText = "!please enter a valid Url!";
	}
};

export { urlChecker };
