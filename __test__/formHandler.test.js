/**
 * @jest-environment jsdom
 */


import {handleSubmit} from "../src/client/js/formHandler"

document.body.innerHTML = `<form>
<input type="text" value="" name="URL" id="URL"/>
<form>
<button id="submit-button"></button>
<div id="error"></div>
`

test("formHandler is function", () => {
    expect(typeof handleSubmit).toBe("function")
})

test("formHandle return when submiting an an empty form", async() => {
    const form = document.querySelector("form")

    form.addEventListener("submit", (e) => {
        expect(handleSubmit(e)).not.toBeDefined()
    })
    
    form.submit()
})