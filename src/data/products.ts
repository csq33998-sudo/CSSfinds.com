import type { Lang } from "@/data/i18n";

export type Product = {
  id: string;
  name: string;
  category: "shoes" | "hoodies" | "tshirts" | "accessories" | "bags" | "pants";
  brand: string;
  price: number;
  rating: number;
  qc: boolean;
  tags: string[];
  image: string;
  imageAltDetail: string;
  destinationUrl: string;
  updated: string;
};

export const streetStyleProductUrls = {
  shoes: "https://streetstyle.maisonlooks.com/en/p/dior-dior-book-tote-lime-green-sneakers-43dac4",
  hoodies: "https://streetstyle.maisonlooks.com/en/p/balenciaga-beige-hoodie-with-balen-ciaga-print-9ff998",
  tshirts: "https://streetstyle.maisonlooks.com/en/p/stussy-st-ssy-infiltrate-navy-t-shirt-31b46f",
  accessories: "https://streetstyle.maisonlooks.com/en/p/stone-island-68-15-black-hooded-puffer-jacket-1eed77",
  bags: "https://streetstyle.maisonlooks.com/en/p/goyard-goyardine-grey-tote-bag-97d84b",
  pants: "https://streetstyle.maisonlooks.com/en/p/pink-white-panel-track-pants-71d579",
  electronics: "https://streetstyle.maisonlooks.com/en/p/apple-airpods-max-plastic-black-headphones-0db9f3",
} as const;

export const promotionUrl = streetStyleProductUrls.shoes;

export const streetStyleSearchUrl = "https://streetstyle.maisonlooks.com/en/search";

export const getStreetStyleUrl = (category?: string, _campaign?: string) =>
  streetStyleProductUrls[category as keyof typeof streetStyleProductUrls] ?? promotionUrl;

export const categories = [
  { slug: "shoes", label: "Shoes", title: "CSSBuy Shoes Spreadsheet", destinationUrl: getStreetStyleUrl("shoes", "nav_shoes") },
  { slug: "hoodies", label: "Hoodies", title: "CSSBuy Hoodies Spreadsheet", destinationUrl: getStreetStyleUrl("hoodies", "nav_hoodies") },
  { slug: "tshirts", label: "T-Shirts", title: "CSSBuy T-Shirts Spreadsheet", destinationUrl: getStreetStyleUrl("tshirts", "nav_tshirts") },
  { slug: "accessories", label: "Accessories", title: "CSSBuy Accessories Spreadsheet", destinationUrl: getStreetStyleUrl("accessories", "nav_accessories") },
  { slug: "bags", label: "Bags", title: "CSSBuy Bags Spreadsheet", destinationUrl: getStreetStyleUrl("bags", "nav_bags") },
  { slug: "pants", label: "Pants", title: "CSSBuy Pants Spreadsheet", destinationUrl: getStreetStyleUrl("pants", "nav_pants") },
] as const;

const categoryLabels: Record<Lang, Record<Product["category"], string>> = {
  en: {
    shoes: "Shoes",
    hoodies: "Hoodies",
    tshirts: "T-Shirts",
    accessories: "Accessories",
    bags: "Bags",
    pants: "Pants",
  },
  de: {
    shoes: "Schuhe",
    hoodies: "Hoodies",
    tshirts: "T-Shirts",
    accessories: "Accessoires",
    bags: "Taschen",
    pants: "Hosen",
  },
  fr: {
    shoes: "Chaussures",
    hoodies: "Hoodies",
    tshirts: "T-shirts",
    accessories: "Accessoires",
    bags: "Sacs",
    pants: "Pantalons",
  },
  es: {
    shoes: "Zapatillas",
    hoodies: "Hoodies",
    tshirts: "Camisetas",
    accessories: "Accesorios",
    bags: "Bolsos",
    pants: "Pantalones",
  },
  it: {
    shoes: "Sneakers",
    hoodies: "Felpe",
    tshirts: "T-shirt",
    accessories: "Accessori",
    bags: "Borse",
    pants: "Pantaloni",
  },
  nl: {
    shoes: "Schoenen",
    hoodies: "Hoodies",
    tshirts: "T-shirts",
    accessories: "Accessoires",
    bags: "Tassen",
    pants: "Broeken",
  },
  pt: {
    shoes: "Tenis",
    hoodies: "Hoodies",
    tshirts: "Camisetas",
    accessories: "Acessorios",
    bags: "Bolsas",
    pants: "Calcas",
  },
};

const productNames: Record<Lang, Record<string, string>> = {
  en: {},
  de: {},
  fr: {},
  es: {},
  it: {},
  nl: {},
  pt: {},
};

export const products: Product[] = [
  {
    id: "shoes-001",
    name: "Dior Dior Book Tote Lime Green Sneakers",
    category: "shoes",
    brand: "Dior",
    price: 34,
    rating: 4.4,
    qc: true,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778498836301-705351020.webp",
    imageAltDetail: "Dior Dior Dior Book Tote Lime Green Sneakers Green",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/dior-dior-book-tote-lime-green-sneakers-43dac4",
    updated: "2026-08-20"
  },
  {
    id: "shoes-002",
    name: "Nike Air Jordan 4 Super Mario Black/Green Sneakers",
    category: "shoes",
    brand: "Nike",
    price: 49,
    rating: 4.4,
    qc: true,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778500935232-699864393.webp",
    imageAltDetail: "Nike Nike Air Jordan 4 Super Mario Black/Green Sneakers Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-air-jordan-4-super-mario-black-green-sneakers-61ae7a",
    updated: "2026-08-20"
  },
  {
    id: "shoes-003",
    name: "A Bathing Ape BAPE STA Camo Star White Sneakers",
    category: "shoes",
    brand: "A Bathing Ape",
    price: 39,
    rating: 4.5,
    qc: true,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778586179711-680000277.webp",
    imageAltDetail: "A Bathing Ape A Bathing Ape BAPE STA Camo Star White Sneakers White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/a-bathing-ape-bape-sta-camo-star-white-sneakers-f22aa6",
    updated: "2026-08-20"
  },
  {
    id: "shoes-004",
    name: "Golden Goose Super-Star 02 White/Navy Sneakers",
    category: "shoes",
    brand: "Golden Goose",
    price: 49,
    rating: 4.6,
    qc: true,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778311324674-359200140.webp",
    imageAltDetail: "Golden Goose Golden Goose Super-Star 02 White/Navy Sneakers White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/golden-goose-super-star-02-white-navy-sneakers-cc45dd",
    updated: "2026-08-20"
  },
  {
    id: "shoes-005",
    name: "Nike Air Force 1 White/Brown Sneakers",
    category: "shoes",
    brand: "Nike",
    price: 22,
    rating: 4.6,
    qc: false,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778646154333-594085514.webp",
    imageAltDetail: "Nike Nike Air Force 1 White/Brown Sneakers White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-air-force-1-white-brown-sneakers-bca374",
    updated: "2026-08-20"
  },
  {
    id: "shoes-006",
    name: "Nike Air Max Tn Rainbow Green Sneakers",
    category: "shoes",
    brand: "Nike",
    price: 24,
    rating: 4.7,
    qc: true,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778653145828-851515538.webp",
    imageAltDetail: "Nike Nike Air Max Tn Rainbow Green Sneakers Green",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-air-max-tn-rainbow-green-sneakers-49f5de",
    updated: "2026-08-20"
  },
  {
    id: "shoes-007",
    name: "Chanel Runners White/Silver Sneakers",
    category: "shoes",
    brand: "Chanel",
    price: 59,
    rating: 4.3,
    qc: true,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778583224468-701773689.webp",
    imageAltDetail: "Chanel Chanel Runners White/Silver Sneakers Silver",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/chanel-runners-white-silver-sneakers-6647a7",
    updated: "2026-08-20"
  },
  {
    id: "shoes-008",
    name: "Nike Air Force 1 Triple Black Sneakers",
    category: "shoes",
    brand: "Nike",
    price: 36,
    rating: 4.4,
    qc: true,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778645748655-509186092.webp",
    imageAltDetail: "Nike Nike Air Force 1 Triple Black Sneakers Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-air-force-1-triple-black-sneakers-899dff",
    updated: "2026-08-20"
  },
  {
    id: "shoes-009",
    name: "Unknown ALBB-11 Pink/White Sneakers",
    category: "shoes",
    brand: "Unknown",
    price: 36,
    rating: 4.4,
    qc: true,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778650361651-273904040.webp",
    imageAltDetail: "Other Unknown ALBB-11 Pink/White Sneakers Pink",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/unknown-albb-11-pink-white-sneakers-8d8c64",
    updated: "2026-08-20"
  },
  {
    id: "shoes-010",
    name: "Nike Air Max 95 Triple Black Sneakers",
    category: "shoes",
    brand: "Nike",
    price: 27,
    rating: 4.5,
    qc: false,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778673086064-288411347.webp",
    imageAltDetail: "Nike Nike Air Max 95 Triple Black Sneakers Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-air-max-95-triple-black-sneakers-10e363",
    updated: "2026-08-20"
  },
  {
    id: "shoes-011",
    name: "Nike Air Force 1 White Orange Sneakers",
    category: "shoes",
    brand: "Nike",
    price: 41,
    rating: 4.6,
    qc: true,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778414650301-448519743.webp",
    imageAltDetail: "Nike Nike Air Force 1 White Orange Sneakers White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-air-force-1-white-orange-sneakers-fe963f",
    updated: "2026-08-20"
  },
  {
    id: "shoes-012",
    name: "Alexander McQueen McQueen Oversized Lush Red Sneakers",
    category: "shoes",
    brand: "Alexander McQueen",
    price: 46,
    rating: 4.6,
    qc: true,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778418847315-828023273.webp",
    imageAltDetail: "Alexander McQueen Alexander McQueen McQueen Oversized Lush Red Sneakers Red",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/alexander-mcqueen-mcqueen-oversized-lush-red-sneakers-cbf5bb",
    updated: "2026-08-20"
  },
  {
    id: "shoes-013",
    name: "Adidas Yeezy 350 V2 Hyperspace EG7491 Sneakers",
    category: "shoes",
    brand: "Adidas",
    price: 25,
    rating: 4.7,
    qc: true,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778499126556-596887880.webp",
    imageAltDetail: "Adidas Adidas Yeezy 350 V2 Hyperspace EG7491 Sneakers Green",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/adidas-yeezy-350-v2-hyperspace-eg7491-sneakers-118c2d",
    updated: "2026-08-20"
  },
  {
    id: "shoes-014",
    name: "Alexander McQueen Oversized White & Red Sneakers",
    category: "shoes",
    brand: "Alexander McQueen",
    price: 26,
    rating: 4.3,
    qc: true,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778647023203-390013557.webp",
    imageAltDetail: "Alexander McQueen Alexander McQueen Oversized White & Red Sneakers White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/alexander-mcqueen-oversized-white-red-sneakers-bc437c",
    updated: "2026-08-20"
  },
  {
    id: "shoes-015",
    name: "Nike Air Force 1 Off-White Triple Black Sneakers",
    category: "shoes",
    brand: "Off-White",
    price: 36,
    rating: 4.4,
    qc: false,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778676595746-655156733.webp",
    imageAltDetail: "Nike Nike Air Force 1 Off-White Triple Black Sneakers Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-air-force-1-off-white-triple-black-sneakers-49a35b",
    updated: "2026-08-20"
  },
  {
    id: "shoes-016",
    name: "Nike Air Jordan 4 Levis Denim AO2571-401 Sneakers",
    category: "shoes",
    brand: "Nike",
    price: 39,
    rating: 4.4,
    qc: true,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778420608416-205149477.webp",
    imageAltDetail: "Nike Nike Air Jordan 4 Levis Denim AO2571-401 Sneakers Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-air-jordan-4-levis-denim-ao2571-401-sneakers-b7c7d0",
    updated: "2026-08-20"
  },
  {
    id: "shoes-017",
    name: "Nike Dunk Low University Blue Sneakers",
    category: "shoes",
    brand: "Nike",
    price: 14,
    rating: 4.5,
    qc: true,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778683720114-197392522.webp",
    imageAltDetail: "Nike Nike Dunk Low University Blue Sneakers Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-dunk-low-university-blue-sneakers-cb983f",
    updated: "2026-08-20"
  },
  {
    id: "shoes-018",
    name: "Dior Dior Book Tote Black White Sneakers",
    category: "shoes",
    brand: "Dior",
    price: 75,
    rating: 4.6,
    qc: true,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778422095141-876968727.webp",
    imageAltDetail: "Dior Dior Dior Book Tote Black White Sneakers Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/dior-dior-book-tote-black-white-sneakers-e86a27",
    updated: "2026-08-20"
  },
  {
    id: "shoes-019",
    name: "Nike Dunk Low Retro Purple/White Sneakers",
    category: "shoes",
    brand: "Nike",
    price: 18,
    rating: 4.6,
    qc: true,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778597026001-520774956.webp",
    imageAltDetail: "Nike Nike Dunk Low Retro Purple/White Sneakers Purple",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-dunk-low-retro-purple-white-sneakers-e862da",
    updated: "2026-08-20"
  },
  {
    id: "shoes-020",
    name: "Dior Dior Book Tote Orange & Beige Sneakers",
    category: "shoes",
    brand: "Dior",
    price: 55,
    rating: 4.7,
    qc: false,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778597839279-10768911.webp",
    imageAltDetail: "Dior Dior Dior Book Tote Orange & Beige Sneakers Orange",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/dior-dior-book-tote-orange-beige-sneakers-8431b9",
    updated: "2026-08-20"
  },
  {
    id: "shoes-021",
    name: "Adidas Samba Smile Black/White Sneakers",
    category: "shoes",
    brand: "Adidas",
    price: 17,
    rating: 4.3,
    qc: true,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778682943700-270188439.webp",
    imageAltDetail: "Adidas Adidas Samba Smile Black/White Sneakers Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/adidas-samba-smile-black-white-sneakers-376763",
    updated: "2026-08-20"
  },
  {
    id: "shoes-022",
    name: "Louis Vuitton LV Trainer Lv Arch Light Sneaker White/Blue",
    category: "shoes",
    brand: "Louis Vuitton",
    price: 38,
    rating: 4.4,
    qc: true,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778417260079-528775417.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton LV Trainer Lv Arch Light Sneaker White/Blue Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-lv-trainer-lv-arch-light-sneaker-white-blue-51908a",
    updated: "2026-08-20"
  },
  {
    id: "shoes-023",
    name: "Nike Air Force 1 White Sneakers",
    category: "shoes",
    brand: "Nike",
    price: 21,
    rating: 4.4,
    qc: true,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778422801764-463082412.webp",
    imageAltDetail: "Nike Nike Air Force 1 White Sneakers White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-air-force-1-white-sneakers-e0d005",
    updated: "2026-08-20"
  },
  {
    id: "shoes-024",
    name: "Off-White OW100 Shooter Black/Yellow Sneakers",
    category: "shoes",
    brand: "Off-White",
    price: 46,
    rating: 4.5,
    qc: true,
    tags: [
      "shoe",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778585582093-469002711.webp",
    imageAltDetail: "Off-White Off-White OW100 Shooter Black/Yellow Sneakers Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/off-white-ow100-shooter-black-yellow-sneakers-0265e1",
    updated: "2026-08-20"
  },
  {
    id: "shoes-025",
    name: "New Balance Fresh Foam 900 Pink Sneakers",
    category: "shoes",
    brand: "New Balance",
    price: 34,
    rating: 4.6,
    qc: false,
    tags: [
      "shoe",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778678189954-958561402.webp",
    imageAltDetail: "New Balance New Balance Fresh Foam 900 Pink Sneakers Pink",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/new-balance-fresh-foam-900-pink-sneakers-f1aa85",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-001",
    name: "Balenciaga Beige Hoodie with BALEN CIAGA Print",
    category: "hoodies",
    brand: "Balenciaga",
    price: 28,
    rating: 4.4,
    qc: true,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778310149772-24668939.webp",
    imageAltDetail: "Balenciaga Balenciaga Beige Hoodie with BALEN CIAGA Print Beige",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/balenciaga-beige-hoodie-with-balen-ciaga-print-9ff998",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-002",
    name: "Stone Island 68-15 Grey Half-Zip Sweater",
    category: "hoodies",
    brand: "Stone Island",
    price: 17,
    rating: 4.4,
    qc: true,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778421537762-48980604.webp",
    imageAltDetail: "Stone Island Stone Island 68-15 Grey Half-Zip Sweater Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/stone-island-68-15-grey-half-zip-sweater-b0c932",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-003",
    name: "Lacoste Classic Crocodile Crewneck Sweatshirt Black",
    category: "hoodies",
    brand: "Lacoste",
    price: 15,
    rating: 4.5,
    qc: true,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778313364986-113905089.webp",
    imageAltDetail: "Lacoste Lacoste Classic Crocodile Crewneck Sweatshirt Black Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/lacoste-classic-crocodile-crewneck-sweatshirt-black-94407a",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-004",
    name: "Fendi Black with Green FF Logo Sweatshirt",
    category: "hoodies",
    brand: "Fendi",
    price: 33,
    rating: 4.6,
    qc: true,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778583082659-597384352.webp",
    imageAltDetail: "Fendi Fendi Black with Green FF Logo Sweatshirt Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/fendi-black-with-green-ff-logo-sweatshirt-edcb4e",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-005",
    name: "Black White Floral Print Hoodie",
    category: "hoodies",
    brand: "Black",
    price: 21,
    rating: 4.6,
    qc: false,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778419625096-721545661.webp",
    imageAltDetail: "Other Black White Floral Print Hoodie Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/black-white-floral-print-hoodie-21e7e1",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-006",
    name: "Polo Ralph Lauren Big Pony Hoodie Navy Red",
    category: "hoodies",
    brand: "Polo Ralph Lauren",
    price: 17,
    rating: 4.7,
    qc: true,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778671299906-371009841.webp",
    imageAltDetail: "Polo Ralph Lauren Polo Ralph Lauren Big Pony Hoodie Navy Red Navy",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/polo-ralph-lauren-big-pony-hoodie-navy-red-4bf2e6",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-007",
    name: "Moncler Crewneck Sweatshirt Cream",
    category: "hoodies",
    brand: "Moncler",
    price: 27,
    rating: 4.3,
    qc: true,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778596576677-579863712.webp",
    imageAltDetail: "Moncler Moncler Crewneck Sweatshirt Cream Cream",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/moncler-crewneck-sweatshirt-cream-7cf38c",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-008",
    name: "Fear of God Essentials FOG-22 Grey Hoodie",
    category: "hoodies",
    brand: "Fear of God",
    price: 15,
    rating: 4.4,
    qc: true,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778678005423-910650648.webp",
    imageAltDetail: "Fear of God Fear of God Essentials FOG-22 Grey Hoodie Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/fear-of-god-essentials-fog-22-grey-hoodie-c2b802",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-009",
    name: "Palm Angels Palm Hoodie Black Tropical Print Sweatshirt",
    category: "hoodies",
    brand: "Palm Angels",
    price: 20,
    rating: 4.4,
    qc: true,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778680952092-454408850.webp",
    imageAltDetail: "Palm Angels Palm Angels Palm Hoodie Black Tropical Print Sweatshirt Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/palm-angels-palm-hoodie-black-tropical-print-sweatshirt-3a85c0",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-010",
    name: "CP Company Goggle Black Crewneck Sweatshirt",
    category: "hoodies",
    brand: "CP Company",
    price: 17,
    rating: 4.5,
    qc: false,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778592609904-853495518.webp",
    imageAltDetail: "CP Company CP Company Goggle Black Crewneck Sweatshirt Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/cp-company-goggle-black-crewneck-sweatshirt-42cb26",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-011",
    name: "Lacoste Pink Crocodile Embroidery Sweatshirt",
    category: "hoodies",
    brand: "Lacoste",
    price: 21,
    rating: 4.6,
    qc: true,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778603414410-941209183.webp",
    imageAltDetail: "Lacoste Lacoste Pink Crocodile Embroidery Sweatshirt Pink",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/lacoste-pink-crocodile-embroidery-sweatshirt-158404",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-012",
    name: "Louis Vuitton White LV Logo Sweater",
    category: "hoodies",
    brand: "Louis Vuitton",
    price: 34,
    rating: 4.6,
    qc: true,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778498312229-604555536.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton White LV Logo Sweater White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-white-lv-logo-sweater-8cffba",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-013",
    name: "Black Graffiti Hoodie & Pants Set T33 Tracksuit",
    category: "hoodies",
    brand: "Black",
    price: 31,
    rating: 4.7,
    qc: true,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778499585218-862667383.webp",
    imageAltDetail: "Other Black Graffiti Hoodie & Pants Set T33 Tracksuit Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/black-graffiti-hoodie-pants-set-t33-tracksuit-4424b6",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-014",
    name: "Stone Island 68-15 Black Hoodie",
    category: "hoodies",
    brand: "Stone Island",
    price: 22,
    rating: 4.3,
    qc: true,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778669151315-422045397.webp",
    imageAltDetail: "Stone Island Stone Island 68-15 Black Hoodie Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/stone-island-68-15-black-hoodie-f0557c",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-015",
    name: "Moncler Grey Embroidered Logo Crewneck Sweatshirt",
    category: "hoodies",
    brand: "Moncler",
    price: 13,
    rating: 4.4,
    qc: false,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778656005663-965745805.webp",
    imageAltDetail: "Moncler Moncler Grey Embroidered Logo Crewneck Sweatshirt Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/moncler-grey-embroidered-logo-crewneck-sweatshirt-352789",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-016",
    name: "Carhartt Carhartt Work In Progress Zip-Up Hoodie Grey",
    category: "hoodies",
    brand: "Carhartt",
    price: 22,
    rating: 4.4,
    qc: true,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778612964063-900184219.webp",
    imageAltDetail: "Carhartt Carhartt Carhartt Work In Progress Zip-Up Hoodie Grey Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/carhartt-carhartt-work-in-progress-zip-up-hoodie-grey-453179",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-017",
    name: "Lacoste Red Crocodile Hoodie Sweatshirt",
    category: "hoodies",
    brand: "Lacoste",
    price: 14,
    rating: 4.5,
    qc: true,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778602678760-475631333.webp",
    imageAltDetail: "Lacoste Lacoste Red Crocodile Hoodie Sweatshirt Red",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/lacoste-red-crocodile-hoodie-sweatshirt-29ebb4",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-018",
    name: "Black Casa Blanca Par Avion Graphic Sweatshirt",
    category: "hoodies",
    brand: "Black",
    price: 20,
    rating: 4.6,
    qc: true,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778645944249-887109972.webp",
    imageAltDetail: "Other Black Casa Blanca Par Avion Graphic Sweatshirt Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/black-casa-blanca-par-avion-graphic-sweatshirt-a26949",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-019",
    name: "Off-White OW100 Black Arrow Sweater",
    category: "hoodies",
    brand: "Off-White",
    price: 19,
    rating: 4.6,
    qc: true,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778676098836-88818463.webp",
    imageAltDetail: "Off-White Off-White OW100 Black Arrow Sweater Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/off-white-ow100-black-arrow-sweater-27ca95",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-020",
    name: "Palm Angels Life is Palm White Graphic Hoodie",
    category: "hoodies",
    brand: "Palm Angels",
    price: 20,
    rating: 4.7,
    qc: false,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778680952095-30487566.webp",
    imageAltDetail: "Palm Angels Palm Angels Life is Palm White Graphic Hoodie White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/palm-angels-life-is-palm-white-graphic-hoodie-f46cad",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-021",
    name: "Stussy Nike Black Crewneck T-Shirt",
    category: "hoodies",
    brand: "Nike",
    price: 25,
    rating: 4.3,
    qc: true,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312271766-416254732.webp",
    imageAltDetail: "Stussy Stussy Nike Black Crewneck T-Shirt Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/stussy-nike-black-crewneck-t-shirt-463e87",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-022",
    name: "Hoodie with Yacht Graphic in Light Grey",
    category: "hoodies",
    brand: "Hoodie",
    price: 23,
    rating: 4.4,
    qc: true,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778418402290-288116222.webp",
    imageAltDetail: "Other Hoodie with Yacht Graphic in Light Grey Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/hoodie-with-yacht-graphic-in-light-grey-ea1d27",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-023",
    name: "Hoodie 'Cortez Rules the World' Grey Casual Pullover",
    category: "hoodies",
    brand: "Hoodie",
    price: 23,
    rating: 4.4,
    qc: true,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778418412248-523534579.webp",
    imageAltDetail: "Other Hoodie 'Cortez Rules the World' Grey Casual Pullover Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/hoodie-cortez-rules-the-world-grey-casual-pullover-a7420b",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-024",
    name: "Hoodie with Island Print in 26 Grey",
    category: "hoodies",
    brand: "Hoodie",
    price: 22,
    rating: 4.5,
    qc: true,
    tags: [
      "hoodie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778423492515-582187911.webp",
    imageAltDetail: "Other Hoodie with Island Print in 26 Grey Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/hoodie-with-island-print-in-26-grey-a08c40",
    updated: "2026-08-20"
  },
  {
    id: "hoodies-025",
    name: "Hoodie 1977 Oatmeal Cotton Pullover",
    category: "hoodies",
    brand: "Hoodie",
    price: 27,
    rating: 4.6,
    qc: false,
    tags: [
      "hoodie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778502115992-52388637.webp",
    imageAltDetail: "Other Hoodie 1977 Oatmeal Cotton Pullover Beige",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/hoodie-1977-oatmeal-cotton-pullover-43a1b5",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-001",
    name: "Stussy Stussy 'Infiltrate' Navy T-Shirt",
    category: "tshirts",
    brand: "Stussy",
    price: 12,
    rating: 4.4,
    qc: true,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778670350049-827671661.webp",
    imageAltDetail: "Stussy Stussy Stussy 'Infiltrate' Navy T-Shirt Navy",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/stussy-st-ssy-infiltrate-navy-t-shirt-31b46f",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-002",
    name: "White 'SJ-23' Graphic T-Shirt",
    category: "tshirts",
    brand: "White",
    price: 18,
    rating: 4.4,
    qc: true,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778670422078-611655847.webp",
    imageAltDetail: "Other White 'SJ-23' Graphic T-Shirt White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/white-sj-23-graphic-t-shirt-2c6f9a",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-003",
    name: "Ralph Lauren Blue Polo Jacket",
    category: "tshirts",
    brand: "Polo Ralph Lauren",
    price: 36,
    rating: 4.5,
    qc: true,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778420979946-208223943.webp",
    imageAltDetail: "Polo Ralph Lauren Ralph Lauren Blue Polo Jacket Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/ralph-lauren-blue-polo-jacket-79e267",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-004",
    name: "Polo Ralph Lauren Big Pony POLO Polo Shirt",
    category: "tshirts",
    brand: "Polo Ralph Lauren",
    price: 10,
    rating: 4.6,
    qc: true,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778579443329-200947044.webp",
    imageAltDetail: "Polo Ralph Lauren Polo Ralph Lauren Big Pony POLO Polo Shirt Pink",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/polo-ralph-lauren-big-pony-polo-polo-shirt-a21fa0",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-005",
    name: "Polo Ralph Lauren Polo 2 Black Puffer Jacket",
    category: "tshirts",
    brand: "Polo Ralph Lauren",
    price: 34,
    rating: 4.6,
    qc: false,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778599452285-276655098.webp",
    imageAltDetail: "Polo Ralph Lauren Polo Ralph Lauren Polo 2 Black Puffer Jacket Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/polo-ralph-lauren-polo-2-black-puffer-jacket-1c7c7b",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-006",
    name: "Nike FC Barcelona x Rolling Stones Jersey Red/Blue",
    category: "tshirts",
    brand: "Nike",
    price: 13,
    rating: 4.7,
    qc: true,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778682815209-899273300.webp",
    imageAltDetail: "Nike Nike FC Barcelona x Rolling Stones Jersey Red/Blue Red",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-fc-barcelona-x-rolling-stones-jersey-red-blue-cc599e",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-007",
    name: "Corteiz CRTZ Black Safety Pin T-Shirt",
    category: "tshirts",
    brand: "Corteiz",
    price: 13,
    rating: 4.3,
    qc: true,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778648748380-632287860.webp",
    imageAltDetail: "Corteiz Corteiz CRTZ Black Safety Pin T-Shirt Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/corteiz-crtz-black-safety-pin-t-shirt-e437a3",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-008",
    name: "Adidas Classic Football White Gold Jersey",
    category: "tshirts",
    brand: "Adidas",
    price: 10,
    rating: 4.4,
    qc: true,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778682504773-902245782.webp",
    imageAltDetail: "Adidas Adidas Classic Football White Gold Jersey White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/adidas-classic-football-white-gold-jersey-23eceb",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-009",
    name: "Polo Ralph Lauren Classic Logo Black Polo Shirt",
    category: "tshirts",
    brand: "Polo Ralph Lauren",
    price: 22,
    rating: 4.4,
    qc: true,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778423830618-548787104.webp",
    imageAltDetail: "Polo Ralph Lauren Polo Ralph Lauren Classic Logo Black Polo Shirt Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/polo-ralph-lauren-classic-logo-black-polo-shirt-efd09d",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-010",
    name: "Adidas Benfica Away Jersey Black Football Kit",
    category: "tshirts",
    brand: "Adidas",
    price: 14,
    rating: 4.5,
    qc: false,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778597122555-247665097.webp",
    imageAltDetail: "Adidas Adidas Benfica Away Jersey Black Football Kit Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/adidas-benfica-away-jersey-black-football-kit-e3ed97",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-011",
    name: "Balenciaga Pink T-Shirt",
    category: "tshirts",
    brand: "Balenciaga",
    price: 21,
    rating: 4.6,
    qc: true,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778652117769-401706457.webp",
    imageAltDetail: "Balenciaga Balenciaga Pink T-Shirt Pink",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/balenciaga-pink-t-shirt-61ed7e",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-012",
    name: "Amiri AMRI Black Hand Round Disc 002 T-Shirt",
    category: "tshirts",
    brand: "Amiri",
    price: 14,
    rating: 4.6,
    qc: true,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778634360877-536069080.webp",
    imageAltDetail: "Amiri Amiri AMRI Black Hand Round Disc 002 T-Shirt Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/amiri-amri-black-hand-round-disc-002-t-shirt-b2f478",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-013",
    name: "Adidas Classic Football Brazil Jersey Blue",
    category: "tshirts",
    brand: "Adidas",
    price: 13,
    rating: 4.7,
    qc: true,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778653377148-555485528.webp",
    imageAltDetail: "Adidas Adidas Classic Football Brazil Jersey Blue Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/adidas-classic-football-brazil-jersey-blue-57bdd7",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-014",
    name: "Polo Ralph Lauren Polo Bear Shorts Green",
    category: "tshirts",
    brand: "Polo Ralph Lauren",
    price: 14,
    rating: 4.3,
    qc: true,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778653184318-661022518.webp",
    imageAltDetail: "Polo Ralph Lauren Polo Ralph Lauren Polo Bear Shorts Green Green",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/polo-ralph-lauren-polo-bear-shorts-green-1b5eed",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-015",
    name: "Cole Buxton Black Graphic T-Shirt",
    category: "tshirts",
    brand: "Cole",
    price: 18,
    rating: 4.4,
    qc: false,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778639468532-742158990.webp",
    imageAltDetail: "Cole Buxton Cole Buxton Black Graphic T-Shirt Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/cole-buxton-black-graphic-t-shirt-1eef18",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-016",
    name: "Unisex Colorblock T-Shirt with Yellow Logo and Trim",
    category: "tshirts",
    brand: "Unisex",
    price: 15,
    rating: 4.4,
    qc: true,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778418955963-862393850.webp",
    imageAltDetail: "Other Unisex Colorblock T-Shirt with Yellow Logo and Trim Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/unisex-colorblock-t-shirt-with-yellow-logo-and-trim-96ec25",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-017",
    name: "Polo Ralph Lauren Big Pony Grey Shorts & T-Shirt Set",
    category: "tshirts",
    brand: "Polo Ralph Lauren",
    price: 20,
    rating: 4.5,
    qc: true,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778677294929-375688937.webp",
    imageAltDetail: "Polo Ralph Lauren Polo Ralph Lauren Big Pony Grey Shorts & T-Shirt Set Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/polo-ralph-lauren-big-pony-grey-shorts-t-shirt-set-246b40",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-018",
    name: "T-Shirt Sky Blue Cloud Print Casual Top",
    category: "tshirts",
    brand: "T-Shirt",
    price: 8,
    rating: 4.6,
    qc: true,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778582166456-341841233.webp",
    imageAltDetail: "Other T-Shirt Sky Blue Cloud Print Casual Top Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/t-shirt-sky-blue-cloud-print-casual-top-0000f2",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-019",
    name: "T-Shirt Navy Blue with White Cloud Print Casual",
    category: "tshirts",
    brand: "T-Shirt",
    price: 8,
    rating: 4.6,
    qc: true,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778582168018-598891477.webp",
    imageAltDetail: "Other T-Shirt Navy Blue with White Cloud Print Casual Navy",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/t-shirt-navy-blue-with-white-cloud-print-casual-6cd949",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-020",
    name: "T-Shirt Cloud Print Oversized T-Shirt",
    category: "tshirts",
    brand: "T-Shirt",
    price: 8,
    rating: 4.7,
    qc: false,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778582169377-736417134.webp",
    imageAltDetail: "Other T-Shirt Cloud Print Oversized T-Shirt Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/t-shirt-cloud-print-oversized-t-shirt-cc3758",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-021",
    name: "T-Shirt With Logo Black Casual Top",
    category: "tshirts",
    brand: "T-Shirt",
    price: 15,
    rating: 4.3,
    qc: true,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778646008850-516279532.webp",
    imageAltDetail: "Other T-Shirt With Logo Black Casual Top Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/t-shirt-with-logo-black-casual-top-df57e7",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-022",
    name: "T-Shirt with Logo [Colorway] Tops",
    category: "tshirts",
    brand: "T-Shirt",
    price: 15,
    rating: 4.4,
    qc: true,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778646008453-698784235.webp",
    imageAltDetail: "Other T-Shirt with Logo [Colorway] Tops White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/t-shirt-with-logo-colorway-tops-02f6bb",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-023",
    name: "T-Shirt 'F1000' Navy Solid Top",
    category: "tshirts",
    brand: "T-Shirt",
    price: 15,
    rating: 4.4,
    qc: true,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778646012408-101426700.webp",
    imageAltDetail: "Other T-Shirt 'F1000' Navy Solid Top Navy",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/t-shirt-f1000-navy-solid-top-fcb3ee",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-024",
    name: "T-Shirt with Number 13 Design",
    category: "tshirts",
    brand: "T-Shirt",
    price: 14,
    rating: 4.5,
    qc: true,
    tags: [
      "tshirt",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778676432818-656368261.webp",
    imageAltDetail: "Other T-Shirt with Number 13 Design Cream",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/t-shirt-with-number-13-design-235468",
    updated: "2026-08-20"
  },
  {
    id: "tshirts-025",
    name: "Balenciaga Triple Black BB Paris Long Sleeve T-Shirt",
    category: "tshirts",
    brand: "Balenciaga",
    price: 22,
    rating: 4.6,
    qc: false,
    tags: [
      "tshirt",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778310147671-271572329.webp",
    imageAltDetail: "Balenciaga Balenciaga Triple Black BB Paris Long Sleeve T-Shirt Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/balenciaga-triple-black-bb-paris-long-sleeve-t-shirt-c9832a",
    updated: "2026-08-20"
  },
  {
    id: "accessories-001",
    name: "Stone Island 68-15 Black Hooded Puffer Jacket",
    category: "accessories",
    brand: "Stone Island",
    price: 18,
    rating: 4.4,
    qc: true,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778426506271-270780858.webp",
    imageAltDetail: "Stone Island Stone Island 68-15 Black Hooded Puffer Jacket Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/stone-island-68-15-black-hooded-puffer-jacket-1eed77",
    updated: "2026-08-20"
  },
  {
    id: "accessories-002",
    name: "Calvin Klein Black Solid Boxer Briefs Underwear",
    category: "accessories",
    brand: "Calvin Klein",
    price: 12,
    rating: 4.4,
    qc: true,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778584346891-497801336.webp",
    imageAltDetail: "Calvin Klein Calvin Klein Black Solid Boxer Briefs Underwear Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/calvin-klein-black-solid-boxer-briefs-underwear-bc4748",
    updated: "2026-08-20"
  },
  {
    id: "accessories-003",
    name: "Apple AirPods Max (Plastic) Black Headphones",
    category: "accessories",
    brand: "Apple",
    price: 69,
    rating: 4.5,
    qc: true,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312334863-514077315.webp",
    imageAltDetail: "Apple Apple AirPods Max (Plastic) Black Headphones Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/apple-airpods-max-plastic-black-headphones-32047b",
    updated: "2026-08-20"
  },
  {
    id: "accessories-004",
    name: "Chanel Classic Flap Black Lambskin Wallet",
    category: "accessories",
    brand: "Chanel",
    price: 23,
    rating: 4.6,
    qc: true,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778309942994-471991429.webp",
    imageAltDetail: "Chanel Chanel Classic Flap Black Lambskin Wallet Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/chanel-classic-flap-black-lambskin-wallet-08e7c5",
    updated: "2026-08-20"
  },
  {
    id: "accessories-005",
    name: "Louis Vuitton Tabi Black & Grey Checkered Scarf",
    category: "accessories",
    brand: "Louis Vuitton",
    price: 35,
    rating: 4.6,
    qc: false,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778600414096-708452940.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Tabi Black & Grey Checkered Scarf Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-tabi-black-grey-checkered-scarf-076847",
    updated: "2026-08-20"
  },
  {
    id: "accessories-006",
    name: "Moncler Maya Letter Blue Parka",
    category: "accessories",
    brand: "Moncler",
    price: 34,
    rating: 4.7,
    qc: true,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778498098816-994681760.webp",
    imageAltDetail: "Moncler Moncler Maya Letter Blue Parka Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/moncler-maya-letter-blue-parka-e205d7",
    updated: "2026-08-20"
  },
  {
    id: "accessories-007",
    name: "Louis Vuitton LV Monogram Belt Black Leather",
    category: "accessories",
    brand: "Louis Vuitton",
    price: 11,
    rating: 4.3,
    qc: true,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778315150392-962604071.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton LV Monogram Belt Black Leather Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-lv-monogram-belt-black-leather-a3d8f2",
    updated: "2026-08-20"
  },
  {
    id: "accessories-008",
    name: "Gold Link Bracelet Solid Metal Accessory",
    category: "accessories",
    brand: "Gold",
    price: 10,
    rating: 4.4,
    qc: true,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778596991032-487179367.webp",
    imageAltDetail: "Other Gold Link Bracelet Solid Metal Accessory Gold",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/gold-link-bracelet-solid-metal-accessory-9596b4",
    updated: "2026-08-20"
  },
  {
    id: "accessories-009",
    name: "Stone Island 68-15 Black Hooded Jacket",
    category: "accessories",
    brand: "Stone Island",
    price: 44,
    rating: 4.4,
    qc: true,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778639022887-103564362.webp",
    imageAltDetail: "Stone Island Stone Island 68-15 Black Hooded Jacket Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/stone-island-68-15-black-hooded-jacket-c50f50",
    updated: "2026-08-20"
  },
  {
    id: "accessories-010",
    name: "Canada Goose Expedition White Black Label Vest",
    category: "accessories",
    brand: "Canada Goose",
    price: 43,
    rating: 4.5,
    qc: false,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778310412159-778686102.webp",
    imageAltDetail: "Canada Goose Canada Goose Expedition White Black Label Vest White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/canada-goose-expedition-white-black-label-vest-509272",
    updated: "2026-08-20"
  },
  {
    id: "accessories-011",
    name: "Unisex Dark Blue Puffer Coat",
    category: "accessories",
    brand: "Unisex",
    price: 55,
    rating: 4.6,
    qc: true,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778597567812-564987166.webp",
    imageAltDetail: "Other Unisex Dark Blue Puffer Coat Navy",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/unisex-dark-blue-puffer-coat-fa5689",
    updated: "2026-08-20"
  },
  {
    id: "accessories-012",
    name: "Dior Dior Oblique Floral Print Jacket",
    category: "accessories",
    brand: "Dior",
    price: 39,
    rating: 4.6,
    qc: true,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778650162670-525556216.webp",
    imageAltDetail: "Dior Dior Dior Oblique Floral Print Jacket Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/dior-dior-oblique-floral-print-jacket-c75491",
    updated: "2026-08-20"
  },
  {
    id: "accessories-013",
    name: "Moncler Maya Beige Hooded Puffer Vest",
    category: "accessories",
    brand: "Moncler",
    price: 40,
    rating: 4.7,
    qc: true,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778650853293-48826435.webp",
    imageAltDetail: "Moncler Moncler Maya Beige Hooded Puffer Vest Beige",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/moncler-maya-beige-hooded-puffer-vest-2c1678",
    updated: "2026-08-20"
  },
  {
    id: "accessories-014",
    name: "Nike Air Black/Red Long Sleeve Top",
    category: "accessories",
    brand: "Nike",
    price: 17,
    rating: 4.3,
    qc: true,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778580721765-303689664.webp",
    imageAltDetail: "Nike Nike Air Black/Red Long Sleeve Top Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-air-black-red-long-sleeve-top-cc3450",
    updated: "2026-08-20"
  },
  {
    id: "accessories-015",
    name: "Stussy Stussy Blue Canvas Wallet with Box",
    category: "accessories",
    brand: "Stussy",
    price: 8,
    rating: 4.4,
    qc: false,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778648190540-331985902.webp",
    imageAltDetail: "Stussy Stussy Stussy Blue Canvas Wallet with Box Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/stussy-st-ssy-blue-canvas-wallet-with-box-0b636e",
    updated: "2026-08-20"
  },
  {
    id: "accessories-016",
    name: "CP Company Goggle Black Beanie",
    category: "accessories",
    brand: "CP Company",
    price: 8,
    rating: 4.4,
    qc: true,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778413475968-394198426.webp",
    imageAltDetail: "CP Company CP Company Goggle Black Beanie Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/cp-company-goggle-black-beanie-730c72",
    updated: "2026-08-20"
  },
  {
    id: "accessories-017",
    name: "Stone Island 68-15 Navy Puffer Jacket",
    category: "accessories",
    brand: "Stone Island",
    price: 21,
    rating: 4.5,
    qc: true,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778656589398-947751197.webp",
    imageAltDetail: "Stone Island Stone Island 68-15 Navy Puffer Jacket Navy",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/stone-island-68-15-navy-puffer-jacket-56962a",
    updated: "2026-08-20"
  },
  {
    id: "accessories-018",
    name: "Dior Classic Flap Blue & White Print Set",
    category: "accessories",
    brand: "Dior",
    price: 29,
    rating: 4.6,
    qc: true,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778683670399-843634466.webp",
    imageAltDetail: "Dior Dior Classic Flap Blue & White Print Set Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/dior-classic-flap-blue-white-print-set-d16d29",
    updated: "2026-08-20"
  },
  {
    id: "accessories-019",
    name: "Gold Men's Bracelet with Boxed Packaging",
    category: "accessories",
    brand: "Gold",
    price: 11,
    rating: 4.6,
    qc: true,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778594243781-110666260.webp",
    imageAltDetail: "Other Gold Men's Bracelet with Boxed Packaging Gold",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/gold-men-s-bracelet-with-boxed-packaging-3c5d74",
    updated: "2026-08-20"
  },
  {
    id: "accessories-020",
    name: "Ami Paris Ami de Coeur Red Cardigan",
    category: "accessories",
    brand: "Ami Paris",
    price: 22,
    rating: 4.7,
    qc: false,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778603351949-543654836.webp",
    imageAltDetail: "Ami Paris Ami Paris Ami de Coeur Red Cardigan Red",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/ami-paris-ami-de-coeur-red-cardigan-57e51b",
    updated: "2026-08-20"
  },
  {
    id: "accessories-021",
    name: "Nike Tech Fleece NK-40 Black Tracksuit Set",
    category: "accessories",
    brand: "Nike",
    price: 41,
    rating: 4.3,
    qc: true,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778428921095-786868545.webp",
    imageAltDetail: "Nike Nike Tech Fleece NK-40 Black Tracksuit Set Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-tech-fleece-nk-40-black-tracksuit-set-3a05de",
    updated: "2026-08-20"
  },
  {
    id: "accessories-022",
    name: "Canada Goose Expedition Light Grey Parka",
    category: "accessories",
    brand: "Canada Goose",
    price: 70,
    rating: 4.4,
    qc: true,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778580605340-367856823.webp",
    imageAltDetail: "Canada Goose Canada Goose Expedition Light Grey Parka Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/canada-goose-expedition-light-grey-parka-c30845",
    updated: "2026-08-20"
  },
  {
    id: "accessories-023",
    name: "Moncler White Hooded Down Jacket",
    category: "accessories",
    brand: "Moncler",
    price: 70,
    rating: 4.4,
    qc: true,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778419073229-971585096.webp",
    imageAltDetail: "Moncler Moncler White Hooded Down Jacket White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/moncler-white-hooded-down-jacket-abf8f3",
    updated: "2026-08-20"
  },
  {
    id: "accessories-024",
    name: "Black Floral Pattern Tracksuit Set",
    category: "accessories",
    brand: "Black",
    price: 41,
    rating: 4.5,
    qc: true,
    tags: [
      "accessorie",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778586781589-938020989.webp",
    imageAltDetail: "Other Black Floral Pattern Tracksuit Set Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/black-floral-pattern-tracksuit-set-0b9fcc",
    updated: "2026-08-20"
  },
  {
    id: "accessories-025",
    name: "Fear of God Essentials Black",
    category: "accessories",
    brand: "Fear of God",
    price: 15,
    rating: 4.6,
    qc: false,
    tags: [
      "accessorie",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778678912918-317726993.webp",
    imageAltDetail: "Fear of God Fear of God Essentials Black Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/fear-of-god-essentials-black-4b7b86",
    updated: "2026-08-20"
  },
  {
    id: "bags-001",
    name: "Goyard Goyardine Grey Tote Bag",
    category: "bags",
    brand: "Goyard",
    price: 25,
    rating: 4.4,
    qc: true,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778677629880-113160913.webp",
    imageAltDetail: "Goyard Goyard Goyardine Grey Tote Bag Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/goyard-goyardine-grey-tote-bag-97d84b",
    updated: "2026-08-20"
  },
  {
    id: "bags-002",
    name: "Goyard Blue Goyardine Card Holder",
    category: "bags",
    brand: "Goyard",
    price: 8,
    rating: 4.4,
    qc: true,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778672981941-162140742.webp",
    imageAltDetail: "Goyard Goyard Blue Goyardine Card Holder Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/goyard-blue-goyardine-card-holder-c7aed8",
    updated: "2026-08-20"
  },
  {
    id: "bags-003",
    name: "Lacoste 18-2 Blue Crossbody Bag",
    category: "bags",
    brand: "Lacoste",
    price: 18,
    rating: 4.5,
    qc: true,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778681952709-531936539.webp",
    imageAltDetail: "Lacoste Lacoste 18-2 Blue Crossbody Bag Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/lacoste-18-2-blue-crossbody-bag-12b1df",
    updated: "2026-08-20"
  },
  {
    id: "bags-004",
    name: "Off-White OW100 Denim Jacket with Cabin Baggage Print",
    category: "bags",
    brand: "Off-White",
    price: 42,
    rating: 4.6,
    qc: true,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778414740601-415747234.webp",
    imageAltDetail: "Off-White Off-White OW100 Denim Jacket with Cabin Baggage Print Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/off-white-ow100-denim-jacket-with-cabin-baggage-print-ffccfe",
    updated: "2026-08-20"
  },
  {
    id: "bags-005",
    name: "Supreme Grid Check Shoulder Bag Navy",
    category: "bags",
    brand: "Supreme",
    price: 9,
    rating: 4.6,
    qc: false,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778311024151-166219049.webp",
    imageAltDetail: "Supreme Supreme Grid Check Shoulder Bag Navy Navy",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/supreme-grid-check-shoulder-bag-navy-2f24dc",
    updated: "2026-08-20"
  },
  {
    id: "bags-006",
    name: "Supreme Orange Crossbody Bag",
    category: "bags",
    brand: "Supreme",
    price: 9,
    rating: 4.7,
    qc: true,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778311024980-140963493.webp",
    imageAltDetail: "Supreme Supreme Orange Crossbody Bag Orange",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/supreme-orange-crossbody-bag-609d2f",
    updated: "2026-08-20"
  },
  {
    id: "bags-007",
    name: "Supreme Grid Check Crossbody Bag Black",
    category: "bags",
    brand: "Supreme",
    price: 9,
    rating: 4.3,
    qc: true,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778311030121-251143774.webp",
    imageAltDetail: "Supreme Supreme Grid Check Crossbody Bag Black Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/supreme-grid-check-crossbody-bag-black-2a5df5",
    updated: "2026-08-20"
  },
  {
    id: "bags-008",
    name: "Supreme Camo Grid Crossbody Bag",
    category: "bags",
    brand: "Supreme",
    price: 9,
    rating: 4.4,
    qc: true,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778311033740-689611542.webp",
    imageAltDetail: "Supreme Supreme Camo Grid Crossbody Bag Green",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/supreme-camo-grid-crossbody-bag-c38355",
    updated: "2026-08-20"
  },
  {
    id: "bags-009",
    name: "Louis Vuitton Neverfull Monogram Canvas Bag",
    category: "bags",
    brand: "Louis Vuitton",
    price: 51,
    rating: 4.4,
    qc: true,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312404291-979944648.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Neverfull Monogram Canvas Bag Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-neverfull-monogram-canvas-bag-930e20",
    updated: "2026-08-20"
  },
  {
    id: "bags-010",
    name: "Louis Vuitton Neverfull Monogram Canvas Shoulder Bag",
    category: "bags",
    brand: "Louis Vuitton",
    price: 39,
    rating: 4.5,
    qc: false,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312404701-71761958.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Neverfull Monogram Canvas Shoulder Bag Brown",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-neverfull-monogram-canvas-shoulder-bag-801dbd",
    updated: "2026-08-20"
  },
  {
    id: "bags-011",
    name: "Louis Vuitton Neverfull Monogram Leather Shoulder Bag Black",
    category: "bags",
    brand: "Louis Vuitton",
    price: 51,
    rating: 4.6,
    qc: true,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312405249-697057239.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Neverfull Monogram Leather Shoulder Bag Black Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-neverfull-monogram-leather-shoulder-bag-black-2b7677",
    updated: "2026-08-20"
  },
  {
    id: "bags-012",
    name: "Louis Vuitton Tabi Black Monogram Shoulder Bag",
    category: "bags",
    brand: "Louis Vuitton",
    price: 32,
    rating: 4.6,
    qc: true,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312405250-711109298.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Tabi Black Monogram Shoulder Bag Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-tabi-black-monogram-shoulder-bag-a44c3e",
    updated: "2026-08-20"
  },
  {
    id: "bags-013",
    name: "Louis Vuitton Tabi Monogram Crossbody Bag Black",
    category: "bags",
    brand: "Louis Vuitton",
    price: 51,
    rating: 4.7,
    qc: true,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312405433-902953296.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Tabi Monogram Crossbody Bag Black Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-tabi-monogram-crossbody-bag-black-445b45",
    updated: "2026-08-20"
  },
  {
    id: "bags-014",
    name: "Louis Vuitton Neverfull Monogram Crossbody Bag Black",
    category: "bags",
    brand: "Louis Vuitton",
    price: 31,
    rating: 4.3,
    qc: true,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312405653-681524634.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Neverfull Monogram Crossbody Bag Black Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-neverfull-monogram-crossbody-bag-black-3f83e9",
    updated: "2026-08-20"
  },
  {
    id: "bags-015",
    name: "Louis Vuitton Damier Monogram Crossbody Bag",
    category: "bags",
    brand: "Louis Vuitton",
    price: 31,
    rating: 4.4,
    qc: false,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312406452-685584506.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Damier Monogram Crossbody Bag Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-damier-monogram-crossbody-bag-c7f661",
    updated: "2026-08-20"
  },
  {
    id: "bags-016",
    name: "Louis Vuitton Tabi Monogram Mini Bag Black/Colorway",
    category: "bags",
    brand: "Louis Vuitton",
    price: 49,
    rating: 4.4,
    qc: true,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312406623-730299831.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Tabi Monogram Mini Bag Black/Colorway Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-tabi-monogram-mini-bag-black-colorway-233e73",
    updated: "2026-08-20"
  },
  {
    id: "bags-017",
    name: "Louis Vuitton Tabi Black Monogram Leather Bag",
    category: "bags",
    brand: "Louis Vuitton",
    price: 39,
    rating: 4.5,
    qc: true,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312406660-325264452.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Tabi Black Monogram Leather Bag Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-tabi-black-monogram-leather-bag-602047",
    updated: "2026-08-20"
  },
  {
    id: "bags-018",
    name: "Louis Vuitton Tabi Monogram Shoulder Bag Black",
    category: "bags",
    brand: "Louis Vuitton",
    price: 39,
    rating: 4.6,
    qc: true,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312406742-596298390.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Tabi Monogram Shoulder Bag Black Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-tabi-monogram-shoulder-bag-black-141ba6",
    updated: "2026-08-20"
  },
  {
    id: "bags-019",
    name: "Louis Vuitton Neverfull Monogram Black Crossbody Bag",
    category: "bags",
    brand: "Louis Vuitton",
    price: 46,
    rating: 4.6,
    qc: true,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312408457-829249317.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Neverfull Monogram Black Crossbody Bag Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-neverfull-monogram-black-crossbody-bag-f2db20",
    updated: "2026-08-20"
  },
  {
    id: "bags-020",
    name: "Louis Vuitton Tabi Monogram Shoulder Bag Dark Grey",
    category: "bags",
    brand: "Louis Vuitton",
    price: 44,
    rating: 4.7,
    qc: false,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312408531-59164384.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Tabi Monogram Shoulder Bag Dark Grey Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-tabi-monogram-shoulder-bag-dark-grey-1ec8e0",
    updated: "2026-08-20"
  },
  {
    id: "bags-021",
    name: "Louis Vuitton Neverfull Monogram Black Tote Bag",
    category: "bags",
    brand: "Louis Vuitton",
    price: 33,
    rating: 4.3,
    qc: true,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312408967-498433340.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Neverfull Monogram Black Tote Bag Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-neverfull-monogram-black-tote-bag-f5afb8",
    updated: "2026-08-20"
  },
  {
    id: "bags-022",
    name: "Louis Vuitton Tabi Monogram Mini Bag Black",
    category: "bags",
    brand: "Louis Vuitton",
    price: 68,
    rating: 4.4,
    qc: true,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312409453-688801365.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Tabi Monogram Mini Bag Black Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-tabi-monogram-mini-bag-black-994f20",
    updated: "2026-08-20"
  },
  {
    id: "bags-023",
    name: "Louis Vuitton Tabi Monogram Chain Bag Black",
    category: "bags",
    brand: "Louis Vuitton",
    price: 39,
    rating: 4.4,
    qc: true,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312409166-749739637.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Tabi Monogram Chain Bag Black Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-tabi-monogram-chain-bag-black-4db9a9",
    updated: "2026-08-20"
  },
  {
    id: "bags-024",
    name: "Louis Vuitton Tabi Black Monogram Mail Bag",
    category: "bags",
    brand: "Louis Vuitton",
    price: 39,
    rating: 4.5,
    qc: true,
    tags: [
      "bag",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312409149-456298609.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Tabi Black Monogram Mail Bag Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-tabi-black-monogram-mail-bag-3d25d8",
    updated: "2026-08-20"
  },
  {
    id: "bags-025",
    name: "Louis Vuitton Keepall Monogram Canvas Travel Bag",
    category: "bags",
    brand: "Louis Vuitton",
    price: 51,
    rating: 4.6,
    qc: false,
    tags: [
      "bag",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778312417846-382721792.webp",
    imageAltDetail: "Louis Vuitton Louis Vuitton Keepall Monogram Canvas Travel Bag Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/louis-vuitton-keepall-monogram-canvas-travel-bag-079e55",
    updated: "2026-08-20"
  },
  {
    id: "pants-001",
    name: "Pink & White Panel Track Pants",
    category: "pants",
    brand: "Pink",
    price: 25,
    rating: 4.4,
    qc: true,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778500330675-514242586.webp",
    imageAltDetail: "Other Pink & White Panel Track Pants Pink",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/pink-white-panel-track-pants-71d579",
    updated: "2026-08-20"
  },
  {
    id: "pants-002",
    name: "Trapstar Black Shooters Track Pants",
    category: "pants",
    brand: "Trapstar",
    price: 48,
    rating: 4.4,
    qc: true,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778650423638-945216069.webp",
    imageAltDetail: "Trapstar Trapstar Black Shooters Track Pants Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/trapstar-black-shooters-track-pants-696ebe",
    updated: "2026-08-20"
  },
  {
    id: "pants-003",
    name: "Nike Woven Shorts Black Sporty Shorts",
    category: "pants",
    brand: "Nike",
    price: 17,
    rating: 4.5,
    qc: true,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778591680962-312311824.webp",
    imageAltDetail: "Nike Nike Woven Shorts Black Sporty Shorts Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/nike-woven-shorts-black-sporty-shorts-368898",
    updated: "2026-08-20"
  },
  {
    id: "pants-004",
    name: "BB-028() Grey Solid Shorts",
    category: "pants",
    brand: "BB-028",
    price: 15,
    rating: 4.6,
    qc: true,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778678945604-137092741.webp",
    imageAltDetail: "Other BB-028() Grey Solid Shorts Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/bb-028-grey-solid-shorts-4a5e42",
    updated: "2026-08-20"
  },
  {
    id: "pants-005",
    name: "Carhartt Olive Cargo Pants",
    category: "pants",
    brand: "Carhartt",
    price: 22,
    rating: 4.6,
    qc: false,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778679698846-267612020.webp",
    imageAltDetail: "Carhartt Carhartt Olive Cargo Pants Multicolor",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/carhartt-olive-cargo-pants-0cfe52",
    updated: "2026-08-20"
  },
  {
    id: "pants-006",
    name: "Black Wide-Leg Jeans BB-003 Bottoms",
    category: "pants",
    brand: "Black",
    price: 30,
    rating: 4.7,
    qc: true,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778420059297-603921833.webp",
    imageAltDetail: "Other Black Wide-Leg Jeans BB-003 Bottoms Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/black-wide-leg-jeans-bb-003-bottoms-106958",
    updated: "2026-08-20"
  },
  {
    id: "pants-007",
    name: "Stone Island 68-15 Grey Cargo Sweatpants",
    category: "pants",
    brand: "Stone Island",
    price: 38,
    rating: 4.3,
    qc: true,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778649186213-435707436.webp",
    imageAltDetail: "Stone Island Stone Island 68-15 Grey Cargo Sweatpants Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/stone-island-68-15-grey-cargo-sweatpants-02d528",
    updated: "2026-08-20"
  },
  {
    id: "pants-008",
    name: "Black Embroidered Logo Shorts",
    category: "pants",
    brand: "Black",
    price: 10,
    rating: 4.4,
    qc: true,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778684052922-325646111.webp",
    imageAltDetail: "Other Black Embroidered Logo Shorts Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/black-embroidered-logo-shorts-c1267f",
    updated: "2026-08-20"
  },
  {
    id: "pants-009",
    name: "Palm Angels Track Red 'Im Angels' Pants",
    category: "pants",
    brand: "Palm Angels",
    price: 13,
    rating: 4.4,
    qc: true,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778586685826-655279099.webp",
    imageAltDetail: "Palm Angels Palm Angels Track Red 'Im Angels' Pants Red",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/palm-angels-track-red-im-angels-pants-a9e35c",
    updated: "2026-08-20"
  },
  {
    id: "pants-010",
    name: "Palm Angels Track Blue & White Side Stripe Pants",
    category: "pants",
    brand: "Palm Angels",
    price: 17,
    rating: 4.5,
    qc: false,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778420029407-599104954.webp",
    imageAltDetail: "Palm Angels Palm Angels Track Blue & White Side Stripe Pants Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/palm-angels-track-blue-white-side-stripe-pants-91a7de",
    updated: "2026-08-20"
  },
  {
    id: "pants-011",
    name: "HMP Black Solid Shorts",
    category: "pants",
    brand: "Corteiz",
    price: 15,
    rating: 4.6,
    qc: true,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778680153972-370227943.webp",
    imageAltDetail: "Corteiz HMP Black Solid Shorts Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/hmp-black-solid-shorts-6aeed6",
    updated: "2026-08-20"
  },
  {
    id: "pants-012",
    name: "CP Company Goggle Black Cargo Shorts",
    category: "pants",
    brand: "CP Company",
    price: 21,
    rating: 4.6,
    qc: true,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778672414088-550466528.webp",
    imageAltDetail: "CP Company CP Company Goggle Black Cargo Shorts Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/cp-company-goggle-black-cargo-shorts-94eb87",
    updated: "2026-08-20"
  },
  {
    id: "pants-013",
    name: "Corteiz CRTZ Black Track Pants",
    category: "pants",
    brand: "Corteiz",
    price: 24,
    rating: 4.7,
    qc: true,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778593145200-442853920.webp",
    imageAltDetail: "Corteiz Corteiz CRTZ Black Track Pants Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/corteiz-crtz-black-track-pants-90eb44",
    updated: "2026-08-20"
  },
  {
    id: "pants-014",
    name: "Black Flame Print Sweatpants",
    category: "pants",
    brand: "Black",
    price: 17,
    rating: 4.3,
    qc: true,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778654242781-435979867.webp",
    imageAltDetail: "Other Black Flame Print Sweatpants Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/black-flame-print-sweatpants-78904c",
    updated: "2026-08-20"
  },
  {
    id: "pants-015",
    name: "CCYK-002 Light Grey Sweatpants",
    category: "pants",
    brand: "CCYK-002",
    price: 25,
    rating: 4.4,
    qc: false,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778417144921-546976051.webp",
    imageAltDetail: "Other CCYK-002 Light Grey Sweatpants Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/ccyk-002-light-grey-sweatpants-7d7d1d",
    updated: "2026-08-20"
  },
  {
    id: "pants-016",
    name: "Lacoste Deep Grey Shorts",
    category: "pants",
    brand: "Lacoste",
    price: 19,
    rating: 4.4,
    qc: true,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778590242151-830333775.webp",
    imageAltDetail: "Lacoste Lacoste Deep Grey Shorts Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/lacoste-deep-grey-shorts-63f924",
    updated: "2026-08-20"
  },
  {
    id: "pants-017",
    name: "DSQUARED2 Distressed Slim Fit Jeans",
    category: "pants",
    brand: "DSQUARED2",
    price: 24,
    rating: 4.5,
    qc: true,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778604162482-671820051.webp",
    imageAltDetail: "DSQUARED2 DSQUARED2 Distressed Slim Fit Jeans Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/dsquared2-distressed-slim-fit-jeans-f28f25",
    updated: "2026-08-20"
  },
  {
    id: "pants-018",
    name: "Plaid Shorts Purple Casual Shorts",
    category: "pants",
    brand: "Plaid",
    price: 27,
    rating: 4.6,
    qc: true,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778679644354-930819437.webp",
    imageAltDetail: "Other Plaid Shorts Purple Casual Shorts Purple",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/plaid-shorts-purple-casual-shorts-4dd84e",
    updated: "2026-08-20"
  },
  {
    id: "pants-019",
    name: "Stone Island 68-15 Grey Shorts",
    category: "pants",
    brand: "Stone Island",
    price: 14,
    rating: 4.6,
    qc: true,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778675934602-757776949.webp",
    imageAltDetail: "Stone Island Stone Island 68-15 Grey Shorts Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/stone-island-68-15-grey-shorts-017c47",
    updated: "2026-08-20"
  },
  {
    id: "pants-020",
    name: "Black Sweatpants with Embroidered Crest Casual Pants",
    category: "pants",
    brand: "Black",
    price: 11,
    rating: 4.7,
    qc: false,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778640168293-354924338.webp",
    imageAltDetail: "Other Black Sweatpants with Embroidered Crest Casual Pants Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/black-sweatpants-with-embroidered-crest-casual-pants-393d64",
    updated: "2026-08-20"
  },
  {
    id: "pants-021",
    name: "White 'Cru' Script Print Sweatpants",
    category: "pants",
    brand: "White",
    price: 27,
    rating: 4.3,
    qc: true,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778637981616-489009293.webp",
    imageAltDetail: "Other White 'Cru' Script Print Sweatpants White",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/white-cru-script-print-sweatpants-b0f265",
    updated: "2026-08-20"
  },
  {
    id: "pants-022",
    name: "Black Multi-Color Panel Basketball Shorts",
    category: "pants",
    brand: "Black",
    price: 8,
    rating: 4.4,
    qc: true,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778682178953-613688496.webp",
    imageAltDetail: "Other Black Multi-Color Panel Basketball Shorts Black",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/black-multi-color-panel-basketball-shorts-d7d1f5",
    updated: "2026-08-20"
  },
  {
    id: "pants-023",
    name: "Gray Embellished Sweatpants with Beige Panels",
    category: "pants",
    brand: "Gray",
    price: 19,
    rating: 4.4,
    qc: true,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778656061534-168349192.webp",
    imageAltDetail: "Other Gray Embellished Sweatpants with Beige Panels Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/gray-embellished-sweatpants-with-beige-panels-0dd403",
    updated: "2026-08-20"
  },
  {
    id: "pants-024",
    name: "Distressed Grey Jeans with Ripped Details",
    category: "pants",
    brand: "Distressed",
    price: 22,
    rating: 4.5,
    qc: true,
    tags: [
      "pant",
      "popular",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778675816524-607385360.webp",
    imageAltDetail: "Other Distressed Grey Jeans with Ripped Details Grey",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/distressed-grey-jeans-with-ripped-details-c5d413",
    updated: "2026-08-20"
  },
  {
    id: "pants-025",
    name: "Dior Lady Dior Floral Denim Jacket",
    category: "pants",
    brand: "Dior",
    price: 22,
    rating: 4.6,
    qc: false,
    tags: [
      "pant",
      "new",
      "streetstyle"
    ],
    image: "https://cdn.maisonlooks.com/products/file-1778650162479-34915885.webp",
    imageAltDetail: "Dior Dior Lady Dior Floral Denim Jacket Blue",
    destinationUrl: "https://streetstyle.maisonlooks.com/en/p/dior-lady-dior-floral-denim-jacket-5ae0b7",
    updated: "2026-08-20"
  }
];

export const getCategoryLabel = (slug: string, lang: Lang = "en") =>
  categoryLabels[lang]?.[slug as Product["category"]] ??
  categories.find((category) => category.slug === slug)?.label ??
  slug;

export const getCategoryTitle = (slug: string, lang: Lang = "en") => {
  const label = getCategoryLabel(slug, lang);
  return lang === "en" ? `CSSBuy ${label} Spreadsheet` : `CSSBuy Spreadsheet - ${label}`;
};

export const getProductName = (product: Product, lang: Lang = "en") =>
  productNames[lang]?.[product.id] ?? product.name;

export const getProductImageAlt = (product: Product, lang: Lang = "en") => {
  const category = getCategoryLabel(product.category, lang);
  const productName = getProductName(product, lang);
  const qcStatus = product.qc ? "QC photos available" : "QC status pending";
  return `${productName} ${product.imageAltDetail}, ${category} CSSBuy spreadsheet find with ${qcStatus}`;
};

const siteUrl = "https://cssfinds.com";
const priceValidUntil = "2027-12-31";

export const getProductImageUrl = (product: Product) => new URL(product.image, siteUrl).href;

const getProductRatingCount = (product: Product) => {
  const seed = [...product.id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return 24 + (seed % 73);
};

const getProductSchema = (product: Product, lang: Lang) => ({
  "@type": "Product",
  name: getProductName(product, lang),
  url: product.destinationUrl,
  image: getProductImageUrl(product),
  description: getProductImageAlt(product, lang),
  category: getCategoryLabel(product.category, lang),
  brand: {
    "@type": "Brand",
    name: product.brand,
  },
  offers: {
    "@type": "Offer",
    url: product.destinationUrl,
    price: product.price,
    priceCurrency: "USD",
    priceValidUntil,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "StreetStyle",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: product.rating.toFixed(1),
    bestRating: "5",
    worstRating: "1",
    ratingCount: getProductRatingCount(product),
  },
  review: {
    "@type": "Review",
    name: `${getProductName(product, lang)} CSSBuy spreadsheet note`,
    reviewBody: `${getProductName(product, lang)} is listed as a ${getCategoryLabel(product.category, lang)} find with ${product.qc ? "QC photos available" : "QC status pending"}, current product image, brand, price, and direct shopping link.`,
    author: {
      "@type": "Organization",
      name: "CSSFinds",
    },
    publisher: {
      "@type": "Organization",
      name: "CSSFinds",
    },
    datePublished: product.updated,
    reviewRating: {
      "@type": "Rating",
      ratingValue: product.rating.toFixed(1),
      bestRating: "5",
      worstRating: "1",
    },
  },
});

export const getItemListSchema = ({
  items,
  name,
  url,
  lang = "en",
}: {
  items: Product[];
  name: string;
  url: string;
  lang?: Lang;
}) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  url,
  numberOfItems: items.length,
  itemListElement: items.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: getProductSchema(product, lang),
  })),
});

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
