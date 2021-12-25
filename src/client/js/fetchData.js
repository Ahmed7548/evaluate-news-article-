export const fetchData = async (url,dataDisplayer,errorDisplayer) => {
    const section = document.getElementById("display-result")
    //reseting the data displayed


    const response= await fetch(`http://localhost:8081/test`, {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(url),
    })
    const data = await response.json()
    try {
        if (data.error) {
            throw new Error (data.error)
        }
        
        section.innerHTML=""
        dataDisplayer(data)
    } catch (err) {
        errorDisplayer(err)
        }
}


