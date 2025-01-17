/** @type {import('next').NextConfig} */

const cdn = process.env.MEDIALIT_SERVER
    ? process.env.MEDIALIT_CDN || process.env.MEDIALIT_SERVER
    : "medialit-prod.s3.ap-southeast-1.amazonaws.com";

const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: [
            cdn,
            "medialit.sgp1.cdn.digitaloceanspaces.com",
            "courselit-test.sgp1.cdn.digitaloceanspaces.com",
            "medialit-prod.s3.ap-southeast-1.amazonaws.com",
        ],
    },
};

module.exports = nextConfig;
