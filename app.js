var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverUrl="https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl (input){
    return serverUrl+"?text="+input;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with server!!please try again after some time")
    
}

function clickhandler(){
    var inputText=txtInput.value;
    fetch(getTranslationUrl(inputText)).then(response=>response.json())
    .then(json=>{
        var translateText=json.contents.translated;
        outputDiv.innerText=translateText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click",clickhandler);