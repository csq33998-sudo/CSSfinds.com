import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, relative, resolve } from "node:path";

const root = resolve("dist");
const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".svg", "image/svg+xml"],
]);

const server = createServer((request, response) => {
  const url = new URL(request.url ?? "/", "http://127.0.0.1");
  const pathname = decodeURIComponent(url.pathname);
  const cleanPath = normalize(pathname).replace(/^([/\\])+/, "");
  let filePath = resolve(root, cleanPath);

  if (relative(root, filePath).startsWith("..")) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  if (!existsSync(filePath)) {
    filePath = resolve(root, cleanPath, "index.html");
  } else if (statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }

  if (!existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": types.get(extname(filePath)) ?? "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
});

server.listen(4321, "127.0.0.1", () => {
  console.log("Serving dist at http://127.0.0.1:4321/");
});
