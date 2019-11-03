var d = document.getElementById.bind(document);
var c = document.createElement.bind(document);
var q = document.querySelector.bind(document);

// Google Search
addEventListener("keyup",showSearch)
d("googleSearchBar").addEventListener("keyup",searchGoogleEnter)
function searchGoogleEnter(key) {
  if(key.key == "Enter") {
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
  if (key.key == "Escape") {
    closeSearch()
  }
}

function closeSearch() {
  $("#opacityMenu").addClass("hidden lowerIndex")
  d("googleSearchBar").blur()
  d("googleSearchBar").classList.add("searchMove")
}

function showSearch(e) {
  if (e.target !== document.body || !d("addShortcutMenu").classList.contains("hidden")) {
    return
  }
  var open = !d("googleSearchBar").classList.contains("searchMove")
  if (open && !d("googleSearchBar").value || e.key == "Escape" ) {
    closeSearch()
  }
  else {
    $("#opacityMenu").removeClass("hidden lowerIndex")
    d("googleSearchBar").classList.remove("searchMove")
    d("googleSearchBar").focus()
    d("googleSearchBar").value = e.key
  }
}

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
