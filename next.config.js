/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vi', 'zh'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
