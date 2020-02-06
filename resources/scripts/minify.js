var d = document.getElementById.bind(document);
var g = document.querySelector.bind(document);

function selectCode(source) {
    localStorage.setItem("selectCode", source)
}
function runMinify() {
  var source = localStorage.getItem("selectCode")
  if (source == "html") {
    minifyHTML();
  }
  if (source == "css") {
    minifyCSS();
  }
  if (source == "js") {
    minifyJS();
  }
}

function minifyHTML() {

}

if (localStorage.getItem("showHeadsUpMinify") == undefined) {
  d("headsUp").style.visibility = "visible"
  d("headsUp").style.height = "13rem"
}
function hideHeadsUp() {
  d("headsUp").style.height = "0"
}
function removeHeadsUp() {
  hideHeadsUp();
  localStorage.setItem("showHeadsUpMinify", "1")
}
