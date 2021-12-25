import { checkPolarity } from "./checkPolarity"
const displayData = (data) => {
    const section = document.getElementById("display-result")
    const result = document.createElement('div')
    result.innerHTML=`<div class="result">
    <div id="results">
        <p>Score tag (global polarity): ${data.score_tag} (${checkPolarity(data.score_tag)})</p>
        <p>Agreement: ${data.agreement.toLowerCase()}</p>
        <p>Subjictivity: ${data.subjectivity.toLowerCase()}</p>
        <p>Confidence: ${data.confidence.toLowerCase()}</p>
        <p>Irony: ${data.irony.toLowerCase()}</p>
        </div>
    </div>`
    section.appendChild(result)
}


export {displayData}