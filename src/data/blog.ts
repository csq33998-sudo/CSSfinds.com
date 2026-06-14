import type { Product } from "@/data/products";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cssbuy-spreadsheet-guide-for-product-research",
    title: "CSSBuy Spreadsheet Guide: how to scan finds before opening links",
    excerpt:
      "Use CSSFinds to compare categories, product photos, availability labels, update dates, view counts, and converted USD prices before choosing a product.",
    category: "Spreadsheet guide",
    date: "2026-06-14",
    readTime: "5 min read",
    image: "/images/products/white-brown-air-force-style-low-cssbuy.png",
    imageAlt: "CSSBuy spreadsheet guide blog thumbnail",
    tags: ["CSSBuy spreadsheet", "Product research"],
    href: "/cssbuy-spreadsheet/",
  },
  {
    slug: "how-cssfinds-product-cards-work",
    title: "How CSSFinds product cards help compare CSSBuy finds",
    excerpt:
      "Each card is built for fast scanning: category, product title, source-style brand text, last updated date, price, views, image, and a direct View action.",
    category: "Product cards",
    date: "2026-06-12",
    readTime: "6 min read",
    image: "/images/products/black-bear-graphic-tee-cssbuy.png",
    imageAlt: "CSSFinds product cards blog thumbnail",
    tags: ["Product cards", "Images", "Prices"],
    href: "/cssbuy-spreadsheet/",
  },
  {
    slug: "qc-photos-checklist-for-cssbuy-finds",
    title: "QC Photos Checklist for shoes, hoodies, bags, pants, and T-shirts",
    excerpt:
      "Check shape, stitching, material texture, logo placement, color, sizing notes, and product angle consistency before deciding whether a find is worth opening.",
    category: "QC guide",
    date: "2026-06-10",
    readTime: "4 min read",
    image: "/images/products/cream-logo-pullover-hoodie-cssbuy.png",
    imageAlt: "CSSBuy QC photos checklist blog thumbnail",
    tags: ["QC photos", "Shoes", "Hoodies"],
    href: "/cssbuy-qc-photos/",
  },
  {
    slug: "best-cssbuy-shoes-finds",
    title: "Best way to browse CSSBuy shoes finds on CSSFinds",
    excerpt:
      "The shoes page keeps sneaker-style finds together, making it easier to compare shape, colorways, pricing, and update freshness without sorting through every category.",
    category: "Category guide",
    date: "2026-06-08",
    readTime: "4 min read",
    image: "/images/products/white-star-leather-low-cssbuy.png",
    imageAlt: "CSSBuy shoes finds blog thumbnail",
    tags: ["Shoes", "Sneakers", "Category page"],
    href: "/cssbuy-shoes/",
  },
  {
    slug: "cssbuy-hoodies-and-tshirts-product-research",
    title: "How to compare CSSBuy hoodies and T-shirts before buying",
    excerpt:
      "For apparel finds, compare the product image, fit type, print placement, fabric weight hints, recent updates, and converted price before moving forward.",
    category: "Apparel guide",
    date: "2026-06-06",
    readTime: "4 min read",
    image: "/images/products/grey-zip-pullover-hoodie-cssbuy.png",
    imageAlt: "CSSBuy hoodies and T-shirts blog thumbnail",
    tags: ["Hoodies", "T-Shirts", "Apparel"],
    href: "/cssbuy-hoodies/",
  },
  {
    slug: "cssbuy-bags-accessories-finds",
    title: "Finding bags and accessories faster with focused CSSBuy pages",
    excerpt:
      "Bags and accessories can be difficult to compare in a mixed feed, so CSSFinds separates them into focused pages with clear images and quick product actions.",
    category: "Category guide",
    date: "2026-06-04",
    readTime: "4 min read",
    image: "/images/products/brown-pattern-crossbody-pouch-cssbuy.png",
    imageAlt: "CSSBuy bags and accessories blog thumbnail",
    tags: ["Bags", "Accessories", "Research"],
    href: "/cssbuy-bags/",
  },
  {
    slug: "how-price-conversion-works-on-product-cards",
    title: "Why CSSFinds shows converted USD prices on product cards",
    excerpt:
      "Converted prices make the spreadsheet easier to scan for international shoppers, while the original CNY reference can still guide final order checks.",
    category: "Price guide",
    date: "2026-06-02",
    readTime: "3 min read",
    image: "/images/products/red-nylon-waist-bag-cssbuy.png",
    imageAlt: "CSSFinds converted USD prices blog thumbnail",
    tags: ["USD prices", "CNY", "Product cards"],
    href: "/cssbuy-spreadsheet/",
  },
  {
    slug: "pants-finds-and-streetstyle-search",
    title: "How to compare CSSBuy pants finds before opening links",
    excerpt:
      "The pants page keeps cargo, denim, and track-pant style finds together so shoppers can compare images, status labels, pricing, and update dates faster.",
    category: "Product update",
    date: "2026-05-30",
    readTime: "3 min read",
    image: "/images/products/olive-cargo-jogger-pants-cssbuy.png",
    imageAlt: "CSSBuy pants finds blog thumbnail",
    tags: ["Pants", "Category page", "Product research"],
    href: "/cssbuy-pants/",
  },
  {
    slug: "using-availability-and-pending-labels",
    title: "How to read Available and Pending labels in the spreadsheet",
    excerpt:
      "Availability labels help shoppers understand which finds are ready to inspect and which items may need extra checking before opening the product page.",
    category: "Spreadsheet guide",
    date: "2026-05-28",
    readTime: "4 min read",
    image: "/images/products/white-track-pants-orange-trim-cssbuy.png",
    imageAlt: "CSSFinds availability labels blog thumbnail",
    tags: ["Available", "Pending", "Spreadsheet"],
    href: "/cssbuy-spreadsheet-guide/",
  },
  {
    slug: "why-cssfinds-has-separate-faq-and-blog-routes",
    title: "Why CSSFinds keeps FAQ and Blog as separate routes",
    excerpt:
      "FAQ answers practical questions quickly, while Blog gives longer guides for product research, category browsing, QC checks, and spreadsheet workflows.",
    category: "Site update",
    date: "2026-05-26",
    readTime: "4 min read",
    image: "/images/products/off-white-arrow-graphic-tee-cssbuy.png",
    imageAlt: "CSSFinds FAQ and Blog routes blog thumbnail",
    tags: ["FAQ", "Blog", "Site update"],
    href: "/faq/",
  },
];

export const blogTitle = "CSSFinds Blog - CSSBuy Spreadsheet, QC Photos and Product Research";
export const blogDescription =
  "Read CSSFinds blog notes about CSSBuy spreadsheets, QC photos, product research, category pages, price comparison, and safer shopping workflows.";

const toAbsoluteImageUrl = (image: string) => (image.startsWith("http") ? image : `https://cssfinds.com${image}`);

export const getBlogSchema = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "CSSFinds Blog",
  description: blogDescription,
  url,
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: toAbsoluteImageUrl(post.image),
    author: {
      "@type": "Organization",
      name: "CSSFinds",
    },
  })),
});

export const getFeaturedProductsForBlog = (products: Product[]) =>
  products.filter((product) => ["tee-001", "shoe-001", "bag-001"].includes(product.id));
