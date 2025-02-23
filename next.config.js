/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s4.anilist.co",
      "s3.anilist.co",
      "s2.anilist.co",
      "s1.anilist.co",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.anilist.co",
        pathname: "/file/anilistcdn/**",
      },
    ],
  },
};

module.exports = nextConfig;
