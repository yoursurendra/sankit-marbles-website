export const siteConfig = {
  businessName: "Sankit Marbles & Granites",
  tagline: "Natural Stone for Every Space",
  location: "Kothagudem & Khammam, Telangana",

  locations: [
    {
      name: "Kothagudem",
      address:
        "AP Housing Board Colony, Kothagudem, Bhadradri Kothagudem District, Telangana - 507101",
    },
    {
      name: "Khammam",
      address:
        "Door No. 7-3-12, Near H.P. Petrol Bunk, Bypass Road, Khanapuram Haweli, Khammam, Telangana - 507002",
    },
  ],

  // Kept for compatibility with existing components
  address:
    "AP Housing Board Colony, Kothagudem, Bhadradri Kothagudem District, Telangana - 507101",

  contacts: [
    { name: "Jaydev", phone: "9549935605" },
    { name: "Rahul", phone: "9166857950" },
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

export const telLink = (phone) => `tel:+91${phone}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Marble", href: "#catalogue" },
  { label: "Granite", href: "#catalogue" },
  { label: "Applications", href: "#applications" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#enquiry" },
];
