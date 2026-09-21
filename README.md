# Sankit Marbles & Granites — Website

React + Vite + Tailwind CSS site for Sankit Marbles & Granites, Kothagudem,
Telangana.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # production build → dist/
npm run preview     # preview the production build
```

## Previewing the built site without npm

If you just want to open a built `dist/` folder locally, **serve it over
`http://`, don't open `index.html` by double-clicking it** — Chrome blocks
loading JS modules from a `file://` page. From inside the folder:

```bash
npx serve .              # or: python3 -m http.server 8000
```

## Adding real product photos

The client has confirmed 14 product names (7 marble, 7 granite) but photos
have not yet been matched to each name. Every product currently shows a
neutral "Photo coming soon" placeholder rather than a guessed image.

To add a real photo once you have it, open `src/data/images.js` and replace
the relevant `null` with an image path or URL, e.g.:

```js
marbleImages: {
  makrana: "/products/makrana.jpg",   // was: null
  ...
}
```

Nothing else needs to change — `src/data/products.js` and every component
that displays products read from this file automatically.

## Adding confirmed product details

`src/data/products.js` currently holds only `id`, `slug`, `name`, `category`,
and `image` for each product — origin, price, finish, thickness, grade, and
applications are deliberately omitted since they haven't been confirmed by
the client. Add fields to a product object once confirmed and update
`ProductCatalogue.jsx` / `ProductModal.jsx` to display them — don't invent
values in the meantime.

## Project structure

```
src/
  data/
    config.js        # business name, address, contacts, WhatsApp link
    products.js       # the 14 confirmed products (marble + granite)
    images.js         # product photo mapping + decorative/section imagery
    collections.js     # applications list + FAQ + stats (all confirmed-only)
  components/
    ui/               # Reveal, Eyebrow, Counter, VeinLine, StoneSwatch, Media
    sections/          # one file per homepage section
    Header.jsx, Footer.jsx, MobileMenu.jsx, SearchOverlay.jsx,
    ProductModal.jsx, EnquiryForm.jsx, WhatsAppButton.jsx
```

## Notes on content

Sections that would have required unconfirmed or fabricated content
(customer testimonials, past project case studies, company history/founding
year, and specific technical specifications) have been removed rather than
filled with placeholder claims. The architecture (one file per section,
data-driven components) makes it straightforward to add any of these back
once the client provides real content — create a new section component and
a matching data file under `src/data/`, following the pattern of the
existing sections.
