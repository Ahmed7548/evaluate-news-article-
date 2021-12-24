const displayError = (err) => {
    const section = document.getElementById("display-result")
    section.innerHTML = `
        <div class="result">
        <p class="error">${err.message}</p> 
        </div>
        `
}

export {displayError}