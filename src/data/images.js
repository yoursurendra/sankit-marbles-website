// Centralized image configuration.

//
// PRODUCT PHOTOS (marbleImages / graniteImages below): the client has
// confirmed 14 product names but has not yet supplied photographs matched
// to each specific name. Per instructions, we do NOT guess which stock or
// placeholder photo "looks like" which stone — a wrong guess would
// misrepresent the actual product. Each entry is `null` until a real,
// confirmed photo is assigned. <Media> renders a neutral "photo coming
// soon" tile for any `null` entry — never a stand-in photo.
//
// To add a real photo once the client provides it, just replace the
// `null` with an image path/URL, e.g.:
//   makrana: "/products/makrana.jpg"
// Nothing else needs to change — every component reads from here.
//
// DECORATIVE / SECTION IMAGERY (hero, applications, etc.): these are
// generic, non-product-specific atmospheric photography or generated
// abstract stone art (see StoneSwatch) used for page mood, not to
// represent a specific confirmed product.
const photo = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const swatch = (tone, seed) => ({ swatch: true, tone, seed });

export const images = {
  hero: photo("photo-1632198761400-00497310f848", 2400),
  aboutShowroom: photo("photo-1722605090433-41d1183a792d", 2000),

  // Confirmed marble varieties — photo pending for all until supplied.
  marbleImages: {
  makrana: null, //"/src/assets/products/makrana.png", 
  agariyaWhite: null,
  aarna: null,
  jhanjhar: null,
  sawar: null,
  nanoWhite: null,
  dungri: null,
},

  // Confirmed granite varieties — photo pending for all until supplied.
  graniteImages: {
    pWhite: null,
    sWhite: null,
    jiravalWhite: null,
    rBlack: null,
    lapatra: null,
    khammamBlack: null,
    blueDot: null,
  },

  applications: {
    livingRoom: swatch("ivory", "app-living-room"),
    kitchen: photo("photo-1635108195612-1ba1c88aaf0c"),
    bathroom: photo("photo-1701251786408-d0320ecaad8d"),
    bedroom: swatch("rosa", "app-bedroom"),
    flooring: swatch("grigio", "app-flooring"),
    walls: swatch("bianco", "app-walls"),
    staircases: swatch("grigio", "app-staircases"),
    facades: swatch("basalt", "app-facades"),
    countertops: photo("photo-1560185127-1902ccdc5094"),
    outdoor: swatch("terra", "app-outdoor"),
  },

  architects: swatch("basalt", "architects-section"),
  ctaBackground: swatch("bronze", "cta-background"),
};
