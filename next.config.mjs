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
        destination: "/products/shell-and-tube-heat-exchangers#cryogenic",
        permanent: true,
      },
      {
        source: "/products/helical-baffle-heat-exchangers/",
        destination: "/products/shell-and-tube-heat-exchangers#helixchanger",
        permanent: true,
      },
      {
        source: "/products/rod-baffle-exchangers/",
        destination: "/products/shell-and-tube-heat-exchangers#rod",
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
        source: "/pdf/ISO-CERTIFICATE-VALID%20U-TO-31ST-DECEMBER-2023.pdf",
        destination: "/assets/pdf/cert4.pdf",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/07/STH-Zertifikat-29a-ISO-3834-EN-signed-SvR.pdf",
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
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https: wss:",
              "frame-src 'self' https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },

  
};

export default nextConfig;