var c = document.createElement.bind(document);
var d = document.getElementById.bind(document);

// Create downloads
Downloads.forEach(i=>{
  var h2 = c("h2")
    h2.innerHTML = i.catagory
  var headerDiv = c("div")
    headerDiv.className = "box headerBox"
  headerDiv.appendChild(h2)
  $('body').append(headerDiv)
    if (typeof i.content == "object") {
          i.content.forEach(d=>{
            var downloadDiv = c("div")
              downloadDiv.className = "box downloadbox"
            var a = c("a")
              a.href = d.href
              a.target = "_blank"
            var button = c("button")
              button.className = "btn btn-secondary"
              button.innerHTML = "Download " + d.name
            var img = c("img")
              img.src = "/resources/img/downloads/" + d.name + ".png"
              img.alt = ""
              img.className = "img"
            a.appendChild(button)
            $(downloadDiv).append(a, img)
            $('body').append(downloadDiv)
          })
        }
      })
