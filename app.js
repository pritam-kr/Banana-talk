var inputText = document.querySelector('#input-text');
var outputText = document.querySelector('#output-text');
var eventBtn = document.querySelector('.btn-primary');

var serverUrl = "https://api.funtranslations.com/translate/minion.json" ;

function getTranslateUrl(text){
     return serverUrl + "?" + "text=" + text;
    
}

eventBtn.addEventListener('click', doTranslate);

function errorHandler(error){
    alert("something wrong happen! please try agian later.", error);
}

function doTranslate(){
    var inputTxt = inputText.value;
  

    fetch(getTranslateUrl(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        outputText.innerHTML = translatedTxt; 
          })

    .catch(errorHandler)
};