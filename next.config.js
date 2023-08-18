const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  output: "export",
};

module.exports = withVanillaExtract(nextConfig);
