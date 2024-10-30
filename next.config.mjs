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
  },

  redirects: async()=>{
    return[
        {
            source:"/service",
            destination:'/service/2danimation',
            permanent:true
        }
    ]
  }
};

export default nextConfig;
