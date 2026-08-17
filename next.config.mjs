/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/products/equipment-spares/",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/cryogenic-heat-exchangers/",
        destination:
          "/products/shell-and-tube-heat-exchangers#cryogenic",
        permanent: true,
      },
      {
        source: "/products/helical-baffle-heat-exchangers/",
        destination:
          "/products/shell-and-tube-heat-exchangers#helixchanger",
        permanent: true,
      },
      {
        source: "/products/rod-baffle-exchangers/",
        destination:
          "/products/shell-and-tube-heat-exchangers#rod",
        permanent: true,
      },
      {
        source: "/products/process-packages/",
        destination: "/products/pressure-vessels",
        permanent: true,
      },
      {
        source: "/job-openings/",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/pdf/NB_R_STAMP_CERTIFICATE.pdf",
        destination: "/assets/pdf/cert8.pdf",
        permanent: true,
      },
      {
        source: "/pdf/iso-certificate.pdf",
        destination: "/assets/pdf/cert1.pdf",
        permanent: true,
      },
      {
        source: "/pdf/ASME-U2.pdf",
        destination: "/assets/pdf/cert4.pdf",
        permanent: true,
      },
      {
        source: "/pdf/pecpl-u-stamp.pdf",
        destination: "/assets/pdf/cert4.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/06/rod_baffle.pdf",
        destination: "/assets/pdf/newsletter/rod_baffle.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/07/certificates.pdf",
        destination: "/assets/pdf/cert4.pdf",
        permanent: true,
      },
      {
        source:
          "/pdf/ISO-CERTIFICATE-VALID%20U-TO-31ST-DECEMBER-2023.pdf",
        destination: "/assets/pdf/cert4.pdf",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2025/07/STH-Zertifikat-29a-ISO-3834-EN-signed-SvR.pdf",
        destination: "/assets/pdf/cert4.pdf",
        permanent: true,
      },
    ];
  },

async headers() {
  return [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value:
            "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=()",
        },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",

            // Next.js + GTM + Google Analytics
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://www.google.com https://www.gstatic.com",

            // Google Fonts + Next.js inline styles
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

            // Google Fonts
            "font-src 'self' https://fonts.gstatic.com data:",

            // Images/CDN/external images
            "img-src 'self' data: blob: https:",

            // APIs + Google Analytics + GTM
            "connect-src 'self' https: wss:",

            // Google/YouTube embeds
            "frame-src 'self' https://www.googletagmanager.com https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",

            // No browser plugins
            "object-src 'none'",

            // Prevent base-tag injection
            "base-uri 'self'",

            // Forms
            "form-action 'self'",

            // Prevent other websites framing your site
            "frame-ancestors 'self'",

            // Upgrade HTTP resources to HTTPS
            "upgrade-insecure-requests",
          ].join("; "),
        },
      ],
    },
  ];
},




};

export default nextConfig;