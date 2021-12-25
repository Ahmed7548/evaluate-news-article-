/**
 * @jest-environment jsdom
 */
import { displayData } from "../src/client/js/displayData";
import {checkPolarity} from "../src/client/js/checkPolarity"

document.body.innerHTML = `
<div>
    <div id="display-result"></div>
</div>
`;
const data = {
	score_tag: "P",
	agreement: "agreement",
	subjectivity: "subjectivity",
	confidence: "confidence",
	irony: "irony",
};

test("displayData is a function ", () => {
	expect(typeof displayData).toBe("function");
});

test("data displayin", () => {
	displayData(data);
	expect(document.getElementById("display-result").innerHTML)
		.toBe(`<div><div class="result">
    <div id="results">
        <p>Score tag (global polarity): ${data.score_tag} (${checkPolarity(data.score_tag)})</p>
        <p>Agreement: ${data.agreement.toLowerCase()}</p>
        <p>Subjictivity: ${data.subjectivity.toLowerCase()}</p>
        <p>Confidence: ${data.confidence.toLowerCase()}</p>
        <p>Irony: ${data.irony.toLowerCase()}</p>
        </div>
    </div></div>`);
});
