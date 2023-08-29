const { i18n } = require("./next-i18next.config");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  compiler: {
    emotion: false,
  },
  i18n,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      if (!config.resolve.fallback) {
        config.resolve.fallback = {};
      }
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = withMDX(nextConfig);
