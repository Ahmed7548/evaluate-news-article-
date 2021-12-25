// transform score tags to their corresponding polarities
const checkPolarity = (scoreTag) => {
    switch (scoreTag) {
        case "P+":
            return "strong positive"
        case "P":
            return "positive"
        case "NEU" :
            return "neutral"
        case "N":
            return "negative"
        case "N+": 
            return "strong negative"
        case "NONE":
            return "without polarity"
    }
}

export {checkPolarity}