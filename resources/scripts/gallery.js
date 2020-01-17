var d = document.getElementById.bind(document);
var g = document.querySelector.bind(document);

if (localStorage.getItem("showHeadsUpGallery") == undefined) {
  d("headsUp").style.visibility = "visible"
  d("headsUp").style.height = "13rem"
}
function hideHeadsUp() {
  d("headsUp").style.height = "0"
}
function removeHeadsUp() {
  hideHeadsUp();
  localStorage.setItem("showHeadsUpGallery", "1")
}
