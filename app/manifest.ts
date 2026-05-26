import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Paul Carey & Sons Ltd',
    short_name: 'Paul Carey',
    description: 'Civil Engineering & Groundwork Specialists — Isle of Man',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#C1121F',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
