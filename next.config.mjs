/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AIRTABLE_PRIVATE_KEY: process.env.AIRTABLE_PRIVATE_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_TABLE_NAME: process.env.AIRTABLE_TABLE_NAME,
    CHAT_GPT_ORG: process.env.CHAT_GPT_ORG,
    CHAT_GPT_API_KEY: process.env.CHAT_GPT_API_KEY,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; style-src-elem 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; script-src-elem 'self' 'unsafe-inline' https://www.youtube.com/ ; script-src 'self' 'unsafe-eval' https://www.youtube.com/; connect-src 'self' http://localhost:8000/ https://md-app-back-455005c83883.herokuapp.com/ https://api.airtable.com https://api.openai.com/v1/chat/completions https://img.youtube.com blob: https://api.airtable.com/ https://www.youtube.com https://noembed.com/ https://youtu.be/ ; font-src 'self'; frame-src 'self' https://www.youtube.com/; img-src 'self' https://i.ytimg.com/ https://img.youtube.com; media-src 'self' blob: ; worker-src 'self' blob:",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Permissions-Policy',
            value:
              'accelerometer=(), autoplay=*, camera=(), display-capture=*, encrypted-media=(), fullscreen=self, geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(self), screen-wake-lock=(), usb=*, xr-spatial-tracking=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31557600',
          },
        ],
      },
    ]
  },
}

import withPWAInit from '@ducanh2912/next-pwa'

const withPWA = withPWAInit({
  dest: 'public',
})

export default withPWA(nextConfig)
