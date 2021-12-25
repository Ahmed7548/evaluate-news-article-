import { urlChecker } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import "./styles/resets.scss"
import "./styles/base.scss"
import "./styles/header.scss"
import "./styles/form.scss"
import "./styles/footer.scss"



const form = document.getElementById("search-form")

const urlInput = document.getElementById('URL')
// validating the url input on each keypress
urlInput.addEventListener("keyup", () => {
    urlChecker(urlInput.value)
})

form.addEventListener("submit", (e) => {
    handleSubmit(e)
})


