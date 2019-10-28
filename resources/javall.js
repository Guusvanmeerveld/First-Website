// 000webhost watermark remover
addEventListener("load", function() {
    if (document.querySelector('[alt="www.000webhost.com"]')) {
        let el = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
        el.parentNode.removeChild(el);
    }
})

// Tawk
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5da48879f82523213dc72f8f/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// Console mark
console.log('%cDoor Guus van Meerveld', "color:#9c9c9c; font-size:30px;");

// Head tag
var shortcon = $("<link>", {rel :'shortcut icon',href:'/resources/img/favicon.ico'})

$('head').append(shortcon)

// Https
// if (location.protocol == "http:" && location.port !== "3000" && location.host !== "guusvanmeerveld.online") {
//   location.protocol = "https:"
// }
