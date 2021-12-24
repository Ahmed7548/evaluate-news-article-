const urlChecker = (inputText) => {
	const submitButton = document.getElementById("submit-button");
	const errorMessage = document.getElementById("error");
	console.log(inputText);
	try {
		const url = new URL(inputText);
		console.log("working");
		errorMessage.innerText = "";
		submitButton.disabled = false;
		console.log(url.toString());
		return url.toString();
	} catch (err) {
		submitButton.disabled = true;
		errorMessage.innerText = "!please enter a valid Url!";
	}
};

export { urlChecker };
