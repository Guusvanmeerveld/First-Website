var c = document.createElement.bind(document);
var d = document.getElementById.bind(document);
var g = document.querySelector.bind(document);

// Insert nav tag
var navigation = c("nav")
navigation.className = "navigation"
var navbarList = c("ul")
navbarList.className = "navbarList"
navigation.appendChild(navbarList)
document.body.appendChild(navigation)

// Create Navbar
Navbar.forEach(i=>{
  var navList = c("li")
  navList.className = "navList"
  var navButton = c("button");
    navButton.className = "navbarbutton"
    navButton.innerHTML = "<i class='" + i.icon + " fa-lg'></i>" + i.name
  if (i.link) {
    var navLink = c("a");
    navLink.href = i.link
    navLink.appendChild(navButton);
    navButton = navLink
  }
  if (i.desc) {
    navButton.title = i.desc
  }
  navList.appendChild(navButton)
  var dropdownList = c("ul")
    dropdownList.className = "dropdownList"
    dropdownList.style = "opacity: 0;"
  if (typeof i.dropdown == "object") {
        i.dropdown.forEach(d=>{
          var dropdownListItem = c("li");
          // Dropdown button
          var dropdownButton = c("button");
            dropdownButton.innerHTML = "<i class='" + d.icon + " fa-lg'></i>" + d.name
            dropdownButton.className = "dropdownButton"
          if (d.desc) {
            dropdownButton.title = d.desc
          }
          if (d.link) {
            var link = c("a");
            link.href = d.link
            link.appendChild(dropdownButton);
            dropdownButton = link
          }
          dropdownListItem.appendChild(dropdownButton);
        dropdownList.appendChild(dropdownListItem);
      })
    }
    $(navList).append(dropdownList)
  navbarList.appendChild(navList);
})

// Appearance changer
var appearanceSwitch = c("label")
  appearanceSwitch.className = "appearance"
  appearanceSwitch.title = "Dark/Light mode"
var appearanceInput = c("input")
  appearanceInput.type = "checkbox"
var appearanceSpan = c("span")
  appearanceSpan.className = "appearanceSlider"
$(appearanceSwitch).append(appearanceInput, appearanceSpan)
navigation.appendChild(appearanceSwitch)
