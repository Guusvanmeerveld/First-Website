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

// Hamburger Menu
var hamburger = c("i")
hamburger.className = "fas fa-bars fa-2x"
navigation.prepend(hamburger)

// Create Navbar
Navbar.forEach(i=>{
  var navList = c("li")
    navList.className = "navList"
  var navLink = c("a");
    navList.appendChild(navLink);
  if (i.link) {
    navLink.href = i.link
  }
  if (i.name) {
    navLink.innerHTML = i.name
  }
  if (i.desc) {
    navLink.title = i.desc
  }
  if (i.icon) {
    var navImg = c("img")
    navImg.src = i.icon
    navImg.className = "navImg"
    navImg.alt = "img"
    navLink.appendChild(navImg)
  }
  var dropdownList = c("ul")
    dropdownList.className = "dropdownList"
    dropdownList.style = "display: none;"
  if (typeof i.dropdown == "object") {
        i.dropdown.forEach(d=>{
          if (d.link) {
            var dropdownListItem = c("li");
              dropdownListItem.className = "dropdownLi"
            var dropdownLink = c("a");
              dropdownLink.href = d.link
              dropdownLink.innerHTML = d.name
            if (d.desc) {
              dropdownLink.title = d.desc
            }
            dropdownListItem.appendChild(dropdownLink);
          dropdownList.appendChild(dropdownListItem);
          }
          navList.appendChild(dropdownList)
      })
      navLink.innerHTML = navLink.innerHTML + "<i class='fas fa-caret-down'></i>"
    }
  navbarList.appendChild(navList);
})
