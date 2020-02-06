var d = document.getElementById.bind(document);
var g = document.querySelector.bind(document);
var autoRunCheck = localStorage.getItem("autoRun")
var setCodeHTML = localStorage.getItem("writtenCodeHTML")
var setCodeCSS = localStorage.getItem("writtenCodeCSS")
var setCodeJS = localStorage.getItem("writtenCodeJS")

d("htmlInput").value = setCodeHTML
d("cssInput").value = setCodeCSS
d("jsInput").value = setCodeJS
updateCode()
showCode("html")

if (autoRunCheck == "on") {
  d("autoRun").style = "background-color: green"
}
else {
  d("autoRun").style = "background-color: tomato"
}

function autoRun() {
  var autoRunCheck = localStorage.getItem("autoRun")
  if (autoRunCheck == "on") {
    localStorage.setItem("autoRun", "off")
    d("autoRun").style = "background-color: tomato"
  }
  else {
    localStorage.setItem("autoRun", "on")
    d("autoRun").style = "background-color: green"
  }
}

function showCode(lang) {
  $(".langButton").css("background-color", "#3b3c45")
  $(".langButton").css("border", "none")
  $(".langInput").css("display", "none")
  if (lang == "html") {
    d("htmlButton").style = "background-color: #27282e;border-bottom: white 2px solid;"
    d("htmlInput").style = "display: block"
  }
  else if (lang == "css") {
    d("cssButton").style = "background-color: #27282e;border-bottom: white 2px solid;"
    d("cssInput").style = "display: block"
  }
  else {
    d("jsButton").style = "background-color: #27282e;border-bottom: white 2px solid;"
    d("jsInput").style = "display: block"
  }
}

function updateCode(source) {
  var autoRunCheck = localStorage.getItem("autoRun")
  var code = "<style>" + d("cssInput").value + "</style>" + "<script>" + d("jsInput").value + "</script>" + d("htmlInput").value
  if (source == "run" || autoRunCheck == "on") {
    localStorage.setItem("writtenCodeHTML", d("htmlInput").value)
    localStorage.setItem("writtenCodeCSS", d("cssInput").value)
    localStorage.setItem("writtenCodeJS", d("jsInput").value)
    d("htmlOutput").setAttribute('srcdoc', code)
  }
}

emmet.require('textarea').setup({
use_tab: true       // expand abbreviations by Tab key
});

if (localStorage.getItem("showHeadsUpPlayground") == undefined) {
  d("headsUp").style.visibility = "visible"
  d("headsUp").style.height = "13rem"
}
function hideHeadsUp() {
  d("headsUp").style.height = "0"
}
function removeHeadsUp() {
  hideHeadsUp();
  localStorage.setItem("showHeadsUpPlayground", "1")
}
