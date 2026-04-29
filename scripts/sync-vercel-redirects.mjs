import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pathRedirects = JSON.parse(readFileSync(join(root, "redirects.json"), "utf8"));

const vercel = {
  buildCommand: "npm run build",
  redirects: [
    {
      source: "/:path*",
      has: [{ type: "host", value: "arcadiahomecare.ca" }],
      destination: "https://www.arcadiahomecare.ca/:path*",
      statusCode: 301,
    },
    ...pathRedirects.map((r) => ({
      source: r.source,
      destination: r.destination,
      statusCode: 301,
    })),
  ],
};

writeFileSync(join(root, "vercel.json"), JSON.stringify(vercel, null, 2) + "\n");
console.log("vercel.json written with", pathRedirects.length, "path redirects (+ apex)");
