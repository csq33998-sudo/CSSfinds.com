import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const root = path.resolve("dist");
const files = [];

const walk = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(filePath);
    else files.push(filePath);
  }
};

walk(root);

const htmlFiles = files.filter((filePath) => filePath.endsWith(".html"));
const brokenInternalLinks = [];

for (const filePath of htmlFiles) {
  const html = readFileSync(filePath, "utf8");
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//")) continue;

    const pathname = href.split("#")[0].split("?")[0];
    if (!pathname) continue;

    const target = path.join(root, pathname.replace(/^\//, ""));
    const exists =
      existsSync(target) ||
      existsSync(path.join(target, "index.html")) ||
      existsSync(`${target}.html`);

    if (!exists) {
      brokenInternalLinks.push(`${path.relative(root, filePath)}: ${pathname}`);
    }
  }
}

const result = {
  htmlFiles: htmlFiles.length,
  brokenInternalLinks: [...new Set(brokenInternalLinks)],
};

console.log(JSON.stringify(result, null, 2));

if (result.brokenInternalLinks.length > 0) {
  process.exitCode = 1;
}
