/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "dummyimage.com"
          }
      ]
  }
};

export default nextConfig;
