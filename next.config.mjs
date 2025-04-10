/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/d860b131acff167353f23c2412fbb2c5.html',
        destination: '/d860b131acff167353f23c2412fbb2c5',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
