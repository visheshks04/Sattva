const suggestionList = {
    anger : "Practicing mindful and guided meditation is a proven way of reducing anger and anxiety!",
    fear : [],
    sadness : [],
    joy : [],
    surprise : [],
    love : [],
}

const diagList = {
    anger : "A probable underlying issue that we have detected in your activities is presence of anger."
}

export const getSuggestion = (key) => {
    return suggestionList[key]
}

export const getDiagnosis = (key) => {
    return diagList[key]
}