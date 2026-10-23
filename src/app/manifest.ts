import type { MetadataRoute } from 'next';

// Web App Manifest providing Sol branding, icons, and theme colors.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sol Browser',
    short_name: 'Sol',
    description:
      'An everyday web browser for Windows with a clean, refined design that does not drain your computer’s resources.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f8f8',
    theme_color: '#050505',
    icons: [
      {
        src: '/logo.png',
        sizes: '1280x1280',
        type: 'image/png',
      },
    ],
  };
}
