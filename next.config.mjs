/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/drspv-website" : "",
  assetPrefix: isProd ? "/drspv-website/" : "",
  images: {
    unoptimized: true,
    formats: ["image/webp"],
  },
  trailingSlash: true,
};

export default nextConfig;
