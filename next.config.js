const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  output: "standalone",
};

module.exports = withVanillaExtract(nextConfig);
