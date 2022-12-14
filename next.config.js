/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["louloue.com", "links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoid2FzaHRha3pvIiwiYSI6ImNsOHg0Z2VqeTAwcnkzb3BjcmpxZ2MyYXcifQ.93-v3XMT8XnW9xIlCskhEg",
  },
};

module.exports = nextConfig;
