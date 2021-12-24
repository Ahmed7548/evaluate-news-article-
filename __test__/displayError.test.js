/**
 * @jest-environment jsdom
 */
import { displayError } from "../src/client/js/displayError";

document.body.innerHTML = `
 <div>
     <div id="display-result"></div>
 </div>
 `;
const error = {
	message: "this is an error message",
};

test("displayData is a function ", () => {
	expect(typeof displayError).toBe("function");
});

test("displaying error", () => {
	displayError(error);
	expect(document.getElementById("display-result").innerHTML).toBe(`
        <div class="result">
        <p class="error">${error.message}</p> 
        </div>
        `
    );
});
