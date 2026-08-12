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
    ];
  },
};

export default nextConfig;