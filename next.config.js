/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/tailwindcss-and-nextjs-portfolio",
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
