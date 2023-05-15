const firstName = Syed
function introduction(firstName){
return `Hi, my name is ${firstName}.`
}
function introductionWithLanguage(firstName, language){
    return `Hi, my name is ${firstName} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(firstName, language = "JavaScript"){
    return `Hi, my name is ${firstName} and I am learning to program in ${language}.`
}