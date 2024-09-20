/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost','https://medicalinformatics.github.io/mainzelliste.de'],
  },
  basePath: "/mainzelliste.de",
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
