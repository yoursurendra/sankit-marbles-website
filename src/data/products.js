import makranaImage from "../assets/product/makrana.png";
import agariyaWhiteImage from "../assets/product/agariya-white.png";
import aarnaImage from "../assets/product/aarna.png";
import jhanjharImage from "../assets/product/jhanjhar.png";
import sawarImage from "../assets/product/sawar.png";
import nanoWhiteImage from "../assets/product/nano-white.png";
import dungriImage from "../assets/product/dungri.png";

import pWhiteImage from "../assets/product/p-white.png";
import sWhiteImage from "../assets/product/s-white.png";
import jiravalWhiteImage from "../assets/product/jiraval-white.png";
import rBlackImage from "../assets/product/r-black.png";
import lapatraImage from "../assets/product/lapatra.png";
import khammamBlackImage from "../assets/product/khammam-black.png";
import blueDotImage from "../assets/product/blue-dot.png";
export const marbleProducts = [
  { id: 1, slug: "makrana", name: "Makrana", category: "Marble", image: makranaImage },
  { id: 2, slug: "agariya-white", name: "Agariya White", category: "Marble", image: agariyaWhiteImage },
  { id: 3, slug: "aarna", name: "Aarna", category: "Marble", image: aarnaImage },
  { id: 4, slug: "jhanjhar", name: "Jhanjhar", category: "Marble", image: jhanjharImage },
  { id: 5, slug: "sawar", name: "Sawar", category: "Marble", image: sawarImage },
  { id: 6, slug: "nano-white", name: "Nano White", category: "Marble", image: nanoWhiteImage },
  { id: 7, slug: "dungri", name: "Dungri", category: "Marble", image: dungriImage },
];

export const graniteProducts = [
  { id: 8, slug: "p-white", name: "P White", category: "Granite", image: pWhiteImage },
  { id: 9, slug: "s-white", name: "S White", category: "Granite", image: sWhiteImage },
  { id: 10, slug: "jiraval-white", name: "Jiraval White", category: "Granite", image: jiravalWhiteImage },
  { id: 11, slug: "r-black", name: "R Black", category: "Granite", image: rBlackImage },
  { id: 12, slug: "lapatra", name: "Lapatra", category: "Granite", image: lapatraImage },
  { id: 13, slug: "khammam-black", name: "Khammam Black", category: "Granite", image: khammamBlackImage },
  { id: 14, slug: "blue-dot", name: "Blue Dot", category: "Granite", image: blueDotImage },
];

export const products = [...marbleProducts, ...graniteProducts];

console.log("GRANITE PRODUCTS:", graniteProducts);