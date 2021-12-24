const displayData = (data) => {
    const section = document.getElementById("display-result")
    const result = document.createElement('div')
    result.innerHTML=` <div class="result">
    <div id="results">
        <div class="result-core">
        <p>score tag: ${data.score_tag.toLowerCase()}</p>
        <p>agreement: ${data.agreement.toLowerCase()}</p>
        <p>subjictivity: ${data.subjectivity.toLowerCase()}</p>
        <p>confidence: ${data.confidence.toLowerCase()}</p>
        <p>irony: ${data.irony.toLowerCase()}</p>
        </div>
    </div>`
    section.appendChild(result)
}


export {displayData}