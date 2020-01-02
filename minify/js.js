var d = document.getElementById.bind(document);
var g = document.querySelector.bind(document);

function selectCode(source) {
  switch (source) {
    case html:
    minifyHTML();
      break;
    case css:
    minifyCSS();
      break;
    case js:
    minifyJS();
      break;
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
