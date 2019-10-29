// Console mark
console.log('%cDoor Guus van Meerveld', "color:#9c9c9c; font-size:30px;");

// Head tag
var shortcon = $("<link>", {rel :'shortcut icon',href:'/resources/img/favicon.ico'})

$('head').append(shortcon)
<<<<<<< HEAD

// Https
if (location.protocol == "http:" && location.port !== "3000" && location.host !== "guusvanmeerveld.online") {
  location.protocol = "https:"
}
=======
>>>>>>> e28a9453f062af65383d1324fd83a161d4d22222
