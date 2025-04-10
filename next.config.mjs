/** @type {import('next').NextConfig} */
const nextConfig = {
pageExtensions: ['html.tsx','html', 'jsx', 'js', 'tsx', 'ts','mjs'],
  async redirects() {
    return [
      {
        source: '/056949325b65d64ce333ccddf5d44a9c',
        destination: '/056949325b65d64ce333ccddf5d44a9c.html',
        permanent: false,
      },
    ];
  }, 
};

export default nextConfig;
