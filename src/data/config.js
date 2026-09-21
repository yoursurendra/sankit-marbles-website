export const siteConfig = {
  businessName: "Sankit Marbles & Granites",
  tagline: "Natural Stone for Every Space",
  location: "Kothagudem, Telangana",

  address:
    "2-2-152/7C, Housing Board Colony, Khammam Road, Chunchupally, Bhadradri Kothagudem (Dt), Telangana - 507101",

  contacts: [
    {
      name: "Jaydev",
      phone: "9549935605",
    },
    {
      name: "Rahul",
      phone: "9166857950",
    },
  ],

  whatsappNumber: "919549935605",

  whatsappDefaultMessage:
    "Hello, I am interested in your marble and granite collection. I would like to know more.",
};


export const whatsappLink = (
  message = siteConfig.whatsappDefaultMessage
) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;


export const telLink = (phone) =>
  `tel:+91${phone}`;


export const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Marble",
    href: "#catalogue",
  },
  {
    label: "Granite",
    href: "#catalogue",
  },
  {
    label: "Applications",
    href: "#applications",
  },
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#enquiry",
  },
];