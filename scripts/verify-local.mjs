import { createRequire } from "node:module";
import { existsSync } from "node:fs";

const require = createRequire(import.meta.url);
const playwrightCandidates = [
  process.env.PLAYWRIGHT_PACKAGE_PATH,
  "playwright",
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

const browser = await chromium.launch({
  ...(executablePath ? { executablePath } : {}),
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
page.setDefaultTimeout(15000);
const errors = [];

page.on("console", (message) => {
  if (message.type() === "error") {
    errors.push(message.text());
  }
});

await page.goto(localizedPath("/"), { waitUntil: "domcontentloaded" });
await page.locator("h1").first().waitFor();
const title = await page.title();
const h1 = await page.locator("h1").first().innerText();
const cta = await page.locator("a", { hasText: "Visit StreetStyle" }).first().getAttribute("href");
const languageOptions = await page.locator("#language-select option").evaluateAll((options) =>
  options.map((option) => option.textContent?.trim()),
);
await page.selectOption("#language-select", "/de/");
await page.waitForURL(`${baseUrl}/de/`);
const germanH1 = await page.locator("h1").first().innerText();
const searchAction = await page.locator("[data-streetstyle-search]").first().getAttribute("action");
const searchInputName = await page.locator("[data-streetstyle-search-input]").first().getAttribute("name");
const visibleProductCount = await page.locator("[data-product-row]:visible").count();
const hreflangCount = await page.locator('link[rel="alternate"]').count();
await page.screenshot({ path: "artifacts-home.png", fullPage: true });

await page.goto(localizedPath("/cssbuy-spreadsheet/"), { waitUntil: "domcontentloaded" });
await page.locator("h1").first().waitFor();
const categoryHref = await page.locator("a", { hasText: "CSSBuy Shoes Spreadsheet" }).first().getAttribute("href");
const productHref = await page.locator("[data-product-row] a").first().getAttribute("href");
const linksUseEnglishStore = [cta, productHref].every((href) =>
  href?.startsWith("https://streetstyle.maisonlooks.com/en"),
);
await page.screenshot({ path: "artifacts-spreadsheet.png", fullPage: true });

await page.setViewportSize({ width: 390, height: 1200 });
await page.goto(localizedPath("/"), { waitUntil: "domcontentloaded" });
await page.locator("h1").first().waitFor();
const mobileHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
await page.screenshot({ path: "artifacts-home-mobile.png", fullPage: true });

await browser.close();

const result = {
  title,
  h1,
  cta,
  languageOptions,
  germanH1,
  hreflangCount,
  searchAction,
  searchInputName,
  visibleProductCount,
  categoryHref,
  productHref,
  linksUseEnglishStore,
  mobileHorizontalOverflow,
  errors,
};

console.log(JSON.stringify(result, null, 2));

const failures = [];

if (hreflangCount < 8) failures.push(`Expected at least 8 hreflang links, found ${hreflangCount}.`);
if (searchAction !== "https://streetstyle.maisonlooks.com/en/search") failures.push(`Expected StreetStyle search action, found ${searchAction}.`);
if (searchInputName !== "q") failures.push(`Expected search input name q, found ${searchInputName}.`);
if (visibleProductCount < 1) failures.push("Expected at least one visible product.");
if (categoryHref !== "/cssbuy-shoes/") failures.push(`Expected spreadsheet category link to stay internal, found ${categoryHref}.`);
if (!linksUseEnglishStore) failures.push("Expected outbound shopping links to use the English StreetStyle store.");
if (mobileHorizontalOverflow) failures.push("Detected horizontal overflow on the mobile viewport.");
if (errors.length > 0) failures.push(`Browser console errors: ${errors.join(" | ")}`);

if (failures.length > 0) {
  throw new Error(failures.join("\n"));
}
