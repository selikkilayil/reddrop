/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['pg']
  }
}

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: false, // Always enabled
  runtimeCaching: [
    // Cache API routes with NetworkFirst strategy
    {
      urlPattern: /^https?.*\/api\/donors.*$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 5 * 60 // 5 minutes
        },
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    // Cache pages with NetworkFirst strategy
    {
      urlPattern: /^https?.*\/(public|register|$).*$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'pages-cache',
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 24 * 60 * 60 // 24 hours
        }
      }
    },
    // Cache static assets with CacheFirst strategy
    {
      urlPattern: /\.(?:js|css|woff2?|png|jpg|jpeg|gif|svg|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-assets',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
        }
      }
    }
  ],
  buildExcludes: [/middleware-manifest\.json$/],
  fallbacks: {
    document: '/offline'
  }
})

module.exports = withPWA(nextConfig)