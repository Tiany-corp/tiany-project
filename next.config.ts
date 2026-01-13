import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formats d'images optimisés supportés
    formats: ['image/avif', 'image/webp'],
    // Tailles d'images pour le responsive
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Qualité par défaut (1-100, 75 est un bon compromis)
    minimumCacheTTL: 60,
  },
  output: 'export',
};

export default nextConfig;
