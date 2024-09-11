/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh7-rt.googleusercontent.com',
        port: '',

      },
    ],
  },
};

export default nextConfig;
