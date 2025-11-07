/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-slot'],
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization (disabled for static export)
  images: {
    unoptimized: true,
  },
  
  // Note: Headers and redirects are disabled for static export
  // They can be re-enabled when deploying to Vercel or similar platforms
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: 'leverage-journal-seo-optimized',
  },
  
  // Output configuration for static export
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Disable x-powered-by header
  poweredByHeader: false,
};

module.exports = nextConfig;
