/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
};

module.exports = nextConfig;