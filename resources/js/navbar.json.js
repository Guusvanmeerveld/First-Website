Navbar = [
  {
    name: "Home",
    desc: "Ga naar de homepagina",
    link: "/",
    icon: "fas fa-home"
  },
  {
    name: "Search",
    desc: "Zoek iets op",
    icon: "fas fa-search",
    func: "showSearch()"
  },
  {
    name: "Playground",
    desc: "Test je html live!",
    link: "/playground",
    icon: "fas fa-code"
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
