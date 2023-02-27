const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
});