/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["louloue.com", "links.papareact.com"],
  },
};

module.exports = nextConfig;
