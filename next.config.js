// import { createContentlayerPlugin } from "next-contentlayer";
// // import "./env.mjs";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// const withContentlayer = createContentlayerPlugin({});

// export default withContentlayer(nextConfig);

const { createContentlayerPlugin } = require("next-contentlayer");

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
});
