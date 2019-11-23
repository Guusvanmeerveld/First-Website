var d = document.getElementById.bind(document);
var c = document.createElement.bind(document);
var q = document.querySelector.bind(document);

// Clock
function showTime() {
  var date = new Date()
  var days = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"]
  var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
  if (date.getHours() < 10) {
    d("hours").innerHTML = "0" + date.getHours() + ":"
  }
  else {
    d("hours").innerHTML = date.getHours() + ":"
  }
  if (date.getMinutes() < 10) {
    d("mins").innerHTML = "0" + date.getMinutes() + ":"
  }
  else {
    d("mins").innerHTML = date.getMinutes() + ":"
  }
  if (date.getSeconds() < 10) {
    d("secs").innerHTML = "0" + date.getSeconds()
  }
  else {
    d("secs").innerHTML = date.getSeconds()
  }
  d("date").innerHTML = days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()];
  setTimeout(showTime, 1000);
}

showTime();
