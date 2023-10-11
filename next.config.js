/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/baca',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
