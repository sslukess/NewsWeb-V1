/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  compiler: {
    styledComponents: true
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