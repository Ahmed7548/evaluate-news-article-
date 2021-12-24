const fetch = require("node-fetch");
const key = "9cf410426fdcbc98be215f527dfc9cb1";

const API_Calling = async (url) => {
	const response = await fetch(
		`https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url}&lang=en`
    ).catch(() => {
        throw new Error ("failed to get data please check your internet connection ")
    });
    try {
        if (!response.ok) {
            throw new Error ("unsuccessful data fetching")
        } 
        data = await response.json()
        if (data.status.msg !== "OK") {
            throw new Error (data.status.msg)
        }
        const sample = {
            score_tag : data.score_tag,
            agreement : data.agreement,
            subjectivity : data.subjectivity,
            confidence : data.confidence,
            irony : data.irony
        }
        console.log(sample);
        return sample
    } catch (err) {
        console.log(err)
        throw new Error (err.message)
        }
};

module.exports = API_Calling;
