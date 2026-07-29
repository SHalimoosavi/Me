import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  output: "export",
  trailingSlash: true,

  basePath: isGitHubPages ? "/Me" : "",
  assetPrefix: isGitHubPages ? "/Me/" : "",

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "shalimoosavi.github.io" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "repository-images.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
