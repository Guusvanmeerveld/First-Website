var d = document.getElementById.bind(document);
var c = document.createElement.bind(document);

// Google Search
d("googleSearchBar").addEventListener("keyup",searchGoogleEnter)
function searchGoogleEnter(key) {
  if(key.keyCode == "13") {
    var search = d("googleSearchBar").value;
    var containsDot = search.indexOf(".");
    if (search !== "") {
      if (containsDot > -1) {
        open("http://" + search);
      }
      else {
        open("https://www.google.com/search?q=" + search);
      }
    }
  }
}

// Year left
function calculateTime() {
  var date = new Date()
  var monthsLeft = 11 - date.getMonth()
  var daysLeft = 31 - date.getDate()
  if (monthsLeft == 1) {
    var months = " maand en "
  }
  else {
    var months = " maanden en "
  }
  if (daysLeft == 1) {
    var days = " dag"
  }
  else {
    var days = " dagen"
  }
  d("yearLeft").innerHTML = "Het jaar duurt nog " + monthsLeft + months + daysLeft + days
  d("yearProgress").value = date.getMonth() * 30 + date.getDate()
}

calculateTime();

// Clock
function showTime() {
  var date = new Date()
  var days = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"]
  var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
  if (date.getMinutes() < 10) {
    d("mins").innerHTML = "0" + date.getMinutes()
  }
  else {
    d("mins").innerHTML = date.getMinutes()
  }
  d("hours").innerHTML = date.getHours() + ":"
  d("date").innerHTML = days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()];
  setTimeout(showTime, 1000);
}

showTime();
