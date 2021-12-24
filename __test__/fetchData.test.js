/**
 * @jest-environment jsdom
 */
import { fetchData } from "../src/client/js/fetchData";


document.body.innerHTML = `
<div>
    <div id="display-result"></div>
</div>`

beforeEach(() => {
    fetch.resetMocks();
})

test("data fetched structure",  (done) => {
    const callBAckOne = (data) => {
        try{
            expect(data.hasOwnProperty("score_tag")).toBeTruthy()
            expect(data.hasOwnProperty("agreement")).toBeTruthy()
            expect(data.hasOwnProperty("subjectivity")).toBeTruthy()
            expect(data.hasOwnProperty("confidence")).toBeTruthy()
            expect(data.hasOwnProperty("irony")).toBeTruthy()
            done()
        } catch (error) {
            done(error)
        }
    }
    fetch.mockResponseOnce(JSON.stringify({
        score_tag: "",
        agreement: "",
        subjectivity:"",
        confidence: "",
        irony:""
    }))
    
    fetchData("https://example.com/", callBAckOne, ()=>{})
})


test("error handling", (done) => {
   
    const callBackTwo = (err) => {
        try {
            expect(err.message).toBe("No content to analyze")
            done()
        } catch (error) {
            done(error)
        }
    }
    fetch.mockResponseOnce(JSON.stringify({
        error:"No content to analyze"
    }))
    fetchData("http://localhost:8080/", ()=>{}, callBackTwo)
})