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

export const promotionUrl = "https://streetstyle.maisonlooks.com/en";

const streetStyleCategorySlugs: Record<string, string> = {
  hoodies: "hoodies-sweatshirts",
  tshirts: "t-shirts",
  bags: "bags-backpacks",
};

export const getStreetStyleUrl = (category?: string, content = "spreadsheet") => {
  const params = new URLSearchParams({
    utm_source: "cssfinds",
    utm_medium: "seo_spreadsheet",
    utm_campaign: "cssbuy_spreadsheet",
    utm_content: content,
  });

  if (category) {
    const streetStyleCategory = streetStyleCategorySlugs[category] ?? category;
    params.set("utm_term", category);
    params.set("categorySlug", streetStyleCategory);
  }

  return `${promotionUrl}?${params.toString()}`;
};

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
  de: {
    "shoe-001": "Retro-Runner aus Mesh",
    "shoe-002": "Court-Ledersneaker",
    "hoodie-001": "Schwerer Zip-Hoodie",
    "hoodie-002": "Gewaschener Pullover-Hoodie",
    "tee-001": "240G Boxy T-Shirt",
    "tee-002": "Vintage Grafik-T-Shirt",
    "acc-001": "Nylon Crossbody-Tasche",
    "bag-001": "Strukturierte Alltagstasche",
    "pants-001": "Gerade Cargo-Hose",
    "pants-002": "Lockere Denim-Hose",
  },
  fr: {
    "shoe-001": "Runner retro en mesh",
    "shoe-002": "Basket basse en cuir",
    "hoodie-001": "Hoodie zippe epais",
    "hoodie-002": "Hoodie delave oversize",
    "tee-001": "T-shirt boxy 240G",
    "tee-002": "T-shirt graphique vintage",
    "acc-001": "Pochette bandouliere nylon",
    "bag-001": "Sac quotidien structure",
    "pants-001": "Pantalon cargo coupe droite",
    "pants-002": "Jean decontracte",
  },
  es: {
    "shoe-001": "Runner retro de malla",
    "shoe-002": "Zapatilla baja de cuero",
    "hoodie-001": "Hoodie pesado con cremallera",
    "hoodie-002": "Hoodie lavado oversize",
    "tee-001": "Camiseta boxy 240G",
    "tee-002": "Camiseta grafica vintage",
    "acc-001": "Bolso cruzado de nylon",
    "bag-001": "Bolso diario estructurado",
    "pants-001": "Pantalon cargo recto",
    "pants-002": "Pantalon denim relajado",
  },
  it: {
    "shoe-001": "Runner retro in mesh",
    "shoe-002": "Sneaker bassa in pelle",
    "hoodie-001": "Felpa zip pesante",
    "hoodie-002": "Felpa lavata oversize",
    "tee-001": "T-shirt boxy 240G",
    "tee-002": "T-shirt grafica vintage",
    "acc-001": "Marsupio crossbody in nylon",
    "bag-001": "Borsa quotidiana strutturata",
    "pants-001": "Pantaloni cargo dritti",
    "pants-002": "Jeans rilassati",
  },
  nl: {
    "shoe-001": "Retro runner van mesh",
    "shoe-002": "Lage leren sneaker",
    "hoodie-001": "Zware zip-hoodie",
    "hoodie-002": "Gewassen pullover hoodie",
    "tee-001": "240G boxy T-shirt",
    "tee-002": "Vintage grafisch T-shirt",
    "acc-001": "Nylon crossbody tas",
    "bag-001": "Gestructureerde dagelijkse tas",
    "pants-001": "Rechte cargo broek",
    "pants-002": "Relaxte denim broek",
  },
  pt: {
    "shoe-001": "Runner retro em mesh",
    "shoe-002": "Tenis baixo de couro",
    "hoodie-001": "Hoodie pesado com ziper",
    "hoodie-002": "Hoodie lavado oversize",
    "tee-001": "Camiseta boxy 240G",
    "tee-002": "Camiseta grafica vintage",
    "acc-001": "Bolsa transversal de nylon",
    "bag-001": "Bolsa diaria estruturada",
    "pants-001": "Calca cargo reta",
    "pants-002": "Calca jeans relaxada",
  },
};

export const products: Product[] = [
  {
    id: "shoe-001",
    name: "Retro Runner Mesh Low",
    category: "shoes",
    brand: "Runner Lab",
    price: 38,
    rating: 4.8,
    qc: true,
    tags: ["budget", "daily", "popular"],
    image: "/images/products/retro-runner-mesh-low-cssbuy-shoes.jpg",
    imageAltDetail: "white and grey retro mesh low-top sneaker",
    destinationUrl: getStreetStyleUrl("shoes", "product_retro_runner_mesh_low"),
    updated: "2026-05-24",
  },
  {
    id: "shoe-002",
    name: "Court Leather Low",
    category: "shoes",
    brand: "North Sole",
    price: 46,
    rating: 4.6,
    qc: true,
    tags: ["leather", "qc-ready"],
    image: "/images/products/court-leather-low-cssbuy-shoes.jpg",
    imageAltDetail: "white low-top leather court sneaker",
    destinationUrl: getStreetStyleUrl("shoes", "product_court_leather_low"),
    updated: "2026-05-22",
  },
  {
    id: "hoodie-001",
    name: "Heavyweight Zip Hoodie",
    category: "hoodies",
    brand: "Blank Studio",
    price: 29,
    rating: 4.7,
    qc: true,
    tags: ["heavy", "winter"],
    image: "/images/products/heavyweight-zip-hoodie-cssbuy-find.jpg",
    imageAltDetail: "heavy black zip-up hoodie with ribbed cuffs",
    destinationUrl: getStreetStyleUrl("hoodies", "product_heavyweight_zip_hoodie"),
    updated: "2026-05-21",
  },
  {
    id: "hoodie-002",
    name: "Washed Pullover Hoodie",
    category: "hoodies",
    brand: "Archive Fit",
    price: 33,
    rating: 4.5,
    qc: false,
    tags: ["washed", "oversized"],
    image: "/images/products/washed-pullover-hoodie-cssbuy-find.jpg",
    imageAltDetail: "washed oversized pullover hoodie",
    destinationUrl: getStreetStyleUrl("hoodies", "product_washed_pullover_hoodie"),
    updated: "2026-05-18",
  },
  {
    id: "tee-001",
    name: "240G Boxy Tee",
    category: "tshirts",
    brand: "Everyday Cut",
    price: 12,
    rating: 4.9,
    qc: true,
    tags: ["blank", "summer"],
    image: "/images/products/240g-boxy-tee-cssbuy-tshirt.jpg",
    imageAltDetail: "plain heavyweight boxy short sleeve T-shirt",
    destinationUrl: getStreetStyleUrl("tshirts", "product_240g_boxy_tee"),
    updated: "2026-05-26",
  },
  {
    id: "tee-002",
    name: "Vintage Graphic Tee",
    category: "tshirts",
    brand: "Print Vault",
    price: 16,
    rating: 4.4,
    qc: true,
    tags: ["graphic", "street"],
    image: "/images/products/vintage-graphic-tee-cssbuy-tshirt.jpg",
    imageAltDetail: "vintage graphic streetwear T-shirt",
    destinationUrl: getStreetStyleUrl("tshirts", "product_vintage_graphic_tee"),
    updated: "2026-05-20",
  },
  {
    id: "acc-001",
    name: "Nylon Crossbody Pouch",
    category: "accessories",
    brand: "Carry Index",
    price: 9,
    rating: 4.3,
    qc: true,
    tags: ["small", "travel"],
    image: "/images/products/nylon-crossbody-pouch-cssbuy-accessory.jpg",
    imageAltDetail: "black nylon crossbody pouch bag",
    destinationUrl: getStreetStyleUrl("accessories", "product_nylon_crossbody_pouch"),
    updated: "2026-05-19",
  },
  {
    id: "bag-001",
    name: "Structured Daily Tote",
    category: "bags",
    brand: "Carry Index",
    price: 41,
    rating: 4.6,
    qc: true,
    tags: ["work", "large"],
    image: "/images/products/structured-daily-tote-cssbuy-bag.jpg",
    imageAltDetail: "structured everyday tote bag",
    destinationUrl: getStreetStyleUrl("bags", "product_structured_daily_tote"),
    updated: "2026-05-23",
  },
  {
    id: "pants-001",
    name: "Straight Fit Cargo Pants",
    category: "pants",
    brand: "Utility Dept",
    price: 27,
    rating: 4.4,
    qc: true,
    tags: ["cargo", "utility"],
    image: "/images/products/straight-fit-cargo-pants-cssbuy-find.jpg",
    imageAltDetail: "straight fit cargo pants with utility pockets",
    destinationUrl: getStreetStyleUrl("pants", "product_straight_fit_cargo_pants"),
    updated: "2026-05-17",
  },
  {
    id: "pants-002",
    name: "Relaxed Denim Pants",
    category: "pants",
    brand: "Archive Fit",
    price: 31,
    rating: 4.5,
    qc: false,
    tags: ["denim", "relaxed"],
    image: "/images/products/relaxed-denim-pants-cssbuy-find.jpg",
    imageAltDetail: "relaxed denim pants with casual streetwear fit",
    destinationUrl: getStreetStyleUrl("pants", "product_relaxed_denim_pants"),
    updated: "2026-05-16",
  },
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

export const getProductImageUrl = (product: Product) => new URL(product.image, siteUrl).href;

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
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "StreetStyle",
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
