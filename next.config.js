/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['mrconfeccoes.com.br', 'media.graphassets.com'],
  },
}

module.exports = nextConfig
