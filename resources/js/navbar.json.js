Navbar = [
  {
    name: "Search",
    desc: "Zoek iets op",
    icon: "fas fa-search",
    func: "showSearch()"
  },
  {
    name: "Home",
    desc: "Ga naar de homepagina",
    link: "/",
    icon: "fas fa-home"
  },
  {
    name: "Contact",
    desc: "Neem contact met mij op",
    link: "/contact",
    icon: "fas fa-phone"
  },
  {
    name: "Experimenteel",
    desc: "Allemaal experimentele dingen",
    icon: "fas fa-vial",
    dropdown: [
      {
        name: "Color",
        desc: "Mooie regenboog kleurtjes",
        link: "/color",
        icon: "fas fa-tint"
      },
      {
        name: "Canvas",
        desc: "Mijn eerste canvas",
        link: "/canvas",
        icon: "fas fa-pencil-alt"
      }
    ]
  }
]
