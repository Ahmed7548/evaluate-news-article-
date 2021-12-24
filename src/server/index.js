var path = require("path");
const express = require("express");
const cors = require("cors");
const API_Calling = require("./mockAPI.js");
const console = require("console");
const { response } = require("express");



const app = express();

app.use(cors());
app.use(express.static("dist"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log(__dirname);

app.get("/", function (req, res) {
	// res.sendFile('dist/index.html')
	res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
	console.log("Example app listening on port 8081!");
});

app.post("/receive",  (req, res) => {
    const newEntry = req.body
    console.log(newEntry)
})

app.post("/test", async (req, res)=> {
    const url=  req.body.url
    API_Calling(url).then(data => res.send(data)).catch(err => {
        res.send({error: err.message})
    })
});

