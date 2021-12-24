/**
 * @jest-environment jsdom
 */
import { displayData } from "../src/client/js/displayData";

document.body.innerHTML = `
<div>
    <div id="display-result"></div>
</div>
`;
const data = {
	score_tag: "score_tag",
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
        <p>score tag: ${data.score_tag.toLowerCase()}</p>
        <p>agreement: ${data.agreement.toLowerCase()}</p>
        <p>subjictivity: ${data.subjectivity.toLowerCase()}</p>
        <p>confidence: ${data.confidence.toLowerCase()}</p>
        <p>irony: ${data.irony.toLowerCase()}</p>
        </div>
    </div></div>`);
});
