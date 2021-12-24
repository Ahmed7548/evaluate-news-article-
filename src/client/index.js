import { urlChecker } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import "./styles/resets.scss"
import "./styles/base.scss"
import "./styles/header.scss"
import "./styles/form.scss"
import "./styles/footer.scss"



const form = document.getElementById("search-form")

const urlInput = document.getElementById('URL')

urlInput.addEventListener("keyup", () => {
    urlChecker(urlInput.value)
})

form.addEventListener("submit", (e) => {
    handleSubmit(e)
})

console.log("start"+urlChecker("https://example.com/")+ "end")

console.log("CHANGE!!");


