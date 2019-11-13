// Toggle Menu
function openMenu() {
  $(".menu").removeClass("lowerIndex");
  $("#addShortcutMenu").removeClass("hidden");
  d("shortcutLink").setAttribute('placeholder', 'https://example.com')
  d("shortcutName").setAttribute('placeholder', 'Example Website')
}
function closeMenu() {
  if (!d("addShortcutMenu").classList.contains("hidden")) {
    setTimeout(function () {
      $(".menu").addClass("lowerIndex");
    }, 500)
    $("#addShortcutMenu").addClass("hidden");
  }
}

var ls = localStorage
var shortcutsData = ls.getItem("shortcuts")
if (shortcutsData) {
  var data = JSON.parse(shortcutsData)
  data.forEach(d=>{
    createShortcut(d)
  })
}

function createShortcut(shortcutObj) {
  var shortcutName = d("shortcutName").value
  var shortcutLink = d("shortcutLink").value
  if (shortcutObj) {
    shortcutName = shortcutObj.name
    shortcutLink = shortcutObj.link
  }
  if (shortcutName && shortcutLink) {
    var data = []
    var shortcutData = ls.getItem("shortcuts")
    if (shortcutData) {
      data = JSON.parse(shortcutsData)
    }
    if (!shortcutObj) {
      data.push({
        name: shortcutName,
        link: shortcutLink
      })
    }
    var obj = JSON.stringify(data)
    ls.setItem("shortcuts", obj)
    var shortcut = c("a")
    shortcut.href = shortcutLink
    shortcut.alt = " "
    shortcut.target = "_blank"
    shortcut.innerHTML = shortcutName
    var shortcutButton = c("button")
    var shortcutImage = c("img")
    shortcutImage.src = "/resources/img/shortcut.png"
    $("#shortcuts").append(shortcutButton);
    $(shortcutButton).append(shortcut);
    $(shortcut).prepend(shortcutImage);
    $(".inputMenu").val('')
    closeMenu();
  }
  else {
    $(".inputMenu").attr('placeholder', 'Je moet hier iets invullen!')
  }
}

var shortcutsA = Array.from(d("shortcuts").querySelectorAll("div"))
shortcutsA.forEach(short=>{
  short.addEventListener("contextmenu", removeShortcut)
})
function removeShortcut(e) {
  e.preventDefault()
  this.outerHTML = ""
}
