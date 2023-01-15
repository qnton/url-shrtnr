module.exports = {
  productionBrowserSourceMaps: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    FINALURL: process.env.FINALURL,
  },
};
