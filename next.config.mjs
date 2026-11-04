/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [96, 160, 256, 384, 512],
    minimumCacheTTL: 31536000,
  },
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
