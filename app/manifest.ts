import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arcadia Home Care",
    short_name: "Arcadia",
    description:
      "Specialized home care in Toronto and the GTA. Dementia, brain injury, rehabilitation, and complex aging care.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#C8302A",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
