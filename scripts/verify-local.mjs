import { createRequire } from "node:module";
import { existsSync, mkdirSync, readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const playwrightCandidates = [
  process.env.PLAYWRIGHT_PACKAGE_PATH,
  "playwright",
  "C:/Users/chu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright",
  "C:/Users/chu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.60.0/node_modules/playwright",
].filter(Boolean);

let playwright;

for (const candidate of playwrightCandidates) {
  try {
    playwright = require(candidate);
    break;
  } catch {
    // Try the next known local runtime path.
  }
}

if (!playwright) {
  throw new Error("Playwright is not available. Install it locally or set PLAYWRIGHT_PACKAGE_PATH.");
}

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
].filter(Boolean);
const executablePath = chromeCandidates.find((candidate) => existsSync(candidate));
const { chromium } = playwright;
const baseUrl = (process.env.BASE_URL ?? "http://127.0.0.1:4321").replace(/\/$/, "");
const localizedPath = (path) => `${baseUrl}${path}`;
const screenshotDirectory = "output/playwright";
mkdirSync(screenshotDirectory, { recursive: true });

const browser = await chromium.launch({
  ...(executablePath ? { executablePath } : {}),
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
page.setDefaultTimeout(15000);
const errors = [];
const resourceErrors = [];

page.on("console", (message) => {
  if (message.type() === "error") {
    const text = message.text();
    if (text.startsWith("Failed to load resource: net::ERR_")) {
      resourceErrors.push(text);
    } else {
      errors.push(text);
    }
  }
});

await page.goto(localizedPath("/"), { waitUntil: "domcontentloaded" });
await page.locator("h1").first().waitFor();
const title = await page.title();
const h1 = await page.locator("h1").first().innerText();
const cta = await page.locator("a", { hasText: "Visit StreetStyle" }).first().getAttribute("href");
const languageOptions = await page.locator("[data-translate-language]").evaluateAll((options) =>
  options.map((option) => option.textContent?.trim()),
);
const searchAction = await page.locator("[data-streetstyle-search]").first().getAttribute("action");
const searchInputName = await page.locator("[data-streetstyle-search-input]").first().getAttribute("name");
const searchButtonText = await page.locator("[data-streetstyle-search] button").first().innerText();
const initialProductCount = await page.locator("[data-product-row]:visible").count();
const qcEvidenceCount = await page.locator("[data-product-row] [data-qc-evidence]").count();
const sourceLabelCount = await page.locator("[data-product-row]", { hasText: "Data source:" }).count();
const selectionReasonCount = await page.locator("[data-product-row]", { hasText: "Why we selected it" }).count();
const categoryHref = await page.locator("a", { hasText: "CSSBuy Shoes Spreadsheet" }).first().getAttribute("href");
const productHref = await page.locator("[data-product-row] a").first().getAttribute("href");
const qcEvidenceHrefs = await page.locator("a", { hasText: "View QC evidence" }).evaluateAll((links) =>
  links.map((link) => link.getAttribute("href")),
);
const homepageHashHrefCount = await page.locator('a[href*="#"]').count();
await page.fill("[data-filter-search]", "Nike");
await page.selectOption("[data-filter-category]", "shoes");
const filteredProductCount = await page.locator("[data-product-row]:visible").count();
await page.locator("[data-product-filters] button[type=reset]").click();
await page.waitForFunction(
  (expected) => document.querySelectorAll("[data-product-row]:not([hidden])").length === expected,
  initialProductCount,
);
const resetProductCount = await page.locator("[data-product-row]:visible").count();
const hreflangCount = await page.locator('link[rel="alternate"]').count();
const bodyText = await page.locator("body").innerText();
await page.screenshot({ path: `${screenshotDirectory}/home-desktop.png`, fullPage: true });
await page.getByRole("button", { name: "Browse product catalog" }).click();
await page.waitForFunction(() => window.scrollY > 0);
const catalogScrollCheck = {
  url: page.url(),
  scrolled: await page.evaluate(() => window.scrollY > 0),
};

const qcGalleryResponse = await page.goto(localizedPath(qcEvidenceHrefs[0]), { waitUntil: "domcontentloaded" });
await page.locator("[data-qc-product]:visible").waitFor();
const qcGalleryCheck = {
  status: qcGalleryResponse?.status() ?? 0,
  noindex: await page.locator('meta[name="robots"][content="noindex, follow"]').count() === 1,
  selectedProduct: await page.locator("[data-qc-product-picker]").inputValue(),
  visibleQcImages: await page.locator("[data-qc-product]:visible figure img").count(),
  sourceHref: await page.locator("[data-qc-product]:visible a", { hasText: "Open complete QC album on StreetStyle" }).getAttribute("href"),
};
await page.screenshot({ path: `${screenshotDirectory}/qc-gallery-desktop.png`, fullPage: true });

await page.goto(localizedPath("/editorial-methodology/"), { waitUntil: "domcontentloaded" });
await page.locator("h1").first().waitFor();
const linksUseEnglishStore = [cta, productHref].every((href) =>
  href?.startsWith("https://streetstyle.maisonlooks.com/en"),
);
await page.screenshot({ path: `${screenshotDirectory}/methodology-desktop.png`, fullPage: true });

const trustRoutes = ["/about/", "/editorial-methodology/", "/affiliate-disclosure/", "/qc/"];
const trustRouteStatuses = [];
for (const route of trustRoutes) {
  const response = await page.goto(localizedPath(route), { waitUntil: "domcontentloaded" });
  trustRouteStatuses.push({ route, status: response?.status() ?? 0 });
}

const categoryRoutes = ["shoes", "hoodies", "tshirts", "accessories", "bags", "pants"];
const categoryChecks = [];
for (const category of categoryRoutes) {
  const route = `/cssbuy-${category}/`;
  const response = await page.goto(localizedPath(route), { waitUntil: "domcontentloaded" });
  const categoryBody = await page.locator("body").innerText();
  const normalizedCategoryBody = categoryBody.toLowerCase();
  categoryChecks.push({
    route,
    status: response?.status() ?? 0,
    hasSizing: normalizedCategoryBody.includes("sizing:"),
    hasQc: normalizedCategoryBody.includes("category-specific qc points"),
    hasPrice: normalizedCategoryBody.includes("recorded price snapshot"),
    hasIssues: normalizedCategoryBody.includes("common quality problems"),
    hasMethod: normalizedCategoryBody.includes("a practical filtering method"),
    hasExamples: normalizedCategoryBody.includes("real listing examples"),
    productCount: await page.locator("[data-product-row]").count(),
  });
}

const sitemapXml = readFileSync("dist/sitemap-0.xml", "utf8");
const sitemapUrlCount = (sitemapXml.match(/<loc>/g) ?? []).length;
const generatedHtml = [
  readFileSync("dist/index.html", "utf8"),
  ...categoryRoutes.map((category) => readFileSync(`dist/cssbuy-${category}/index.html`, "utf8")),
].join("\n");
const disallowedSchemaTypes = ["Product", "Offer", "FAQPage", "HowTo"].filter((type) =>
  generatedHtml.includes(`\"@type\":\"${type}\"`),
);

await page.setViewportSize({ width: 390, height: 1200 });
await page.goto(localizedPath("/"), { waitUntil: "domcontentloaded" });
await page.locator("h1").first().waitFor();
const mobileHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
await page.screenshot({ path: `${screenshotDirectory}/home-mobile.png`, fullPage: false });

await page.goto(localizedPath("/cssbuy-shoes/"), { waitUntil: "domcontentloaded" });
await page.locator("h1").first().waitFor();
const categoryMobileHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
await page.screenshot({ path: `${screenshotDirectory}/shoes-mobile.png`, fullPage: false });
await page.locator('section[aria-label="Shoes research summary"]').screenshot({ path: `${screenshotDirectory}/shoes-price-summary.png` });

await browser.close();

const result = {
  title,
  h1,
  cta,
  languageOptions,
  hreflangCount,
  searchAction,
  searchInputName,
  searchButtonText,
  initialProductCount,
  filteredProductCount,
  resetProductCount,
  qcEvidenceCount,
  sourceLabelCount,
  selectionReasonCount,
  categoryHref,
  productHref,
  qcEvidenceHrefs,
  homepageHashHrefCount,
  catalogScrollCheck,
  qcGalleryCheck,
  linksUseEnglishStore,
  trustRouteStatuses,
  categoryChecks,
  sitemapUrlCount,
  disallowedSchemaTypes,
  mobileHorizontalOverflow,
  categoryMobileHorizontalOverflow,
  errors,
  resourceErrors,
};

console.log(JSON.stringify(result, null, 2));

const failures = [];

if (hreflangCount !== 0) failures.push(`Expected no hreflang links while localized pages are noindex, found ${hreflangCount}.`);
if (languageOptions.length < 20) failures.push(`Expected the client-side language menu, found ${languageOptions.length} options.`);
if (searchAction !== "https://streetstyle.maisonlooks.com/en/search") failures.push(`Expected StreetStyle search action, found ${searchAction}.`);
if (searchInputName !== "q") failures.push(`Expected search input name q, found ${searchInputName}.`);
if (searchButtonText.trim() !== "Search on StreetStyle") failures.push(`Expected an explicit StreetStyle search label, found ${searchButtonText}.`);
if (initialProductCount < 40 || initialProductCount > 50) failures.push(`Expected a 40-50 item verified catalog, found ${initialProductCount} visible products.`);
if (filteredProductCount < 1 || filteredProductCount >= initialProductCount) failures.push(`Expected filters to narrow results, found ${filteredProductCount} of ${initialProductCount}.`);
if (resetProductCount !== initialProductCount) failures.push(`Expected reset to restore ${initialProductCount} products, found ${resetProductCount}.`);
if (qcEvidenceCount !== initialProductCount) failures.push(`Expected every product to expose direct QC evidence, found ${qcEvidenceCount} of ${initialProductCount}.`);
if (sourceLabelCount !== initialProductCount) failures.push(`Expected every product to name its data source, found ${sourceLabelCount} of ${initialProductCount}.`);
if (selectionReasonCount !== initialProductCount) failures.push(`Expected every product to include an editorial selection reason, found ${selectionReasonCount} of ${initialProductCount}.`);
if (bodyText.includes("PUBLIC_GOOGLE_SHEET") || bodyText.includes("View full spreadsheet")) failures.push("Found a removed spreadsheet placeholder or developer instruction.");
if (categoryHref !== "/cssbuy-shoes/") failures.push(`Expected spreadsheet category link to stay internal, found ${categoryHref}.`);
if (qcEvidenceHrefs.length !== initialProductCount || new Set(qcEvidenceHrefs).size !== initialProductCount || qcEvidenceHrefs.some((href) => !/^\/qc-gallery\/\?product=[a-z]+-\d{3}$/.test(href ?? ""))) failures.push(`Expected one unique internal QC gallery link per product, found ${JSON.stringify(qcEvidenceHrefs)}.`);
if (homepageHashHrefCount !== 0) failures.push(`Expected no hash-bearing links on the homepage, found ${homepageHashHrefCount}.`);
if (!catalogScrollCheck.scrolled || new URL(catalogScrollCheck.url).hash !== "") failures.push(`Expected catalog scrolling without changing the URL hash: ${JSON.stringify(catalogScrollCheck)}.`);
if (qcGalleryCheck.status !== 200 || !qcGalleryCheck.noindex || qcGalleryCheck.selectedProduct !== "shoes-001" || qcGalleryCheck.visibleQcImages !== 6 || !qcGalleryCheck.sourceHref?.startsWith("https://streetstyle.maisonlooks.com/en/p/")) failures.push(`QC gallery verification failed: ${JSON.stringify(qcGalleryCheck)}.`);
if (!linksUseEnglishStore) failures.push("Expected outbound shopping links to use the English StreetStyle store.");
if (trustRouteStatuses.some(({ status }) => status !== 200)) failures.push(`Expected all trust pages to return 200: ${JSON.stringify(trustRouteStatuses)}.`);
if (categoryChecks.some(({ status }) => status !== 200)) failures.push(`Expected all category pages to return 200: ${JSON.stringify(categoryChecks)}.`);
if (categoryChecks.some(({ hasSizing, hasQc, hasPrice, hasIssues, hasMethod, hasExamples, productCount }) =>
  !hasSizing || !hasQc || !hasPrice || !hasIssues || !hasMethod || !hasExamples || productCount < 1
)) failures.push(`Expected every category page to contain unique decision content and product evidence: ${JSON.stringify(categoryChecks)}.`);
if (sitemapUrlCount !== 12) failures.push(`Expected the reduced sitemap to contain 12 URLs, found ${sitemapUrlCount}.`);
if (disallowedSchemaTypes.length > 0) failures.push(`Found disallowed commercial or rich-result schema types: ${disallowedSchemaTypes.join(", ")}.`);
if (mobileHorizontalOverflow) failures.push("Detected horizontal overflow on the mobile viewport.");
if (categoryMobileHorizontalOverflow) failures.push("Detected horizontal overflow on a mobile category page.");
if (errors.length > 0) failures.push(`Browser console errors: ${errors.join(" | ")}`);

if (failures.length > 0) {
  throw new Error(failures.join("\n"));
}
