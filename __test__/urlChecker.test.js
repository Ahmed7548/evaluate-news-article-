/**
 * @jest-environment jsdom
 */
import { urlChecker } from "../src/client/js/urlChecker";


test("urlChecker is a function", async () => {
	expect(typeof urlChecker).toBe("function");
});


document.body.innerHTML = `
<div>
<button id="submit-button"></button>
<div id="error"></div>
</div>`;


test("the urlChecker function whengiven a valid url", async () => {
	expect(urlChecker("https://example.com")).toBe("https://example.com/");
});

test("the urlChecker function when give an invalid URL", () => {
    urlChecker("INVALID_URL");

	expect(document.getElementById("submit-button").disabled).toBe(true);
	expect(document.getElementById("error").innerText).toBe(
		"!please enter a valid Url!"
	);
})
