/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          pathname: '/**', // Allow all paths under this domain
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com', // Add Cloudinary domain
          pathname: '/**', // Allow all paths under this domain
        },
      ],
    },
  };
  
  export default nextConfig;
  